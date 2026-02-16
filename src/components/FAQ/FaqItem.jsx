import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqItem = ({ question, answer, isActive, onToggle }) => (
  <div
    className={`transition-all duration-300 border-l-4 px-6 py-2 ${isActive ? 'border-[#fde047] bg-slate-50' : 'border-transparent'}`}
  >
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex justify-between items-center text-left py-4 group"
    >
      <span className={`text-lg font-bold transition-colors ${isActive ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}`}>
        {question}
      </span>
      {isActive ? (
        <ChevronUp className="w-5 h-5 text-slate-900" />
      ) : (
        <ChevronDown className="w-5 h-5 text-slate-400" />
      )}
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
    >
      <p className="text-slate-600 leading-relaxed italic">&quot;{answer}&quot;</p>
    </div>
  </div>
);

export default FaqItem;
