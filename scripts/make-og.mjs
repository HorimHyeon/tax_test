// 기본 공유 이미지(og-image.png, 1080x600)를 public/logo.svg 로 생성한다.
// 사용법: node scripts/make-og.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const logo = readFileSync('public/logo.svg');
const logoPng = await sharp(logo, { density: 300 }).resize(300, 300).png().toBuffer();

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="600">
  <defs>
    <radialGradient id="g" cx="85%" cy="0%" r="70%">
      <stop offset="0" stop-color="#c9a227" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#c9a227" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1080" height="600" fill="#14213d"/>
  <rect width="1080" height="600" fill="url(#g)"/>
  <rect x="380" y="200" width="64" height="6" rx="3" fill="#c9a227"/>
  <text x="380" y="310" font-family="Malgun Gothic, Noto Sans CJK KR, sans-serif" font-size="92" font-weight="800" fill="#ffffff">범솔루션</text>
  <text x="380" y="372" font-family="Malgun Gothic, Noto Sans CJK KR, sans-serif" font-size="32" fill="#c9a227">소상공인을 위한 세무·경영 통합솔루션</text>
  <text x="380" y="428" font-family="Malgun Gothic, Noto Sans CJK KR, sans-serif" font-size="24" fill="#c8ccd8">부가세 · 종합소득세 · 법인세 · 컨설팅 · 정책자금</text>
</svg>`;

await sharp(Buffer.from(svg))
  .composite([{ input: logoPng, left: 56, top: 150 }])
  .png()
  .toFile('public/og-image.png');
console.log('og-image.png created');
