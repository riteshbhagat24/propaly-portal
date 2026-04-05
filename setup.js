const fs = require('fs');
const path = require('path');

const files = {};

files['app/globals.css'] = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
@import "tailwindcss";
* { scroll-behavior: smooth; }
body { font-family: 'DM Sans', sans-serif; background: #FAF8F4; color: #0A1628; }`;

files['app/layout.tsx'] = `import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Propaly Realtors | Find Your Piece of Pune',
  description: "Pune's trusted real estate advisory.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}`;

files['app/page.tsx'] = `import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PropertyGrid from '../components/PropertyGrid';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PropertyGrid />
      <CTASection />
      <Footer />
      <a href="https://wa.me/91455 96819?text=Hi%20Propaly!" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </main>
  );
}`;

files['components/Navbar.tsx'] = `'use client';
import { useState } from 'react';
import Link from 'next/link';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#C9A84C] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold text-[#0A1628]">Propaly<span className="text-[#C9A84C]">.</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#properties" className="text-gray-600 hover:text-[#C9A84C] font-medium text-sm">Properties</Link>
            <Link href="#services" className="text-gray-600 hover:text-[#C9A84C] font-medium text-sm">Services</Link>
            <Link href="#about" className="text-gray-600 hover:text-[#C9A84C] font-medium text-sm">About</Link>
            <Link href="#contact" className="text-gray-600 hover:text-[#C9A84C] font-medium text-sm">Contact</Link>
          </div>
          <a href="https://wa.me/91455 96819" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#20bd5a] transition-all">
            WhatsApp Us
          </a>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden py-4 border-t border-gray-100 space-y-3">
            <Link href="#properties" className="block text-gray-600 py-2">Properties</Link>
            <Link href="#services" className="block text-gray-600 py-2">Services</Link>
            <Link href="#contact" className="block text-gray-600 py-2">Contact</Link>
            <a href="https://wa.me/91455 96819" target="_blank" className="block text-center bg-[#25D366] text-white font-semibold py-3 rounded-lg">WhatsApp Us</a>
          </div>
        )}
      </div>
    </nav>
  );
}`;

files['components/Hero.tsx'] = `'use client';
import { useState } from 'react';
export default function Hero() {
  const [tab, setTab] = useState('Buy');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const search = () => {
    const msg = "Hi Propaly! I want to " + tab + " a property in " + (location || 'Pune') + ". Budget: " + (budget || 'Not specified');
    window.open("https://wa.me/91455 96819?text=" + encodeURIComponent(msg), '_blank');
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:"url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80')"}} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 via-[#0A1628]/70 to-[#0A1628]/60" />
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-16">
        <div className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#E8C97A] text-sm font-medium px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-[#C9A84C] rounded-full animate-pulse"></span>
          Pune's Trusted Real Estate Advisory
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
          Find Your Piece of <span className="text-[#C9A84C]">Pune.</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          It's more than real estate — it's the vibe, the culture, the lifestyle.
        </p>
        <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 max-w-3xl mx-auto">
          <div className="flex gap-2 mb-4">
            {['Buy','Rent','Invest'].map(t => (
              <button key={t} onClick={() => setTab(t)} className={"flex-1 py-2 rounded-lg font-semibold text-sm transition-all " + (tab === t ? 'bg-[#0A1628] text-white' : 'text-gray-500 hover:bg-gray-100')}>{t}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Location in Pune</label>
              <input type="text" placeholder="e.g. Viman Nagar, Baner..." value={location} onChange={e => setLocation(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Property Type</label>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A84C]">
                <option>Apartment</option><option>Villa</option><option>Plot</option><option>Commercial</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Budget</label>
              <select value={budget} onChange={e => setBudget(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A84C]">
                <option value="">Select budget</option>
                <option>Under 50 Lakh</option><option>50L - 1 Cr</option><option>1 Cr - 2 Cr</option><option>2 Cr - 5 Cr</option><option>Above 5 Cr</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <button onClick={search} className="flex-1 bg-[#0A1628] text-white font-semibold py-3 rounded-xl hover:bg-[#C9A84C] transition-all text-sm">Search Properties</button>
            <a href="https://wa.me/91455 96819" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-semibold py-3 px-5 rounded-xl hover:bg-[#20bd5a] transition-all text-sm">Chat</a>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/70 text-sm">
          <span>✅ <strong className="text-white">500+</strong> Happy Families</span>
          <span>🏙️ <strong className="text-white">20+</strong> Pune Micro-Markets</span>
          <span>⭐ <strong className="text-white">4.9</strong> Google Rating</span>
        </div>
      </div>
    </section>
  );
}`;

files['components/PropertyGrid.tsx'] = `'use client';
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
      <div className="relative overflow-hidden">
        <img src={p.img} alt={p.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className={"absolute top-3 left-3 " + p.tagColor + " text-white text-xs font-semibold px-3 py-1 rounded-full"}>{p.tag}</span>
        <span className="absolute bottom-3 left-3 bg-[#0A1628]/80 text-white text-[10px] px-2 py-0.5 rounded">✓ RERA Registered</span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-[#0A1628] text-base mb-1">{p.title}</h3>
        <p className="text-gray-500 text-xs mb-3">📍 {p.location}</p>
        <div className="flex gap-3 text-gray-500 text-xs border-t border-gray-100 pt-3 pb-3">
          <span>🛏 {p.beds} Beds</span><span>🚿 {p.baths} Baths</span><span>📐 {p.area}</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-[#0A1628]">₹{p.price}</p>
          <a href={"https://wa.me/91455 96819?text=" + encodeURIComponent(msg)} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-[#20bd5a] transition-all">Enquire</a>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {props.map(p => <Card key={p.id} p={p} />)}
      </div>
      <div className="text-center mt-12">
        <a href="https://wa.me/91455 96819?text=Show%20me%20more%20properties" target="_blank" className="inline-flex items-center gap-2 border-2 border-[#0A1628] text-[#0A1628] font-semibold px-8 py-3 rounded-xl hover:bg-[#0A1628] hover:text-white transition-all">View All Properties</a>
      </div>
    </section>
  );
}`;

files['components/CTASection.tsx'] = `export default function CTASection() {
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
              <a href="https://wa.me/91455 96819?text=Hi%20Propaly!%20I%20need%20help." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#20bd5a] transition-all text-lg">Chat on WhatsApp — Free</a>
              <a href="tel:+91455 96819" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-2xl hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-lg">📞 Call Us</a>
            </div>
            <p className="text-gray-500 text-sm mt-6">LMS Finswell, Viman Nagar, Pune · Mon–Sat 10AM–7PM</p>
          </div>
        </div>
      </section>
    </>
  );
}`;

files['components/Footer.tsx'] = `export default function Footer() {
  const links = ['Properties in Pune','New Launches','Ready to Move','Luxury Homes','Investment Picks'];
  return (
    <footer className="bg-[#060e1c] text-gray-400 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#C9A84C] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-white">Propaly<span className="text-[#C9A84C]">.</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">Helping you find not just homes, but a piece of Pune — its vibe, chaos, culture, and charm.</p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/propaly.in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#C9A84C]/20 transition-colors text-lg">📸</a>
              <a href="https://wa.me/91455 96819" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#C9A84C]/20 transition-colors text-lg">💬</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm">
              {links.map(l => <li key={l}><a href="#" className="hover:text-[#C9A84C] transition-colors">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><span>📍</span><span>Office No. 406, LMS Finswell, Viman Nagar, Pune 411014</span></li>
              <li><a href="tel:+91455 96819" className="hover:text-[#C9A84C] transition-colors">📞 +91 99999 99999</a></li>
              <li><a href="mailto:vikas@propaly.in" className="hover:text-[#C9A84C] transition-colors">✉️ vikas@propaly.in</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2025 Propaly Realtors. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#C9A84C]">Privacy Policy</a>
            <a href="#" className="hover:text-[#C9A84C]">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
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
console.log('\n🎉 All files written! Now run: npm run dev');