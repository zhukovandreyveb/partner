import Image from 'next/image';

export default function BannerBlock({
  desktop = '/banners/banner-728x90.png',
  mobile = '/banners/banner-300x280.png',
  side = false,
}) {
  // БОКОВОЙ БАННЕР
  if (side) {
    return (
      <div className="sticky top-28 hidden xl:block">

        <div className="relative mx-auto w-[300px] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

          <div className="relative aspect-[300/600]">

            <Image
              src="/banners/banner-300x600.png"
              alt="banner"
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
    <div className="my-8 flex justify-center">

      {/* DESKTOP */}

      <div className="hidden md:block">

        <div className="relative w-[728px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

          <div className="relative aspect-[728/90]">

            <Image
              src={desktop}
              alt="banner"
              fill
              className="object-contain"
              priority
            />

          </div>

        </div>

      </div>

      {/* MOBILE */}

      <div className="block md:hidden">

        <div className="relative w-[300px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

          <div className="relative aspect-[300/280]">

            <Image
              src={mobile}
              alt="banner"
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