import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.svg'


export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8 md:py-12 border-t border-slate-300">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
            <div className="mb-2">
              {/* Logo */}
              <Link className="inline-flex" href="/" aria-label="pancaronadev">
               <Image
                className=""
                src={Logo}
                width={30}
                height={30}
                alt="Logo"
              />
              </Link>
            </div>
          </div>
          {/* 2nd block - 商品カテゴリー */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-slate-800 font-semibold uppercase underline mb-3">商品カテゴリー</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-slate-800 hover:text-slate-500 transition duration-150 ease-in-out" href="#0">
                  キッチン用品
                </a>
              </li>
              <li>
                <a className="text-slate-800 hover:text-slate-500 transition duration-150 ease-in-out" href="#0">
                  バスルーム用品
                </a>
              </li>
              <li>
                <a className="text-slate-800 hover:text-slate-500 transition duration-150 ease-in-out" href="#0">
                  収納アイテム
                </a>
              </li>
              <li>
                <a className="text-slate-800 hover:text-slate-500 transition duration-150 ease-in-out" href="#0">
                  新商品
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block - お役立ち情報 */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-slate-800 font-semibold uppercase underline mb-3">お役立ち情報</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-slate-800 hover:text-slate-500 transition duration-150 ease-in-out" href="#0">
                  商品の使い方
                </a>
              </li>
              <li>
                <a className="text-slate-800 hover:text-slate-500 transition duration-150 ease-in-out" href="#0">
                  よくある質問
                </a>
              </li>
              <li>
                <a className="text-slate-800 hover:text-slate-500 transition duration-150 ease-in-out" href="#0">
                  お手入れ方法
                </a>
              </li>
              <li>
                <a className="text-slate-800 hover:text-slate-500 transition duration-150 ease-in-out" href="#0">
                  ブログ
                </a>
              </li>
            </ul>
          </div>
          {/* 4th block - ブランド理念 */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-slate-800 font-semibold uppercase underline mb-3">ブランド理念</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-slate-800 hover:text-slate-500 transition duration-150 ease-in-out" href="#0">
                  実用性を最優先に
                </a>
              </li>
              <li>
                <a className="text-slate-800 hover:text-slate-500 transition duration-150 ease-in-out" href="#0">
                  高コスパなものづくり
                </a>
              </li>
              <li>
                <a className="text-slate-800 hover:text-slate-500 transition duration-150 ease-in-out" href="#0">
                  日本基準の品質管理
                </a>
              </li>
              <li>
                <a className="text-slate-800 hover:text-slate-500 transition duration-150 ease-in-out" href="#0">
                  簡素で美しい佇まい
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block - 会社情報 */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-slate-800 font-semibold uppercase underline mb-3">会社情報</h6>
            <ul className="text-sm space-y-2">
              <li>
                <Link className="text-slate-800 hover:text-slate-500 transition duration-150 ease-in-out" href="/aboutus">
                  MONONESTについて
                </Link>
              </li>
              <li>
                <a className="text-slate-800 hover:text-slate-500 transition duration-150 ease-in-out" href="#0">
                  お問い合わせ
                </a>
              </li>
              <li>
                <a className="text-slate-800 hover:text-slate-500 transition duration-150 ease-in-out" href="#0">
                  採用情報
                </a>
              </li>
              <li>
                <a className="text-slate-800 hover:text-slate-500 transition duration-150 ease-in-out" href="#0">
                  OEMパートナー募集
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom area */}
        <div className="flex justify-center pb-4 md:pb-8">
          <div className="text-sm text-slate-600">
            © 2025 MONONEST. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
