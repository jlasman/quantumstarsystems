import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cloud, Rocket, Wrench } from 'lucide-react';

export default function EnterpriseSolutions() {
  return (
    <div className="bg-slate-950">
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-950/50 via-slate-950 to-indigo-950/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              From Blueprint to Breakthrough: Full-Scale Implementation & Consulting
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Our implementation services are for organizations ready to deploy our core technologies at scale.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-cyan-500/25"
            >
              <span>Schedule a Solutions Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Service Pillars</h2>
            <p className="text-xl text-gray-400">End-to-end solutions for enterprise transformation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Custom Solution Development</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Tailored implementations of our core technologies to solve your specific business challenges. From custom algorithm development to integration with existing systems, we build solutions that fit your exact needs.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Custom quantum algorithm design</li>
                    <li>• Proprietary model training and optimization</li>
                    <li>• Legacy system integration</li>
                    <li>• API and microservices development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700 hover:border-indigo-500/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Hybrid Cloud Integration</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Seamlessly connect on-premises infrastructure with cloud resources to create flexible, scalable architectures. We ensure your systems are ready for both classical and quantum workloads.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Multi-cloud architecture design</li>
                    <li>• Data pipeline optimization</li>
                    <li>• Security and compliance implementation</li>
                    <li>• Quantum hardware connectivity</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Quantum Migration Strategy</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Plan and execute your transition from classical to hybrid quantum-classical systems. We create phased migration plans that minimize risk while maximizing business value.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Workload assessment and prioritization</li>
                    <li>• Phased migration roadmaps</li>
                    <li>• Parallel system validation</li>
                    <li>• Team training and knowledge transfer</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700 hover:border-indigo-500/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Performance Optimization & Support</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Ongoing optimization, monitoring, and support to ensure your quantum-ready systems deliver maximum value. We provide continuous improvements and adapt to new quantum capabilities.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• 24/7 monitoring and support</li>
                    <li>• Performance tuning and optimization</li>
                    <li>• Regular technology updates</li>
                    <li>• Strategic consulting and roadmap updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Technology in Action</h2>
            <p className="text-xl text-gray-400">How we deploy our core technologies at enterprise scale</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Universal Technique Deployment</h3>
              <p className="text-gray-300 leading-relaxed">
                We integrate our proprietary Universal Technique into your data pipelines, enabling quantum-ready data encoding and hybrid quantum-classical processing without disrupting existing operations.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">TSL-ANN Implementation</h3>
              <p className="text-gray-300 leading-relaxed">
                Deploy real-time predictive analytics across your streaming data infrastructure, delivering up to 99% accuracy on time-series forecasting, anomaly detection, and pattern recognition.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Quantum VaR for Financial Services</h3>
              <p className="text-gray-300 leading-relaxed">
                Transform risk management with quantum-enhanced VaR calculations that deliver 30-50% more accurate estimates while reducing computation time by 100x for large portfolios.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">UQF Cross-Silo Analytics</h3>
              <p className="text-gray-300 leading-relaxed">
                Eliminate data silos with our Unified Query Framework, enabling real-time analytics across disparate data sources without costly ETL processes or data movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Engagement Process</h2>
            <p className="text-xl text-gray-400">A proven methodology for enterprise implementation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Deep-Dive & Architectural Design</h3>
              <p className="text-gray-300">
                Comprehensive analysis of your systems, data, and requirements. Design detailed architecture and integration plans.
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Agile Development Sprints</h3>
              <p className="text-gray-300">
                Iterative development with regular demos and feedback. Build, test, and refine solutions in close collaboration with your team.
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Deployment & Performance Validation</h3>
              <p className="text-gray-300">
                Careful production rollout with comprehensive testing. Validate performance against established metrics and objectives.
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Scaling & Partnership</h3>
              <p className="text-gray-300">
                Scale successful implementations across your organization. Ongoing optimization and strategic partnership for continued innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-950/50 via-slate-950 to-cyan-950/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a consultation to discuss your implementation needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-indigo-500/25"
          >
            <span>Schedule a Solutions Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
