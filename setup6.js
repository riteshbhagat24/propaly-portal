const fs = require('fs');

const logoUrl = 'https://drive.google.com/uc?export=view&id=1gzFsweqCOwmY4N403tvu14j9_GmSox98';

// Fix Navbar logo
let navbar = fs.readFileSync('components/Navbar.tsx', 'utf8');
navbar = navbar.replace(
  `<Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#C9A84C] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold text-[#0A1628]">Propaly<span className="text-[#C9A84C]">.</span></span>
          </Link>`,
  `<Link href="/" className="flex items-center">
            <img src="${logoUrl}" alt="Propaly Realtors" className="h-10 w-auto object-contain" />
          </Link>`
);
fs.writeFileSync('components/Navbar.tsx', navbar);
console.log('✅ Navbar logo updated');

// Fix Footer logo
let footer = fs.readFileSync('components/Footer.tsx', 'utf8');
footer = footer.replace(
  `<div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#C9A84C] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold text-white">Propaly<span className="text-[#C9A84C]">.</span></span>
          </div>`,
  `<div className="mb-4">
            <img src="${logoUrl}" alt="Propaly Realtors" className="h-10 w-auto object-contain brightness-0 invert" />
          </div>`
);
fs.writeFileSync('components/Footer.tsx', footer);
console.log('✅ Footer logo updated');

console.log('\n🎉 Logo updated everywhere! Run: npm run dev');