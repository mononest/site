export const metadata = {
  title: 'MONONEST',
  description: 'MONONEST（モノネスト）は、実用性と美しさを両立した生活道具ブランドです。',
  keywords: 'MONONEST, モノネスト, 日用品, ライフスタイル, シンプルな暮らし, デザイン雑貨, 日本品質, 実用的な道具, 高品質生活用品, こだわりのモノ, 暮らしの美学, 実用性重視, 使いやすい, ミニマルデザイン, 家具・雑貨, 生活を整える, 選び抜かれた道具'
};

import Hero from '@/components/hero';
import ProductShowcase from '@/components/product-showcase';
import Features from '@/components/features';
import Shops from '@/components/shops';
import Faqs from '@/components/faqs';
import Cta from '@/components/cta';

export default function Home() {
  return (
    <>
      <Hero 
        title={<>選び方にこたえがある <span className="relative inline-flex h1 bg-clip-text text-transparent bg-gradient-to-tr from-indigo-400 via-indigo-300 to-indigo-200 pb-6">MONO</span></>}
        subtitle="ものを選ぶことは、暮らし方を選ぶこと。\n気づかないくらいのちょうど良さを、MONOに込めています。"
      />
      <div className="py-16 md:py-20">
        <ProductShowcase />
      </div>
      <div className="py-16 md:py-20">
        <Features />
      </div>
      <div className="py-16 md:py-20">
        <Shops />
      </div>
      <div className="py-16 md:py-20">
        <Faqs />
      </div>
      <div className="py-16 md:py-20">
        <Cta />
      </div>
    </>
  );
}
