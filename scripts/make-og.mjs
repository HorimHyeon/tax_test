// 기본 공유 이미지(og-image.png, 1080x600)를 public/logo-mark.svg 로 생성한다.
// 사용법: node scripts/make-og.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const mark = readFileSync('public/logo-mark.svg');
const markPng = await sharp(mark, { density: 300 }).resize({ height: 360 }).png().toBuffer();

const font = 'Malgun Gothic, Noto Sans CJK KR, sans-serif';
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="600">
  <defs>
    <radialGradient id="g" cx="85%" cy="0%" r="75%">
      <stop offset="0" stop-color="#d4b45f" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#d4b45f" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="t" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f6e9b9"/>
      <stop offset="1" stop-color="#c9a24f"/>
    </linearGradient>
  </defs>
  <rect width="1080" height="600" fill="#1d4042"/>
  <rect width="1080" height="600" fill="url(#g)"/>
  <text x="440" y="300" font-family="${font}" font-size="110" font-weight="800" fill="url(#t)">범솔루션</text>
  <text x="444" y="350" font-family="Arial, sans-serif" font-size="26" letter-spacing="8" fill="#d4b45f">BEOM SOLUTION</text>
  <rect x="444" y="380" width="520" height="2" fill="#d4b45f" opacity="0.6"/>
  <text x="444" y="432" font-family="${font}" font-size="34" fill="#ffffff">경영컨설팅 | 마케팅 | AI개발</text>
</svg>`;

await sharp(Buffer.from(svg))
  .composite([{ input: markPng, left: 70, top: 120 }])
  .png()
  .toFile('public/og-image.png');
console.log('og-image.png created');
