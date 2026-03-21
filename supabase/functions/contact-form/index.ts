import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  website?: string;
  formStartTime?: number;
  submissionTime?: number;
}

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_COMPANY_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 2000;
const MIN_FORM_TIME_MS = 3000;
const MAX_FORM_TIME_MS = 3600000;
const RATE_LIMIT_WINDOW_MS = 900000;
const RATE_LIMIT_MAX_SUBMISSIONS = 3;

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .substring(0, 5000);
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

async function checkRateLimit(supabase: any, identifier: string): Promise<boolean> {
  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS);

  const { data: existing, error } = await supabase
    .from('contact_rate_limits')
    .select('*')
    .eq('identifier', identifier)
    .gte('window_start', windowStart.toISOString())
    .maybeSingle();

  if (error) {
    console.error("Rate limit check error:", error);
    return false;
  }

  if (!existing) {
    await supabase
      .from('contact_rate_limits')
      .insert({
        identifier,
        submission_count: 1,
        window_start: new Date().toISOString()
      });
    return true;
  }

  if (existing.submission_count >= RATE_LIMIT_MAX_SUBMISSIONS) {
    console.warn(`Rate limit exceeded for ${identifier}`);
    return false;
  }

  await supabase
    .from('contact_rate_limits')
    .update({
      submission_count: existing.submission_count + 1,
      updated_at: new Date().toISOString()
    })
    .eq('id', existing.id);

  return true;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const formData: ContactFormData = await req.json();

    console.log("=== Contact Form Submission ===");

    if (formData.website && formData.website.trim() !== '') {
      console.warn("⚠️ Honeypot triggered - bot detected");
      return new Response(
        JSON.stringify({ success: true, message: "Message sent successfully" }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    if (formData.formStartTime && formData.submissionTime) {
      const timeElapsed = formData.submissionTime - formData.formStartTime;

      if (timeElapsed < MIN_FORM_TIME_MS) {
        console.warn(`⚠️ Form submitted too quickly: ${timeElapsed}ms`);
        return new Response(
          JSON.stringify({
            success: false,
            message: "Form submitted too quickly. Please try again."
          }),
          {
            status: 429,
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          }
        );
      }

      if (timeElapsed > MAX_FORM_TIME_MS) {
        console.warn(`⚠️ Form session expired: ${timeElapsed}ms`);
        return new Response(
          JSON.stringify({
            success: false,
            message: "Form session expired. Please refresh and try again."
          }),
          {
            status: 400,
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          }
        );
      }
    }

    const name = sanitizeInput(formData.name);
    const email = sanitizeInput(formData.email);
    const company = sanitizeInput(formData.company);
    const message = sanitizeInput(formData.message);

    if (!name || !email || !company || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All fields are required"
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    if (name.length > MAX_NAME_LENGTH ||
        email.length > MAX_EMAIL_LENGTH ||
        company.length > MAX_COMPANY_LENGTH ||
        message.length > MAX_MESSAGE_LENGTH) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Input exceeds maximum length"
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    if (!validateEmail(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid email address"
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase credentials");
      throw new Error("Server configuration error");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const clientIp = req.headers.get('x-forwarded-for') ||
                     req.headers.get('x-real-ip') ||
                     'unknown';

    const rateLimitIdentifier = `ip:${clientIp}`;

    const rateLimitOk = await checkRateLimit(supabase, rateLimitIdentifier);

    if (!rateLimitOk) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Too many submissions. Please try again in 15 minutes."
        }),
        {
          status: 429,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    console.log("Saving to database:", { name, email, company });

    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        company,
        message,
        status: "new"
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save submission");
    }

    console.log("✓ Successfully saved to database");

    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      console.warn("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({
          success: true,
          message: "Message saved successfully"
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    try {
      console.log("→ Sending email via Resend");

      const emailPayload = {
        from: "contact@notifications.quantumstarsystems.com",
        to: "Jeremy@quantumintelligence.ai",
        reply_to: email,
        subject: `Contact Form: ${name} from ${company}`,
        text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}\n\n---\nSent from Quantum Star Systems Contact Form`,
      };

      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify(emailPayload),
      });

      const responseText = await emailResponse.text();

      if (!emailResponse.ok) {
        console.error("❌ Email send failed:", {
          status: emailResponse.status,
          body: responseText
        });
      } else {
        console.log("✓ Email sent successfully!");
      }
    } catch (emailError) {
      console.error("❌ Email exception:", emailError);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully" }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("❌ Error processing contact form:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send message. Please try again later."
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});