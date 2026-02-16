import { useState } from 'react';
import FaqItem from './FaqItem';
import FaqIllustration from './FaqIllustration';

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
    answer: "I'm actively learning AI/ML concepts, AI agents, and LLM engineering. I explore how to integrate AI-powered features into web applications and work with Python fundamentals for intelligent systems."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="faq" className="bg-white py-24 px-6 font-sans scroll-mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="bg-[#fde047] text-slate-900 text-xs font-bold px-3 py-1 rounded-sm uppercase mb-4 inline-block tracking-widest">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
            Technical <span className="text-[#facc15]">Q&A</span>
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isActive={activeIndex === index}
                onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
        <FaqIllustration />
      </div>
    </section>
  );
};

export default FAQ;
