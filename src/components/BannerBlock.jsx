'use client';

import Image from 'next/image';
import { getAffiliateLink, trackAffiliateClick } from '../../lib/affiliate';

export default function BannerBlock({
  desktop = '/banners/banner-728x90.png',
  mobile = '/banners/banner-300x280.png',
  side = false,
  content = 'banner',
}) {
  const handleClick = () => {
    const position = side ? 'sidebar' : 'inline';
    trackAffiliateClick({ content, medium: 'banner', position });
    const link = getAffiliateLink('/apply', { content, medium: 'banner', position });
    window.open(link, '_blank');
  };

  // БОКОВОЙ БАННЕР
  if (side) {
    return (
      <div className="sticky top-28 hidden xl:block cursor-pointer" onClick={handleClick}>
        <div className="relative mx-auto w-[300px] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg hover:-translate-y-1">
          <div className="relative aspect-[300/600]">
            <Image
              src="/banners/banner-300x600.png"
              alt="Реклама займов Vivus"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    );
  }

  // ОБЫЧНЫЙ INLINE БАННЕР
  return (
    <div className="my-8 flex justify-center cursor-pointer" onClick={handleClick}>
      {/* DESKTOP */}
      <div className="hidden md:block">
        <div className="relative w-[728px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
          <div className="relative aspect-[728/90]">
            <Image
              src={desktop}
              alt="Реклама займов Vivus"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="block md:hidden">
        <div className="relative w-[300px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
          <div className="relative aspect-[300/280]">
            <Image
              src={mobile}
              alt="Реклама займов Vivus"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}