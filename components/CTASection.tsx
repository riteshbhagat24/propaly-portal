export default function CTASection() {
  const stats = [{n:'500+',l:'Happy Families',i:'🏡'},{n:'20+',l:'Pune Locations',i:'📍'},{n:'200 Cr+',l:'Property Sold',i:'💰'},{n:'4.9 ⭐',l:'Google Rating',i:'🌟'}];
  const services = [
    {icon:'🏠',title:'Home Buying Advisory',desc:"We match you to the right home based on your lifestyle and budget."},
    {icon:'💹',title:'Investment Consulting',desc:"Deep knowledge of Pune micro-markets for high-growth investment."},
    {icon:'🤝',title:'End-to-End Support',desc:'From site visits to registration — we handle everything.'},
    {icon:'📊',title:'Market Intelligence',desc:"Real-time insights on Pune trends and developer track records."},
    {icon:'🔑',title:'Resale & Rental',desc:'We find qualified buyers and tenants for your property, fast.'},
    {icon:'📝',title:'Legal & Documentation',desc:'RERA checks, agreement reviews, registration support.'},
  ];
  return (
    <>
      <section id="about" className="bg-[#0A1628] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map(s => (
            <div key={s.l} className="flex flex-col items-center">
              <span className="text-3xl mb-2">{s.i}</span>
              <p className="text-3xl md:text-4xl font-bold text-[#C9A84C]">{s.n}</p>
              <p className="text-gray-400 text-sm mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mt-2">Beyond the Transaction</h2>
          <p className="text-gray-500 text-lg mt-3 max-w-xl mx-auto">We guide you through every step — from your first shortlist to your final keys.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-xl flex items-center justify-center text-2xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-[#0A1628] text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="mx-4 mb-20 rounded-3xl overflow-hidden">
        <div className="bg-gradient-to-r from-[#0A1628] to-[#1a2d4a] py-16 px-8 text-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#C9A84C]/10 rounded-full" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#C9A84C]/5 rounded-full" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-4xl mb-4">💬</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Not Sure Where to Start?</h2>
            <p className="text-gray-300 mb-8 text-lg">Talk to a Propaly expert on WhatsApp — right now. No forms, no waiting.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919999999999?text=Hi%20Propaly!%20I%20need%20help." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#20bd5a] transition-all text-lg">Chat on WhatsApp — Free</a>
              <a href="tel:+919999999999" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-2xl hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-lg">📞 Call Us</a>
            </div>
            <p className="text-gray-500 text-sm mt-6">LMS Finswell, Viman Nagar, Pune · Mon–Sat 10AM–7PM</p>
          </div>
        </div>
      </section>
    </>
  );
}