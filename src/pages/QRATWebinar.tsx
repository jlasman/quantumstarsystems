import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    type: 'title',
    content: (
      <div className="text-center">
        <div className="mb-8 flex items-center justify-center space-x-2 sm:space-x-4">
          <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          <p className="text-sm sm:text-base md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 font-light tracking-wide sm:tracking-wider italic pb-1 whitespace-nowrap">
            Computing like the universe.
          </p>
          <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        </div>
        <p className="text-lg font-semibold text-indigo-400 mb-4">A Free Webinar by Quantum Star Systems</p>
        <h1 className="text-4xl md:text-6xl font-black text-white my-6 leading-tight">Quantum-Ready in Weeks</h1>
        <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          How QRAT Transforms Healthcare and Finance Operations
        </p>
        <div className="mt-8 text-gray-400">
          <p className="font-bold text-white">Wednesday, November 5, 2025 | 11:00 AM EST</p>
          <p>Host: Mars Buttfield-Addison, CEO | Co-Host: Jeremy Howard</p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    type: 'agenda',
    content: (
      <div>
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Agenda Overview (60 Mins)</h2>
        <ul className="space-y-6 text-xl text-gray-300 w-full max-w-2xl mx-auto">
          <li className="flex items-center bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20 p-6 rounded-lg hover:border-indigo-500/40 transition-all">
            <span className="text-indigo-400 font-bold w-28">0-10 min</span>
            <span>Introduction to QRAT & The Opportunity</span>
          </li>
          <li className="flex items-center bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20 p-6 rounded-lg hover:border-indigo-500/40 transition-all">
            <span className="text-indigo-400 font-bold w-28">10-20 min</span>
            <span>The 2-Week QRAT Process & Workflow</span>
          </li>
          <li className="flex items-center bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20 p-6 rounded-lg hover:border-indigo-500/40 transition-all">
            <span className="text-indigo-400 font-bold w-28">20-40 min</span>
            <span>Real-World Demos: Healthcare & Finance</span>
          </li>
          <li className="flex items-center bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20 p-6 rounded-lg hover:border-indigo-500/40 transition-all">
            <span className="text-indigo-400 font-bold w-28">40-55 min</span>
            <span>Roadmap, ROI, and Live Q&A</span>
          </li>
          <li className="flex items-center bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20 p-6 rounded-lg hover:border-indigo-500/40 transition-all">
            <span className="text-indigo-400 font-bold w-28">55-60 min</span>
            <span>Call to Action & Next Steps</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    type: 'who-we-are',
    content: (
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Who We Are: Quantum Star Systems</h2>
        <p className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-8">
          "Compute like the universe—delivering 90% quantum power classically today."
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20 p-6 rounded-xl hover:border-indigo-500/40 transition-all">
            <h3 className="text-xl font-bold text-indigo-400">Pioneers</h3>
            <p className="mt-2 text-gray-300">in hybrid quantum solutions for B2B healthcare, finance, and logistics.</p>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-6 rounded-xl hover:border-cyan-500/40 transition-all">
            <h3 className="text-xl font-bold text-cyan-400">Experts</h3>
            <p className="mt-2 text-gray-300">7+ years in cutting-edge AI & Quantum R&D.</p>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20 p-6 rounded-xl hover:border-indigo-500/40 transition-all">
            <h3 className="text-xl font-bold text-indigo-400">Vendor-Neutral</h3>
            <p className="mt-2 text-gray-300">We integrate with the best tools for the job, from AWS to IonQ.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    type: 'opportunity',
    content: (
      <div>
        <h2 className="text-4xl font-bold text-white mb-2 text-center">The Quantum Opportunity—and the Gap</h2>
        <p className="text-center text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
          The quantum market is projected to be worth <span className="font-bold text-green-400">$1T by 2035</span>, but{' '}
          <span className="font-bold text-red-400">80% of firms are unprepared</span> due to data silos, legacy systems, and high costs.
        </p>
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto mt-4">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-red-500/20 p-8 rounded-xl hover:border-red-500/40 transition-all">
            <h3 className="text-2xl font-bold text-white">Healthcare Pain</h3>
            <p className="text-red-400 text-5xl font-extrabold my-4">15-20%</p>
            <p className="text-lg text-gray-300">
              Readmission waste, costing hospitals over <span className="font-bold text-white">$100K/month.</span>
            </p>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-red-500/20 p-8 rounded-xl hover:border-red-500/40 transition-all">
            <h3 className="text-2xl font-bold text-white">Finance Pain</h3>
            <p className="text-red-400 text-5xl font-extrabold my-4">15-25%</p>
            <p className="text-lg text-gray-300">Risk exposure from fragmented VaR models in volatile markets.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    type: 'what-is-qrat',
    content: (
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-6">What is QRAT? The Elevator Pitch</h2>
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600/90 via-blue-600/90 to-cyan-600/90 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto border border-indigo-400/20">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20"></div>
          <div className="relative">
            <p className="text-xl text-indigo-50">
              QRAT is a <span className="font-bold text-white">1-week simulated evaluation</span> scoring your operations (0-100) across
              technical, organizational, and infrastructure pillars.
            </p>
            <div className="border-t border-indigo-300/30 my-6"></div>
            <p className="text-2xl font-extrabold text-white">
              "QRAT simulates quantum power on your cloud, delivering 90% insights for $2-5M in savings—no hardware needed."
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    type: 'process',
    content: (
      <div>
        <h2 className="text-4xl font-bold text-white mb-8 text-center">The QRAT Process: 2 Weeks to Insight</h2>
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20 p-6 rounded-xl hover:border-indigo-500/40 transition-all">
            <h3 className="text-2xl font-bold text-white mb-4">Week 1: Scoping & Diagnostics</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <span className="font-bold text-indigo-400">Day 1:</span> Align data flows (Secure API)
              </li>
              <li>
                <span className="font-bold text-indigo-400">Days 2-3:</span> Run predictive analytics on mock data
              </li>
              <li>
                <span className="font-bold text-indigo-400">Days 4-5:</span> Integrate silos & generate initial scores
              </li>
            </ul>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-6 rounded-xl hover:border-cyan-500/40 transition-all">
            <h3 className="text-2xl font-bold text-white mb-4">Week 2: Refinements & Reporting</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <span className="font-bold text-cyan-400">Days 6-7:</span> Customize (e.g., FHIR gap analysis)
              </li>
              <li>
                <span className="font-bold text-cyan-400">Days 8-10:</span> Build final ROI report & actionable roadmap
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    type: 'tools',
    content: (
      <div>
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Tools and Expected Results</h2>
        <div className="w-full max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-indigo-500/30">
                <th className="p-4 text-lg font-semibold text-white">Step</th>
                <th className="p-4 text-lg font-semibold text-white">Tools Used</th>
                <th className="p-4 text-lg font-semibold text-white">Expected Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              <tr className="hover:bg-slate-900/30 transition-colors">
                <td className="p-4 font-bold text-indigo-400">Scoping</td>
                <td className="p-4 text-gray-300">Secure API / Questionnaires</td>
                <td className="p-4 text-gray-300">Aligned scope; 100% HIPAA compliance baseline.</td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition-colors">
                <td className="p-4 font-bold text-indigo-400">Data Analysis</td>
                <td className="p-4 text-gray-300">Predictive Sequence Analytics</td>
                <td className="p-4 text-gray-300">
                  <span className="font-bold text-green-400">98% accuracy</span>; 20% cost-saving predictions.
                </td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition-colors">
                <td className="p-4 font-bold text-indigo-400">Integration</td>
                <td className="p-4 text-gray-300">Unified Query Framework</td>
                <td className="p-4 text-gray-300">
                  <span className="font-bold text-green-400">70% faster queries</span> (e.g., 7.2s for 10K records).
                </td>
              </tr>
              <tr className="hover:bg-slate-900/30 transition-colors">
                <td className="p-4 font-bold text-indigo-400">Reporting</td>
                <td className="p-4 text-gray-300">ROI Simulator + Dashboard</td>
                <td className="p-4 text-gray-300">
                  Full score & <span className="font-bold text-green-400">$2-5M savings roadmap</span>.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    type: 'healthcare-demo',
    content: (
      <div>
        <h2 className="text-4xl font-bold text-white mb-2 text-center">QRAT in Action: Healthcare</h2>
        <p className="text-lg text-gray-400 mb-6 text-center">Scenario: 150-bed hospital with Epic EHR, facing 15% readmissions.</p>
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600/90 via-blue-600/90 to-cyan-600/90 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto border border-indigo-400/20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20"></div>
          <div className="relative">
            <h3 className="text-2xl font-bold text-white mb-4">Key Insights Uncovered</h3>
            <p className="text-5xl font-extrabold text-white my-6">7.2 seconds</p>
            <p className="text-xl text-indigo-50">
              to process 10,000 patient records, identifying patterns that predict readmissions with{' '}
              <span className="font-bold text-white">98% accuracy.</span>
            </p>
            <div className="border-t border-indigo-300/30 my-6"></div>
            <p className="text-xl text-indigo-50">
              Projected Impact: <span className="font-bold text-white">20% savings</span> in staffing costs and a significant drop in
              readmission penalties.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    type: 'healthcare-results',
    content: (
      <div>
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Healthcare Mock: Results Breakdown</h2>
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Overall QRAT Score</h3>
            <p className="text-8xl font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent my-4">
              82<span className="text-4xl text-gray-400">/100</span>
            </p>
            <p className="text-xl text-gray-300">High potential for immediate wins, with a clear path to 10x scale with quantum.</p>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Score Details</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong className="text-indigo-400">Technical:</strong> 88/100 (98% accuracy)
              </li>
              <li>
                <strong className="text-cyan-400">Organizational:</strong> 75/100 (85% integration ease)
              </li>
              <li>
                <strong className="text-indigo-400">Infrastructure:</strong> 85/100 (50MB footprint)
              </li>
            </ul>
            <p className="mt-4 text-green-400 font-bold">Benefit: 70% silo reduction & 20-30% savings.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    type: 'finance-demo',
    content: (
      <div>
        <h2 className="text-4xl font-bold text-white mb-2 text-center">QRAT in Action: Finance</h2>
        <p className="text-lg text-gray-400 mb-6 text-center">Scenario: Mid-tier bank with VaR silos and 15% risk exposure.</p>
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600/90 via-blue-600/90 to-cyan-600/90 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto border border-indigo-400/20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20"></div>
          <div className="relative">
            <h3 className="text-2xl font-bold text-white mb-4">Key Insights Uncovered</h3>
            <p className="text-5xl font-extrabold text-white my-6">5.63 seconds</p>
            <p className="text-xl text-indigo-50">
              to simulate complex market scenarios, identifying opportunities to reduce Value at Risk (VaR) exposure with{' '}
              <span className="font-bold text-white">O(1)-like</span> queries.
            </p>
            <div className="border-t border-indigo-300/30 my-6"></div>
            <p className="text-xl text-indigo-50">
              Projected Impact: <span className="font-bold text-white">30% reduction</span> in potential losses from surprise "black swan"
              events.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 11,
    type: 'finance-results',
    content: (
      <div>
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Finance Mock: Results Breakdown</h2>
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Overall QRAT Score</h3>
            <p className="text-8xl font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent my-4">
              62<span className="text-4xl text-gray-400">/100</span>
            </p>
            <p className="text-xl text-gray-300">Immediate 15% gains with classical tools, plus an upskilling path for quantum fraud-proofing.</p>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Projected ROI</h3>
            <p className="text-4xl font-bold text-green-400 my-2">$2-4M / year</p>
            <p className="text-lg text-gray-300">
              With 35% outperformance vs. Basel III benchmarks by leveraging quantum-inspired risk models.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 12,
    type: 'roadmap',
    content: (
      <div>
        <h2 className="text-4xl font-bold text-white mb-8 text-center">QRAT Roadmap: Assessment to Implementation</h2>
        <div className="w-full max-w-4xl mx-auto space-y-4">
          <div className="bg-slate-900/50 backdrop-blur-sm border-l-4 border-indigo-500 p-6 rounded-lg hover:bg-slate-900/70 transition-all">
            <h3 className="text-xl font-bold text-white">Phase 1 (4-6 Weeks): Classical MVP</h3>
            <p className="text-gray-300 mt-1">Deploy an EHR dashboard or risk analysis tool. Start with a low-cost pilot to prove immediate value.</p>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border-l-4 border-cyan-500 p-6 rounded-lg hover:bg-slate-900/70 transition-all">
            <h3 className="text-xl font-bold text-white">Phase 2 (6-12 Months): Hybrid Quantum</h3>
            <p className="text-gray-300 mt-1">
              Integrate with partner QPUs (e.g., IonQ) for a 10x speedup on your most complex computational problems.
            </p>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border-l-4 border-indigo-500 p-6 rounded-lg hover:bg-slate-900/70 transition-all">
            <h3 className="text-xl font-bold text-white">Phase 3 (Ongoing): Full Optimization</h3>
            <p className="text-gray-300 mt-1">
              Achieve 5-10x ROI with a full SaaS implementation, continuously optimizing your operations.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 13,
    type: 'roi',
    content: (
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Proven ROI and Benchmarks</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-green-500/20 p-6 rounded-xl border-t-4 hover:border-green-500/40 transition-all">
            <h3 className="text-5xl font-extrabold text-green-400">20-30%</h3>
            <p className="mt-2 text-lg text-gray-300">Immediate cost savings in Year 1.</p>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-green-500/20 p-6 rounded-xl border-t-4 hover:border-green-500/40 transition-all">
            <h3 className="text-5xl font-extrabold text-green-400">98%</h3>
            <p className="mt-2 text-lg text-gray-300">Predictive accuracy on key metrics.</p>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-green-500/20 p-6 rounded-xl border-t-4 hover:border-green-500/40 transition-all">
            <h3 className="text-5xl font-extrabold text-green-400">5-10x</h3>
            <p className="mt-2 text-lg text-gray-300">Return on Investment in Year 2.</p>
          </div>
        </div>
        <p className="text-gray-400 mt-8 text-lg">
          Our tools are benchmarked to be <span className="font-bold text-white">65% faster</span> than legacy systems and{' '}
          <span className="font-bold text-white">50% more efficient</span> than competitors.
        </p>
      </div>
    ),
  },
  {
    id: 14,
    type: 'why-qss',
    content: (
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Why Choose QSS and QRAT?</h2>
        <div className="max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20 p-8 rounded-2xl">
          <ul className="space-y-4 text-left text-lg">
            <li className="flex items-start">
              <span className="text-green-400 mr-3">✔</span>
              <span className="text-gray-300">
                <strong className="text-white">Vendor-Neutral:</strong> We find the right tools for you, no lock-in.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-3">✔</span>
              <span className="text-gray-300">
                <strong className="text-white">Fully Compliant:</strong> HIPAA & GDPR ready from day one.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-3">✔</span>
              <span className="text-gray-300">
                <strong className="text-white">1-Week Turnaround:</strong> Get actionable insights faster than anyone else.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-3">✔</span>
              <span className="text-gray-300">
                <strong className="text-white">90% Insights Classically:</strong> Real results now, not in 10 years.
              </span>
            </li>
          </ul>
          <div className="border-t border-slate-600 my-6"></div>
          <p className="text-xl italic text-gray-300">
            "QRAT transformed our EHR—a 20% efficiency boost in the first quarter."
            <br />- Anonymized Pilot Partner
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 15,
    type: 'qa',
    content: (
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white mb-6">Q&A Session</h2>
        <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
          What's on your mind?
          <br />
          Let's discuss integration with Epic, quantum timelines, or your specific data challenges.
        </p>
        <div className="mt-8 text-gray-400">Use the chat or raise your hand to ask a question.</div>
      </div>
    ),
  },
  {
    id: 16,
    type: 'cta',
    content: (
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Ready to Take the Next Step?</h2>
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20 p-8 rounded-xl hover:border-indigo-500/40 transition-all">
            <h3 className="text-2xl font-bold text-white mb-4">Book a Free QRAT Lite Session</h3>
            <p className="mb-4 text-gray-300">Get a personalized overview of how QRAT can address your specific needs.</p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
            >
              Book Now
            </a>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-xl hover:border-cyan-500/40 transition-all">
            <h3 className="text-2xl font-bold text-white mb-4">Download The Mock Report</h3>
            <p className="mb-4 text-gray-300">See a detailed example of the insights and roadmap a full QRAT provides.</p>
            <button className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 17,
    type: 'thank-you',
    content: (
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white mb-4">Thank You</h2>
        <p className="text-2xl text-gray-300 mb-8">We're excited for your quantum journey.</p>
        <div className="text-lg text-gray-400">
          <p>A replay of this webinar and all resources will be sent to you via email.</p>
          <p className="mt-4">
            <strong className="text-white">Contact:</strong> contact@qss.com
          </p>
          <p>
            <strong className="text-white">Website:</strong> qss.com/qrat
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 18,
    type: 'appendix',
    content: (
      <div>
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Appendix: Additional Resources</h2>
        <ul className="space-y-4 text-xl text-indigo-400 w-full max-w-lg mx-auto text-center">
          <li>
            <a href="#" className="hover:text-cyan-400 transition-colors underline">
              QRAT Workflow Documentation
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition-colors underline">
              Our LinkedIn Blog Series
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition-colors underline">
              Executive Summary PDF
            </a>
          </li>
        </ul>
      </div>
    ),
  },
];

export default function QRATWebinar() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides]);

  const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="bg-slate-950 min-h-screen">
      <section className="relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-slate-950 to-cyan-950/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col min-h-screen">
          <header className="w-full mb-8">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                <img src="/qss-logo-circle.png" alt="Quantum Star Systems" className="w-8 h-8" />
                <span className="text-xl font-bold text-white">Quantum Star Systems</span>
              </div>
              <div className="text-sm font-medium text-gray-400">
                Slide {currentSlide + 1} of {totalSlides}
              </div>
            </div>
            <div className="w-full bg-slate-700/50 rounded-full h-1.5">
              <div
                className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </header>

          <main className="flex-grow flex items-center justify-center">
            <div className="w-full min-h-[60vh] flex items-center justify-center" key={currentSlide}>
              <div className="w-full animate-fade-in">{slides[currentSlide].content}</div>
            </div>
          </main>

          <footer className="w-full mt-8">
            <div className="flex justify-between items-center">
              <button
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                className="flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-slate-700/50"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Prev</span>
              </button>
              <button
                onClick={() => setCurrentSlide(Math.min(totalSlides - 1, currentSlide + 1))}
                disabled={currentSlide === totalSlides - 1}
                className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/25"
              >
                <span>Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </footer>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
