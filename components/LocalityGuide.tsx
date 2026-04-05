export default function LocalityGuide() {
  const localities = [
    {name:'Viman Nagar',type:'Premium',price:'₹8,500–12,000/sqft',tag:'🏆 Most Popular',img:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80'},
    {name:'Baner',type:'Mid-Premium',price:'₹7,500–10,000/sqft',tag:'📈 High Growth',img:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80'},
    {name:'Koregaon Park',type:'Luxury',price:'₹12,000–18,000/sqft',tag:'💎 Luxury',img:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80'},
    {name:'Hinjewadi',type:'Affordable',price:'₹5,500–8,000/sqft',tag:'💼 IT Hub',img:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80'},
    {name:'Kharadi',type:'Mid-Premium',price:'₹7,000–9,500/sqft',tag:'🚀 Fast Growing',img:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80'},
    {name:'Wakad',type:'Affordable',price:'₹6,500–8,500/sqft',tag:'🏡 Family Friendly',img:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80'},
  ];
  return (
    <section className="py-20 px-4 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#C9A84C]/20 text-[#C9A84C] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">📍 Explore Pune</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Find Your Neighbourhood</h2>
          <p className="text-gray-400 text-lg mt-3 max-w-xl mx-auto">Every corner of Pune has its own vibe. Let us help you find the one that matches yours.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {localities.map(l => (
            <a key={l.name} href={"https://wa.me/919999999999?text=" + encodeURIComponent("Hi Propaly! I want to explore properties in " + l.name + ", Pune.")} target="_blank" rel="noopener noreferrer" className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <img src={l.img} alt={l.name} className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="bg-[#C9A84C] text-white text-[10px] font-bold px-2 py-1 rounded-full">{l.tag}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-base">{l.name}</p>
                <p className="text-gray-300 text-xs">{l.price}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}