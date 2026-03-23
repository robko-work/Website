export default function Services() {
  return (
    <section id="services" className="w-full max-w-[1100px] mx-auto px-4 pb-7 md:px-8 md:pb-9 lg:px-12 lg:pb-12">
      <h2 className="text-left font-semibold text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] text-[#1a1a1a] uppercase mb-6 tracking-wide">
        SERVICES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white border border-[#e8e8e8] p-5 md:p-6 lg:p-7 transition-all duration-300 hover:border-[#cccccc] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        <h3 className="text-[0.72rem] font-medium tracking-[0.08em] uppercase text-[#1a1a1a] mb-3">Für Agenturen</h3>
        <p className="text-[0.82rem] font-normal leading-[1.7] text-[#555555]">
          An der Schnittstelle zwischen Strategie und Konzept. Bei Bedarf auch als temporäre Teamleitung in den Bereichen Social Media und Content.
        </p>
      </div>
      <div className="bg-white border border-[#e8e8e8] p-5 md:p-6 lg:p-7 transition-all duration-300 hover:border-[#cccccc] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        <h3 className="text-[0.72rem] font-medium tracking-[0.08em] uppercase text-[#1a1a1a] mb-3">Für Marken</h3>
        <p className="text-[0.82rem] font-normal leading-[1.7] text-[#555555]">
          Als Berater im Bereich Partnerschaften und Sponsoring mit Schwerpunkt auf der kreativen Aktivierung von Rechten.
        </p>
      </div>
      <div className="bg-white border border-[#e8e8e8] p-5 md:p-6 lg:p-7 transition-all duration-300 hover:border-[#cccccc] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        <h3 className="text-[0.72rem] font-medium tracking-[0.08em] uppercase text-[#1a1a1a] mb-3">Für Vereine & Verbände</h3>
        <p className="text-[0.82rem] font-normal leading-[1.7] text-[#555555]">
          Als kreativer Sparringspartner in den Bereichen Vertrieb, Partnermanagement oder Content.
        </p>
      </div>
      </div>
    </section>
  );
}
