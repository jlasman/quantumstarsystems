import { Link } from 'react-router-dom';
import { Cpu, Zap, Database, Network, TrendingUp } from 'lucide-react';

const technologies = [
  {
    id: 'qss-simulator',
    title: 'QSS Simulator',
    subtitle: 'Cloud-Scale Quantum Simulation',
    description: 'Test and validate quantum algorithms at massive scale without requiring access to physical quantum hardware.',
    icon: Cpu,
    path: '/tech/qss-simulator',
  },
  {
    id: 'tsl-ann',
    title: 'TSL-ANN',
    subtitle: 'Real-Time Predictions with Up to 99% Accuracy',
    description: 'Proprietary AI technology delivering highly accurate real-time predictions from streaming data.',
    icon: Zap,
    path: '/tech/tsl-ann',
  },
  {
    id: 'uqf',
    title: 'Unified Query Framework',
    subtitle: 'Cross-Silo Intelligence in Seconds',
    description: 'Query across disparate data sources without moving or restructuring data.',
    icon: Database,
    path: '/tech/uqf',
  },
  {
    id: 'universal-technique',
    title: 'Universal Technique',
    subtitle: 'Quantum-Classical Integration',
    description: 'Seamlessly integrate quantum and classical computing resources for optimal performance.',
    icon: Network,
    path: '/tech/universal-technique',
  },
  {
    id: 'quantum-var',
    title: 'Quantum VaR',
    subtitle: 'Advanced Risk Analytics',
    description: 'Quantum-enhanced Value at Risk calculations for financial risk management.',
    icon: TrendingUp,
    path: '/tech/quantum-var',
  },
];

export default function TechnologyHub() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text pb-2">
            QSS Technology Hub
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our suite of quantum-inspired technologies designed to solve today's most complex computational challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech) => {
            const IconComponent = tech.icon;
            return (
              <Link
                key={tech.id}
                to={tech.path}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {tech.title}
                </h3>

                <p className="text-cyan-400 text-sm font-semibold mb-4">
                  {tech.subtitle}
                </p>

                <p className="text-gray-400 leading-relaxed">
                  {tech.description}
                </p>

                <div className="mt-6 flex items-center text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Ready to integrate these technologies into your business?
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
