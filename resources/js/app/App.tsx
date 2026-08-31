import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Modeling } from './components/Modeling';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { FloatingIconsBackground } from './components/FloatingIconsBackground';
import { CuteTechWidget } from './components/CuteTechWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-pink-400 selection:text-white transition-colors duration-300">
      <FloatingIconsBackground />
      <ScrollProgress />
      <BackToTop />
      <CuteTechWidget />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Modeling />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}