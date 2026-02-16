import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => (
  <section id="contact" className="bg-[#fde047] py-12 px-6 font-sans scroll-mt-24">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
      <ContactInfo />
      <ContactForm />
    </div>
  </section>
);

export default Contact;
