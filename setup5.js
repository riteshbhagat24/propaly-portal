const fs = require('fs');

// Fix Navbar - correct number everywhere
let navbar = fs.readFileSync('components/Navbar.tsx', 'utf8');
// Replace all variations of the old number
navbar = navbar
  .replaceAll('99999 99999', '91455 96819')
  .replaceAll('919999999999', '919145596819')
  .replaceAll('+91 99999 99999', '+91 91455 96819')
  // Fix duplicate Projects link
  .replace(`            <Link href="/projects" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#C9A84C] transition-colors">Projects</Link>`, '')
  // Fix Call button
  .replace('href="/contact" className="flex items-center gap-2 border-2', 'href="tel:+919145596819" className="flex items-center gap-2 border-2');
fs.writeFileSync('components/Navbar.tsx', navbar);
console.log('✅ Navbar fixed');

// Fix Footer - correct number everywhere
let footer = fs.readFileSync('components/Footer.tsx', 'utf8');
footer = footer
  .replaceAll('99999 99999', '91455 96819')
  .replaceAll('919999999999', '919145596819')
  .replaceAll('+91 99999 99999', '+91 91455 96819');
fs.writeFileSync('components/Footer.tsx', footer);
console.log('✅ Footer fixed');

// Fix Contact page
let contact = fs.readFileSync('app/contact/page.tsx', 'utf8');
contact = contact
  .replaceAll('99999 99999', '91455 96819')
  .replaceAll('919999999999', '919145596819')
  .replaceAll('+91 99999 99999', '+91 91455 96819');
fs.writeFileSync('app/contact/page.tsx', contact);
console.log('✅ Contact page fixed');

// Fix CTASection
let cta = fs.readFileSync('components/CTASection.tsx', 'utf8');
cta = cta
  .replaceAll('99999 99999', '91455 96819')
  .replaceAll('919999999999', '919145596819');
fs.writeFileSync('components/CTASection.tsx', cta);
console.log('✅ CTASection fixed');

console.log('\n🎉 All done! Number updated to +91 91455 96819 everywhere');