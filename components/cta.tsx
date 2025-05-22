import Image from 'next/image'
import Link from 'next/link'
import Illustration from '@/public/images/cta-illustration.svg'

interface CtaProps {
  title?: string;
  subtitle?: string;
}

export default function Cta({ title, subtitle }: CtaProps) {
  return (
    <section className="relative border-t border-slate-300">
      {/* Bg gradient: top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-screen bg-gradient-to-b from-indigo-700 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -mt-8 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" alt="Features 01 Illustration" />
      </div>
      <div className="w-full px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20" data-aos="fade-up">
            <h2 className="h2 font-sans">{title || <><span className="relative inline-flex h2 bg-clip-text text-transparent bg-gradient-to-tr from-indigo-600 via-indigo-400 to-indigo-200 pb-6">MONONEST</span>の生活道具で、毎日をもっと快適に</>}</h2>
            {subtitle && <p className="text-xl text-slate-500 mt-4">{subtitle}</p>}
          </div>
          {/* Button */}
          <div className="text-center" data-aos="fade-up">
            <Link className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full sm:w-auto shadow-sm group" href="/contact">
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
