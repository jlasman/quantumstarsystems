import { LucideIcon, Check } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface FeatureListProps {
  features: Feature[];
  layout?: 'grid' | 'list';
}

export default function FeatureList({ features, layout = 'list' }: FeatureListProps) {
  if (layout === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                <Check className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-base font-bold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-start space-x-4 group"
        >
          <div className="flex-shrink-0 w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center border border-cyan-500/30 group-hover:bg-cyan-500/30 transition-colors">
            <Check className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-base font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
              {feature.title}
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
