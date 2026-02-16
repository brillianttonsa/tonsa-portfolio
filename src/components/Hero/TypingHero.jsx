import { useState, useEffect, useMemo } from 'react';

const roles = [
  'Frontend Engineer',
  'Backend Engineer',
  'Full-Stack Developer',
  'SaaS Builder',
  'AI Explorer',
  'Problem Solver',
];

const TypingHero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );
      setTypingSpeed(isDeleting ? 50 : 120);
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="min-h-[160px] md:min-h-[220px] flex flex-col justify-start">
      <h1 className="text-white text-5xl md:text-8xl font-black leading-tight tracking-tighter">
        I am a <br />
        <span className="text-[#fde047] relative">
          {text}
          <span className="inline-block w-2 md:w-3 h-10 md:h-16 bg-white ml-2 animate-pulse align-middle" />
        </span>
      </h1>
    </div>
  );
};

export default TypingHero;
