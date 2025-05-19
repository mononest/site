export const metadata = {
  title: 'MONONEST',
  description: 'MONONEST（モノネスト）は、実用性と美しさを両立した生活道具ブランドです。',
  keywords: 'MONONEST, モノネスト, 日用品, ライフスタイル, シンプルな暮らし, デザイン雑貨, 日本品質, 実用的な道具, 高品質生活用品, こだわりのモノ, 暮らしの美学, 実用性重視, 使いやすい, ミニマルデザイン, 家具・雑貨, 生活を整える, 選び抜かれた道具'
};

import Hero from '@/components/hero';
import Testimonials from '@/components/testimonials';
import Features from '@/components/features';
import Features02 from '@/components/features-02';
import FaeturedProjects from '@/components/featured-projects';
import Faqs from '@/components/faqs';
import Cta from '@/components/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Features />
      <Features02 />
      <FaeturedProjects />
      <Faqs />
      <Cta />
    </>
  );
}
