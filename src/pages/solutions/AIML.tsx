import { Link } from 'react-router-dom';
import { Brain, LineChart, Shield, Cog, Bell, Users, ArrowRight } from 'lucide-react';
import SolutionPostLayout from '../../components/SolutionPostLayout';

export default function AIML() {
  return (
    <SolutionPostLayout
      title="AI/ML"
      subtitle="Empower Your Enterprise with Cutting-Edge AI"
      icon={Brain}
      heroContent={
        <>
          <p className="mb-4">
            Quantum Star Systems brings practical AI and machine learning to your business, turning complex challenges into clear opportunities with tailored, consultative support.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-cyan-500/25 mt-4"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </>
      }
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-2 border-b border-slate-700">
          Our AI/ML Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <LineChart className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Predictive Analytics and Forecasting (TSL-ANN)</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-2">Achieve Up to 99% Accuracy</p>
                <p className="text-gray-300 leading-relaxed">
                  Our proprietary TSL-ANN technology delivers highly accurate predictions from real-time data streams. Perfect for financial forecasting, demand planning, patient monitoring, and production optimization.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Custom Machine Learning Model Development</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-2">Tailored Solutions for Your Business</p>
                <p className="text-gray-300 leading-relaxed">
                  We design and deploy custom ML models optimized for your specific use cases, from computer vision and NLP to recommendation systems and anomaly detection.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">AI Strategy and Governance Consulting (vCAIO)</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-2">Virtual Chief AI Officer Services</p>
                <p className="text-gray-300 leading-relaxed">
                  Get executive-level AI leadership without the full-time cost. We help you define AI strategy, establish governance frameworks, and ensure responsible AI deployment.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Cog className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">AI-Powered Automation and DevOps</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-2">Streamline Operations with Intelligent Automation</p>
                <p className="text-gray-300 leading-relaxed">
                  Automate repetitive tasks, optimize workflows, and accelerate deployment cycles with AI-driven DevOps tools that learn from your development patterns.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bell className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Real-Time Data Processing and Anomaly Detection</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-2">Instant Insights, Immediate Action</p>
                <p className="text-gray-300 leading-relaxed">
                  Monitor systems in real-time and detect anomalies before they become problems. Ideal for fraud detection, quality control, and system health monitoring.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Business Transformation with AI Agents</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-2">Autonomous Intelligence for Enterprise</p>
                <p className="text-gray-300 leading-relaxed">
                  Deploy AI agents that understand your business context, make decisions, and take actions autonomously—from customer service to supply chain management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 pb-2 border-b border-slate-700">
          Why Choose QSS for AI/ML?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
            <p className="text-gray-300 leading-relaxed">
              Our TSL-ANN technology has demonstrated up to 99% accuracy on petabyte-scale datasets across finance, healthcare, and aerospace applications.
            </p>
          </div>

          <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-3">Quantum-Ready</h3>
            <p className="text-gray-300 leading-relaxed">
              Our AI solutions are built on quantum-inspired algorithms, giving you a seamless path to hybrid quantum-classical systems as the technology matures.
            </p>
          </div>

          <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-3">Full-Stack Support</h3>
            <p className="text-gray-300 leading-relaxed">
              From strategy to deployment and ongoing optimization, we provide end-to-end AI expertise tailored to your industry and business objectives.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/30 rounded-xl p-8 border border-slate-700 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Harness AI for Your Business?</h2>
        <p className="text-xl text-gray-300 mb-6">
          Discover how AI can transform your operations with a Discovery Sprint
        </p>
        <Link
          to="/products/qrat-assessment"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-cyan-500/25"
        >
          <span>Schedule a Discovery Call</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </SolutionPostLayout>
  );
}
