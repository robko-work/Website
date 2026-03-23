import { useEffect, useRef } from 'react';

export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const updateParallax = () => {
      if (!imgRef.current) return;
      const scrollY = window.scrollY || window.pageYOffset;
      const offset = -(scrollY * 0.15);
      imgRef.current.style.transform = `translateY(${offset}px) scale(1.05)`;
    };
    window.addEventListener('scroll', updateParallax, { passive: true });
    window.addEventListener('resize', updateParallax, { passive: true });
    updateParallax();
    return () => {
      window.removeEventListener('scroll', updateParallax);
      window.removeEventListener('resize', updateParallax);
    };
  }, []);

  return (
    <section id="start" className="w-full bg-[#f5f4f0] px-4 pt-4 pb-8 md:px-8 md:pt-4 md:pb-10 lg:px-12 lg:pt-4 lg:pb-12 flex flex-row items-center justify-between md:justify-center gap-6 md:gap-12 lg:gap-16 max-w-[1100px] mx-auto">
      <div className="flex-1 flex flex-col justify-center text-left">
        <h1 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#1a1a1a] uppercase">
          Robert<br />Kosinski
        </h1>
        <p className="text-[0.9rem] sm:text-[1.3rem] md:text-[1.6rem] lg:text-[2rem] font-medium text-[#777777] tracking-[0.02em] mt-2 md:mt-4 leading-relaxed max-w-none">
          Creative Strategist<br />im Sportmarketing
        </p>
      </div>
      <div className="flex-none w-[120px] sm:w-[180px] md:w-[320px] lg:w-[380px] aspect-square overflow-hidden relative">
        <img 
          ref={imgRef}
          src="https://static.wixstatic.com/media/0f4c88_a5c60cf296e84731b4103a46b77c81ed~mv2.jpg/v1/fill/w_760,h_1040,al_c,q_85/0f4c88_a5c60cf296e84731b4103a46b77c81ed~mv2.jpg" 
          alt="Robert Kosinski"
          className="w-full h-[140%] object-cover object-top will-change-transform"
        />
      </div>
    </section>
  );
}
