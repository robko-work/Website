export default function Testimonials() {
  const testimonials = [
    {
      name: 'Holger Hansen',
      role: 'Executive Director Sports',
      company: 'Accenture Song',
      image: 'https://static.wixstatic.com/media/0f4c88_9932e9b7b96b405e977095e1800e98aa~mv2.jpeg',
      text: 'Robert ist einer der talentiertesten und zuverlässigsten Menschen, mit denen ich zusammengearbeitet habe. In unserer gemeinsamen Zeit konnte ich bei ihm immer sicher sein, dass er die gesteckten Ziele, strukturiert, mit einem positiven Mindset und einer klaren Strategie verfolgte und erreichte.'
    },
    {
      name: 'Sabine Dietl',
      role: 'Director Brand Headoffice CE',
      company: 'adidas',
      image: 'https://static.wixstatic.com/media/0f4c88_79c04b825cc94f0385182283a6cd2922~mv2.jpeg',
      text: 'Robert war ein großartiger „Sparringspartner“ für innovative Ansätze und herausfordernde Situationen. Er ist ein kreativer Kopf für Social Media, der Ideen in Rollout-Pläne, Kampagnenumsetzungen und Athletengeschichten umsetzte.'
    },
    {
      name: 'Florian Dederichs',
      role: 'Teamleiter Vermarktung',
      company: 'FC St. Pauli',
      image: 'https://static.wixstatic.com/media/0f4c88_f40c9efaae2a41e28c6ba7237a4d70ef~mv2.jpg',
      text: 'Robert bringt eine Kombination aus Kreativität und strategischem Denken mit. Seine Konzepte sind nicht nur innovativ, sondern auch durchdacht und praxisnah. Besonders beeindruckt hat mich seine Fähigkeit, Themen in prägnante und starken Storylines zu übersetzen. Seine kreativen Impulse und Perspektiven haben unsere Arbeit bereichert und viele Ideen konnten weiterentwickelt werden.'
    }
  ];

  return (
    <section id="referenzen" className="w-full py-12 md:py-16 lg:py-20 bg-[#f5f4f0]">
      <div className="w-full max-w-[1100px] mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-left font-semibold text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] text-[#1a1a1a] uppercase mb-8 tracking-wide">
          REFERENZEN
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-6 shadow-md">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-[0.72rem] font-semibold tracking-[0.08em] uppercase text-[#1a1a1a] mb-1">
                {testimonial.name}
              </h3>
              <p className="text-[0.85rem] md:text-[0.9rem] text-[#555555] mb-1">
                {testimonial.role}
              </p>
              <p className="text-[0.72rem] font-medium tracking-[0.08em] uppercase text-[#1a1a1a] mb-8">
                {testimonial.company}
              </p>
              <p className="text-[0.82rem] font-normal leading-[1.7] text-[#555555] max-w-[90%] md:max-w-none">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
