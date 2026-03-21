import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { IMAGES } from '../lib/images';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 left-4 bg-white/90 blur-2xl rounded-full scale-[.5]"></div>
              <div className="absolute inset-0 left-4 bg-cyan-300/70 blur-xl rounded-full scale-[.75]"></div>
              <img
                src={IMAGES.logo}
                alt="Quantum Star Systems"
                className="w-10 h-10 object-cover relative z-10 rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <span className="text-xl font-semibold">Quantum Star Systems</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>

            <div className="relative group">
              <Link to="/solutions" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2">
                <Link to="/solutions/big-data" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                  Big Data
                </Link>
                <Link to="/solutions/ai-ml" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                  AI/ML
                </Link>
                <Link to="/solutions/quantum-integration" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                  Quantum Integration
                </Link>
              </div>
            </div>

            <div className="relative group">
              <Link to="/tech" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                <span>Technology</span>
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2">
                <Link to="/tech/qss-simulator" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                  QSS Simulator
                </Link>
                <Link to="/tech/universal-technique" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                  Universal Technique
                </Link>
                <Link to="/tech/uqf" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                  UQF
                </Link>
                <Link to="/tech/tsl-ann" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                  TSL-ANN
                </Link>
                <Link to="/tech/quantum-var" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                  Quantum VaR
                </Link>
              </div>
            </div>

            <div className="relative group">
              <Link to="/products" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                <span>Products & Services</span>
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2">
                <Link to="/products/qrat-assessment" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                  QRAT Assessment
                </Link>
                <Link to="/products/enterprise-solutions" className="block px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
                  Enterprise Solutions
                </Link>
              </div>
            </div>

            <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>

            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About Us
            </Link>

            <Link to="/contact" className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-6 py-2 rounded-lg font-medium transition-all shadow-lg shadow-indigo-500/25">
              Contact Us
            </Link>
          </div>

          <button
            className="lg:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            <Link to="/" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-300 hover:bg-slate-800 rounded-lg transition-colors">
              Home
            </Link>

            <div>
              <button
                onClick={() => toggleDropdown('solutions')}
                className="w-full flex items-center justify-between px-4 py-2 text-gray-300 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'solutions' && (
                <div className="ml-4 mt-2 space-y-1">
                  <Link to="/solutions" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-400 hover:bg-slate-800 rounded-lg transition-colors">
                    Overview
                  </Link>
                  <Link to="/solutions/big-data" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-400 hover:bg-slate-800 rounded-lg transition-colors">
                    Big Data
                  </Link>
                  <Link to="/solutions/ai-ml" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-400 hover:bg-slate-800 rounded-lg transition-colors">
                    AI/ML
                  </Link>
                  <Link to="/solutions/quantum-integration" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-400 hover:bg-slate-800 rounded-lg transition-colors">
                    Quantum Integration
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown('tech')}
                className="w-full flex items-center justify-between px-4 py-2 text-gray-300 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <span>Technology</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'tech' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'tech' && (
                <div className="ml-4 mt-2 space-y-1">
                  <Link to="/tech" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-400 hover:bg-slate-800 rounded-lg transition-colors">
                    Overview
                  </Link>
                  <Link to="/tech/qss-simulator" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-400 hover:bg-slate-800 rounded-lg transition-colors">
                    QSS Simulator
                  </Link>
                  <Link to="/tech/universal-technique" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-400 hover:bg-slate-800 rounded-lg transition-colors">
                    Universal Technique
                  </Link>
                  <Link to="/tech/uqf" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-400 hover:bg-slate-800 rounded-lg transition-colors">
                    UQF
                  </Link>
                  <Link to="/tech/tsl-ann" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-400 hover:bg-slate-800 rounded-lg transition-colors">
                    TSL-ANN
                  </Link>
                  <Link to="/tech/quantum-var" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-400 hover:bg-slate-800 rounded-lg transition-colors">
                    Quantum VaR
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown('products')}
                className="w-full flex items-center justify-between px-4 py-2 text-gray-300 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <span>Products & Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'products' && (
                <div className="ml-4 mt-2 space-y-1">
                  <Link to="/products" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-400 hover:bg-slate-800 rounded-lg transition-colors">
                    Overview
                  </Link>
                  <Link to="/products/qrat-assessment" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-400 hover:bg-slate-800 rounded-lg transition-colors">
                    QRAT Assessment
                  </Link>
                  <Link to="/products/enterprise-solutions" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-400 hover:bg-slate-800 rounded-lg transition-colors">
                    Enterprise Solutions
                  </Link>
                </div>
              )}
            </div>

            <Link to="/blog" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-300 hover:bg-slate-800 rounded-lg transition-colors">
              Blog
            </Link>

            <Link to="/about" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-300 hover:bg-slate-800 rounded-lg transition-colors">
              About Us
            </Link>

            <Link to="/contact" onClick={closeMobileMenu} className="block mx-4 mt-4 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-6 py-2 rounded-lg font-medium transition-all text-center">
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
