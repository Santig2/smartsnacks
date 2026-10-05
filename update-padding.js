const fs = require('fs');
const files = [
  'src/components/sections/testimonials-section.tsx',
  'src/components/sections/meet-crafter.tsx',
  'src/components/sections/join-club.tsx',
  'src/components/sections/featured-products.tsx',
  'src/components/sections/community-lifestyle.tsx',
  'src/components/sections/choose-your-goal.tsx',
  'src/components/sections/brand-pillars.tsx'
];
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/className="(scroll-mt-24 )?py-24 bg-/g, 'className="$1py-32 sm:py-40 bg-');
  fs.writeFileSync(f, content);
});

// FAQ Section
let faq = fs.readFileSync('src/components/sections/faq-section.tsx', 'utf8');
faq = faq.replace('py-20 sm:py-28', 'py-32 sm:py-40');
fs.writeFileSync('src/components/sections/faq-section.tsx', faq);

// Featured Categories
let featCat = fs.readFileSync('src/components/sections/featured-categories.tsx', 'utf8');
featCat = featCat.replace('py-14 sm:py-20', 'py-24 sm:py-32');
fs.writeFileSync('src/components/sections/featured-categories.tsx', featCat);

console.log('Padding updated.');
