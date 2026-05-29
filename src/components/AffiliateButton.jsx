'use client';

import { useState } from 'react';
import { getAffiliateLink, trackAffiliateClick } from '@/lib/affiliate';

export default function AffiliateButton({ 
  children, 
  slug = 'home',
  variant = 'primary',
  className = '',
  ...props 
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Отслеживаем клик
    await trackAffiliateClick({ slug });
    
    // Получаем партнерскую ссылку
    const affiliateLink = getAffiliateLink('/apply', {
      content: slug,
      medium: 'button'
    });
    
    // Открываем в новой вкладке
    window.open(affiliateLink, '_blank');
    setIsLoading(false);
  };

  const variants = {
    primary: 'bg-green-600 hover:bg-green-700 text-white',
    secondary: 'bg-white border-2 border-green-600 text-green-600 hover:bg-green-50',
    gradient: 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${variants[variant]} ${className}`}
      {...props}
    >
      {isLoading ? 'Перенаправление...' : children}
    </button>
  );
}