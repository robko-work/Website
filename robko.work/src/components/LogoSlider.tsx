import { useEffect, useRef } from 'react';

const logos = [
  { src: 'https://static.wixstatic.com/media/0f4c88_096932a5062941f583d17224b23801f0~mv2.png', alt: 'Kunde 1' },
  { src: 'https://static.wixstatic.com/media/0f4c88_b8b99bb8565a4419aacedb296e286222~mv2.png', alt: 'Kunde 2' },
  { src: 'https://static.wixstatic.com/media/0f4c88_54d009ad5b3e4811a29d110039632697~mv2.png', alt: 'Kunde 3' },
  { src: 'https://static.wixstatic.com/media/0f4c88_2f51ef56712647f6973b49fe0c3caf1c~mv2.png', alt: 'Kunde 4' },
  { src: 'https://static.wixstatic.com/media/0f4c88_abaf57a09b7e47809e577c93649e2f2b~mv2.png', alt: 'Kunde 5' },
  { src: 'https://static.wixstatic.com/media/0f4c88_a5897813f3054c6a83c18ef5befd86c2~mv2.png', alt: 'Kunde 6' },
  { src: 'https://static.wixstatic.com/media/0f4c88_3beaccf31c70438bbe2240be8d6d2a0e~mv2.png', alt: 'Kunde 7' },
  { src: 'https://static.wixstatic.com/media/0f4c88_175663edcb464b47aa0c671a1a1d5a2c~mv2.png', alt: 'Kunde 8' },
  { src: 'https://static.wixstatic.com/media/0f4c88_d6c36e83e6de497ea4f58464e1bb1296~mv2.png', alt: 'Kunde 9' },
  { src: 'https://static.wixstatic.com/media/0f4c88_f3d049f15a2a41efadd2e604e7e8de4c~mv2.png', alt: 'Kunde 10' },
  { src: 'https://static.wixstatic.com/media/0f4c88_31ff3740a0f44489a505631cc7dcec51~mv2.png', alt: 'Kunde 11' },
  { src: 'https://static.wixstatic.com/media/0f4c88_98519b29afba459ab0a7c7956f4c4ed7~mv2.png', alt: 'Kunde 12' },
  { src: 'https://static.wixstatic.com/media/0f4c88_f9fd9ad93775486cbd6809dc906f59fc~mv2.png', alt: 'Kunde 13' },
  { src: 'https://static.wixstatic.com/media/0f4c88_6440f6efbe0048ff96b4fd56cd7cceef~mv2.png', alt: 'Kunde 14' },
  { src: 'https://static.wixstatic.com/media/0f4c88_673fe5b0571a4fe6be562e3d49d18d6b~mv2.png', alt: 'Kunde 15' },
  { src: 'https://static.wixstatic.com/media/0f4c88_e30f4bef47474ad88db34ffe5d1d6c0b~mv2.png', alt: 'Kunde 16' },
  { src: 'https://static.wixstatic.com/media/0f4c88_8c2a92e5bfef4cf0b940855f272db4c9~mv2.png', alt: 'Kunde 17' },
  { src: 'https://static.wixstatic.com/media/0f4c88_2a9ea2c9d7d24886baddbada18324a25~mv2.png', alt: 'Kunde 18' },
  { src: 'https://static.wixstatic.com/media/0f4c88_1f8aa6510b41402f85048c93211ef1e4~mv2.png', alt: 'Kunde 19' },
  { src: 'https://static.wixstatic.com/media/0f4c88_fc6951d72ddc45e6834d7c2185a8345e~mv2.png', alt: 'Kunde 20' },
  { src: 'https://static.wixstatic.com/media/0f4c88_efbcf9e728bc47c1a8a935ab1e6f1306~mv2.png', alt: 'Kunde 21' },
  { src: 'https://static.wixstatic.com/media/0f4c88_06538e40286148d5afa280b9a143a891~mv2.png', alt: 'Kunde 22' },
  { src: 'https://static.wixstatic.com/media/0f4c88_6793ae857b27442d9a03851b92ed2e49~mv2.png', alt: 'Kunde 23' },
];

export default function LogoSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;

    const logoCount = logos.length;
    let logoWidth = 0;
    let gap = 0;
    let oneSetWidth = 0;
    const speed = 50; // pixels per second

    const recalc = () => {
      const logo = track.querySelector('.logo-item') as HTMLElement;
      if (!logo) return;
      logoWidth = logo.offsetWidth;
      gap = parseInt(getComputedStyle(track).gap) || 36;
      oneSetWidth = (logoWidth + gap) * logoCount;
    };

    recalc();
    window.addEventListener('resize', recalc);

    let position = 0;
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

      if (autoScrolling) {
        position -= speed * delta;
        wrapPosition();
      }

      track.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    const handleMouseEnter = () => { autoScrolling = false; };
    const handleMouseLeave = () => { autoScrolling = true; };

    wrapper.addEventListener('mouseenter', handleMouseEnter);
    wrapper.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', recalc);
      cancelAnimationFrame(animationFrameId);
      wrapper.removeEventListener('mouseenter', handleMouseEnter);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="w-full py-3 md:py-6 lg:py-5 bg-[#f5f4f0] relative">
      <div className="w-full max-w-[1100px] mx-auto px-4 md:px-8 lg:px-12">
        <div 
          ref={wrapperRef}
          className="relative w-full overflow-hidden"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)', 
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' 
          }}
        >
          <div ref={trackRef} className="flex items-center gap-5 md:gap-7 lg:gap-9 w-max">
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="logo-item flex-shrink-0 w-[88px] h-[88px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] flex items-center justify-center bg-transparent p-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer hover:scale-110 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] group">
              <img src={logo.src} alt={logo.alt} loading="lazy" className="w-full h-full object-contain opacity-85 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
          {/* Duplicate for infinite scroll */}
          {logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="logo-item flex-shrink-0 w-[88px] h-[88px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] flex items-center justify-center bg-transparent p-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer hover:scale-110 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] group">
              <img src={logo.src} alt={logo.alt} loading="lazy" className="w-full h-full object-contain opacity-85 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
