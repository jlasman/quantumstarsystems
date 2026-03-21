import { Link } from 'react-router-dom';
import { ArrowLeft, LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface SolutionPostLayoutProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  heroContent: ReactNode;
  children: ReactNode;
}

export default function SolutionPostLayout({ title, subtitle, icon: Icon, heroContent, children }: SolutionPostLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/solutions"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Solutions
        </Link>

        <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-b border-slate-700 p-8 sm:p-12">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-6">
              <Icon className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              {title}
            </h1>

            <p className="text-xl sm:text-2xl text-cyan-400 font-semibold mb-6">
              {subtitle}
            </p>

            <div className="text-gray-300 text-lg leading-relaxed">
              {heroContent}
            </div>
          </div>

          <div className="p-8 sm:p-12">
            {children}
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link
            to="/solutions"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Explore More Solutions →
          </Link>
        </div>
      </div>
    </div>
  );
}
