import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setStatus('Please fill all fields.');
      return;
    }
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="bg-white/30 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
      <h2 className="text-3xl font-black text-slate-900 mb-10">Send a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-slate-900 text-xs font-black uppercase tracking-widest mb-2">Name</label>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white/50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none py-3 px-4 rounded-lg transition-all placeholder:text-slate-400"
          />
        </div>
        <div>
          <label className="block text-slate-900 text-xs font-black uppercase tracking-widest mb-2">Email</label>
          <input
            type="email"
            placeholder="email@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-white/50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none py-3 px-4 rounded-lg transition-all placeholder:text-slate-400"
          />
        </div>
        <div>
          <label className="block text-slate-900 text-xs font-black uppercase tracking-widest mb-2">Project Details</label>
          <textarea
            rows="4"
            placeholder="Tell me about your technical needs..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-white/50 border-2 border-transparent focus:border-slate-900 focus:bg-white outline-none py-3 px-4 rounded-lg transition-all resize-none placeholder:text-slate-400"
          />
        </div>
        {status && <p className="text-sm font-medium">{status}</p>}
        <button
          type="submit"
          className="w-full bg-slate-900 text-white py-5 rounded-lg flex items-center justify-center gap-3 font-black uppercase text-xs tracking-[0.2em] hover:bg-black transition-all shadow-2xl group"
        >
          Initialize Chat
          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
