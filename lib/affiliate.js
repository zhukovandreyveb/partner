// lib/affiliate.js

// Ваши партнерские данные (замените на реальные)
export const AFFILIATE_CONFIG = {
  vivus: {
    baseUrl: 'https://partner.vivus.ru/click',
    partnerId: 'YOUR_PARTNER_ID', // Замените на свой
    defaultSubId: 'finguide_organic',
    offerId: '1',
  }
};

// Генерация уникального ID для отслеживания
function generateClickId() {
  return `fg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Генерация партнерской ссылки
export function getAffiliateLink(path = '/apply', params = {}) {
  const { vivus } = AFFILIATE_CONFIG;
  
  const urlParams = new URLSearchParams({
    erid: params.erid || 'YOUR_ERID',
    pid: vivus.partnerId,
    offerid: vivus.offerId,
    subid: params.subid || vivus.defaultSubId,
    utm_source: 'finguide',
    utm_medium: params.medium || 'article',
    utm_campaign: params.campaign || 'organic',
    utm_content: params.content || '',
    utm_term: params.position || '',
    click_id: params.click_id || generateClickId(),
  });
  
  return `${vivus.baseUrl}?${urlParams.toString()}`;
}

// Отслеживание клика
export async function trackAffiliateClick(data) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'affiliate_click', {
      event_category: 'Affiliate',
      event_label: data.slug || data.content,
      value: 1,
      medium: data.medium,
      position: data.position,
    });
  }
  
  // Яндекс.Метрика
  if (typeof window !== 'undefined' && window.ym) {
    window.ym('YOUR_METRIKA_ID', 'reachGoal', 'affiliate_click');
  }
}