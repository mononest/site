'use client';

import { useState } from 'react';

export default function SignUp() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      // 確実に type と phone を含めて送信
      const submitData = {
        name: formData.name,
        email: formData.email,
        type: formData.type,
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
      };
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          type: '',
          company: '',
          phone: '',
          message: '',
        });
      } else {
        console.error('送信に失敗しました:', data.error);
        setError(data.error || '送信に失敗しました。しばらく経ってからもう一度お試しください。');
        setSubmitted(false);
      }
    } catch (err) {
      console.error('送信時にエラーが発生しました:', err);
      setError('送信時にエラーが発生しました。インターネット接続をご確認ください。');
      setSubmitted(false);
    }
  };

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
          <div className="relative w-full max-w-md mx-auto">
            {/* Bg gradient */}
            <div
              className="absolute inset-0 opacity-40 bg-gradient-to-t from-transparent to-slate-200 -z-10"
              aria-hidden="true"
            />
            <div className="p-6 md:p-8 bg-white rounded-xl">
              <div className="font-sans text-xl font-bold mb-6 text-center" data-aos="fade-up" data-aos-delay="250">お問い合わせフォーム</div>
              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  {/* お名前（name）※必須 */}
                  <div data-aos="fade-up" data-aos-delay="300">
                    <label
                      className="block text-sm text-slate-800 font-medium mb-1"
                      htmlFor="name"
                    >
                      お名前 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="form-input text-sm py-2 w-full rounded-lg"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  {/* メールアドレス（email）※必須 */}
                  <div data-aos="fade-up" data-aos-delay="350">
                    <label
                      className="block text-sm text-slate-800 font-medium mb-1"
                      htmlFor="email"
                    >
                      メールアドレス <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      className="form-input text-sm py-2 w-full rounded-lg"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  {/* ご用件（type select）※任意 */}
                  <div data-aos="fade-up" data-aos-delay="400">
                    <label
                      className="block text-sm text-slate-800 font-medium mb-1"
                      htmlFor="type"
                    >
                      ご用件 <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="type"
                      name="type"
                      className="form-select py-2 w-full rounded-lg"
                      required
                      value={formData.type}
                      onChange={handleChange}
                    >
                      <option value="">選択してください</option>
                      <option value="商品についての質問">商品についての質問</option>
                      <option value="購入後のサポート">購入後のサポート</option>
                      <option value="OEM・業務提携の相談">OEM・業務提携の相談</option>
                      <option value="その他のお問い合わせ">その他のお問い合わせ</option>
                    </select>
                  </div>
                  {/* 会社名（company）※任意 */}
                  <div data-aos="fade-up" data-aos-delay="450">
                    <label
                      className="block text-sm text-slate-800 font-medium mb-1"
                      htmlFor="company"
                    >
                      会社名
                    </label>
                    <input
                      id="company"
                      name="company"
                      className="form-input text-sm py-2 w-full rounded-lg"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  {/* 電話番号（phone）※任意 */}
                  <div data-aos="fade-up" data-aos-delay="500">
                    <label
                      className="block text-sm text-slate-800 font-medium mb-1"
                      htmlFor="phone"
                    >
                      電話番号
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      className="form-input text-sm py-2 w-full rounded-lg"
                      type="text"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  {/* メッセージ内容（message）※必須 */}
                  <div data-aos="fade-up" data-aos-delay="550">
                    <label
                      className="block text-sm text-slate-800 font-medium mb-1"
                      htmlFor="message"
                    >
                      メッセージ内容 <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea text-sm py-2 w-full rounded-lg"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mt-6" data-aos="fade-up" data-aos-delay="600">
                  <button type="submit" className="btn-sm text-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group">
                    送信する
                  </button>
                </div>
              </form>
              {submitted && (
                <div className="mt-6 text-emerald-700 bg-emerald-50 border border-emerald-300 rounded p-4 text-sm text-center" data-aos="fade-up">
                  送信が完了しました。担当者より折り返しご連絡いたします。
                </div>
              )}
              {error && (
                <div className="mt-6 text-rose-700 bg-rose-50 border border-rose-300 rounded p-4 text-sm text-center" data-aos="fade-up">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
