import { CheckCircle, Circle } from 'lucide-react';

interface TimelineItem {
  title: string;
  description: string;
  duration?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  orientation?: 'vertical' | 'horizontal';
}

export default function Timeline({ items, orientation = 'vertical' }: TimelineProps) {
  if (orientation === 'horizontal') {
    return (
      <div className="relative">
        <div className="flex items-start justify-between space-x-4 overflow-x-auto pb-4">
          {items.map((item, index) => (
            <div key={index} className="flex-1 min-w-[200px]">
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center z-10">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  {index < items.length - 1 && (
                    <div className="flex-1 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 ml-2" />
                  )}
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <h4 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  {item.duration && (
                    <p className="text-xs text-cyan-400 mb-2 font-semibold">
                      {item.duration}
                    </p>
                  )}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-700" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative pl-14">
            <div className="absolute left-0 top-0 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center border-4 border-slate-900">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-bold text-white">
                  {item.title}
                </h4>
                {item.duration && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {item.duration}
                  </span>
                )}
              </div>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
