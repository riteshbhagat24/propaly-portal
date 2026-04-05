const fs = require('fs');
const path = require('path');
const files = {};

// ─── PROJECTS PAGE ───
files['app/projects/page.tsx'] = `'use client';
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
}`;

// ─── PROPERTY DETAIL PAGE ───
files['app/properties/[id]/page.tsx'] = `'use client';
import { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

const properties: Record<string, {
  id: number; title: string; location: string; price: string; pricePerSqft: string;
  type: string; beds: number; baths: number; area: string; tag: string;
  img: string; developer: string; possession: string; totalFloors: number;
  facing: string; furnishing: string; parking: string; description: string;
  amenities: string[]; nearbyPlaces: {name: string; distance: string; type: string}[];
}> = {
  '1': {
    id:1, title:'Luxury 3 BHK in Viman Nagar', location:'Viman Nagar, Pune 411014',
    price:'1.85 Cr', pricePerSqft:'9,200', type:'Apartment', beds:3, baths:2,
    area:'1,450 sqft', tag:'Featured', img:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    developer:'Horizon Developers', possession:'Ready to Move', totalFloors:18,
    facing:'East', furnishing:'Semi-Furnished', parking:'2 Covered',
    description:'A stunning 3 BHK apartment in the heart of Viman Nagar — Pune most sought-after residential neighbourhood. This premium home offers breathtaking city views, top-tier amenities, and is walking distance from Phoenix Marketcity and Aga Khan Palace. Ideal for families and working professionals who want the best of Pune living.',
    amenities:['Swimming Pool','Gymnasium','Clubhouse','24/7 Security','Power Backup','Lift','Intercom','Visitor Parking','Landscaped Garden','Kids Play Area','Jogging Track','Party Hall'],
    nearbyPlaces:[
      {name:'Phoenix Marketcity',distance:'0.8 km',type:'🛍️ Mall'},
      {name:'Aga Khan Palace',distance:'1.2 km',type:'🏛️ Landmark'},
      {name:'Columbia Asia Hospital',distance:'1.5 km',type:'🏥 Hospital'},
      {name:'Vibgyor High School',distance:'2 km',type:'🏫 School'},
      {name:'Pune Airport',distance:'4 km',type:'✈️ Airport'},
    ],
  },
  '2': {
    id:2, title:'Premium 2 BHK in Baner', location:'Baner, Pune 411045',
    price:'92 Lakh', pricePerSqft:'8,400', type:'Apartment', beds:2, baths:2,
    area:'1,095 sqft', tag:'New Launch', img:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    developer:'Kolte Patil', possession:'Dec 2025', totalFloors:14,
    facing:'West', furnishing:'Unfurnished', parking:'1 Covered',
    description:'A beautifully designed 2 BHK in Baner — one of Pune fastest-growing residential hubs. Located minutes from the IT corridor of Hinjewadi and Balewadi High Street, this home is perfect for young professionals and small families looking for modern living at a smart price point.',
    amenities:['Swimming Pool','Gym','Clubhouse','24/7 Security','Power Backup','Lift','Rooftop Garden','EV Charging','Smart Home Features','Kids Zone'],
    nearbyPlaces:[
      {name:'Balewadi High Street',distance:'1 km',type:'🛍️ Shopping'},
      {name:'Hinjewadi IT Park',distance:'5 km',type:'💼 IT Hub'},
      {name:'Baner Road',distance:'0.3 km',type:'🛣️ Main Road'},
      {name:'Symbiosis College',distance:'3 km',type:'🏫 College'},
      {name:'Westend Mall',distance:'4 km',type:'🛍️ Mall'},
    ],
  },
};

export default function PropertyDetail({ params }: { params: { id: string } }) {
  const [activeImg, setActiveImg] = useState(0);
  const [formData, setFormData] = useState({name:'',phone:'',email:'',message:''});
  const p = properties[params.id] || properties['1'];
  const images = [p.img, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80','https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80'];

  const handleWhatsApp = () => {
    const msg = "Hi Propaly! I am interested in " + p.title + " priced at Rs. " + p.price + " in " + p.location + ". My name is " + (formData.name || 'Not provided') + " and my phone is " + (formData.phone || 'Not provided') + ". Please contact me.";
    window.open("https://wa.me/919999999999?text=" + encodeURIComponent(msg), '_blank');
  };

  return (
    <main>
      <Navbar />
      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#C9A84C]">Home</Link>
            <span>/</span>
            <Link href="/#properties" className="hover:text-[#C9A84C]">Properties</Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">{p.title}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT — Property Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image Gallery */}
              <div className="rounded-2xl overflow-hidden">
                <img src={images[activeImg]} alt={p.title} className="w-full h-72 md:h-96 object-cover" />
                <div className="flex gap-2 mt-2">
                  {images.map((img, i) => (
                    <button key={i} onClick={() => setActiveImg(i)} className={"flex-1 rounded-xl overflow-hidden border-2 transition-all " + (activeImg === i ? 'border-[#C9A84C]' : 'border-transparent')}>
                      <img src={img} alt="" className="w-full h-16 object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Title + Price */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="inline-block bg-[#C9A84C] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">{p.tag}</span>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#0A1628]">{p.title}</h1>
                    <p className="text-gray-500 mt-1 flex items-center gap-1">📍 {p.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-[#C9A84C]">₹{p.price}</p>
                    <p className="text-gray-400 text-sm">₹{p.pricePerSqft}/sqft</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                  {[
                    {label:'Bedrooms', value: p.beds + ' BHK', icon:'🛏'},
                    {label:'Bathrooms', value: p.baths + ' Bath', icon:'🚿'},
                    {label:'Area', value: p.area, icon:'📐'},
                    {label:'Parking', value: p.parking, icon:'🚗'},
                  ].map(s => (
                    <div key={s.label} className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-xl mb-1">{s.icon}</p>
                      <p className="font-bold text-[#0A1628] text-sm">{s.value}</p>
                      <p className="text-gray-400 text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-[#0A1628] mb-4">Property Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  {[
                    {label:'Property Type', value: p.type},
                    {label:'Developer', value: p.developer},
                    {label:'Possession', value: p.possession},
                    {label:'Total Floors', value: p.totalFloors + ' Floors'},
                    {label:'Facing', value: p.facing},
                    {label:'Furnishing', value: p.furnishing},
                  ].map(d => (
                    <div key={d.label}>
                      <p className="text-gray-400">{d.label}</p>
                      <p className="font-semibold text-[#0A1628]">{d.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-[#0A1628] mb-3">About This Property</h2>
                <p className="text-gray-600 leading-relaxed text-sm">{p.description}</p>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-[#0A1628] mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {p.amenities.map(a => (
                    <div key={a} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs flex-shrink-0">✓</span>
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-[#0A1628] mb-4">Nearby Places</h2>
                <div className="space-y-3">
                  {p.nearbyPlaces.map(n => (
                    <div key={n.name} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{n.type.split(' ')[0]}</span>
                        <div>
                          <p className="font-medium text-[#0A1628] text-sm">{n.name}</p>
                          <p className="text-gray-400 text-xs">{n.type.split(' ').slice(1).join(' ')}</p>
                        </div>
                      </div>
                      <span className="text-[#C9A84C] font-semibold text-sm">{n.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Lead Form (Sticky) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                {/* Main Lead Form */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="bg-[#0A1628] p-4 text-white text-center">
                    <p className="font-bold text-lg">Interested in This Property?</p>
                    <p className="text-gray-300 text-sm mt-1">Get a free consultation from Propaly experts</p>
                  </div>
                  <div className="p-5 space-y-3">
                    <input type="text" placeholder="Your Full Name *" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]" />
                    <input type="tel" placeholder="Phone Number *" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]" />
                    <input type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]" />
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A84C]">
                      <option>Purpose of buying</option>
                      <option>Self Use</option>
                      <option>Investment</option>
                      <option>Both</option>
                    </select>
                    <textarea placeholder="Any specific requirements?" rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] resize-none" />
                    <button onClick={handleWhatsApp} className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#20bd5a] transition-all text-sm flex items-center justify-center gap-2">
                      💬 Send Enquiry on WhatsApp
                    </button>
                    <a href="tel:+919999999999" className="w-full flex items-center justify-center gap-2 border-2 border-[#0A1628] text-[#0A1628] font-bold py-3 rounded-xl hover:bg-[#0A1628] hover:text-white transition-all text-sm">
                      📞 Call Propaly Expert
                    </a>
                    <p className="text-center text-xs text-gray-400">🔒 Your details are 100% safe with us</p>
                  </div>
                </div>

                {/* Propaly Badge */}
                <div className="bg-[#C9A84C]/10 rounded-2xl p-4 text-center">
                  <p className="text-[#0A1628] font-bold text-sm">🏆 Propaly Verified Property</p>
                  <p className="text-gray-500 text-xs mt-1">RERA checked · Site visited · Developer verified</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}`;

// ─── CONTACT PAGE ───
files['app/contact/page.tsx'] = `'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({name:'',phone:'',email:'',interest:'',message:''});
  const submit = () => {
    const msg = "Hi Propaly! Contact Form Submission:" +
      " Name: " + form.name +
      " | Phone: " + form.phone +
      " | Email: " + form.email +
      " | Looking for: " + form.interest +
      " | Message: " + form.message;
    window.open("https://wa.me/919999999999?text=" + encodeURIComponent(msg), '_blank');
  };
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <div className="bg-[#0A1628] py-14 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
              <Link href="/" className="hover:text-[#C9A84C]">Home</Link>
              <span>/</span>
              <span className="text-white">Contact Us</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Let's Find Your Perfect Home</h1>
            <p className="text-gray-400 text-lg max-w-2xl">Reach out to Propaly's expert team. We typically respond within 15 minutes during business hours.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left — Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">Send Us a Message</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input type="text" placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">I am looking for</label>
                  <select value={form.interest} onChange={e => setForm({...form, interest: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A84C]">
                    <option value="">Select your requirement</option>
                    <option>Buy a Home</option>
                    <option>Rent a Property</option>
                    <option>Investment Property</option>
                    <option>Sell my Property</option>
                    <option>Commercial Space</option>
                    <option>Just Exploring</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea rows={4} placeholder="Tell us your budget, preferred location, timeline..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] resize-none" />
                </div>
                <button onClick={submit} className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 text-base">
                  💬 Send via WhatsApp
                </button>
                <a href="tel:+919999999999" className="w-full flex items-center justify-center gap-2 bg-[#0A1628] text-white font-bold py-4 rounded-xl hover:bg-[#C9A84C] transition-all text-base">
                  📞 Call Us Directly
                </a>
                <p className="text-center text-xs text-gray-400">We respond within 15 minutes · Mon–Sat 10AM–7PM</p>
              </div>
            </div>

            {/* Right — Info */}
            <div className="space-y-6">
              <div className="bg-[#0A1628] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Visit Our Office</h3>
                <div className="space-y-4 text-gray-300 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">📍</span>
                    <div>
                      <p className="font-semibold text-white">Propaly Realtors</p>
                      <p>Office No. 406, Fourth Floor</p>
                      <p>LMS Finswell, Nr. Bajaj Finserv</p>
                      <p>Viman Nagar, Pune 411014</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-semibold text-white">Call / WhatsApp</p>
                      <a href="tel:+919999999999" className="hover:text-[#C9A84C] transition-colors">+91 99999 99999</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="font-semibold text-white">Email Us</p>
                      <a href="mailto:vikas@propaly.in" className="hover:text-[#C9A84C] transition-colors">vikas@propaly.in</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🕐</span>
                    <div>
                      <p className="font-semibold text-white">Business Hours</p>
                      <p>Monday – Saturday: 10AM – 7PM</p>
                      <p>Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {icon:'⚡',title:'15 Min Response',desc:'We reply fast — always'},
                  {icon:'🔒',title:'100% Confidential',desc:'Your data is safe'},
                  {icon:'🆓',title:'Free Advisory',desc:'No consultation fees'},
                  {icon:'🏆',title:'RERA Registered',desc:'Fully compliant'},
                ].map(f => (
                  <div key={f.title} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
                    <span className="text-2xl">{f.icon}</span>
                    <p className="font-bold text-[#0A1628] text-sm mt-2">{f.title}</p>
                    <p className="text-gray-400 text-xs mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-5 rounded-2xl hover:bg-[#20bd5a] transition-all text-lg w-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat with Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}`;

// ─── UPDATE NAVBAR WITH PAGE LINKS ───
files['components/Footer.tsx'] = `export default function Footer() {
  const links = [
    {label:'Properties in Pune', href:'/#properties'},
    {label:'New Projects', href:'/projects'},
    {label:'Ready to Move', href:'/projects'},
    {label:'Luxury Homes', href:'/#properties'},
    {label:'Contact Us', href:'/contact'},
  ];
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
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#C9A84C]/20 transition-colors text-lg">💬</a>
              <a href="tel:+919999999999" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#C9A84C]/20 transition-colors text-lg">📞</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm">
              {links.map(l => <li key={l.label}><a href={l.href} className="hover:text-[#C9A84C] transition-colors">{l.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><span>📍</span><span>Office No. 406, LMS Finswell, Viman Nagar, Pune 411014</span></li>
              <li><a href="tel:+919999999999" className="hover:text-[#C9A84C] transition-colors">📞 +91 99999 99999</a></li>
              <li><a href="mailto:vikas@propaly.in" className="hover:text-[#C9A84C] transition-colors">✉️ vikas@propaly.in</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2025 Propaly Realtors. All rights reserved. RERA Advisory.</p>
          <div className="flex gap-4">
            <a href="/contact" className="hover:text-[#C9A84C]">Contact</a>
            <a href="/projects" className="hover:text-[#C9A84C]">Projects</a>
            <a href="#" className="hover:text-[#C9A84C]">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}`;

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('✅ Written: ' + filePath);
}
console.log('\n🎉 Phase 2B complete! Run: npm run dev');