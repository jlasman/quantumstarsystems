import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ClipboardCheck, TrendingUp } from 'lucide-react';

export default function QRATInteractive() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-slate-950 to-blue-950/30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/products/qrat-assessment"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to QRAT Overview</span>
          </Link>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full mb-4">
              <ClipboardCheck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              QRAT Web Assessment Tool
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete this comprehensive assessment to receive your Quantum Readiness Score and personalized roadmap
            </p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-2 mb-8 shadow-2xl">
            {loading && (
              <div className="flex items-center justify-center py-32 bg-slate-800/50 rounded-xl">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-400">Loading assessment tool...</p>
                </div>
              </div>
            )}
            <iframe
              src="https://qrat.quantumintelligence.ai/"
              className={`w-full rounded-xl border-0 ${loading ? 'hidden' : 'block'}`}
              style={{ height: '80vh', minHeight: '600px' }}
              title="QRAT Assessment Tool"
              allow="clipboard-write"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Comprehensive Analysis</h3>
              <p className="text-gray-300 text-sm">
                Answer detailed questions about your organization's technology stack, data capabilities, and strategic objectives
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Instant Scoring</h3>
              <p className="text-gray-300 text-sm">
                Receive your Quantum Readiness Score immediately upon completion with detailed breakdowns by category
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <ArrowLeft className="w-6 h-6 text-cyan-400 rotate-180" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Personalized Roadmap</h3>
              <p className="text-gray-300 text-sm">
                Get tailored recommendations and next steps based on your unique assessment results and business needs
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-950/50 to-blue-950/50 border border-cyan-500/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need Help or Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              Our team is ready to discuss your assessment results and help you build your quantum roadmap
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-cyan-500/25"
            >
              <span>Schedule a Discovery Call</span>
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
