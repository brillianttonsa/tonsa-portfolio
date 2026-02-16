import { Mail, Terminal } from 'lucide-react';

const ContactInfoItem = ({ icon, label, children }) => (
  <div className="flex items-center gap-4">
    <div className="bg-slate-900 p-3 rounded-full text-[#fde047]">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-slate-900 text-lg">{label}</h4>
      {children}
    </div>
  </div>
);

const ContactInfo = () => (
  <div className="flex flex-col justify-between">
    <div>
      <span className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-[0.2em] mb-6 inline-block">
        Connection
      </span>
      <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
        Let&apos;s build <br />something <span className="underline decoration-slate-900/30">great.</span>
      </h2>
      <p className="text-slate-800 text-lg leading-relaxed max-w-md mb-12">
        I&apos;m open to discussing frontend/backend projects, SaaS development, and opportunities to explore AI integrations. If you value clean code and maintainable solutions, let&apos;s connect.
      </p>
      <div className="space-y-8">
        <ContactInfoItem icon={<Mail size={20} />} label="Email:">
          <p className="text-slate-800 font-medium">abdullatifmyamis@gmail.com</p>
        </ContactInfoItem>
        <ContactInfoItem icon={<Terminal size={20} />} label="GitHub:">
          <a
            href="https://github.com/brillianttonsa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-800 font-medium hover:text-[#0a66c2]"
          >
            github.com/brillianttonsa
          </a>
        </ContactInfoItem>
        <ContactInfoItem icon={<Terminal size={20} />} label="LinkedIn:">
          <a
            href="https://www.linkedin.com/in/abdullatif-mnyamis-19a66a369"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-800 font-medium hover:text-[#0a66c2]"
          >
            linkedin.com/in/abdullatif-mnyamis
          </a>
        </ContactInfoItem>
        <ContactInfoItem icon={<Terminal size={20} />} label="Phone:">
          <a href="tel:+255683208698" className="text-slate-800 font-medium hover:text-[#0a66c2]">
            +255 683 208 698
          </a>
        </ContactInfoItem>
      </div>
    </div>
  </div>
);

export default ContactInfo;
