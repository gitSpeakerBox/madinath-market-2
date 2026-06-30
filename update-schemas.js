const fs = require('fs');
const path = require('path');

const schemasToUpdate = ['branch.ts', 'news.ts', 'product.ts', 'career.ts', 'gallery.ts'];
const schemaDir = 'sanity/schemaTypes';

schemasToUpdate.forEach(file => {
  const filePath = path.join(schemaDir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Add the imports if not present
  if (!content.includes('@sanity/orderable-document-list')) {
    content = content.replace(
      /import \{ defineField, defineType \} from "sanity";/,
      `import { defineField, defineType } from "sanity";\nimport { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";`
    );
  }

  // Remove the old simple order field
  content = content.replace(
    /\s*defineField\(\{\s*name:\s*"order",\s*title:\s*"Display Order",\s*type:\s*"number",\s*description:\s*"Lower numbers appear first",\s*initialValue:\s*1,\s*\}\),/g,
    ''
  );

  // Add the orderRankField just before isActive or at the end
  if (!content.includes('orderRankField')) {
    const typeName = file.replace('.ts', '');
    content = content.replace(
      /(\s*)(defineField\(\{\s*name:\s*"isActive")/,
      `$1orderRankField({ type: "${typeName}" }),$1$2`
    );
  }

  // Replace orderings block
  // Find everything between orderings: [ and ],
  content = content.replace(/orderings:\s*\[[\s\S]*?\],/, 'orderings: [orderRankOrdering],');

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
