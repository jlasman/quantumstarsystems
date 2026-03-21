import { useEffect, useState } from 'react';

interface ProgressBarProps {
  label: string;
  value: number;
  maxValue?: number;
  color?: 'cyan' | 'blue' | 'green' | 'purple';
  showPercentage?: boolean;
  animate?: boolean;
}

export default function ProgressBar({
  label,
  value,
  maxValue = 100,
  color = 'cyan',
  showPercentage = true,
  animate = true,
}: ProgressBarProps) {
  const [currentValue, setCurrentValue] = useState(animate ? 0 : value);
  const percentage = (currentValue / maxValue) * 100;

  useEffect(() => {
    if (!animate) return;

    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCurrentValue(prev => {
        const newValue = prev + increment;
        if (step >= steps) {
          clearInterval(timer);
          return value;
        }
        return newValue;
      });
    }, duration / steps);

    return () => clearInterval(timer);
  }, [animate, value]);

  const colorClasses = {
    cyan: 'bg-gradient-to-r from-cyan-500 to-blue-500',
    blue: 'bg-gradient-to-r from-blue-500 to-indigo-500',
    green: 'bg-gradient-to-r from-green-500 to-emerald-500',
    purple: 'bg-gradient-to-r from-purple-500 to-pink-500',
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-300">{label}</span>
        {showPercentage && (
          <span className="text-sm font-bold text-white">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
      <div className="h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
        <div
          className={`h-full ${colorClasses[color]} transition-all duration-300 ease-out`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent to-white/20" />
        </div>
      </div>
    </div>
  );
}
