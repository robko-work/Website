import { useEffect, useRef } from 'react';

const cases = [
  {
    title: 'Vorwerk x DFB',
    link: 'https://www.robko.work/vorwerk-dfb',
    image: 'https://static.wixstatic.com/media/0f4c88_ef05aebb4629415aaf5e5ceb6f25e19f~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80/0f4c88_ef05aebb4629415aaf5e5ceb6f25e19f~mv2.jpg',
    intro: 'Unterstützung der Sportmarketing-Agentur Sportfive im Pitch um den Kunden Vorwerk – mit einer PR-Idee für den Startschuss ins zweite Partner-Jahr beim DFB.',
    keywords: ['PR-Idee', 'Partnerships']
  },
  {
    title: 'adidas EURO 2024',
    link: 'https://www.robko.work/adidas-euro24',
    image: 'https://static.wixstatic.com/media/0f4c88_357cfa15a4bf44d98355fa26855430a5~mv2.png/v1/fill/w_500,h_500,al_c,q_85/0f4c88_357cfa15a4bf44d98355fa26855430a5~mv2.png',
    intro: 'Strategische Grundlage für eine der bemerkenswertesten Sportmarketing-Kampagnen der letzten Jahre bei Jung von Matt SPORTS.',
    keywords: ['Kampagne', 'Strategie']
  },
  {
    title: 'Google x DFB',
    link: 'https://www.robko.work/google',
    image: 'https://static.wixstatic.com/media/0f4c88_45af1076a9e3498b92069e580d8581df~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80/0f4c88_45af1076a9e3498b92069e580d8581df~mv2.jpg',
    intro: 'Auswahl von Einzelspielerinnen für ein Google-Sponsoring sowie Ansprache der Managements und Vertrags- und Honorarverhandlungen bei OMD Fuse.',
    keywords: ['Athleten', 'Partnerships']
  },
  {
    title: 'adidas Account Lead',
    link: 'https://www.robko.work/adidas',
    image: 'https://static.wixstatic.com/media/0f4c88_54140f0a2fa649a9bc55a195fcd569b0~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80/0f4c88_54140f0a2fa649a9bc55a195fcd569b0~mv2.jpg',
    intro: 'Entwicklung des Key Accounts adidas als Lead Consultant bei Jung von Matt SPORTS – mit Kampagnenumsetzungen in der DACH-Region.',
    keywords: ['Social Media', 'Teamführung']
  },
  {
    title: 'Tipico Titan Tipp',
    link: 'https://www.robko.work/tipico',
    image: 'https://static.wixstatic.com/media/0f4c88_9a6231e3774a48ebb8be9151980af5bd~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80/0f4c88_9a6231e3774a48ebb8be9151980af5bd~mv2.jpg',
    intro: 'Erfindung eines ungesehenen Wettprodukts für Bundesliga-Fans inklusive eines Chatbots mit den Charakterzügen von Oliver Kahn.',
    keywords: ['Produktentwicklung', 'Chatbot']
  },
  {
    title: 'SIXT NBA Partnerships',
    link: 'https://www.robko.work/sixt',
    image: 'https://static.wixstatic.com/media/0f4c88_1de8008db51044fba884f84ada03d3ef~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80/0f4c88_1de8008db51044fba884f84ada03d3ef~mv2.jpg',
    intro: 'Aktivierung der Sponsoring-Rechte als Partnership-Manager für Sixt im US-Markt – mit zwei der bekanntesten Sports Brands der Welt.',
    keywords: ['Partnerships', 'International']
  },
  {
    title: 'FC Bayern World Squad',
    link: 'https://www.robko.work/fc-bayern',
    image: 'https://static.wixstatic.com/media/0f4c88_ab6334d6029445a8bc5d02cff5047081~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80/0f4c88_ab6334d6029445a8bc5d02cff5047081~mv2.jpg',
    intro: 'Entwicklung eines kreativen Aktivierungsansatzes und Storytellings rund um die Markenplattform FC Bayern World Squad.',
    keywords: ['Storytelling', 'Aktivierung']
  }
];

export default function CaseSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;

    const cardCount = cases.length;
    let cardWidth = 0;
    let gap = 0;
    let oneSetWidth = 0;
    let speed = 0;

    const recalc = () => {
      const card = track.querySelector('.case-card') as HTMLElement;
      if (!card) return;
      cardWidth = card.offsetWidth;
      gap = parseInt(getComputedStyle(track).gap) || 28;
      oneSetWidth = (cardWidth + gap) * cardCount;
      speed = 50;
    };

    recalc();
    window.addEventListener('resize', recalc);

    let position = 0;
    let isDragging = false;
    let startX = 0;
    let dragStartPos = 0;
    let dragDistance = 0;
    let lastTimestamp: number | null = null;
    let autoScrolling = true;
    let animationFrameId: number;

    const wrapPosition = () => {
      if (position <= -oneSetWidth) position += oneSetWidth;
      else if (position > 0) position -= oneSetWidth;
    };

    const animate = (timestamp: number) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const delta = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;
      
      if (autoScrolling && !isDragging) { 
        position -= speed * delta; 
        wrapPosition(); 
      }
      
      track.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    const handleMouseEnter = () => { if (!isDragging) autoScrolling = false; };
    const handleMouseLeave = () => { if (!isDragging) autoScrolling = true; };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true; 
      autoScrolling = false; 
      dragDistance = 0;
      startX = e.pageX; 
      dragStartPos = position;
      wrapper.style.cursor = 'grabbing'; 
      e.preventDefault();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      dragDistance = Math.abs(e.pageX - startX);
      position = dragStartPos + (e.pageX - startX); 
      wrapPosition();
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      isDragging = false; 
      wrapper.style.cursor = ''; 
      autoScrolling = true;
    };

    const handleTouchStart = (e: TouchEvent) => {
      isDragging = true; 
      autoScrolling = false; 
      dragDistance = 0;
      startX = e.touches[0].clientX; 
      dragStartPos = position;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      dragDistance = Math.abs(e.touches[0].clientX - startX);
      position = dragStartPos + (e.touches[0].clientX - startX); 
      wrapPosition();
    };

    const handleTouchEnd = () => {
      if (!isDragging) return; 
      isDragging = false; 
      autoScrolling = true;
    };

    const handleClick = (e: MouseEvent) => {
      if (dragDistance > 5) { 
        e.preventDefault(); 
        e.stopPropagation(); 
      }
    };

    wrapper.addEventListener('mouseenter', handleMouseEnter);
    wrapper.addEventListener('mouseleave', handleMouseLeave);
    wrapper.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    wrapper.addEventListener('touchstart', handleTouchStart, { passive: true });
    wrapper.addEventListener('touchmove', handleTouchMove, { passive: true });
    wrapper.addEventListener('touchend', handleTouchEnd);
    wrapper.addEventListener('click', handleClick, true);

    return () => {
      window.removeEventListener('resize', recalc);
      cancelAnimationFrame(animationFrameId);
      wrapper.removeEventListener('mouseenter', handleMouseEnter);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
      wrapper.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      wrapper.removeEventListener('touchstart', handleTouchStart);
      wrapper.removeEventListener('touchmove', handleTouchMove);
      wrapper.removeEventListener('touchend', handleTouchEnd);
      wrapper.removeEventListener('click', handleClick, true);
    };
  }, []);

  const renderCards = () => {
    return cases.map((item, index) => (
      <article key={index} className="case-card flex-none w-[300px] md:w-[400px] lg:w-[580px] bg-white border border-[#e8e8e8] transition-all duration-300 overflow-hidden flex flex-col md:flex-row hover:border-[#cccccc] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] group">
        <a href={item.link} target="_blank" rel="noreferrer" className="flex-none md:flex-[0_0_40%] overflow-hidden relative aspect-square block no-underline">
          <img className="w-full h-full object-cover block transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" src={item.image} alt={item.title} />
        </a>
        <div className="flex-1 p-[18px_18px_22px] md:p-[20px_22px] lg:p-[24px_28px] flex flex-col justify-center">
          <h3 className="text-[0.72rem] font-medium tracking-[0.08em] uppercase text-[#1a1a1a] mb-3">
            <a href={item.link} target="_blank" rel="noreferrer" className="text-inherit no-underline transition-colors duration-300 hover:text-[#555555]">{item.title}</a>
          </h3>
          <p className="text-[0.8rem] lg:text-[0.85rem] font-normal leading-[1.7] text-[#555555] mb-5">
            {item.intro}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {item.keywords.map((kw, i) => (
              <a key={i} href={item.link} target="_blank" rel="noreferrer" className="text-[0.65rem] font-semibold tracking-[0.06em] uppercase py-1 px-3 bg-[#f4f4f4] text-[#333333] border-none no-underline inline-block transition-all duration-300 cursor-pointer hover:bg-[#1a1a1a] hover:text-white group-hover:bg-[#1a1a1a] group-hover:text-white">
                {kw}
              </a>
            ))}
          </div>
        </div>
      </article>
    ));
  };

  return (
    <section id="portfolio" className="w-full py-6 md:py-5 lg:py-6 overflow-hidden animate-fade-in">
      <div className="w-full max-w-[1100px] mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-left font-semibold text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] text-[#1a1a1a] uppercase mb-6 tracking-wide">
          Arbeiten und Kunden
        </h2>
        <div 
          ref={wrapperRef} 
          className="overflow-hidden w-full cursor-grab active:cursor-grabbing"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)', 
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' 
          }}
        >
          <div ref={trackRef} className="flex gap-4 md:gap-5 lg:gap-7 w-max">
            {renderCards()}
            {/* Duplicate for infinite scroll */}
            {renderCards()}
          </div>
        </div>
      </div>
    </section>
  );
}
