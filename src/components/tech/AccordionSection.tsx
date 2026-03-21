import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function AccordionSection({ title, children, defaultOpen = false }: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-700 rounded-xl overflow-hidden bg-slate-900/50 backdrop-blur-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-slate-800/50 to-slate-900/50 hover:from-slate-800 hover:to-slate-900 transition-all duration-300 group"
      >
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 border-t border-slate-700/50">
          {children}
        </div>
      </div>
    </div>
  );
}
