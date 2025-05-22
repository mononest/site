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
      
      <main className="grow max-w-[100vw] mx-auto">
        {/* 背景插图 */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
          <Image 
            src={Illustration} 
            className="max-w-none" 
            priority
            alt="Hero Illustration" 
          />
        </div>
        {children}
      </main>

      <Footer />
    </>
  )
}
