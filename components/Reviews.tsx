'use client';
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
}