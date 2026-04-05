'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

const allProjects = [
  {id:1,name:'Horizon Highgroves',developer:'Horizon Developers',location:'Mundhwa, Pune',type:'Residential',config:'2 & 3 BHK',price:'From 95 Lakh',status:'New Launch',area:'1,050–1,650 sqft',units:'240',possession:'Dec 2026',img:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',amenities:['Clubhouse','Swimming Pool','Gym','24/7 Security','Kids Play Area']},
  {id:2,name:'Kolte Patil iTowers Exente',developer:'Kolte Patil',location:'Wakad, Pune',type:'Residential',config:'2 & 3 BHK',price:'From 85 Lakh',status:'Under Construction',area:'950–1,450 sqft',units:'320',possession:'Mar 2027',img:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',amenities:['Rooftop Garden','EV Charging','Smart Home','Kids Zone','Jogging Track']},
  {id:3,name:'Godrej Nurture',developer:'Godrej Properties',location:'Kharadi, Pune',type:'Residential',config:'2, 3 & 4 BHK',price:'From 1.2 Cr',status:'Ready to Move',area:'1,200–2,800 sqft',units:'180',possession:'Ready',img:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',amenities:['Olympic Pool','Concierge','Spa','Tennis Court','Party Hall']},
  {id:4,name:'Pride World City',developer:'Pride Group',location:'Charholi, Pune',type:'Residential',config:'1, 2 & 3 BHK',price:'From 45 Lakh',status:'New Launch',area:'600–1,400 sqft',units:'580',possession:'Jun 2027',img:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',amenities:['School','Hospital','Mall','Clubhouse','Sports Complex']},
  {id:5,name:'Neon Homtels',developer:'Horizon Developers',location:'Viman Nagar, Pune',type:'Commercial',config:'Studio & 1 BHK',price:'From 55 Lakh',status:'New Launch',area:'420–750 sqft',units:'160',possession:'Sep 2026',img:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80',amenities:['Concierge','Rooftop Cafe','Co-working','24/7 Reception','Housekeeping']},
  {id:6,name:'Panchshil Towers',developer:'Panchshil Realty',location:'Koregaon Park, Pune',type:'Luxury',config:'3 & 4 BHK',price:'From 3.5 Cr',status:'Ready to Move',area:'2,200–4,000 sqft',units:'48',possession:'Ready',img:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',amenities:['Infinity Pool','Private Lift','Home Theatre','Wine Cellar','Valet']},
];

const statusColor: Record<string,string> = {
  'New Launch':'bg-green-500',
  'Under Construction':'bg-orange-500',
  'Ready to Move':'bg-blue-600',
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const filters = ['All','New Launch','Under Construction','Ready to Move'];
  const types = ['All','Residential','Commercial','Luxury'];
  const filtered = allProjects.filter(p => {
    const statusMatch = filter === 'All' || p.status === filter;
    const typeMatch = typeFilter === 'All' || p.type === typeFilter;
    return statusMatch && typeMatch;
  });
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        {/* Page Hero */}
        <div className="bg-[#0A1628] py-14 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
              <Link href="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Projects</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">New Projects in Pune</h1>
            <p className="text-gray-400 text-lg max-w-2xl">Handpicked developer projects across Pune — verified by Propaly's advisory team. RERA registered, trusted developers only.</p>
            <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-300">
              <span>🏗️ {allProjects.length} Projects Listed</span>
              <span>✅ All RERA Verified</span>
              <span>🤝 Propaly Recommended</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border-b border-gray-100 sticky top-16 z-30 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap gap-3 items-center">
            <span className="text-sm font-semibold text-gray-500">Status:</span>
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} className={"text-sm px-4 py-1.5 rounded-full font-medium transition-all border " + (filter === f ? 'bg-[#0A1628] text-white border-[#0A1628]' : 'border-gray-200 text-gray-600 hover:border-[#C9A84C] hover:text-[#C9A84C]')}>
                {f}
              </button>
            ))}
            <span className="text-sm font-semibold text-gray-500 ml-4">Type:</span>
            {types.map(t => (
              <button key={t} onClick={() => setTypeFilter(t)} className={"text-sm px-4 py-1.5 rounded-full font-medium transition-all border " + (typeFilter === t ? 'bg-[#C9A84C] text-white border-[#C9A84C]' : 'border-gray-200 text-gray-600 hover:border-[#C9A84C] hover:text-[#C9A84C]')}>
                {t}
              </button>
            ))}
            <span className="ml-auto text-sm text-gray-400">{filtered.length} projects found</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No projects match your filter.</p>
              <button onClick={() => { setFilter('All'); setTypeFilter('All'); }} className="mt-4 text-[#C9A84C] font-semibold">Clear Filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map(p => (
                <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group border border-gray-100">
                  <div className="relative overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className={"absolute top-3 left-3 " + statusColor[p.status] + " text-white text-xs font-bold px-3 py-1 rounded-full"}>{p.status}</span>
                    <span className="absolute top-3 right-3 bg-white text-[#0A1628] text-xs font-bold px-3 py-1 rounded-full">{p.type}</span>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-bold text-lg leading-tight">{p.name}</p>
                      <p className="text-gray-300 text-sm">{p.developer}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-gray-400 text-xs mb-1">Starting Price</p>
                        <p className="font-bold text-[#C9A84C]">₹{p.price}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-gray-400 text-xs mb-1">Configuration</p>
                        <p className="font-bold text-[#0A1628] text-xs">{p.config}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-gray-400 text-xs mb-1">Area Range</p>
                        <p className="font-bold text-[#0A1628] text-xs">{p.area}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-gray-400 text-xs mb-1">Possession</p>
                        <p className="font-bold text-[#0A1628] text-xs">{p.possession}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">📍 {p.location} · {p.units} Units</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.amenities.slice(0,3).map(a => (
                        <span key={a} className="text-xs bg-[#0A1628]/5 text-[#0A1628] px-2 py-1 rounded-lg">✓ {a}</span>
                      ))}
                      {p.amenities.length > 3 && <span className="text-xs text-gray-400 px-2 py-1">+{p.amenities.length - 3} more</span>}
                    </div>
                    <a href={"https://wa.me/919999999999?text=" + encodeURIComponent("Hi Propaly! I want details about " + p.name + " by " + p.developer + " in " + p.location + ". Price starts at Rs. " + p.price + ".")} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#0A1628] text-white font-semibold py-3 rounded-xl hover:bg-[#C9A84C] transition-all text-sm">
                      💬 Get Full Details on WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#C9A84C]/10 py-12 px-4 text-center">
          <h3 className="text-2xl font-bold text-[#0A1628] mb-3">Can't Find What You're Looking For?</h3>
          <p className="text-gray-600 mb-6">Tell us your requirements and we'll find the perfect project for you — even if it's not listed here.</p>
          <a href="https://wa.me/919999999999?text=Hi%20Propaly!%20I%20have%20specific%20project%20requirements.%20Can%20you%20help?" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#20bd5a] transition-all text-lg">
            💬 Tell Us Your Requirements
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}