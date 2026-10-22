// 상담 신청을 Airtable '상담신청' 테이블에 저장하는 Vercel 서버리스 함수.
// 토큰은 Vercel 환경변수 AIRTABLE_TOKEN 에만 보관합니다 (브라우저/GitHub에 노출 금지).
const BASE_ID = 'app5y2JfblbGgFU2o';
const TABLE_ID = 'tblPAQ0JkZbhJLAO0';

const LIMITS = { name: 50, phone: 30, region: 60, content: 2000 };

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }
  const token = process.env.AIRTABLE_TOKEN;
  if (!token) return res.status(500).json({ ok: false, error: 'server_not_configured' });

  const b = typeof req.body === 'string' ? safeParse(req.body) : req.body || {};
  if (b.website) return res.status(200).json({ ok: true }); // 스팸봇용 숨김 필드

  const v = {};
  for (const k of Object.keys(LIMITS)) {
    v[k] = String(b[k] == null ? '' : b[k]).trim();
    if (!v[k] || v[k].length > LIMITS[k]) return res.status(400).json({ ok: false, error: 'invalid_' + k });
  }

  const r = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: { 성함: v.name, 연락처: v.phone, 지역: v.region, 상담내용: v.content, 처리상태: '신규' },
    }),
  });
  if (!r.ok) {
    console.error('airtable_error', r.status, await r.text());
    return res.status(502).json({ ok: false, error: 'airtable_failed' });
  }
  return res.status(200).json({ ok: true });
};

function safeParse(s) {
  try { return JSON.parse(s); } catch (e) { return {}; }
}
