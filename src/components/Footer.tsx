import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
import { IMAGES } from '../lib/images';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8 pb-8 border-b border-slate-800">
          <div className="flex items-center justify-center space-x-3 mb-4">
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
          </div>
          <div className="flex items-center justify-center space-x-2 sm:space-x-3">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
            <p className="text-xs sm:text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 font-light tracking-wide italic pb-1 whitespace-nowrap">
              Computing like the universe.
            </p>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-8 lg:gap-x-24 mb-8 max-w-6xl mx-auto">

          <div>
            <h3 className="text-white font-semibold mb-4">
              <Link to="/solutions" className="hover:text-cyan-400 transition-colors">
                Solutions
              </Link>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/big-data" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Big Data
                </Link>
              </li>
              <li>
                <Link to="/solutions/ai-ml" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI/ML
                </Link>
              </li>
              <li>
                <Link to="/solutions/quantum-integration" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Quantum Integration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              <Link to="/tech" className="hover:text-cyan-400 transition-colors">
                Technology
              </Link>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tech/qss-simulator" className="text-gray-400 hover:text-white transition-colors text-sm">
                  QSS Simulator
                </Link>
              </li>
              <li>
                <Link to="/tech/universal-technique" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Universal Technique
                </Link>
              </li>
              <li>
                <Link to="/tech/uqf" className="text-gray-400 hover:text-white transition-colors text-sm">
                  UQF
                </Link>
              </li>
              <li>
                <Link to="/tech/tsl-ann" className="text-gray-400 hover:text-white transition-colors text-sm">
                  TSL-ANN
                </Link>
              </li>
              <li>
                <Link to="/tech/quantum-var" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Quantum VaR
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              <Link to="/products" className="hover:text-cyan-400 transition-colors">
                Products
              </Link>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/qrat-assessment" className="text-gray-400 hover:text-white transition-colors text-sm">
                  QRAT Assessment
                </Link>
              </li>
              <li>
                <Link to="/products/enterprise-solutions" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Enterprise Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <a
                href="mailto:contact@quantumintelligence.ai"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Quantum Star Systems, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
