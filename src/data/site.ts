export const SITE = {
  name: '세무·경영 정보 블로그',
  url: 'https://tax-test-ten.vercel.app',
  description: '부가가치세, 종합소득세, 법인세, 소상공인 경영, 정책자금까지 사업자에게 필요한 세무·경영 정보를 쉽게 정리합니다.',
  defaultImage: '/og-image.png',
  locale: 'ko_KR',
};

export const CATEGORIES = {
  vat: { label: '부가가치세', desc: '세금계산서, 매입세액공제, 부가세 신고 실무' },
  'income-tax': { label: '종합소득세', desc: '개인사업자 소득세 신고와 절세 포인트' },
  'corporate-tax': { label: '법인세', desc: '법인 결산, 세무조정, 법인세 신고' },
  'small-biz': { label: '소상공인컨설팅', desc: '창업·운영·경영 개선 컨설팅' },
  'policy-funds': { label: '정책자금', desc: '정부·지자체 지원금과 정책자금 활용법' },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
export const CATEGORY_KEYS = Object.keys(CATEGORIES) as [CategoryKey, ...CategoryKey[]];
