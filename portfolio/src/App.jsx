import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import LightRays from './components/AnimationEffects/LightRays';
import ProfileCard from './components/Asstes/ProfileCard.svg'
import Quality from './components/Quality';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-black text-white scroll-smooth">
      {/* ✅ Header fixed at top */}
      <Header />


      {/* ✅ Static Sections one after another */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <Home />
      </section>
      <section id="about" className="min-h-screen flex items-center justify-center">
        <About />
      </section>
      <section className=" flex items-center justify-center">
        <Quality />
      </section>
      <section id="skills" className="min-h-screen  items-center justify-center">
        <Skills />
      </section>
      <section id="experience" className="min-h-screen flex items-center justify-center">
        <Experience />
      </section>
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <Contact />
      </section>
    </div>
  );
}

export default App;
