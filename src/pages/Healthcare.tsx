import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, Database, TrendingUp, Clock, Shield, CheckCircle, BarChart3, Users, Zap, ChevronDown, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

export default function Healthcare() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you need access to our live patient data?",
      answer: "No. The Discovery Sprint and QRAT Assessment work with anonymized and mock datasets that mirror your real infrastructure patterns. Zero HIPAA burden, zero integration required for the diagnostic phase. We assess your architecture, data flows, and system capabilities — not your patient records."
    },
    {
      question: "What EHR systems do you work with?",
      answer: "Our tools are EHR-agnostic. We've validated on Epic and MEDITECH Expanse environments, and our approach works with Cerner (Oracle Health), Allscripts, and other major platforms. The QRAT evaluates your infrastructure holistically, not just the EHR layer."
    },
    {
      question: "What's the difference between the Discovery Sprint and the full QRAT?",
      answer: "The Discovery Sprint is a focused one-week engagement: executive workshops, infrastructure review, and a preliminary readiness score with go/no-go recommendation. The full QRAT Assessment is a two-week deep diagnostic using our proprietary tools (TSL-ANN, Unified Query Framework, Q-VaR), delivering a comprehensive readiness score across 42 criteria, quantified ROI projections, and a phased implementation roadmap. Most clients start with the Sprint."
    },
    {
      question: "How quickly can we see results?",
      answer: "The Discovery Sprint delivers a preliminary readiness score and prioritized opportunity list within 5 business days. The full QRAT delivers a comprehensive report with ROI projections within 2 weeks. Classical optimization wins — like faster cross-system queries and predictive readmission models — can be deployed within the first phase of implementation."
    },
    {
      question: "What makes this different from standard healthcare IT consulting?",
      answer: "Traditional consultants assess your systems and write recommendations. We assess your systems using proprietary analytical tools that actually process your data architecture — delivering 98% readmission prediction accuracy, 60% faster cross-system queries, and quantified savings projections. The assessment itself demonstrates the technology, not just describes it."
    },
  ];

  return (
    <div className="bg-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 flex items-center justify-center space-x-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
              <p className="text-sm md:text-base text-emerald-400 font-mono tracking-widest uppercase">
                Healthcare EHR Optimization
              </p>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight pb-2">
              Your EHR Data Is Costing You<br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Millions in Blind Spots.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Fragmented records. Missed readmission signals. Reactive staffing. We find the hidden cost — and quantify the fix.
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Start with a 5-day Discovery Sprint. No patient data required.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg"
            >
              <span>Schedule a Discovery Call</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Revolving Door Problem.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Mid-size hospitals face the same pattern: siloed data, reactive care, and preventable costs that compound every month.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 border border-red-500/20 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold text-white">15-20% Readmission Rates</h3>
              </div>
              <p className="text-gray-400 mb-4">Each preventable readmission costs $15,200 in lost revenue. For a 150-bed hospital, that's millions annually in avoidable losses.</p>
              <p className="text-red-400 text-sm font-mono">$52.4B annual industry cost</p>
            </div>
            <div className="bg-slate-800/50 border border-red-500/20 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Database className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold text-white">Fragmented EHR Data</h3>
              </div>
              <p className="text-gray-400 mb-4">Patient records scattered across demographics, diagnostics, treatments, and operations. 57% of physicians identify interoperability as their primary obstacle.</p>
              <p className="text-red-400 text-sm font-mono">Care teams spend hours hunting for data</p>
            </div>
            <div className="bg-slate-800/50 border border-red-500/20 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold text-white">$100K/Month Supply Waste</h3>
              </div>
              <p className="text-gray-400 mb-4">Reactive staffing with 25% overtime costs. Supply chain bottlenecks from disconnected demand forecasting. Predictable problems treated as emergencies.</p>
              <p className="text-red-400 text-sm font-mono">Reactive operations drain margins</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              We Solve the Problem Your EHR Can't.
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our QRAT Assessment uses proprietary analytical tools to unify fragmented data, predict readmissions with 98% accuracy, and quantify operational savings — starting with technology you can deploy today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Unified Query Framework</h3>
              <p className="text-gray-400 text-sm">Connect disparate EHR data sources into holistic views. 60% faster queries across demographics, diagnostics, and readmissions.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <HeartPulse className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Predictive Readmission Analytics</h3>
              <p className="text-gray-400 text-sm">Advanced algorithms for temporal patient data. 98% accuracy forecasting readmissions and identifying cost-saving interventions.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-colors">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Pattern Recognition Engine</h3>
              <p className="text-gray-400 text-sm">Analyze large datasets for hidden supply-demand insights. Reduce bottlenecks by 25% through predictive forecasting.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-purple-500/30 transition-colors">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Risk Simulation Tool</h3>
              <p className="text-gray-400 text-sm">Model operational scenarios for crisis readmissions, inventory stress, and staffing optimization. HIPAA-compliant by design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Validated Results */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-emerald-400 font-mono tracking-widest uppercase mb-4">Validated on Simulated Hospital Data</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What the QRAT Uncovers.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Results from a simulated assessment of a 150-bed mid-size urban hospital with Epic/MEDITECH environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">82/100</div>
              <h3 className="text-white font-semibold mb-1">Overall Readiness Score</h3>
              <p className="text-gray-500 text-sm">High potential for transformative optimization</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">98%</div>
              <h3 className="text-white font-semibold mb-1">Readmission Prediction</h3>
              <p className="text-gray-500 text-sm">Accuracy in forecasting 30-day readmissions</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">20-30%</div>
              <h3 className="text-white font-semibold mb-1">Projected Cost Savings</h3>
              <p className="text-gray-500 text-sm">$2-5M annually for mid-size hospitals</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">7.2s</div>
              <h3 className="text-white font-semibold mb-1">Query Processing</h3>
              <p className="text-gray-500 text-sm">10K entries — 65% faster than baselines</p>
            </div>
          </div>

          {/* Score Breakdown */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-800/30 border border-slate-700 rounded-xl overflow-hidden">
              <div className="grid grid-cols-4 gap-px bg-slate-700">
                <div className="bg-slate-800 p-4 text-sm font-semibold text-gray-400">Category</div>
                <div className="bg-slate-800 p-4 text-sm font-semibold text-gray-400 text-center">Score</div>
                <div className="bg-slate-800 p-4 text-sm font-semibold text-gray-400">Key Result</div>
                <div className="bg-slate-800 p-4 text-sm font-semibold text-gray-400">Focus Area</div>
              </div>
              <div className="grid grid-cols-4 gap-px bg-slate-700">
                <div className="bg-slate-900 p-4 text-sm text-white">Technical Readiness</div>
                <div className="bg-slate-900 p-4 text-sm text-emerald-400 text-center font-bold">88</div>
                <div className="bg-slate-900 p-4 text-sm text-gray-400">98% readmission prediction</div>
                <div className="bg-slate-900 p-4 text-sm text-gray-500">Scale for large datasets</div>
              </div>
              <div className="grid grid-cols-4 gap-px bg-slate-700">
                <div className="bg-slate-900 p-4 text-sm text-white">Organizational</div>
                <div className="bg-slate-900 p-4 text-sm text-emerald-400 text-center font-bold">75</div>
                <div className="bg-slate-900 p-4 text-sm text-gray-400">85% dev time savings</div>
                <div className="bg-slate-900 p-4 text-sm text-gray-500">User training programs</div>
              </div>
              <div className="grid grid-cols-4 gap-px bg-slate-700">
                <div className="bg-slate-900 p-4 text-sm text-white">Infrastructure</div>
                <div className="bg-slate-900 p-4 text-sm text-emerald-400 text-center font-bold">85</div>
                <div className="bg-slate-900 p-4 text-sm text-gray-400">7.2s query processing</div>
                <div className="bg-slate-900 p-4 text-sm text-gray-500">Cloud/on-prem optimization</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Ways to Engage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Two Ways to Start.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              No patient data required. No HIPAA burden. No system integration for the diagnostic phase.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center space-x-3 mb-2">
                <Zap className="w-6 h-6 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-mono tracking-wider uppercase">Start Here</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Discovery Sprint</h3>
              <p className="text-gray-400 mb-6">A focused one-week engagement to scope your highest-impact EHR optimization opportunities.</p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Executive discovery workshops with CIO/CMIO</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>EHR infrastructure and data architecture review</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Preliminary readiness score and opportunity map</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Executive readout with go/no-go recommendation</span>
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">5 business days</div>
                <div className="text-sm text-gray-500">Fixed-fee engagement</div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-emerald-500/30 relative">
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">COMPREHENSIVE</div>
              <div className="flex items-center space-x-3 mb-2">
                <HeartPulse className="w-6 h-6 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-mono tracking-wider uppercase">Full Diagnostic</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">QRAT Assessment</h3>
              <p className="text-gray-400 mb-6">The complete two-week diagnostic with proprietary tooling and quantified ROI projections.</p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Everything in the Discovery Sprint, plus:</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Deep analysis using TSL-ANN, UQF, and Pattern Recognition Engine</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive Readiness Score across 42 criteria</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Quantified ROI projections ($2-5M annual savings)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Phased roadmap: classical wins now, quantum-ready path forward</span>
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">2 weeks</div>
                <div className="text-sm text-gray-500">Fixed-fee engagement</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">Schedule a discovery call to discuss scope and pricing for your organization.</p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Built for Healthcare Decision-Makers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">CIO / CTO</h3>
              <p className="text-gray-400 text-sm">Future-proof your EHR stack without rip-and-replace. Get a data-backed case for the board.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-500/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <HeartPulse className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">CMIO / CMO</h3>
              <p className="text-gray-400 text-sm">Reduce readmissions with predictive analytics. Improve clinical decision support across fragmented systems.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">CFO / COO</h3>
              <p className="text-gray-400 text-sm">Quantified ROI projections for operational savings. Reduce supply waste and overtime costs with predictive staffing.</p>
            </div>
          </div>
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
                  onClick={() => toggleFaq(index)}
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

      {/* Workshop Cross-Link */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/50 border border-indigo-500/20 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-indigo-400 text-sm font-mono tracking-widest uppercase mb-2">Upcoming Workshop</p>
              <h3 className="text-xl font-bold text-white mb-2">Quantum-Ready Healthcare. Real ROI, Today.</h3>
              <p className="text-gray-400 text-sm">A 60-minute session for healthcare executives — see validated results, real case studies, and a practical framework to assess your readiness. Register and receive our industry brief.</p>
            </div>
            <Link
              to="/healthcare-workshop"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-6 py-3 rounded-lg font-medium transition-all text-white text-sm shadow-lg shadow-indigo-500/25 whitespace-nowrap"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-950/30 via-slate-950 to-cyan-950/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stop Losing Revenue to Data You Already Have.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            A 5-day Discovery Sprint can identify millions in recoverable costs. No patient data required. No system integration. Just clarity.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg"
          >
            <span>Schedule a Discovery Call</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-gray-500 text-sm font-mono">jeremy@quantumstarsystems.com</p>
        </div>
      </section>
    </div>
  );
}
