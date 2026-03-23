import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky top-0 w-full z-[9999] bg-[#f5f4f0]/95 backdrop-blur-md transition-shadow duration-300 ${scrolled ? 'shadow-[0_1px_12px_rgba(0,0,0,0.06)]' : ''}`}>
      <nav className={`max-w-[1100px] mx-auto flex items-center justify-center gap-8 transition-all duration-300 ${scrolled ? 'py-2.5 px-6 md:px-12' : 'py-4 px-6 md:px-12'}`}>
        <button 
          className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1 bg-transparent border-none absolute left-6"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü"
        >
          <span className={`block w-[22px] h-[2px] bg-[#1a1a1a] transition-all duration-300 ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
          <span className={`block w-[22px] h-[2px] bg-[#1a1a1a] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-[22px] h-[2px] bg-[#1a1a1a] transition-all duration-300 ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
        </button>
        
        <ul className={`
          flex items-center gap-8 list-none
          md:static md:flex-row md:w-auto md:h-auto md:bg-transparent md:p-0 md:shadow-none
          fixed top-0 w-[260px] h-screen bg-[#f5f4f0]/98 backdrop-blur-xl flex-col items-start pt-20 px-8 pb-8 gap-6 transition-all duration-300 shadow-[-4px_0_20px_rgba(0,0,0,0.08)] z-[9999]
          ${isOpen ? 'right-0' : '-right-full md:right-auto'}
        `}>
          <li><a href="#start" className="relative text-[0.9rem] md:text-[0.78rem] font-medium text-[#1a1a1a] tracking-[0.02em] hover:text-[#555555] transition-colors duration-300 nav-link-underline uppercase" onClick={() => setIsOpen(false)}>Start</a></li>
          <li><a href="#services" className="relative text-[0.9rem] md:text-[0.78rem] font-medium text-[#1a1a1a] tracking-[0.02em] hover:text-[#555555] transition-colors duration-300 nav-link-underline uppercase" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#portfolio" className="relative text-[0.9rem] md:text-[0.78rem] font-medium text-[#1a1a1a] tracking-[0.02em] hover:text-[#555555] transition-colors duration-300 nav-link-underline uppercase" onClick={() => setIsOpen(false)}>Portfolio</a></li>
          <li><a href="#referenzen" className="relative text-[0.9rem] md:text-[0.78rem] font-medium text-[#1a1a1a] tracking-[0.02em] hover:text-[#555555] transition-colors duration-300 nav-link-underline uppercase" onClick={() => setIsOpen(false)}>Referenzen</a></li>
          <li><a href="#kontakt" className="relative text-[0.9rem] md:text-[0.78rem] font-medium text-[#1a1a1a] tracking-[0.02em] hover:text-[#555555] transition-colors duration-300 nav-link-underline uppercase" onClick={() => setIsOpen(false)}>Kontakt</a></li>
          <li><a href="https://www.linkedin.com/in/robertkosinski/" target="_blank" rel="noreferrer" className="relative text-[0.9rem] md:text-[0.78rem] font-medium text-[#1a1a1a] tracking-[0.02em] hover:text-[#555555] transition-colors duration-300 nav-link-underline uppercase" onClick={() => setIsOpen(false)}>LinkedIn</a></li>
        </ul>
      </nav>
    </div>
  );
}
