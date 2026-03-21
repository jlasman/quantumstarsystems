import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface TechPageTemplateProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  overview: string;
  sections: {
    title: string;
    content: string;
  }[];
}

export default function TechPageTemplate({ title, subtitle, icon: Icon, overview, sections }: TechPageTemplateProps) {
  return (
    <div className="bg-slate-950">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950/50 via-slate-950 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
                <p className="text-xl text-indigo-400 mt-2">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{overview}</p>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-slate-900/50 rounded-xl p-8 border border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Learn More?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a consultation to see how this technology can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-indigo-500/25"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products/qrat-assessment"
              className="inline-flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              <span>Request Free Assessment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
