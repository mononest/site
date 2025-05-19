'use client';

import Image from 'next/image';
import Illustration from '@/public/images/features-illustration.svg';

// Array of carousel items
const features = [
  {
    img: '/images/features-icon-01.svg',
    title: '実用性を最優先に',
    description:
      '毎日の中で本当に役立つこと。それがMONONESTの出発点です。',
  },
  {
    img: '/images/features-icon-02.svg',
    title: 'サプライチェーンの強み',
    description:
      '優れたサプライチェーンと連携し、品質を保ちながらコストを抑えています。',
  },
  {
    img: '/images/features-icon-03.svg',
    title: '日本基準の品質管理',
    description:
      '細部まで妥協しないものづくり。安心と信頼の背景には基準があります。',
  },
  {
    img: '/images/features-icon-04.svg',
    title: 'シンプルで美しいデザイン',
    description:
      '空間に馴染む、使うたびに心地よい、そんな美しさを形に。',
  },
];

export default function Features() {
  return (
    <section className="relative">
      {/* Bg illustration */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none -mt-20 -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          width={1440}
          height={440}
          alt="Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-sans mb-4">4つのものづくり基準</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-slate-500">
              実用性を第一に、日常で本当に役立つものを。<br/>
              日本品質の基準で選び抜き、価格と美しさのバランスを追求しています。
              </p>
            </div>
          </div>
          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="h-auto flex flex-col bg-slate-200 p-6 rounded drop-shadow-md items-center text-center"
              >
                <Image
                  className="mb-3"
                  src={feature.img}
                  width={56}
                  height={56}
                  alt={feature.title}
                />
                <div className="grow">
                  <div className="font-sans font-bold text-xl">
                    {feature.title}
                  </div>
                  <div className="text-slate-500 mb-3">
                    {feature.description}
                  </div>
                </div>
                <div className="text-right">
                  <a
                    className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group"
                    href="#0"
                  >
                    詳細を見る{' '}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
