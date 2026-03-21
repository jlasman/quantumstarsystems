import { Check, X } from 'lucide-react';

interface Comparison {
  traditional_label: string;
  traditional_value: string;
  quantum_label: string;
  quantum_value: string;
}

interface ComparisonTableProps {
  comparisons: Comparison[];
  title?: string;
}

export default function ComparisonTable({ comparisons, title = "Traditional vs Quantum Approach" }: ComparisonTableProps) {
  return (
    <div className="bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700">
      {title && (
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 border-b border-slate-700">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Metric
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-red-400 uppercase tracking-wider">
                Traditional Method
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                Quantum Solution
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {comparisons.map((comparison, index) => {
              const isImprovement = comparison.quantum_value.includes('faster') ||
                                   comparison.quantum_value.includes('better') ||
                                   comparison.quantum_value.includes('more accurate');

              return (
                <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-white font-medium">
                    {comparison.traditional_label}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <X className="w-4 h-4 text-red-400" />
                      </div>
                      <span className="text-gray-300">{comparison.traditional_value}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-cyan-400" />
                      </div>
                      <span className="text-white font-semibold">{comparison.quantum_value}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
