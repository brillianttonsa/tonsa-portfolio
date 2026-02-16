import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

 const faqData = [
    {
      question: "What's your approach to frontend development?",
      answer: "I build component-based UIs with React, focusing on reusability, accessibility, and performance. I use Tailwind CSS for styling consistency and prioritize responsive design. Every component is testable and maintainable."
    },
    {
      question: "How do you structure backend APIs?",
      answer: "I design RESTful APIs using Node.js and Express, with clear separation of concerns. I follow best practices for error handling, authentication, and database optimization. I've improved query performance in SQL databases using indexing."
    },
    {
      question: "Do you write tests?",
      answer: "Absolutely. I write unit tests and integration tests to ensure code reliability. Testing is part of my development workflow, not an afterthought. Well-tested code is maintainable code."
    },
    {
      question: "What about CI/CD and deployment?",
      answer: "I understand the basics of continuous integration and deployment pipelines. I can work with GitHub Actions, deploy to cloud platforms, and ensure automated testing runs on every commit."
    },
    {
      question: "How are you exploring AI?",
      answer: "I'm actively learning AI/ML concepts and exploring how to integrate AI-powered features into web applications. I work with Python fundamentals and study how to leverage AI responsibly in modern systems."
    }];
  return (
    <section id="faq" className="bg-white py-24 px-6 font-sans scroll-mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Content and Accordion */}
        <div>
          <span className="bg-[#fde047] text-slate-900 text-xs font-bold px-3 py-1 rounded-sm uppercase mb-4 inline-block tracking-widest">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
            Technical <span className="text-[#facc15]">Q&A</span>
          </h2>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`transition-all duration-300 border-l-4 px-6 py-2 ${activeIndex === index ? 'border-[#fde047] bg-slate-50' : 'border-transparent'}`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex justify-between items-center text-left py-4 group"
                >
                  <span className={`text-lg font-bold transition-colors ${activeIndex === index ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}`}>
                    {item.question}
                  </span>
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-900" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600 leading-relaxed italic">
                    "{item.answer}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Visual Representation */}
        <svg viewBox="0 0 200 200" className="w-full h-auto">
                <circle cx="100" cy="80" r="50" fill="#fde047" />
                <path d="M75 120 Q100 150 125 120" stroke="#fde047" strokeWidth="20" fill="none" />
                <rect x="85" y="145" width="30" height="15" rx="5" fill="#1e293b" />
                <path d="M85 165 Q100 175 115 165" stroke="#1e293b" strokeWidth="10" fill="none" />
                <text x="100" y="95" fontSize="40" textAnchor="middle" fill="white" fontWeight="bold">?</text>
                {/* Rays */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                    <line 
                        key={deg}
                        x1="100" y1="80" 
                        x2={100 + 70 * Math.cos(deg * Math.PI / 180)} 
                        y2={80 + 70 * Math.sin(deg * Math.PI / 180)} 
                        stroke="#fde047" strokeWidth="6" strokeDasharray="10 20"
                    />
                ))}
            </svg>
      </div>
    </section>
  );
};

export default FAQ;