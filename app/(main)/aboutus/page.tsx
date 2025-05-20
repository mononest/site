export const metadata = {
  title: 'MONONESTについて',
  description: 'MONONEST（モノネスト）は、実用性と美しさを両立した生活道具ブランドです',
  keywords: 'MONONEST, モノネスト, 日用品, ライフスタイル, シンプルな暮らし, デザイン雑貨, 日本品質, 実用的な道具, 高品質生活用品, こだわりのモノ, 暮らしの美学'
};

import Hero from '@/components/hero';
import Team from '@/components/team';
import Values from '@/components/values';
import History from '@/components/history';
import Cta from '@/components/cta';

export default function About() {
  return (
    <>
      <Hero 
        title={<><span className="relative inline-flex h1 bg-clip-text text-transparent bg-gradient-to-tr from-indigo-600 via-indigo-400 to-indigo-200 pb-6">MONONEST</span>について</>}
        subtitle="私たちのストーリーと理念をご紹介します"
        showButton={false}
      />
      <Values />
      <History />
      <Team />
      <Cta />
    </>
  );
}
