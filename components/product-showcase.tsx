import ProductCard from '@/components/product-card';
import Illustration from '@/public/images/features-illustration.svg';
import Image from 'next/image';

export default function ProductShowcase() {
  const products = [
    {
      img: '/images/testimonial-01.png',
      name: '折りたたみバスケット',
      description: 'これは表示用のサンプル商品です。',
      specs: 'グレー／ホワイト 45×30×25cm',
      details: '通気性抜群で洗濯物もすっきり。使わない時はコンパクトに折り畳み可能。',
      channel: 'Amazon',
    },
    {
      img: '/images/testimonial-02.png',
      name: '木製カトラリーセット',
      description: 'これは表示用のサンプル商品です。',
      specs: 'ブナ材（無塗装）',
      details: "自然な風合いと滑らかな手触り。日常使いにも、おもてなしにも最適。",
      channel: 'Amazon',
    },
    {
      img: '/images/testimonial-03.png',
      name: 'ソープホルダー',
      description: 'これは表示用のサンプル商品です。',
      specs: '取付方法：両面テープ or 吸盤',
      details: 'マグネット式で壁にぴたっと。水切れ良く、石鹸長持ち。',
      channel: 'Amazon',
    },
    {
      img: '/images/testimonial-04.png',
      name: 'マットブラックマグカップ',
      description: 'これは表示用のサンプル商品です。',
      specs: '容量：300ml',
      details: "耐熱・耐久性に優れたセラミック。指紋がつきにくく、落ち着いた質感。",
      channel: 'Amazon',
    },
    {
      img: '/images/testimonial-01.png', 
      name: '折りたたみバスケット (大)',
      description: 'これは表示用のサンプル商品です。',
      specs: 'グレー／ホワイト 60×40×30cm',
      details: '大容量タイプ。洗濯物やおもちゃの収納に最適。',
      channel: 'Amazon',
    },
    {
      img: '/images/testimonial-02.png',
      name: '木製プレート',
      description: 'これは表示用のサンプル商品です。',
      specs: 'ブナ材（無塗装）直径25cm',
      details: "シンプルなデザインでどんな料理も引き立てます。",
      channel: 'Amazon',
    },
  ];

  return (
    <section className="relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-[120%] before:bg-gradient-to-b before:from-gray-100">
      {/* Illustration */}
      <div
        className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 -mb-24 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          alt="Pricing Illustration"
        />
      </div>
      <div className="pt-12 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl" data-aos="fade-up">
              暮らしに寄り添う、<span className="relative inline-flex bg-clip-text text-transparent bg-gradient-to-tr from-indigo-600 via-indigo-400 to-indigo-200 pb-6">MONONEST</span>の人気商品
            </h2>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-[94rem] justify-center">
          <div
            className="absolute bottom-20 -z-10 -translate-x-36"
            aria-hidden="true"
          >
            <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px] will-change-[filter]" />
          </div>

          {/* Row */}
          <div className="inline-flex w-full flex-nowrap py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] md:py-20">
            {/* Main scroll container */}
            <div className="flex animate-infinite-scroll items-start justify-center md:justify-start [&>*]:mx-3">
              {products.map((product, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={150 + index * 50}>
                  <ProductCard
                    product={product}
                    className="w-[22rem] transition-transform duration-300 hover:scale-125 hover:z-10"
                  >
                    {product.details}
                  </ProductCard>
                </div>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div
              className="flex animate-infinite-scroll items-start justify-center md:justify-start [&>*]:mx-3"
              aria-hidden="true"
            >
              {products.map((product, index) => (
                <div key={index}>
                  <ProductCard
                    product={product}
                    cloned={true}
                    className="w-[22rem] transition-transform duration-300 hover:scale-125 hover:z-10"
                  >
                    {product.details}
                  </ProductCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
