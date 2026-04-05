'use client';
import Link from 'next/link';

const projects = [
  {id:1,name:'Horizon Highgroves',developer:'Horizon Developers',location:'Mundhwa, Pune',type:'2 & 3 BHK',price:'From 95 Lakh',status:'New Launch',units:'240 Units',img:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',amenities:['Clubhouse','Swimming Pool','Gym','24/7 Security']},
  {id:2,name:'Kolte Patil iTowers',developer:'Kolte Patil',location:'Wakad, Pune',type:'2 & 3 BHK',price:'From 85 Lakh',status:'Under Construction',units:'320 Units',img:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',amenities:['Rooftop Garden','EV Charging','Smart Home','Kids Zone']},
  {id:3,name:'Godrej Nurture',developer:'Godrej Properties',location:'Kharadi, Pune',type:'2, 3 & 4 BHK',price:'From 1.2 Cr',status:'Ready to Move',units:'180 Units',img:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',amenities:['Olympic Pool','Concierge','Spa','Helipad']},
];

const statusColor: Record<string,string> = {
  'New Launch':'bg-green-500',
  'Under Construction':'bg-orange-500',
  'Ready to Move':'bg-blue-600',
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">🏗️ Handpicked by Propaly</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mt-2">Featured Projects in Pune</h2>
          <p className="text-gray-500 text-lg mt-3 max-w-xl mx-auto">Top developer projects across Pune — personally verified and recommended by our advisory team.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(p => (
            <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className={"absolute top-3 left-3 " + statusColor[p.status] + " text-white text-xs font-bold px-3 py-1 rounded-full"}>{p.status}</span>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-bold text-lg">{p.name}</p>
                  <p className="text-gray-300 text-sm">{p.developer}</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-[#C9A84C] font-bold text-xl">₹{p.price}</p>
                    <p className="text-gray-500 text-xs">{p.type} · {p.units}</p>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">📍 {p.location}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.amenities.map(a => (
                    <span key={a} className="text-xs bg-[#0A1628]/5 text-[#0A1628] px-2 py-1 rounded-lg">✓ {a}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Link href="/projects" className="flex-1 flex items-center justify-center bg-[#0A1628] text-white font-semibold py-3 rounded-xl hover:bg-[#C9A84C] transition-all text-sm">
                    View Project
                  </Link>
                  <a href={"https://wa.me/919999999999?text=" + encodeURIComponent("Hi Propaly! I want details about " + p.name + " in " + p.location)} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center bg-[#25D366] text-white font-semibold py-3 rounded-xl hover:bg-[#20bd5a] transition-all text-sm">
                    💬 Enquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/projects" className="inline-flex items-center gap-2 border-2 border-[#0A1628] text-[#0A1628] font-semibold px-8 py-3 rounded-xl hover:bg-[#0A1628] hover:text-white transition-all">
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}