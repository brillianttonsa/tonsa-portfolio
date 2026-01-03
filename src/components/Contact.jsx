import { useState } from 'react';
import {  Send, Terminal, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(""); // success/error message

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Simple validation
    if (!name || !email || !message) {
      setStatus("Please fill all fields.");
      return;
    }

    console.log("Form Submitted:", formData);

    // Success feedback
    setStatus("Message sent successfully!");

    // Reset form
    setFormData({ name: "", email: "", message: "" });

    // Remove success message after 5 seconds
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section className="bg-[#fde047] py-12 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: Text and Info */}
        <div className="flex flex-col justify-between">
          <div>
            <span className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-[0.2em] mb-6 inline-block">
              Connection
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
              Let's build <br />something <span className="underline decoration-slate-900/30">smart.</span>
            </h2>
            <p className="text-slate-800 text-lg leading-relaxed max-w-md mb-12">
              I'm currently open to time roles and high-impact AI projects. 
              If you're looking for a developer who thinks in systems and ships in code, let's talk.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-slate-900 p-3 rounded-full text-[#fde047]">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Email:</h4>
                  <p className="text-slate-800 font-medium">abdullatifmyamis@gmail.com</p>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4">
                <div className="bg-slate-900 p-3 rounded-full text-[#fde047]">
                  <Terminal size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">GitHub:</h4>
                  <a
                    href="https://github.com/brillianttonsa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-800 font-medium hover:cursor-pointer hover:text-[#0a66c2]"
                  >
                    github.com/brillianttonsa
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 mt-4">
                <div className="bg-slate-900 p-3 rounded-full text-[#0a66c2]">
                  <Terminal size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">LinkedIn:</h4>
                  <a
                    href="https://www.linkedin.com/in/abdullatif-mnyamis-19a66a369"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-800 font-medium hover:cursor-pointer hover:text-[#0a66c2]"
                  >
                    linkedin.com/in/abdullatif-mnyamis
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="bg-slate-900 p-3 rounded-full text-[#fde047]">
                  <Terminal size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Phone:</h4>
                  <a
                    href="tel:+255683208698"
                    className="text-slate-800 font-medium hover:cursor-pointer hover:text-[#0a66c2]"
                  >
                    +255 683 208 698
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white/30 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
          <h2 className="text-3xl font-black text-slate-900 mb-10">
            Send a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
              <label className="block text-slate-900 text-xs font-black uppercase tracking-widest mb-2">Name</label>
              <input 
                type="text" 
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none py-3 px-4 rounded-lg transition-all placeholder:text-slate-400"
              />
            </div>

            <div className="relative">
              <label className="block text-slate-900 text-xs font-black uppercase tracking-widest mb-2">Email</label>
              <input 
                type="email" 
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none py-3 px-4 rounded-lg transition-all placeholder:text-slate-400"
              />
            </div>

            <div className="relative">
              <label className="block text-slate-900 text-xs font-black uppercase tracking-widest mb-2">Project Details</label>
              <textarea 
                rows="4"
                placeholder="Tell me about your technical needs..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none py-3 px-4 rounded-lg transition-all resize-none placeholder:text-slate-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-slate-900 text-white py-5 rounded-lg flex items-center justify-center gap-3 font-black uppercase text-xs tracking-[0.2em] hover:bg-black transition-all shadow-2xl group"
            >
              Initialize Chat 
              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;