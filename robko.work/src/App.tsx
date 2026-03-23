import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseSlider from './components/CaseSlider';
import LogoSlider from './components/LogoSlider';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen font-poppins text-[#1a1a1a] bg-[#f5f4f0]">
      <Navbar />
      <Hero />
      <Services />
      <CaseSlider />
      <LogoSlider />
      <Testimonials />
      <footer id="kontakt" className="w-full py-16 md:py-24 bg-[#1a1a1a] text-white text-center px-4">
        <h2 className="text-[2rem] md:text-[2.5rem] font-bold mb-6 tracking-tight">Lass uns sprechen.</h2>
        <p className="text-[#cccccc] mb-8 max-w-[600px] mx-auto">
          Bereit für das nächste Projekt? Ich freue mich auf deine Nachricht.
        </p>
        <a href="mailto:robert@robko.work" className="inline-block bg-white text-[#1a1a1a] font-bold py-3 px-8 rounded-full hover:bg-[#e8e8e8] transition-colors duration-300">
          Nachricht senden
        </a>
      </footer>
    </div>
  );
}
