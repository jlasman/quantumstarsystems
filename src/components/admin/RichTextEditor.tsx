import { useState, useRef, useEffect } from 'react';
import { Bold, Italic, List, Quote, ChevronDown } from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

type TextStyle = 'normal' | 'heading' | 'subheading';

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [showStyleMenu, setShowStyleMenu] = useState(false);
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (showStyleMenu && !(e.target as Element).closest('.style-menu-container')) {
        setShowStyleMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showStyleMenu]);

  const getSelection = () => {
    const textarea = textareaRef.current;
    if (!textarea) return null;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);

    return { start, end, selectedText, textarea };
  };

  const insertText = (before: string, after: string = '') => {
    const selection = getSelection();
    if (!selection) return;

    const { start, end, selectedText, textarea } = selection;
    const newText = before + selectedText + after;
    const newValue = textarea.value.substring(0, start) + newText + textarea.value.substring(end);

    onChange(newValue);

    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + before.length + selectedText.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const applyStyle = (style: TextStyle) => {
    const selection = getSelection();
    if (!selection) return;

    const { start, end, selectedText, textarea } = selection;
    if (!selectedText.trim()) return;

    let styledText = '';

    switch (style) {
      case 'heading':
        styledText = `<h1>${selectedText}</h1>`;
        break;
      case 'subheading':
        styledText = `<h2>${selectedText}</h2>`;
        break;
      case 'normal':
        styledText = `<p>${selectedText}</p>`;
        break;
    }

    const newValue = textarea.value.substring(0, start) + styledText + textarea.value.substring(end);
    onChange(newValue);

    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + styledText.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);

    setShowStyleMenu(false);
  };

  const toggleBold = () => {
    insertText('<strong>', '</strong>');
    setActiveFormats(prev => ({ ...prev, bold: !prev.bold }));
  };

  const toggleItalic = () => {
    insertText('<em>', '</em>');
    setActiveFormats(prev => ({ ...prev, italic: !prev.italic }));
  };

  const toggleList = () => {
    const selection = getSelection();
    if (!selection) return;

    const { start, end, selectedText, textarea } = selection;
    if (!selectedText.trim()) return;

    const lines = selectedText.split('\n').filter(line => line.trim());
    const listItems = lines.map(line => `  <li>${line.trim()}</li>`).join('\n');
    const listHTML = `<ul>\n${listItems}\n</ul>`;

    const newValue = textarea.value.substring(0, start) + listHTML + textarea.value.substring(end);
    onChange(newValue);

    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + listHTML.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const toggleQuote = () => {
    insertText('<blockquote>', '</blockquote>');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey || e.metaKey) {
      if (e.key === 'b') {
        e.preventDefault();
        toggleBold();
      } else if (e.key === 'i') {
        e.preventDefault();
        toggleItalic();
      }
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 p-2 bg-slate-800 border border-slate-700 rounded-lg">
        <div className="relative style-menu-container">
          <button
            type="button"
            onClick={() => setShowStyleMenu(!showStyleMenu)}
            className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 hover:bg-slate-700 rounded text-sm text-gray-300 transition-colors"
          >
            <span>Style</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {showStyleMenu && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-slate-900 border border-slate-700 rounded-lg shadow-xl z-10 overflow-hidden">
              <button
                type="button"
                onClick={() => applyStyle('normal')}
                className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-slate-800 transition-colors"
              >
                Normal
              </button>
              <button
                type="button"
                onClick={() => applyStyle('heading')}
                className="w-full px-4 py-2 text-left text-lg font-bold text-gray-300 hover:bg-slate-800 transition-colors"
              >
                Heading
              </button>
              <button
                type="button"
                onClick={() => applyStyle('subheading')}
                className="w-full px-4 py-2 text-left text-base font-semibold text-gray-300 hover:bg-slate-800 transition-colors"
              >
                Subheading
              </button>
            </div>
          )}
        </div>

        <div className="h-6 w-px bg-slate-700"></div>

        <button
          type="button"
          onClick={toggleBold}
          className={`p-1.5 rounded transition-colors ${
            activeFormats.bold
              ? 'bg-cyan-600 text-white'
              : 'text-gray-300 hover:bg-slate-700'
          }`}
          title="Bold (Ctrl+B)"
        >
          <Bold className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={toggleItalic}
          className={`p-1.5 rounded transition-colors ${
            activeFormats.italic
              ? 'bg-cyan-600 text-white'
              : 'text-gray-300 hover:bg-slate-700'
          }`}
          title="Italic (Ctrl+I)"
        >
          <Italic className="w-4 h-4" />
        </button>

        <div className="h-6 w-px bg-slate-700"></div>

        <button
          type="button"
          onClick={toggleList}
          className="p-1.5 text-gray-300 hover:bg-slate-700 rounded transition-colors"
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={toggleQuote}
          className="p-1.5 text-gray-300 hover:bg-slate-700 rounded transition-colors"
          title="Quote"
        >
          <Quote className="w-4 h-4" />
        </button>
      </div>

      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={15}
        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 font-mono text-sm resize-y"
        placeholder={placeholder}
      />

      <div className="text-xs text-gray-500">
        Tip: Select text and use the toolbar to format. Supports Ctrl+B (bold) and Ctrl+I (italic).
      </div>
    </div>
  );
}
