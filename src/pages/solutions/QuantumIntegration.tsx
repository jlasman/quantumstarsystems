import { Link } from 'react-router-dom';
import { Atom, Layers, Building, Rocket, ArrowRight } from 'lucide-react';
import SolutionPostLayout from '../../components/SolutionPostLayout';

export default function QuantumIntegration() {
  return (
    <SolutionPostLayout
      title="Quantum Integration"
      subtitle="Master the Quantum Frontier: Seamless Integration for Unstoppable Progress"
      icon={Atom}
      heroContent={
        <>
          <p className="mb-4">
            QSS connects today's systems with emerging quantum capabilities to solve tough business problems. Our vendor-neutral software and consultative approach make it easy to start now and scale as the hardware matures.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/25 mt-4"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </>
      }
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-2 border-b border-slate-700">
          Quantum Integration Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Atom className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Quantum Readiness Assessment (QRAT)</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-2">Your Roadmap to Quantum Advantage</p>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Our comprehensive two-week assessment identifies your highest-impact quantum opportunities, evaluates data readiness, and delivers a strategic roadmap with ROI projections. Discover where quantum can drive immediate business value.
                </p>
                <Link to="/products/qrat-assessment" className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Layers className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Hybrid Quantum-Classical Processing</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-2">Best of Both Worlds</p>
                <p className="text-gray-300 leading-relaxed">
                  Leverage our Universal Technique to seamlessly integrate quantum algorithms with your existing classical infrastructure. Start with proven results on current systems, then scale to quantum hardware as it becomes available—all without rewriting your applications.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Industry-Specific Quantum Patterns</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-2">Finance, Healthcare, and Manufacturing Solutions</p>
                <p className="text-gray-300 leading-relaxed">
                  Access pre-built quantum algorithms and integration patterns tailored to your industry. From financial risk modeling and portfolio optimization to drug discovery and supply chain logistics, we deliver proven quantum solutions for real business problems.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Rocket className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Performance Optimization & Migration</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-2">Continuous Improvement Path</p>
                <p className="text-gray-300 leading-relaxed">
                  We continuously optimize your quantum-classical workflows as new hardware becomes available. Our vendor-neutral approach ensures you're never locked into a single provider, and our simulation tools let you test before committing to expensive quantum infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-2 border-b border-slate-700">
          The QSS Quantum Advantage
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-3">Vendor Neutral</h3>
            <p className="text-gray-300 leading-relaxed">
              Work with any quantum hardware provider—IBM, Google, IonQ, Rigetti, and more. Our abstraction layer ensures portability and protects your investment.
            </p>
          </div>

          <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-3">Proven Technology</h3>
            <p className="text-gray-300 leading-relaxed">
              Our Universal Technique and QSS Simulator have been validated on petabyte-scale data with up to 99% accuracy. We deliver results, not promises.
            </p>
          </div>

          <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-3">Low-Risk Path</h3>
            <p className="text-gray-300 leading-relaxed">
              Start with immediate ROI on classical systems. Scale to quantum as the hardware matures. No need to wait or gamble on unproven technology.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-2 border-b border-slate-700">
          Industry Applications
        </h2>

        <div className="space-y-6">
          <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-3">Finance</h3>
            <p className="text-gray-300 leading-relaxed">
              Quantum VaR for risk management, portfolio optimization at scale, fraud detection with quantum-enhanced pattern recognition, and derivatives pricing with unprecedented accuracy.
            </p>
          </div>

          <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-3">Healthcare</h3>
            <p className="text-gray-300 leading-relaxed">
              Accelerate drug discovery through molecular simulation, optimize clinical trial design, enable precision medicine with quantum-enhanced genomic analysis, and improve patient outcomes with real-time predictive monitoring.
            </p>
          </div>

          <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-3">Manufacturing</h3>
            <p className="text-gray-300 leading-relaxed">
              Supply chain optimization across global networks, predictive maintenance using quantum machine learning, materials science simulations for next-generation products, and production scheduling that adapts in real-time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/30 rounded-xl p-8 border border-slate-700 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Begin Your Quantum Journey</h2>
        <p className="text-xl text-gray-300 mb-6">
          Discover your quantum opportunities with a complimentary readiness assessment
        </p>
        <Link
          to="/products/qrat-assessment"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/25"
        >
          <span>Request Free Assessment</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </SolutionPostLayout>
  );
}
