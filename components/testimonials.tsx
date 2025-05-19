import Testimonial from '@/components/testimonial';
import Illustration from '@/public/images/pricing-illustration.svg';
import Image from 'next/image';

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      img: '/images/testimonial-01.png',
      name: '折りたたみバスケット',
      username: 'これは表示用のサンプル商品です。',
      date: 'グレー／ホワイト 45×30×25cm',
      content:
        '通気性抜群で洗濯物もすっきり。使わない時はコンパクトに折り畳み可能。',
      channel: 'Amazon ',
    },
    {
      img: '/images/testimonial-02.png',
      name: '木製カトラリーセット',
      username: 'これは表示用のサンプル商品です。',
      date: 'ブナ材（無塗装）',
      content:
        "自然な風合いと滑らかな手触り。日常使いにも、おもてなしにも最適。",
      channel: 'Amazon',
    },
    {
      img: '/images/testimonial-03.png',
      name: 'ソープホルダー',
      username: 'これは表示用のサンプル商品です。',
      date: '取付方法：両面テープ or 吸盤',
      content:
        'マグネット式で壁にぴたっと。水切れ良く、石鹸長持ち。',
      channel: 'Amazon',
    },
    {
      img: '/images/testimonial-04.png',
      name: 'マットブラックマグカップ',
      username: 'これは表示用のサンプル商品です。',
      date: '容量：300ml',
      content:
        "耐熱・耐久性に優れたセラミック。指紋がつきにくく、落ち着いた質感。",
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
            <h2 className="text-3xl font-bold md:text-4xl">
              暮らしに寄り添う、MONONESTの人気商品
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
          <div className="group inline-flex w-full flex-nowrap py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] md:py-20">
            <div className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3">
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div
              className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3"
              aria-hidden="true"
            >
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  cloned={true}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
