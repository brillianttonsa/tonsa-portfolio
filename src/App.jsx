import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import SkillsSection from "./components/SkillsSectioin"
import ResumeAndCapability from "./components/ResumeAndCapability"
import FAQ from "./components/Faq"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


import ProjectSection from "./components/Projects"

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <About />

      <section className="bg-slate-100 py-2">
        <SkillsSection />
      </section>

      <section className="bg-slate-100 py-2">
        <ResumeAndCapability />
      </section>

      {/* PROJECTS: Clean white so the project images pop */}
      <section className="bg-slate-100 py-2">
        <ProjectSection />
      </section>

      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
export default App
