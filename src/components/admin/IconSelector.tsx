import { useState, useMemo } from 'react';
import * as LucideIcons from 'lucide-react';
import { Search, X } from 'lucide-react';

interface IconSelectorProps {
  value: string;
  onChange: (iconName: string) => void;
  label?: string;
}

const COMMON_ICONS = [
  'Cpu', 'Zap', 'Database', 'Network', 'TrendingUp', 'Activity', 'Rocket',
  'Heart', 'Settings', 'LineChart', 'BarChart', 'PieChart', 'CheckCircle',
  'Check', 'Star', 'Cloud', 'Lock', 'Unlock', 'Shield', 'Globe',
  'Link', 'GitBranch', 'Code', 'Terminal', 'Server', 'HardDrive',
  'Brain', 'Lightbulb', 'Target', 'Award', 'Briefcase', 'Package',
  'Layers', 'Box', 'Boxes', 'Component', 'Blocks', 'Sparkles'
];

export default function IconSelector({ value, onChange, label = 'Icon' }: IconSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIcons = useMemo(() => {
    if (!searchQuery) return COMMON_ICONS;
    return COMMON_ICONS.filter(icon =>
      icon.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSelect = (iconName: string) => {
    onChange(iconName);
    setIsOpen(false);
    setSearchQuery('');
  };

  const SelectedIcon = value && (LucideIcons as any)[value]
    ? (LucideIcons as any)[value]
    : LucideIcons.HelpCircle;

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 flex items-center justify-between hover:bg-slate-750 transition-colors"
      >
        <div className="flex items-center space-x-2">
          <SelectedIcon className="w-5 h-5 text-cyan-400" />
          <span>{value || 'Select an icon'}</span>
        </div>
        <LucideIcons.ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-50 mt-2 w-full bg-slate-800 border border-slate-700 rounded-lg shadow-xl max-h-96 overflow-hidden">
            <div className="p-3 border-b border-slate-700">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search icons..."
                  className="w-full pl-9 pr-8 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="overflow-y-auto max-h-80 p-2">
              {filteredIcons.length === 0 ? (
                <div className="text-center py-8 text-gray-400 text-sm">
                  No icons found
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-2">
                  {filteredIcons.map((iconName) => {
                    const IconComponent = (LucideIcons as any)[iconName];
                    if (!IconComponent) return null;

                    const isSelected = value === iconName;

                    return (
                      <button
                        key={iconName}
                        type="button"
                        onClick={() => handleSelect(iconName)}
                        className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all ${
                          isSelected
                            ? 'bg-cyan-600 text-white'
                            : 'bg-slate-900 text-gray-400 hover:bg-slate-700 hover:text-white'
                        }`}
                        title={iconName}
                      >
                        <IconComponent className="w-6 h-6 mb-1" />
                        <span className="text-xs truncate w-full text-center">
                          {iconName}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
