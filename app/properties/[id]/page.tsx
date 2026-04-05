'use client';
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
}