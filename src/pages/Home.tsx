import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Target, BarChart3, Globe, Shield, Gauge, Database, TrendingUp, Network, Lock, ChevronDown, Zap, DollarSign, HeartPulse, Lightbulb } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What outcomes should we expect from an initial pilot?",
      answer: "Initial pilots typically deliver measurable improvements in accuracy, speed, or cost reduction within 3-6 months. You'll receive detailed performance metrics, ROI analysis, and a clear roadmap for scaling the solution across your organization."
    },
    {
      question: "Do we need proprietary hardware or quantum computers to start?",
      answer: "No. Our solutions run on your existing infrastructure. We use vendor-neutral software that works with classical systems today and can seamlessly integrate with quantum hardware as it becomes available."
    },
    {
      question: "How do we choose the first use case?",
      answer: "Our QRAT Assessment evaluates your specific business challenges, data readiness, and strategic priorities to identify the highest-impact use case. We focus on problems where our technology can deliver immediate, measurable value."
    },
    {
      question: "How is our data security handled?",
      answer: "We implement enterprise-grade security protocols including encryption at rest and in transit, compliance with industry standards (HIPAA, SOC 2, etc.), and future-proof quantum-resistant cryptography. Your data never leaves your security perimeter without explicit approval."
    },
    {
      question: "What is the typical investment for a QRAT Assessment?",
      answer: "The QRAT Assessment is offered as a complimentary service for qualified enterprises. This two-week engagement includes workshops, technical analysis, and delivery of a comprehensive quantum readiness roadmap with ROI projections."
    },
    {
      question: "What happens after a successful pilot?",
      answer: "We work with you to scale the solution across additional use cases and departments. This includes integration with existing systems, team training, ongoing optimization, and a strategic roadmap for leveraging emerging quantum capabilities."
    }
  ];

  return (
    <div className="bg-slate-950">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-slate-950 to-cyan-950/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="mb-8 flex items-center justify-center space-x-2 sm:space-x-4">
              <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
              <p className="text-sm sm:text-base md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 font-light tracking-wide sm:tracking-wider italic pb-1 whitespace-nowrap">
                Computing like the universe.
              </p>
              <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight pb-2">
              Unlock Quantum Advantage for Your Business: Drive Real ROI, Today.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Our Quantum Readiness Assessment delivers immediate AI-driven ROI and builds your strategic quantum roadmap.
            </p>
            <Link
              to="/products/qrat-assessment"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
              <span>Request Free Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          
        </div>
      </section>

      <section className="py-16 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Trusted by Leaders to Solve Mission-Critical Challenges
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-indigo-500/30">
                  <Microscope className="w-8 h-8 text-indigo-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">10+ Years</h3>
              <p className="text-gray-400">Quantum R&D</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-cyan-500/30">
                  <Target className="w-8 h-8 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Up to 99%</h3>
              <p className="text-gray-400">Predictive Accuracy</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-indigo-500/30">
                  <BarChart3 className="w-8 h-8 text-indigo-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Petabyte-Scale</h3>
              <p className="text-gray-400">Proven on Large Data</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-cyan-500/30">
                  <Globe className="w-8 h-8 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Proprietary</h3>
              <p className="text-gray-400">Universal Technique</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-indigo-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <Network className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Built on a Foundation of Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                Backed by years of R&D, including our flagship <strong>Universal Technique</strong> and <strong>large-scale simulation</strong> capabilities, we give your team a <strong>faster, lower-risk path</strong> to explore and pilot quantum-ready solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Focused on Your Bottom Line</h3>
              <p className="text-gray-300 leading-relaxed">
                We focus on <strong>measurable business outcomes</strong>—better results, leaner operations, and faster innovation—delivered through <strong>clear pilots and ROI you can track.</strong>
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-indigo-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Flexible and Future-Proof</h3>
              <p className="text-gray-300 leading-relaxed">
                Our partner-friendly approach lets you <strong>start quickly on existing systems</strong>, stay flexible across providers, and keep <strong>security and compliance front and center</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Assessment Unlocks</h2>
            <p className="text-xl text-gray-400">Transform your business with quantum-ready solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Achieve Superior Risk Management</h3>
              <p className="text-gray-400">
                Go from reactive to predictive in your portfolio analysis. Our Quantum VaR solution delivers more consistent, reliable risk estimates for large portfolios.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Gauge className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Gain Real-Time Predictions</h3>
              <p className="text-gray-400">
                Our AI delivers highly accurate, real-time predictions from streams like patient signals or production sensors.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Unlock Instantaneous Optimization</h3>
              <p className="text-gray-400">
                Perform instantaneous searches outperforming traditional algorithms to streamline supply chains and allocate resources.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Network className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enable Scalable Simulation</h3>
              <p className="text-gray-400">
                De-risk innovation by testing quantum-ready ideas in the cloud before committing to hardware.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ensure Seamless Data Encoding</h3>
              <p className="text-gray-400">
                Convert your existing data into quantum-ready formats with minimal lift.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Build Future-Proof Security</h3>
              <p className="text-gray-400">
                Protect sensitive data with future-proof encryption that meets compliance standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Designed for Forward-Thinking Leaders</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We partner with executives and technical leaders in complex industries who are tired of hitting a computational wall. You're tasked with driving efficiency and securing a long-term competitive advantage, but traditional systems are holding you back. Our solutions are built for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-slate-900 rounded-2xl p-8 border border-blue-500/30">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Finance</h3>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p><span className="text-blue-400 font-semibold">• Problem:</span> Traditional VaR underestimates tail risk during stress, leading to misallocated capital.</p>
                <p><span className="text-blue-400 font-semibold">• Solution:</span> Quantum VaR delivers more stable risk estimates on large portfolios under regime shifts.</p>
                <p><span className="text-blue-400 font-semibold">• Outcome:</span> Reduce VaR error and backtesting exceptions; improve capital efficiency and stress resilience.</p>
                <p><span className="text-blue-400 font-semibold">• Proof:</span> Validated on petabyte-scale historical data and live feeds; audited backtests available.</p>
                <p className="pt-2"><Link to="/contact" className="text-blue-400 hover:text-blue-300 font-semibold underline">Request a portfolio stress assessment →</Link></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 to-slate-900 rounded-2xl p-8 border border-cyan-500/30">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Healthcare & Life Sciences</h3>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p><span className="text-cyan-400 font-semibold">• Problem:</span> Fragmented EHR data inflates readmissions and slows R&D decisions.</p>
                <p><span className="text-cyan-400 font-semibold">• Solution:</span> Unified signals + real-time AI predictions; cloud-scale molecular simulation for R&D.</p>
                <p><span className="text-cyan-400 font-semibold">• Outcome:</span> Lower 30-day readmissions; accelerate candidate screening and trial design.</p>
                <p><span className="text-cyan-400 font-semibold">• Proof:</span> Prospective validation with clinician-in-the-loop; accuracy reported by cohort and condition.</p>
                <p className="pt-2"><Link to="/contact" className="text-cyan-400 hover:text-cyan-300 font-semibold underline">Get a hospital readmission pilot plan →</Link></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/30 to-slate-900 rounded-2xl p-8 border border-emerald-500/30">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Energy & Utilities</h3>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p><span className="text-emerald-400 font-semibold">• Problem:</span> Intermittent renewables create high-dimensional optimization and grid instability.</p>
                <p><span className="text-emerald-400 font-semibold">• Solution:</span> Quantum-enhanced optimization for dispatch, storage, and maintenance scheduling.</p>
                <p><span className="text-emerald-400 font-semibold">• Outcome:</span> Higher capacity factor, fewer curtailments, reduced blackout risk.</p>
                <p><span className="text-emerald-400 font-semibold">• Proof:</span> Benchmarked against classical solvers on real SCADA data; operator KPIs improved.</p>
                <p className="pt-2"><Link to="/contact" className="text-emerald-400 hover:text-emerald-300 font-semibold underline">Schedule a grid optimization readiness review →</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">A proven three-step process to quantum readiness</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Assess & Strategize</h3>
                <p className="text-gray-300 leading-relaxed">
                  We start with a comprehensive Quantum Readiness Assessment to identify your highest-impact opportunities and create a strategic roadmap.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-500 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Integrate & Prove</h3>
                <p className="text-gray-300 leading-relaxed">
                  We connect your existing systems with our powerful, vendor-neutral interfaces to demonstrate immediate value on your infrastructure.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Execute & Scale</h3>
                <p className="text-gray-300 leading-relaxed">
                  We launch a guided pilot to deliver measurable results, then help you scale across your organization with ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-800/70 transition-colors"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 border-t border-slate-700">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-950/50 via-slate-950 to-cyan-950/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Unlock Value Now</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your quantum journey with a comprehensive assessment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products/qrat-assessment"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-indigo-500/25"
            >
              <span>Take the Free Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              <span>Schedule a Strategy Session</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
