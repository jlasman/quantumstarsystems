import { Link } from 'react-router-dom';
import { ArrowLeft, LucideIcon } from 'lucide-react';

interface Section {
  title: string;
  content: string;
}

interface TechPostLayoutProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  overview: string;
  sections: Section[];
}

export default function TechPostLayout({ title, subtitle, icon: Icon, overview, sections }: TechPostLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/tech"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Technology Hub
        </Link>

        <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-b border-slate-700 p-8 sm:p-12">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-6">
              <Icon className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              {title}
            </h1>

            <p className="text-xl sm:text-2xl text-cyan-400 font-semibold">
              {subtitle}
            </p>
          </div>

          <div className="p-8 sm:p-12 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-slate-700">
                Overview
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {overview}
              </p>
            </section>

            {sections.map((section, index) => (
              <section key={index}>
                <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-slate-700">
                  {section.title}
                </h2>
                <div className="prose prose-invert max-w-none">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-300 leading-relaxed mb-4 last:mb-0">
                      {paragraph.split('\n').map((line, lIndex) => (
                        <span key={lIndex}>
                          {line}
                          {lIndex < paragraph.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <div className="pt-8 border-t border-slate-700">
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                Contact Us to Learn More
              </Link>
            </div>
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link
            to="/tech"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Explore More Technologies →
          </Link>
        </div>
      </div>
    </div>
  );
}
