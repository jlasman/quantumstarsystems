import { Linkedin } from 'lucide-react';
import { IMAGES } from '../lib/images';

export default function AboutUs() {
  return (
    <div className="bg-slate-950">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950/50 via-slate-950 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet the Co-Founders Powering Quantum Star Systems
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              At QSS, we compute like the universe to make humanity unstoppable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-start space-x-6 mb-6">
                <img
                  src={IMAGES.jeremyHeadshot}
                  alt="Jeremy Lasman"
                  className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Jeremy Lasman</h2>
                  <p className="text-xl text-indigo-400 mb-4">Co-Founder & CEO</p>
                  <a
                    href="https://www.linkedin.com/in/jeremyalasman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Jeremy is a former SpaceX technologist who brings deep expertise in aerospace systems, large-scale engineering, and mission-critical technology deployment to Quantum Star Systems.
                </p>
                <p>
                  During his time at SpaceX, Jeremy worked on systems that demanded unprecedented reliability and performance—experience that now shapes QSS's approach to enterprise quantum integration. He understands how to bridge cutting-edge research with practical, production-ready solutions.
                </p>
                <p>
                  As CEO, Jeremy leads QSS's strategic vision and client relationships, ensuring every engagement delivers measurable business value while building toward a quantum-powered future.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-start space-x-6 mb-6">
                <img
                  src={IMAGES.marsHeadshot}
                  alt="Mars Lucchetta"
                  className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Mars Lucchetta</h2>
                  <p className="text-xl text-cyan-400 mb-4">Co-Founder & CTO</p>
                  <a
                    href="https://www.linkedin.com/in/mars-lucchetta/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Mars brings 15 years of enterprise software experience and 10 years of quantum computing R&D to his role as CTO of Quantum Star Systems.
                </p>
                <p>
                  His research has pioneered breakthroughs in quantum algorithms, quantum-classical hybrid systems, and the Universal Technique that forms the foundation of QSS's technology platform. Mars has published extensively in quantum computing and machine learning, with work validated on petabyte-scale datasets.
                </p>
                <p>
                  As CTO, Mars leads technology development and ensures QSS solutions deliver proven results today while maintaining a clear path to future quantum capabilities. His unique combination of academic rigor and enterprise pragmatism ensures QSS technology solves real business problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Our Mission</h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                At Quantum Star Systems, we believe the future of computing isn't about waiting for quantum computers to mature—it's about delivering quantum advantages today.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Our mission is to make quantum computing practical and accessible for enterprises now, not years from now. We do this by combining proven classical and AI technologies with quantum-inspired algorithms, creating solutions that deliver immediate ROI while building a seamless path to future quantum hardware.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                We compute like the universe—leveraging the fundamental principles of quantum mechanics to solve problems that classical computing cannot. And we're making humanity unstoppable by putting these capabilities in the hands of forward-thinking organizations today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why We Built QSS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Bridge the Gap</h3>
              <p className="text-gray-300 leading-relaxed">
                The quantum computing industry has focused on hardware development while enterprises struggle to understand how to prepare. We built QSS to bridge this gap with practical solutions that work today.
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Deliver Real Value</h3>
              <p className="text-gray-300 leading-relaxed">
                Too many quantum companies promise future benefits while delivering nothing today. We focus on measurable ROI from day one, using quantum-inspired techniques that solve real business problems.
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Democratize Access</h3>
              <p className="text-gray-300 leading-relaxed">
                Quantum computing shouldn't require a PhD or millions in infrastructure investment. We make quantum advantages accessible to any organization ready to innovate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
