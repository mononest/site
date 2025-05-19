export const metadata = {
  title: 'お問い合わせ - MONONEST',
  description: 'MONONESTの製品やサービスに関するお問い合わせページです。ご質問・ご相談はお気軽にどうぞ。',
};
import Image from 'next/image'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import Illustration from '@/public/images/auth-illustration.svg'

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <>
      <Header />
      
      <main className="grow">
        {/* Illustration */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
          <Image src={Illustration} className="max-w-none" priority alt="Hero Illustration" />
        </div>
        {children}
      </main>

      <Footer />
    </>
  )
}
