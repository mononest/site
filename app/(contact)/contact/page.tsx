'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactForm from './contact-form';

export default function ContactPage() {
  // 在组件挂载后初始化 AOS
  useEffect(() => {
    AOS.init({
      once: true, // 只执行一次动画
      disable: 'phone', // 在手机上禁用动画，可选
      duration: 600, // 动画持续时间
      easing: 'ease-out-cubic', // 动画缓动函数
    });
    // 可选：如果页面内容动态变化，可能需要调用 AOS.refresh()
    // AOS.refresh();
  }, []); // 空数组作为依赖，确保只在组件挂载时运行一次

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="lg:flex lg:space-x-20 justify-center">
          {/* Left side */}
          <div className="grow lg:mt-20 mb-12 lg:mb-0 flex flex-col items-center">
            {/* Headline */}
            <h1 className="h2 font-sans mb-8 text-center" data-aos="fade-up">
              お問い合わせ
            </h1>
            {/* List */}
            <ul className="inline-flex flex-col text-lg text-slate-500 space-y-3 text-center">
              <li className="flex items-center" data-aos="fade-up" data-aos-delay="100">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>日々の生活をより快適にする製品づくりを目指しています。</span>
              </li>
              <li className="flex items-center" data-aos="fade-up" data-aos-delay="150">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>商品に関するご質問・ご意見など、お気軽にご連絡ください。</span>
              </li>
              <li className="flex items-center" data-aos="fade-up" data-aos-delay="200">
                <svg
                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>OEMや業務提携のご相談も歓迎いたします。</span>
              </li>
            </ul>
          </div>
          {/* Right side */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
