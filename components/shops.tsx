'use client';

import Image from 'next/image';

export default function Shops() {
  const platforms = [
    {
      name: 'Amazon',
      logo: '/images/amazon.svg',
      url: 'https://www.amazon.co.jp/s?k=MONONEST'
    },
    {
      name: 'Rakuten',
      logo: '/images/rakuten.svg',
      url: 'https://search.rakuten.co.jp/search/mall/MONONEST/'
    },
    {
      name: 'Temu',
      logo: '/images/temu.svg',
      url: 'https://www.temu.com/search_result.html?search_key=MONONEST'
    },
    {
      name: 'Yahoo Shopping',
      logo: '/images/yahoo.svg',
      url: 'https://shopping.yahoo.co.jp/search?p=MONONEST'
    }
  ];

  return (
    <section className="relative border-t border-slate-300">
      {/* Bg gradient: top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-screen bg-gradient-to-b from-indigo-700 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div className="w-full px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-sans" data-aos="fade-up">
              <span className="relative inline-flex h1 bg-clip-text text-transparent bg-gradient-to-tr from-indigo-600 via-indigo-400 to-indigo-200 pb-6">MONONEST</span><br></br>オンラインショップ一覧
            </h2>
          </div>
          
          {/* Platforms grid */}
          <div className="bg-indigo-200 drop-shadow-md bg-opacity-60 rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cors-4 gap-6">
              {platforms.map((platform, index) => (
                <a 
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-all"
                  data-aos="fade-up"
                  data-aos-delay={150 + index * 50}
                >
                  <div className="w-32 h-32 relative mb-4">
                    <Image
                      src={platform.logo}
                      alt={`${platform.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-lg font-medium text-slate-800">
                    {platform.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
