import { LucideIcon } from 'lucide-react';

interface UseCaseCardProps {
  industry: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function UseCaseCard({ industry, title, description, icon: Icon }: UseCaseCardProps) {
  return (
    <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:translate-y-[-4px] hover:shadow-xl hover:shadow-cyan-500/10">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {industry}
            </span>
          </div>

          <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {title}
          </h4>

          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
