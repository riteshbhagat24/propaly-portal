'use client';
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
    window.open("https://wa.me/919145596819?text=" + encodeURIComponent(msg), '_blank');
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
                <a href="tel:+919145596819" className="w-full flex items-center justify-center gap-2 bg-[#0A1628] text-white font-bold py-4 rounded-xl hover:bg-[#C9A84C] transition-all text-base">
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
                      <a href="tel:+919145596819" className="hover:text-[#C9A84C] transition-colors">+91 91455 96819</a>
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

              <a href="https://wa.me/919145596819" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-5 rounded-2xl hover:bg-[#20bd5a] transition-all text-lg w-full">
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
}