'use client';

import { useState } from 'react';

type FormField = {
  label: string;
  required: boolean;
  type?: 'textarea';
  options?: Array<{ value: string; label: string; }>;
};

const FORM_FIELDS: Record<string, FormField> = {
  name: { label: 'お名前', required: true },
  email: { label: 'メールアドレス', required: true },
  type: { 
    label: 'ご用件', 
    required: true,
    options: [
      { value: '', label: '選択してください' },
      { value: '商品についての質問', label: '商品についての質問' },
      { value: '購入後のサポート', label: '購入後のサポート' },
      { value: 'OEM・業務提携の相談', label: 'OEM・業務提携の相談' },
      { value: 'その他のお問い合わせ', label: 'その他のお問い合わせ' }
    ]
  },
  company: { label: '会社名', required: false },
  phone: { label: '電話番号', required: false },
  message: { label: 'メッセージ内容', required: true, type: 'textarea' }
};

const INITIAL_FORM_DATA = Object.keys(FORM_FIELDS).reduce((acc, key) => ({
  ...acc,
  [key]: ''
}), {} as Record<string, string>);

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setFormData(INITIAL_FORM_DATA);
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

  const renderFormField = (fieldName: keyof typeof FORM_FIELDS, index: number) => {
    const field = FORM_FIELDS[fieldName];
    const delay = 300 + index * 50;

    return (
      <div key={fieldName} data-aos="fade-up" data-aos-delay={delay}>
        <label
          className="block text-sm text-slate-800 font-medium mb-1"
          htmlFor={fieldName}
        >
          {field.label} {field.required && <span className="text-rose-500">*</span>}
        </label>
        {field.type === 'textarea' ? (
          <textarea
            id={fieldName}
            name={fieldName}
            className="form-textarea text-sm py-2 w-full rounded-lg"
            rows={4}
            required={field.required}
            value={formData[fieldName]}
            onChange={handleChange}
          />
        ) : fieldName === 'type' ? (
          <select
            id={fieldName}
            name={fieldName}
            className="form-select py-2 w-full rounded-lg"
            required={field.required}
            value={formData[fieldName]}
            onChange={handleChange}
          >
            {field.options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={fieldName}
            name={fieldName}
            className="form-input text-sm py-2 w-full rounded-lg"
            type={fieldName === 'email' ? 'email' : 'text'}
            required={field.required}
            value={formData[fieldName]}
            onChange={handleChange}
          />
        )}
      </div>
    );
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Bg gradient */}
      <div
        className="absolute inset-0 opacity-90 bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 -z-10 rounded-xl"
        aria-hidden="true"
      />
      <div className="p-6 md:p-8">
        <div className="font-sans text-xl font-bold mb-6 text-center" data-aos="fade-up" data-aos-delay="250">
          お問い合わせフォーム
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {Object.keys(FORM_FIELDS).map((fieldName, index) => 
              renderFormField(fieldName as keyof typeof FORM_FIELDS, index)
            )}
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
  );
} 