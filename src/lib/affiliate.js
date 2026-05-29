// lib/affiliate.js

// Ваши партнерские данные (замените на реальные)
export const AFFILIATE_CONFIG = {
  vivus: {
    baseUrl: 'https://partner.vivus.ru/click',
    partnerId: 'YOUR_PARTNER_ID', // Замените на свой
    defaultSubId: 'finguide_organic',
    offerId: '1', // ID оффера
  }
};

// Генерация партнерской ссылки
export function getAffiliateLink(path, params = {}) {
  const { vivus } = AFFILIATE_CONFIG;
  
  const urlParams = new URLSearchParams({
    erid: params.erid || 'YOUR_ERID', // ID рекламного кабинета
    subid: params.subid || vivus.defaultSubId,
    utm_source: 'finguide',
    utm_medium: params.medium || 'article',
    utm_campaign: params.campaign || 'organic',
    utm_content: params.content || '',
    click_id: params.click_id || generateClickId(),
  });
  
  return `${vivus.baseUrl}?${urlParams.toString()}`;
}

// Генерация уникального ID для отслеживания
function generateClickId() {
  return `fg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Отслеживание клика (опционально - своя аналитика)
export async function trackAffiliateClick(data) {
  // Можно отправить в свою БД или Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'affiliate_click', {
      event_category: 'Affiliate',
      event_label: data.slug,
      value: 1
    });
  }
}