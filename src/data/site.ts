export const SITE = {
  name: '범솔루션',
  nameEn: 'BEOM SOLUTION',
  tagline: '경영컨설팅 | 마케팅 | AI개발',
  url: 'https://tax-test-ten.vercel.app',
  description:
    '15년차 세무법인 사무장이자 직접 자영업을 운영하는 대표가 소상공인에게 필요한 경영컨설팅, 마케팅, AI개발 통합솔루션을 제공합니다.',
  about:
    '15년차 세무법인 사무장이자, 소상공인을 위한 컨설팅 회사의 대표입니다. 음식점을 비롯한 자영업을 직접 운영하고 있어, 장부 위의 숫자뿐 아니라 매일 가게를 돌리는 사장님의 현실까지 이해하는 실무형 솔루션을 제공합니다.',
  defaultImage: '/og-image.png',
  logo: '/logo.svg',
  logoMark: '/logo-mark.svg',
  locale: 'ko_KR',
};

export const SERVICES = [
  { label: '경영컨설팅', desc: '세무·재무에 대한 이해를 바탕으로 매출과 비용 구조를 점검하고, 사업 운영 개선 방향을 함께 찾습니다.' },
  { label: '마케팅', desc: '사업의 강점을 고객에게 효과적으로 알릴 수 있도록 온·오프라인 마케팅을 지원합니다.' },
  { label: 'AI개발', desc: '업무 자동화 등 사업에 실제로 도움이 되는 AI 도구와 서비스 개발을 지원합니다.' },
] as const;

export const CATEGORIES = {
  vat: { label: '부가가치세', desc: '세금계산서, 매입세액공제, 부가세 신고 실무' },
  'income-tax': { label: '종합소득세', desc: '개인사업자 소득세 신고와 절세 포인트' },
  'corporate-tax': { label: '법인세', desc: '법인 결산, 세무조정, 법인세 신고' },
  'small-biz': { label: '소상공인컨설팅', desc: '창업·운영·경영 개선 컨설팅' },
  'policy-funds': { label: '정책자금', desc: '정부·지자체 지원금과 정책자금 활용법' },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
export const CATEGORY_KEYS = Object.keys(CATEGORIES) as [CategoryKey, ...CategoryKey[]];
