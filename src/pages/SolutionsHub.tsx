import { Link } from 'react-router-dom';
import { Database, Brain, Atom } from 'lucide-react';

const solutions = [
  {
    id: 'big-data',
    title: 'Big Data',
    subtitle: 'Master Big Data Today, Unlock Quantum Tomorrow',
    description: 'Turn fragmented, large-scale data into fast, secure, ROI-driven intelligence—delivering measurable value now while preparing for hybrid quantum acceleration.',
    icon: Database,
    path: '/solutions/big-data',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'ai-ml',
    title: 'AI/ML',
    subtitle: 'Empower Your Enterprise with Cutting-Edge AI',
    description: 'Practical AI and machine learning that turns complex challenges into clear opportunities with tailored, consultative support.',
    icon: Brain,
    path: '/solutions/ai-ml',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    id: 'quantum-integration',
    title: 'Quantum Integration',
    subtitle: 'Seamless Integration for Unstoppable Progress',
    description: 'Connect today\'s systems with emerging quantum capabilities to solve tough business problems with vendor-neutral software.',
    icon: Atom,
    path: '/solutions/quantum-integration',
    gradient: 'from-blue-500 to-indigo-500',
  },
];

export default function SolutionsHub() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text pb-2">
            Unlock Quantum Power
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions that bridge classical computing and quantum capabilities, delivering measurable results today while preparing your organization for tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <Link
                key={solution.id}
                to={solution.path}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {solution.title}
                </h3>

                <p className="text-cyan-400 text-sm font-semibold mb-4">
                  {solution.subtitle}
                </p>

                <p className="text-gray-400 leading-relaxed">
                  {solution.description}
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
            Ready to transform your business with our solutions?
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
