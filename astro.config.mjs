import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// 글이 하나도 없는 카테고리 페이지는 noindex 이므로 sitemap 에서 제외한다.
const used = new Set();
for (const f of readdirSync('./src/content/blog')) {
  if (!f.endsWith('.md')) continue;
  const t = readFileSync(`./src/content/blog/${f}`, 'utf8');
  if (/^draft:\s*true/m.test(t)) continue;
  const m = t.match(/^category:\s*(\S+)/m);
  if (m) used.add(m[1]);
}

export default defineConfig({
  site: 'https://tax-test-ten.vercel.app',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => {
        const m = page.match(/\/blog\/category\/([^/]+)\//);
        return !m || used.has(m[1]);
      },
    }),
  ],
});
