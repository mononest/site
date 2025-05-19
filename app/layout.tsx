import './css/style.css';

// import localFont from "next/font/local";
// Removed Roboto and Montserrat font imports as per instructions

export const metadata = {
  title: 'MONONEST',
  description: 'MONONEST（モノネスト）は、実用性と美しさを両立した生活道具ブランドです。',
  keywords: 'MONONEST, モノネスト, 日用品, ライフスタイル, シンプルな暮らし, デザイン雑貨, 日本品質, 実用的な道具, 高品質生活用品, こだわりのモノ, 暮らしの美学, 実用性重視, 使いやすい, ミニマルデザイン, 家具・雑貨, 生活を整える, 選び抜かれた道具'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased bg-slate-100 text-gray-800 tracking-tight"
      >
        {/* <body className={`${inter.variable} ${hkgrotesk.variable} font-inter antialiased bg-slate-100 text-gray-800 tracking-tight`}> */}
        {/* <body className="font-sans antialiased bg-slate-100 text-gray-800 tracking-tight"> */}
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
