import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Clock,
  Shield,
  Brain,
  Target,
  ChevronDown,
  CheckCircle,
  BarChart3,
  Lightbulb,
  Rocket,
  Mail,
  Building2,
  User,
  Loader2,
} from 'lucide-react';
import { IMAGES } from '../lib/images';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz94dQLc3sXnnvGr5-2xYep7ZwOkWQDeFttPt4vFq-Okf8o95k-mKyKUi_hrXHwkY1cVg/exec';

export default function HealthcareWorkshop() {
  const [formData, setFormData] = useState({ name: '', email: '', organization: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          timestamp: new Date().toISOString(),
          source: 'healthcare-workshop',
        }),
      });
      setFormStatus('success');
      setFormData({ name: '', email: '', organization: '' });
    } catch {
      setFormStatus('error');
    }
  };

  const agenda = [
    {
      time: '5–7 min',
      title: 'Introduction',
      description: 'Why quantum computing in healthcare, why now, and what this session will cover.',
      icon: Lightbulb,
    },
    {
      time: '5–7 min',
      title: 'Demystifying Quantum',
      description: 'Simple analogies and real context — no physics degree required.',
      icon: Brain,
    },
    {
      time: '10–12 min',
      title: 'The Business Case',
      description: 'ROI-focused case studies: Cleveland Clinic, Moderna/IBM, Mayo Clinic, and more.',
      icon: BarChart3,
    },
    {
      time: '10–12 min',
      title: 'Real-World Applications',
      description: 'Drug discovery, diagnostics, operations, and personalized care — mapped to executive priorities.',
      icon: Target,
    },
    {
      time: '5–7 min',
      title: 'Overcoming Hurdles',
      description: 'Hybrid approaches, readiness frameworks, and risk management for pragmatic adoption.',
      icon: Shield,
    },
    {
      time: '3–5 min',
      title: 'Next Steps & Q&A',
      description: 'Your path from this session to a complimentary Quantum Readiness Assessment.',
      icon: Rocket,
    },
  ];

  const stats = [
    { value: '30–40%', label: 'Annual Market Growth (CAGR)', sublabel: 'Quantum computing in healthcare through 2030' },
    { value: '$700B+', label: 'Economic Impact by 2035', sublabel: 'Total quantum computing value (McKinsey)' },
    { value: '$10M+', label: 'Avg. Breach Cost', sublabel: 'Annual healthcare data breach cost (HIPAA Journal)' },
    { value: '30–50%', label: 'OR Utilization Gains', sublabel: 'Operating room optimization potential' },
  ];

  const outcomes = [
    {
      title: 'Quantum Advantage Without the PhD',
      description: 'Understand how modern abstraction layers make quantum-inspired solutions accessible to your existing engineering teams — today, on your current infrastructure.',
    },
    {
      title: 'Deployable Solutions, Not Slide Decks',
      description: 'See specific, validated quantum-inspired tools already solving high-value problems in risk management, predictive analytics, and operational optimization.',
    },
    {
      title: 'Your Readiness Roadmap',
      description: 'Walk away with a clear framework (QRAT) to assess your organization\'s quantum readiness and identify high-ROI projects with immediate payback.',
    },
  ];

  const faqs = [
    {
      question: 'Who is this workshop for?',
      answer: 'CTOs, CIOs, CMIOs, VPs of Innovation, R&D Directors, and senior IT strategists in healthcare organizations who want a practical, de-risked path to quantum adoption — not a theoretical physics lecture.',
    },
    {
      question: 'Do I need a quantum computing background?',
      answer: 'Absolutely not. This session is designed for business and technology leaders. We use everyday analogies and focus on business outcomes, not equations.',
    },
    {
      question: 'Is quantum computing actually practical for healthcare today?',
      answer: 'Yes. That\'s the core message of this workshop. Quantum-inspired algorithms are already running on classical hardware at institutions like Cleveland Clinic, Moderna, and Mayo Clinic — delivering measurable results in drug discovery, imaging, operations, and cybersecurity. The technology has arrived. The question is whether your organization is positioned to capture it.',
    },
    {
      question: 'What happens after the workshop?',
      answer: 'Attendees are invited to a complimentary Quantum Readiness Assessment (QRAT) — a focused engagement where we evaluate your infrastructure, identify your highest-impact opportunities, and deliver a strategic roadmap with ROI projections. No patient data required.',
    },
    {
      question: 'Is there a cost to attend?',
      answer: 'No. This is a complimentary, invite-only session for qualified healthcare leaders.',
    },
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Minimal header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 left-4 bg-white/90 blur-2xl rounded-full scale-[.5]"></div>
                <div className="absolute inset-0 left-4 bg-cyan-300/70 blur-xl rounded-full scale-[.75]"></div>
                <img
                  src={IMAGES.logo}
                  alt="Quantum Star Systems"
                  className="w-10 h-10 object-cover relative z-10 rounded-full"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <span className="text-xl font-semibold text-white">Quantum Star Systems</span>
            </Link>
            <div className="hidden sm:flex items-center space-x-6">
              <a href="#agenda" className="text-gray-300 hover:text-white transition-colors text-sm">Agenda</a>
              <a href="#speakers" className="text-gray-300 hover:text-white transition-colors text-sm">Speakers</a>
              <a href="#outcomes" className="text-gray-300 hover:text-white transition-colors text-sm">Outcomes</a>
              <a href="#register" className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-5 py-2 rounded-lg font-medium transition-all text-sm text-white shadow-lg shadow-indigo-500/25">
                Register
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-indigo-950/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl"></div>
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(0,217,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,233,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-8">
              <Clock className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-300 font-medium">60-Minute Workshop</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Quantum Computing Is Here.{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                We Figured It Out.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              The biggest barrier in healthcare? Thinking quantum doesn't exist yet. It does — and leading hospitals are already using it.
            </p>

            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Join a focused session for healthcare executives who want measurable quantum advantage — not someday, but now.
            </p>

            <a
              href="#register"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-indigo-500/25 text-white"
            >
              <span>Reserve Your Seat</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="mt-6 text-gray-500 text-sm italic">
              Complimentary &middot; Invite-only &middot; Limited to 25–35 attendees
            </p>
          </div>
        </div>
      </section>

      {/* The Reality Check */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              "Quantum Computing Doesn't Exist Yet."
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              That's what most healthcare executives believe. Meanwhile, the institutions that looked past the skepticism are already seeing results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <h3 className="text-white font-semibold mb-1 text-sm">{stat.label}</h3>
                <p className="text-gray-500 text-xs">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-indigo-400 font-mono tracking-widest uppercase mb-4">What We'll Cover</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              60 Minutes. No Fluff.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A structured, high-impact session designed to move you from curiosity to conviction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {agenda.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/30 transition-colors">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <span className="text-indigo-400 text-sm font-mono">{item.time}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section id="speakers" className="py-20 bg-slate-900/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your Presenters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  SJ
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Shawn Jahromi, MBA</h3>
                  <p className="text-indigo-400 text-sm">Digital Transformation & Healthcare IT Strategist</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                With hands-on experience in hospital infrastructure, security systems, and large-scale IT deployments, Shawn brings a governance-first perspective to technology adoption. He'll frame the "why now" from the vantage point of someone who's worked inside the systems these executives manage every day.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold overflow-hidden">
                  <img
                    src="https://zabrwmdqxtjlxjetlwye.supabase.co/storage/v1/object/public/public-assets/jeremy-headshot.png"
                    alt="Jeremy Lasman"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.textContent = 'JL'; }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Jeremy Lasman</h3>
                  <p className="text-indigo-400 text-sm">Co-Founder & CEO, Quantum Star Systems</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Former SpaceX technologist with deep expertise in aerospace systems and mission-critical technology deployment. Jeremy leads QSS's strategic vision and will deliver the core quantum content, business case, and QRAT framework — showing exactly how quantum-inspired solutions work on your existing infrastructure today.
              </p>
              <p className="text-gray-500 text-xs mt-4">
                QSS CTO Mars Lucchetta pioneered the Universal Technique with 10+ years of quantum R&D, forming the foundation of the technology you'll see in this session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section id="outcomes" className="py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What You'll Walk Away With</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {outcomes.map((outcome, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-cyan-500/30 transition-colors">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{outcome.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend Callout */}
      <section className="py-16 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-950/50 to-cyan-950/50 border border-indigo-500/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Attend?</h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              The biggest barrier in healthcare isn't the technology — it's the belief that quantum doesn't exist yet. It does. Leading institutions are already capturing value. This session cuts through the noise and shows you exactly what's working, what's possible on your current infrastructure, and how to start — in one focused hour.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Step Pathway */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your Path Forward</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A proven three-step process to quantum readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center relative">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-400 font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Assess & Strategize</h3>
              <p className="text-indigo-400 text-sm font-medium mb-3">This Workshop</p>
              <p className="text-gray-400 text-sm">Understand quantum's business potential and identify your highest-impact opportunities.</p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center relative">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400 font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Integrate & Prove</h3>
              <p className="text-cyan-400 text-sm font-medium mb-3">Free QRAT Assessment</p>
              <p className="text-gray-400 text-sm">Complimentary 2-week engagement — workshops, technical analysis, and a comprehensive roadmap with ROI projections.</p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center relative">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-400 font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Execute & Scale</h3>
              <p className="text-emerald-400 text-sm font-medium mb-3">Guided Pilot</p>
              <p className="text-gray-400 text-sm">Connect existing systems, demonstrate immediate value with a guided pilot, then scale for enterprise-wide results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-24 bg-gradient-to-br from-indigo-950/30 via-slate-950 to-cyan-950/30 scroll-mt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Reserve Your Seat
            </h2>
            <p className="text-lg text-gray-400">
              Limited to 25–35 attendees. Register your interest and we'll confirm your spot.
            </p>
          </div>

          {formStatus === 'success' ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center">
              <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">You're on the list.</h3>
              <p className="text-gray-400">
                We'll be in touch with date, time, and session details. In the meantime, feel free to explore what{' '}
                <Link to="/healthcare" className="text-indigo-400 hover:text-indigo-300 underline">
                  QSS is doing in healthcare
                </Link>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  <User className="w-4 h-4 inline mr-2" />Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  placeholder="you@hospital.org"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
                  <Building2 className="w-4 h-4 inline mr-2" />Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  placeholder="Hospital or organization name"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-indigo-500/25 text-white flex items-center justify-center space-x-2"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Registering...</span>
                  </>
                ) : (
                  <>
                    <span>Register Your Interest</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {formStatus === 'error' && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or email jeremy@quantumintelligence.ai directly.</p>
              )}

              <p className="text-gray-500 text-xs text-center">
                Your information is kept confidential. We'll only use it to confirm your workshop spot.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-colors"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Quantum Star Systems. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            <a href="https://www.quantumstarsystems.com" className="hover:text-gray-400 transition-colors">quantumstarsystems.com</a>
            {' · '}
            <a href="mailto:jeremy@quantumintelligence.ai" className="hover:text-gray-400 transition-colors">jeremy@quantumintelligence.ai</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
