'use client';

import { useState } from 'react';
import { getAffiliateLink, trackAffiliateClick } from '../../lib/affiliate';

export default function AffiliateButton({ 
  children, 
  slug = 'home',
  variant = 'primary',
  position = 'article',
  className = '',
  ...props 
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    await trackAffiliateClick({ slug, medium: 'button', position });
    
    const affiliateLink = getAffiliateLink('/apply', {
      content: slug,
      medium: 'button',
      position: position,
    });
    
    window.open(affiliateLink, '_blank');
    setIsLoading(false);
  };

  const variants = {
    primary: 'bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md',
    secondary: 'bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-xl font-semibold',
    gradient: 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 px-8 py-4 rounded-xl font-bold text-lg shadow-lg'
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`transition-all transform hover:scale-105 ${variants[variant]} ${className}`}
      {...props}
    >
      {isLoading ? 'Перенаправление...' : (children || 'Оформить займ →')}
    </button>
  );
}