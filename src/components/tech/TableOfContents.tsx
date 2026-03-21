import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-24 right-4 z-40 w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
        aria-label="Toggle table of contents"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-cyan-400" />
        ) : (
          <Menu className="w-5 h-5 text-cyan-400" />
        )}
      </button>

      <aside
        className={`fixed lg:sticky top-32 right-4 lg:right-0 z-30 w-64 transition-all duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-[280px] lg:translate-x-0'
        }`}
      >
        <nav className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-4 max-h-[calc(100vh-10rem)] overflow-y-auto">
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            On This Page
          </h4>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-200 ${
                    activeId === item.id
                      ? 'bg-cyan-500/20 text-cyan-400 font-semibold border-l-2 border-cyan-400'
                      : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
