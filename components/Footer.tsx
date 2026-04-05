export default function Footer() {
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
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#C9A84C]/20 transition-colors text-lg">💬</a>
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
              <li><a href="tel:+919999999999" className="hover:text-[#C9A84C] transition-colors">📞 +91 99999 99999</a></li>
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
}