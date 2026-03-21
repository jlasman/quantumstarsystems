import { Link } from 'react-router-dom';
import { Target, Building2 } from 'lucide-react';

const products = [
  {
    id: 'qrat-assessment',
    title: 'QRAT Assessment',
    subtitle: 'Your Roadmap to Quantum Advantage',
    description: 'Start with a focused Discovery Sprint, then scale to a full two-week diagnostic. We identify your highest-impact quantum opportunities, evaluate data readiness, and deliver a strategic roadmap with quantified ROI projections.',
    icon: Target,
    path: '/products/qrat-assessment',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'enterprise-solutions',
    title: 'Enterprise Solutions',
    subtitle: 'Turnkey Systems for Mission-Critical Operations',
    description: 'Production-ready quantum-classical hybrid solutions designed for finance, healthcare, and aerospace, delivering immediate ROI while future-proofing your infrastructure.',
    icon: Building2,
    path: '/products/enterprise-solutions',
    gradient: 'from-blue-500 to-cyan-500',
  },
];

export default function ProductsHub() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text pb-2">
            Products & Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional services and enterprise solutions that accelerate your quantum journey and deliver measurable business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <Link
                key={product.id}
                to={product.path}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-teal-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20"
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-teal-400 transition-colors">
                  {product.title}
                </h3>

                <p className="text-teal-400 text-sm font-semibold mb-4">
                  {product.subtitle}
                </p>

                <p className="text-gray-400 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-6 flex items-center text-teal-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
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
            Ready to explore how our products can transform your business?
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/50"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
