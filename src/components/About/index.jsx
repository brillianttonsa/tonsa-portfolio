import SectionHeader from '../ui/SectionHeader';
import AboutBio from './AboutBio';
import AboutDetailsGrid from './AboutDetailsGrid';

const details = [
  { label: "Name:", value: "Abdullatif Mnyamisi" },
  { label: "Email:", value: "abdullatifmyamis@gmail.com", isLink: true },
  { label: "Role:", value: "Frontend & Backend Engineer — Aspiring AI Engineer" },
  { label: "Status:", value: "Finalist CS Student" },
];

const About = () => (
  <section id="about" className="bg-white py-14 px-6 font-sans scroll-mt-24">
    <div className="max-w-6xl mx-auto">
      <SectionHeader badge="About Me" title="Bridging Logic and Intelligence" />
      <div className="items-start">
        <div>
          <AboutBio />
          <AboutDetailsGrid details={details} />
        </div>
      </div>
    </div>
  </section>
);

export default About;
