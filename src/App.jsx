import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 left-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About/>
          <Technologies/>
          <Experience/>
          <Projects/>
          <Certifications/>
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App