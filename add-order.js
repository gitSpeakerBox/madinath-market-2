const fs = require('fs');
const path = require('path');

const schemasToUpdate = ['branch.ts', 'news.ts', 'product.ts', 'career.ts', 'gallery.ts', 'subBrand.ts', 'heroSlide.ts'];
const schemaDir = 'sanity/schemaTypes';

schemasToUpdate.forEach(file => {
  const filePath = path.join(schemaDir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('orderRankField({ type:')) {
    const typeName = file.replace('.ts', '');
    content = content.replace(
      /(\s*)(defineField\(\{\s*name:\s*['"]isActive['"])/,
      `$1orderRankField({ type: "${typeName}" }),$1$2`
    );
    fs.writeFileSync(filePath, content);
    console.log('Added orderRankField to ' + file);
  }
});
