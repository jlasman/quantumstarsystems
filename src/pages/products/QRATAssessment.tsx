import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Target, FileText, TrendingUp, Zap } from 'lucide-react';

export default function QRATAssessment() {
  return (
    <div className="bg-slate-950">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950/50 via-slate-950 to-cyan-950/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The QRAT Assessment: Your Quantum Roadmap in 14 Days
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              From Complexity to Clarity. From Cost to ROI. Start with a Discovery Sprint and scale to a full diagnostic.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-indigo-500/25"
            >
              <span>Book a Discovery Call</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Is This Right for You?</h2>
            <p className="text-xl text-gray-400">The QRAT Assessment is designed for decision-makers facing these challenges</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">CTO / CIO</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Need to future-proof technology stack</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Facing data silos and integration challenges</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Want to leverage AI/quantum without massive risk</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">VP of Innovation</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Exploring quantum computing opportunities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Need to demonstrate ROI on emerging tech</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Looking for competitive advantage</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">CEO / COO</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Want measurable business transformation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Need to optimize operations and reduce costs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Seeking strategic technology investments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Two Ways to Engage</h2>
            <p className="text-xl text-gray-400">Start fast with a Discovery Sprint, or go deep with the full QRAT Assessment</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center space-x-3 mb-2">
                <Zap className="w-6 h-6 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-mono tracking-wider uppercase">Entry Point</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Discovery Sprint</h3>
              <p className="text-gray-400 mb-6">A focused one-week engagement to scope your highest-impact opportunities and determine the path forward.</p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Executive discovery workshops</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Infrastructure and data architecture review</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Preliminary readiness score and go/no-go recommendation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Executive readout with prioritized opportunities</span>
                </li>
              </ul>
              <div className="text-sm text-gray-500">Typically 5 business days</div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-indigo-500/30 relative">
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">COMPREHENSIVE</div>
              <div className="flex items-center space-x-3 mb-2">
                <Target className="w-6 h-6 text-indigo-400" />
                <span className="text-indigo-400 text-sm font-mono tracking-wider uppercase">Full Diagnostic</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">QRAT Assessment</h3>
              <p className="text-gray-400 mb-6">The complete two-week diagnostic with proprietary tooling, deep technical analysis, and a quantified roadmap.</p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Everything in the Discovery Sprint, plus:</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Deep analysis using proprietary QSS tools (TSL-ANN, UQF, Q-VaR)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive Readiness Score across 42 criteria</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Quantified ROI projections and phased implementation roadmap</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Problem-Solution Fit report with prioritized initiatives</span>
                </li>
              </ul>
              <div className="text-sm text-gray-500">Two weeks, delivered as a fixed-fee engagement</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-2">Most clients start with a Discovery Sprint, then expand to the full QRAT Assessment.</p>
            <p className="text-gray-500 text-sm">Schedule a discovery call to discuss scope and pricing for your organization.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What You Get</h2>
            <p className="text-xl text-gray-400">Comprehensive deliverables for strategic decision-making</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700 hover:border-indigo-500/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Executive Summary & Quantum Readiness Score</h3>
                  <p className="text-gray-300">
                    Clear, actionable insights on your organization's quantum readiness with a comprehensive scoring framework across technology, data, and organizational dimensions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Technical Gap Analysis</h3>
                  <p className="text-gray-300">
                    Detailed assessment of your current infrastructure, data capabilities, and technical gaps that need to be addressed for quantum readiness.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700 hover:border-indigo-500/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Problem-Solution Fit Report</h3>
                  <p className="text-gray-300">
                    Specific use cases mapped to our technologies with expected outcomes, timelines, and resource requirements for each initiative.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Prioritized Strategic Roadmap</h3>
                  <p className="text-gray-300">
                    Multi-phase implementation plan with clear milestones, ROI projections, and success metrics for each phase of your quantum journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The QSS Advantage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Value Today, Advantage Tomorrow</h3>
              <p className="text-gray-300 leading-relaxed">
                We focus on delivering immediate ROI with classical and AI solutions while building your path to quantum advantage. No waiting for quantum hardware to mature.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Powered by Proprietary Technology</h3>
              <p className="text-gray-300 leading-relaxed">
                Our assessment leverages proven technologies including the Universal Technique, TSL-ANN, and QSS Simulator—technologies with demonstrated results at scale.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Speed & Focus</h3>
              <p className="text-gray-300 leading-relaxed">
                Get actionable insights in just two weeks. Our structured process ensures we identify your highest-impact opportunities quickly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Begin Your Quantum Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a discovery call to learn how the QRAT Assessment can unlock value for your organization
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-indigo-500/25"
          >
            <span>Book a Discovery Call</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
