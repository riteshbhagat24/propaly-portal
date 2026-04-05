'use client';
import { useState } from 'react';
export default function Hero() {
  const [tab, setTab] = useState('Buy');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const search = () => {
    const msg = "Hi Propaly! I want to " + tab + " a property in " + (location || 'Pune') + ". Budget: " + (budget || 'Not specified');
    window.open("https://wa.me/919145596819?text=" + encodeURIComponent(msg), '_blank');
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
            <a href="https://wa.me/919145596819" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-semibold py-3 px-5 rounded-xl hover:bg-[#20bd5a] transition-all text-sm">Chat</a>
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
}