const fs = require('fs');
const path = require('path');
const files = {};

// ─── FIX NAVBAR — Add real page links ───
files['components/Navbar.tsx'] = `'use client';
import { useState } from 'react';
import Link from 'next/link';

const menuItems = {
  Buy: {
    types: ['Apartment','Villa','Plot','Penthouse','Commercial'],
    locations: ['Viman Nagar','Baner','Koregaon Park','Wakad','Hinjewadi','Wagholi','Kharadi','Undri'],
  },
  Rent: {
    types: ['1 BHK','2 BHK','3 BHK','4 BHK+','Studio','PG / Co-living'],
    locations: ['Viman Nagar','Baner','Koregaon Park','Kharadi','Magarpatta','Kalyani Nagar'],
  },
  Projects: {
    types: ['New Launch','Under Construction','Ready to Move','Luxury','Affordable'],
    locations: ['East Pune','West Pune','North Pune','South Pune','Pimpri-Chinchwad'],
  },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string|null>(null);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="bg-[#0A1628] text-white text-xs py-1.5 px-4 hidden md:flex justify-between items-center">
        <span>📍 Serving all of Pune's prime micro-markets</span>
        <div className="flex gap-4">
          <a href="tel:+919999999999" className="hover:text-[#C9A84C]">📞 +91 99999 99999</a>
          <a href="mailto:vikas@propaly.in" className="hover:text-[#C9A84C]">✉️ vikas@propaly.in</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#C9A84C] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold text-[#0A1628]">Propaly<span className="text-[#C9A84C]">.</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {Object.keys(menuItems).map(item => (
              <div key={item} className="relative"
                onMouseEnter={() => setActiveMenu(item)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item === 'Projects' ? '/projects' : '/#properties'}
                  className={"flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-all " + (activeMenu === item ? 'text-[#C9A84C] bg-[#C9A84C]/5' : 'text-gray-700 hover:text-[#C9A84C]')}
                >
                  {item}
                  <svg className={"w-3 h-3 transition-transform " + (activeMenu === item ? 'rotate-180' : '')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {activeMenu === item && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[480px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Property Type</p>
                      <ul className="space-y-2">
                        {menuItems[item as keyof typeof menuItems].types.map(t => (
                          <li key={t}>
                            <Link href={item === 'Projects' ? '/projects' : '/#properties'} className="text-sm text-gray-700 hover:text-[#C9A84C] flex items-center gap-2 transition-colors">
                              <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full"></span>{t}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">By Location</p>
                      <ul className="space-y-2">
                        {menuItems[item as keyof typeof menuItems].locations.map(l => (
                          <li key={l}>
                            <Link href={item === 'Projects' ? '/projects' : '/#properties'} className="text-sm text-gray-700 hover:text-[#C9A84C] flex items-center gap-2 transition-colors">
                              <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full"></span>{l}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-span-2 pt-3 border-t border-gray-100">
                      <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-[#20bd5a] transition-all">
                        💬 Talk to an Expert on WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link href="/projects" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#C9A84C] transition-colors">Projects</Link>
            <Link href="/contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#C9A84C] transition-colors">Contact</Link>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="https://wa.me/919999999999?text=Hi%20Propaly!" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#20bd5a] transition-all">
              💬 WhatsApp Us
            </a>
            <Link href="/contact" className="flex items-center gap-2 border-2 border-[#0A1628] text-[#0A1628] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#0A1628] hover:text-white transition-all">
              📞 Call
            </Link>
          </div>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          <Link href="/#properties" onClick={() => setMobileOpen(false)} className="block py-2 font-medium text-gray-700 border-b border-gray-50">Buy Property</Link>
          <Link href="/#properties" onClick={() => setMobileOpen(false)} className="block py-2 font-medium text-gray-700 border-b border-gray-50">Rent Property</Link>
          <Link href="/projects" onClick={() => setMobileOpen(false)} className="block py-2 font-medium text-gray-700 border-b border-gray-50">Projects</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-2 font-medium text-gray-700 border-b border-gray-50">Contact Us</Link>
          <a href="https://wa.me/919999999999" target="_blank" className="block text-center bg-[#25D366] text-white font-semibold py-3 rounded-xl mt-2">💬 WhatsApp Us</a>
        </div>
      )}
    </nav>
  );
}`;

// ─── FIX PROPERTY CARDS — Each card links to /properties/[id] ───
files['components/PropertyGrid.tsx'] = `'use client';
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
            <a href={"https://wa.me/919999999999?text=" + encodeURIComponent(msg)} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white text-xs font-semibold px-3 py-2 rounded-xl hover:bg-[#20bd5a] transition-all">
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
}`;

// ─── FIX PROJECTS COMPONENT — "View All" links to /projects ───
files['components/Projects.tsx'] = `'use client';
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
}`;

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('✅ Written: ' + filePath);
}
console.log('\n🎉 Navigation fixed! Run: npm run dev');