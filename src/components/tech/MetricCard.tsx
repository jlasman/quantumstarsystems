import { LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface MetricCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  format?: 'percentage' | 'multiplier' | 'currency' | 'time' | 'custom';
  animate?: boolean;
}

export default function MetricCard({ label, value, icon: Icon, format = 'custom', animate = true }: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(animate ? '0' : value);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!animate) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            animateValue();
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById(`metric-${label.replace(/\s+/g, '-')}`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [animate, isVisible, label]);

  const animateValue = () => {
    const numericMatch = value.match(/(\d+\.?\d*)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetValue = parseFloat(numericMatch[1]);
    const duration = 1500;
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(value);
      } else {
        const formattedValue = format === 'percentage'
          ? `${Math.round(current)}%`
          : format === 'multiplier'
          ? `${Math.round(current)}x`
          : format === 'currency'
          ? `$${Math.round(current)}M`
          : value.replace(numericMatch[1], Math.round(current).toString());

        setDisplayValue(formattedValue);
      }
    }, duration / steps);
  };

  return (
    <div
      id={`metric-${label.replace(/\s+/g, '-')}`}
      className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
          {displayValue}
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          {label}
        </p>
      </div>

      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all duration-300" />
    </div>
  );
}
