'use client';
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
          <a href="tel:+919145596819" className="hover:text-[#C9A84C]">📞 +91 91455 96819</a>
          <a href="mailto:vikas@propaly.in" className="hover:text-[#C9A84C]">✉️ vikas@propaly.in</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <img src="https://drive.google.com/uc?export=view&id=1gzFsweqCOwmY4N403tvu14j9_GmSox98" alt="Propaly Realtors" className="h-10 w-auto object-contain" />
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
                      <a href="https://wa.me/919145596819" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-[#20bd5a] transition-all">
                        💬 Talk to an Expert on WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link href="/contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#C9A84C] transition-colors">Contact</Link>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="https://wa.me/919145596819?text=Hi%20Propaly!" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#20bd5a] transition-all">
              💬 WhatsApp Us
            </a>
            <Link href="tel:+919145596819" className="flex items-center gap-2 border-2 border-[#0A1628] text-[#0A1628] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#0A1628] hover:text-white transition-all">
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
          <a href="https://wa.me/919145596819" target="_blank" className="block text-center bg-[#25D366] text-white font-semibold py-3 rounded-xl mt-2">💬 WhatsApp Us</a>
        </div>
      )}
    </nav>
  );
}