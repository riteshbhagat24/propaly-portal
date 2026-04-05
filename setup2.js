const fs = require('fs');
const path = require('path');
const files = {};

// ─── UPGRADED NAVBAR WITH MEGA MENU ───
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
      {/* Top Bar */}
      <div className="bg-[#0A1628] text-white text-xs py-1.5 px-4 hidden md:flex justify-between items-center">
        <span>📍 Serving all of Pune's prime micro-markets</span>
        <div className="flex gap-4">
          <a href="tel:+919999999999" className="hover:text-[#C9A84C] transition-colors">📞 +91 99999 99999</a>
          <a href="mailto:vikas@propaly.in" className="hover:text-[#C9A84C] transition-colors">✉️ vikas@propaly.in</a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#C9A84C] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold text-[#0A1628]">Propaly<span className="text-[#C9A84C]">.</span></span>
          </Link>

          {/* Desktop Mega Menu Triggers */}
          <div className="hidden md:flex items-center gap-1">
            {Object.keys(menuItems).map(item => (
              <div key={item} className="relative"
                onMouseEnter={() => setActiveMenu(item)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className={"flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-all " + (activeMenu === item ? 'text-[#C9A84C] bg-[#C9A84C]/5' : 'text-gray-700 hover:text-[#C9A84C]')}>
                  {item}
                  <svg className={"w-3 h-3 transition-transform " + (activeMenu === item ? 'rotate-180' : '')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mega Dropdown */}
                {activeMenu === item && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[480px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Property Type</p>
                      <ul className="space-y-2">
                        {menuItems[item as keyof typeof menuItems].types.map(t => (
                          <li key={t}>
                            <a href="#properties" className="text-sm text-gray-700 hover:text-[#C9A84C] flex items-center gap-2 transition-colors">
                              <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full"></span>{t}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">By Location</p>
                      <ul className="space-y-2">
                        {menuItems[item as keyof typeof menuItems].locations.map(l => (
                          <li key={l}>
                            <a href="#properties" className="text-sm text-gray-700 hover:text-[#C9A84C] flex items-center gap-2 transition-colors">
                              <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full"></span>{l}
                            </a>
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
            <Link href="#about" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#C9A84C] transition-colors">About</Link>
            <Link href="#contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#C9A84C] transition-colors">Contact</Link>
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://wa.me/919999999999?text=Hi%20Propaly!%20I%20need%20help." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#20bd5a] transition-all">
              💬 WhatsApp Us
            </a>
            <a href="tel:+919999999999" className="flex items-center gap-2 border-2 border-[#0A1628] text-[#0A1628] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#0A1628] hover:text-white transition-all">
              📞 Call
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          {Object.keys(menuItems).map(item => (
            <div key={item}>
              <button onClick={() => setActiveMenu(activeMenu === item ? null : item)} className="w-full flex items-center justify-between py-2 font-medium text-gray-700">
                {item}
                <svg className={"w-4 h-4 transition-transform " + (activeMenu === item ? 'rotate-180' : '')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeMenu === item && (
                <div className="pl-4 pb-2 space-y-1">
                  {menuItems[item as keyof typeof menuItems].types.map(t => (
                    <a key={t} href="#properties" className="block text-sm text-gray-600 py-1 hover:text-[#C9A84C]">{t}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="#about" className="block py-2 font-medium text-gray-700">About</Link>
          <Link href="#contact" className="block py-2 font-medium text-gray-700">Contact</Link>
          <a href="https://wa.me/919999999999" target="_blank" className="block text-center bg-[#25D366] text-white font-semibold py-3 rounded-xl mt-2">💬 WhatsApp Us</a>
        </div>
      )}
    </nav>
  );
}`;

// ─── FEATURED PROJECTS SECTION ───
files['components/Projects.tsx'] = `'use client';
const projects = [
  {id:1,name:'Horizon Highgroves',developer:'Horizon Developers',location:'Mundhwa, Pune',type:'2 & 3 BHK',price:'From ₹95 Lakh',status:'New Launch',units:'240 Units',img:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',amenities:['Clubhouse','Swimming Pool','Gym','24/7 Security']},
  {id:2,name:'Kolte Patil iTowers',developer:'Kolte Patil',location:'Wakad, Pune',type:'2 & 3 BHK',price:'From ₹85 Lakh',status:'Under Construction',units:'320 Units',img:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',amenities:['Rooftop Garden','EV Charging','Smart Home','Kids Zone']},
  {id:3,name:'Godrej Nurture',developer:'Godrej Properties',location:'Kharadi, Pune',type:'2, 3 & 4 BHK',price:'From ₹1.2 Cr',status:'Ready to Move',units:'180 Units',img:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',amenities:['Olympic Pool','Concierge','Spa','Helipad']},
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
                    <p className="text-[#C9A84C] font-bold text-xl">{p.price}</p>
                    <p className="text-gray-500 text-xs">{p.type} · {p.units}</p>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">📍 {p.location}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.amenities.map(a => (
                    <span key={a} className="text-xs bg-[#0A1628]/5 text-[#0A1628] px-2 py-1 rounded-lg">✓ {a}</span>
                  ))}
                </div>
                <a href={"https://wa.me/919999999999?text=" + encodeURIComponent("Hi Propaly! I'm interested in " + p.name + " by " + p.developer + " in " + p.location + ". Please share details.")} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#0A1628] text-white font-semibold py-3 rounded-xl hover:bg-[#C9A84C] transition-all text-sm">
                  Get Project Details
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://wa.me/919999999999?text=Show%20me%20all%20new%20projects%20in%20Pune" target="_blank" className="inline-flex items-center gap-2 border-2 border-[#0A1628] text-[#0A1628] font-semibold px-8 py-3 rounded-xl hover:bg-[#0A1628] hover:text-white transition-all">
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}`;

// ─── REVIEWS / TESTIMONIALS SECTION ───
files['components/Reviews.tsx'] = `'use client';
import { useState } from 'react';

const reviews = [
  {id:1,name:'Rahul Sharma',role:'Home Buyer · Viman Nagar',avatar:'RS',rating:5,review:"Propaly made what I thought would be a stressful process completely smooth. Vikas personally took us to 8 site visits and helped us negotiate ₹12 lakhs off the asking price. Couldn't have done it without them.",property:'3 BHK in Viman Nagar · ₹1.75 Cr',date:'March 2024'},
  {id:2,name:'Priya & Aakash Mehta',role:'First-time Buyers · Baner',avatar:'PM',rating:5,review:"As first-time buyers we were completely lost. The Propaly team explained everything — from RERA to loan process to registration. They were patient, transparent, and genuinely cared about finding us the right home.",property:'2 BHK in Baner · ₹88 Lakh',date:'January 2024'},
  {id:3,name:'Sanjay Kulkarni',role:'Investor · Hinjewadi',avatar:'SK',rating:5,review:"I've invested in Pune properties for 10 years. Propaly is among the most honest advisory firms I've worked with. Their market data and locality analysis is top-notch. Bought 2 units based on their recommendation.",property:'2x 2 BHK in Hinjewadi · Investment',date:'December 2023'},
  {id:4,name:'Neha Joshi',role:'NRI Buyer · Koregaon Park',avatar:'NJ',rating:5,review:"Being an NRI, I was worried about buying property remotely. Propaly handled everything end-to-end — virtual tours, paperwork, registration. I've never even visited the property and yet I feel completely secure.",property:'4 BHK Penthouse · ₹3.8 Cr',date:'February 2024'},
  {id:5,name:'Deepak & Sunita Patil',role:'Upgraders · Wakad',avatar:'DP',rating:5,review:"We wanted to upgrade from our 2BHK to a 3BHK but didn't know where to start. Propaly helped us sell our existing flat AND find the new one simultaneously. Seamless execution.",property:'3 BHK in Wakad · ₹1.2 Cr',date:'November 2023'},
  {id:6,name:'Amit Desai',role:'Commercial Buyer · Kharadi',avatar:'AD',rating:5,review:"Bought office space for my startup through Propaly. They understood our requirements — location, footfall, parking — and found the perfect spot within our budget. Great team!",property:'Commercial Office · Kharadi IT Park',date:'October 2023'},
];

function Stars({count}: {count: number}) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_,i) => <span key={i} className="text-[#C9A84C] text-sm">★</span>)}
    </div>
  );
}

export default function Reviews() {
  const [shown, setShown] = useState(3);
  return (
    <section id="reviews" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">⭐ Client Stories</span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mt-2">500+ Families Trust Propaly</h2>
        <p className="text-gray-500 text-lg mt-3 max-w-xl mx-auto">Real experiences from real people who found their piece of Pune with us.</p>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="flex">
            {['RS','PM','SK','NJ'].map(a => (
              <div key={a} className="w-8 h-8 bg-[#0A1628] rounded-full flex items-center justify-center text-white text-xs font-bold -ml-2 first:ml-0 border-2 border-white">{a}</div>
            ))}
          </div>
          <span className="text-gray-600 text-sm"><strong className="text-[#0A1628]">4.9/5</strong> · 200+ Google Reviews</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.slice(0, shown).map(r => (
          <div key={r.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-[#0A1628] rounded-full flex items-center justify-center text-white font-bold text-sm">{r.avatar}</div>
                <div>
                  <p className="font-bold text-[#0A1628] text-sm">{r.name}</p>
                  <p className="text-gray-500 text-xs">{r.role}</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">{r.date}</span>
            </div>
            <Stars count={r.rating} />
            <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-4">"{r.review}"</p>
            <div className="bg-[#C9A84C]/8 rounded-xl px-3 py-2">
              <p className="text-[#0A1628] text-xs font-semibold">🏠 {r.property}</p>
            </div>
          </div>
        ))}
      </div>

      {shown < reviews.length && (
        <div className="text-center mt-8">
          <button onClick={() => setShown(reviews.length)} className="border-2 border-[#0A1628] text-[#0A1628] font-semibold px-8 py-3 rounded-xl hover:bg-[#0A1628] hover:text-white transition-all">
            Read All Reviews →
          </button>
        </div>
      )}

      {/* Google CTA */}
      <div className="mt-10 bg-[#0A1628] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-bold text-lg">We're rated 4.9 ⭐ on Google</p>
          <p className="text-gray-400 text-sm">200+ verified reviews from happy Pune homebuyers</p>
        </div>
        <a href="https://wa.me/919999999999?text=I%20want%20to%20know%20more%20about%20Propaly" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-[#C9A84C] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#b8973b] transition-all">
          Talk to Us Today →
        </a>
      </div>
    </section>
  );
}`;

// ─── LOCALITY GUIDE SECTION ───
files['components/LocalityGuide.tsx'] = `export default function LocalityGuide() {
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
}`;

// ─── UPDATED PAGE.TSX ───
files['app/page.tsx'] = `import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PropertyGrid from '../components/PropertyGrid';
import Projects from '../components/Projects';
import Reviews from '../components/Reviews';
import LocalityGuide from '../components/LocalityGuide';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PropertyGrid />
      <Projects />
      <LocalityGuide />
      <Reviews />
      <CTASection />
      <Footer />
      <a href="https://wa.me/919999999999?text=Hi%20Propaly!" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </main>
  );
}`;

// Write all files
for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('✅ Written: ' + filePath);
}
console.log('\n🎉 Phase 2A complete! Run: npm run dev');