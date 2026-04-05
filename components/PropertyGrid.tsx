'use client';
import Link from 'next/link';

const props = [
  {id:1,title:'Luxury 3 BHK in Viman Nagar',location:'Viman Nagar, Pune',price:'1.85 Cr',tag:'Featured',tagColor:'bg-[#C9A84C]',beds:3,baths:2,area:'1,450 sqft',img:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80'},
  {id:2,title:'Premium 2 BHK in Baner',location:'Baner, Pune',price:'92 Lakh',tag:'New Launch',tagColor:'bg-green-500',beds:2,baths:2,area:'1,095 sqft',img:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80'},
  {id:3,title:'4 BHK Penthouse in Koregaon Park',location:'Koregaon Park, Pune',price:'4.20 Cr',tag:'Luxury',tagColor:'bg-purple-600',beds:4,baths:3,area:'3,000 sqft',img:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80'},
  {id:4,title:'Ready-to-Move 2 BHK in Wakad',location:'Wakad, Pune',price:'72 Lakh',tag:'Ready to Move',tagColor:'bg-blue-600',beds:2,baths:2,area:'925 sqft',img:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80'},
  {id:5,title:'Spacious 3 BHK Villa in Wagholi',location:'Wagholi, Pune',price:'1.45 Cr',tag:'Hot Deal',tagColor:'bg-red-500',beds:3,baths:3,area:'2,200 sqft',img:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80'},
  {id:6,title:'1 BHK Smart Home in Hinjewadi',location:'Hinjewadi, Pune',price:'48 Lakh',tag:'Investor Pick',tagColor:'bg-orange-500',beds:1,baths:1,area:'665 sqft',img:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80'},
];

function Card({p}: {p: typeof props[0]}) {
  const msg = "Hi Propaly! Interested in " + p.title + " at Rs. " + p.price;
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
      <Link href={"/properties/" + p.id}>
        <div className="relative overflow-hidden cursor-pointer">
          <img src={p.img} alt={p.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
          <span className={"absolute top-3 left-3 " + p.tagColor + " text-white text-xs font-semibold px-3 py-1 rounded-full"}>{p.tag}</span>
          <span className="absolute bottom-3 left-3 bg-[#0A1628]/80 text-white text-[10px] px-2 py-0.5 rounded">✓ RERA Registered</span>
        </div>
      </Link>
      <div className="p-4">
        <Link href={"/properties/" + p.id}>
          <h3 className="font-bold text-[#0A1628] text-base mb-1 hover:text-[#C9A84C] transition-colors cursor-pointer">{p.title}</h3>
        </Link>
        <p className="text-gray-500 text-xs mb-3">📍 {p.location}</p>
        <div className="flex gap-3 text-gray-500 text-xs border-t border-gray-100 pt-3 pb-3">
          <span>🛏 {p.beds} Beds</span><span>🚿 {p.baths} Baths</span><span>📐 {p.area}</span>
        </div>
        <div className="flex items-center justify-between">
          <Link href={"/properties/" + p.id}>
            <p className="text-xl font-bold text-[#0A1628] hover:text-[#C9A84C] transition-colors cursor-pointer">₹{p.price}</p>
          </Link>
          <div className="flex gap-2">
            <Link href={"/properties/" + p.id} className="bg-[#0A1628] text-white text-xs font-semibold px-3 py-2 rounded-xl hover:bg-[#C9A84C] transition-all">
              View Details
            </Link>
            <a href={"https://wa.me/919145596819?text=" + encodeURIComponent(msg)} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white text-xs font-semibold px-3 py-2 rounded-xl hover:bg-[#20bd5a] transition-all">
              Enquire
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PropertyGrid() {
  return (
    <section id="properties" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">🏙️ Curated by Propaly Experts</span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mt-2">Featured Properties in Pune</h2>
        <p className="text-gray-500 text-lg mt-3 max-w-xl mx-auto">Handpicked listings across Pune's best micro-markets — RERA-registered and expert-recommended.</p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {['All','Under 1 Cr','1-2 Cr','Luxury','Ready to Move','New Launch'].map(f => (
          <button key={f} className="text-sm px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all font-medium">{f}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {props.map(p => <Card key={p.id} p={p} />)}
      </div>
      <div className="text-center mt-12">
        <Link href="/projects" className="inline-flex items-center gap-2 border-2 border-[#0A1628] text-[#0A1628] font-semibold px-8 py-3 rounded-xl hover:bg-[#0A1628] hover:text-white transition-all">
          View All Projects →
        </Link>
      </div>
    </section>
  );
}