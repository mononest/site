import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '@/public/images/hero-image.png';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-sans mb-6" data-aos="fade-up">
              選び方にこたえがある{' '}
              <span className="relative inline-flexh2 bg-clip-text text-transparent bg-gradient-to-tr from-indigo-400 via-indigo-300 to-indigo-200 pb-6">
                MONO
              </span>
            </h1>
            <p
              className="text-xl text-slate-500 mb-10"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              ものを選ぶことは、暮らし方を選ぶこと。 <br/>
              気づかないくらいのちょうど良さを、MONOに込めています。
            </p>
          </div>
          {/* Hero animation */}
          <iframe
            src="/images/hero-animation.html"
            className="w-full h-[400px] pointer-events-none"
            style={{ border: 'none' }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
