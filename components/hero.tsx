import { HeroProps } from '@/types';

export default function Hero({
  title = <>選び方にこたえがある <span className="relative inline-flex h1 bg-clip-text text-transparent bg-gradient-to-tr from-indigo-400 via-indigo-300 to-indigo-200 pb-6">MONO</span></>,
  subtitle = 'ものを選ぶことは、暮らし方を選ぶこと。\n気づかないくらいのちょうど良さを、MONOに込めています。',
  showButton = true,
  buttonText = 'MONONESTについて',
  buttonLink = '/aboutus'
}: HeroProps) {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-sans mb-6" data-aos="fade-up">
              {title}
            </h1>
            <p
              className="text-xl text-slate-500 mb-10 whitespace-pre-line"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {subtitle}
            </p>
            {showButton && (
              <div data-aos="fade-up" data-aos-delay="200">
                <a
                  className="btn text-white bg-indigo-600 hover:bg-indigo-700"
                  href={buttonLink}
                >
                  {buttonText}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
