import { Link } from 'react-router-dom';
import { Database, Zap, Network, TrendingUp, Shield, Bot, Building2, ArrowRight } from 'lucide-react';
import SolutionPostLayout from '../../components/SolutionPostLayout';

export default function BigData() {
  return (
    <SolutionPostLayout
      title="Big Data"
      subtitle="Master Big Data Today, Unlock Quantum Tomorrow"
      icon={Database}
      heroContent={
        <>
          <p className="mb-4">
            We turn fragmented, large-scale data into fast, secure, ROI-driven intelligence—delivering measurable value now while preparing your organization for hybrid quantum acceleration.
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
          Our Big Data Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Unified Query Framework (UQF)</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-2">Cross-Silo Intelligence in Seconds</p>
                <p className="text-gray-300 leading-relaxed">
                  Query across disparate data sources—SQL, NoSQL, streaming, and legacy systems—without moving or restructuring your data. UQF delivers unified insights at unprecedented speed.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Real-Time Big Data Analytics (TSL-ANN)</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-2">Process Streaming Data with AI Precision</p>
                <p className="text-gray-300 leading-relaxed">
                  Our TSL-ANN technology delivers up to 99% accuracy on real-time data streams, enabling instant insights from IoT sensors, financial feeds, and operational metrics.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Network className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Classical-to-Quantum Data Encoding</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-2">Future-Proof Your Data Infrastructure</p>
                <p className="text-gray-300 leading-relaxed">
                  Seamlessly prepare your existing data for quantum processing with our Universal Technique. Start with classical systems today, scale to quantum tomorrow.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Massive-Scale Data Simulation (QSS Simulator)</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-2">Test and Optimize at Petabyte Scale</p>
                <p className="text-gray-300 leading-relaxed">
                  De-risk your big data initiatives by simulating quantum algorithms in the cloud. Validate approaches before committing to production infrastructure.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Big Data Strategy and Hybrid Readiness</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-2">Expert Consulting for Data Transformation</p>
                <p className="text-gray-300 leading-relaxed">
                  Our consultants work with your team to architect scalable big data solutions that deliver immediate ROI and position you for quantum advantage.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bot className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">AI-Enhanced Big Data Automation</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-2">Intelligent Data Pipeline Optimization</p>
                <p className="text-gray-300 leading-relaxed">
                  Automate data ingestion, transformation, and quality assurance with AI-driven workflows that learn and adapt to your business needs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all lg:col-span-2">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Industry-Specific Big Data Optimization</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-2">Tailored Solutions for Finance, Healthcare, and Aerospace</p>
                <p className="text-gray-300 leading-relaxed">
                  Leverage our deep industry expertise to solve domain-specific challenges. From financial risk modeling to healthcare data integration and aerospace logistics optimization, we deliver proven results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/30 rounded-xl p-8 border border-slate-700 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Big Data?</h2>
        <p className="text-xl text-gray-300 mb-6">
          Start with a Discovery Sprint to identify your highest-impact opportunities
        </p>
        <Link
          to="/products/qrat-assessment"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/25"
        >
          <span>Schedule a Discovery Call</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </SolutionPostLayout>
  );
}
