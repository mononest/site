export default function Faqs() {
  // Array of FAQ items
  const faqs = [
    {
      question: 'MONONESTの製品はどのような素材を使用していますか？',
      answer: 'すべての製品は日本基準の品質管理のもと、安全で耐久性のある素材を使用しています。実用性と美しさを両立させるため、厳選された素材のみを採用しています。',
    },
    {
      question: '製品のお手入れ方法を教えてください',
      answer: '各製品には専用のお手入れガイドが付属しています。基本的には中性洗剤で優しく洗い、直射日光を避けて保管してください。',
    },
    {
      question: '配送方法と送料について教えてください',
      answer: '日本国内への配送はヤマト運輸または佐川急便を使用しています。送料は購入金額に応じて異なります。詳細は配送ポリシーページをご覧ください。',
    },
    {
      question: '返品・交換は可能ですか？',
      answer: '未使用品に限り、到着後7日間以内に返品可能です。不良品の場合は送料当社負担で交換いたします。',
    },
    {
      question: 'OEM生産の相談はできますか？',
      answer: '中国の優れたサプライチェーンを活用した高コスパなOEM生産をご提案できます。詳細はお問い合わせフォームよりご連絡ください。',
    },
    {
      question: '製品の保証期間はどのようになっていますか？',
      answer: '通常1年間の製造保証が付いています。保証内容の詳細は製品ごとに異なりますので、取扱説明書をご確認ください。',
    },
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 font-sans" data-aos="fade-up">FAQs</h2>
          </div>
          {/* Grid layout for FAQs */}
          <div className="grid md:grid-cols-2 gap-12">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2" data-aos="fade-up" data-aos-delay={150 + index * 50}>
                <h4 className="text-xl font-sans font-medium">
                  {faq.question}
                </h4>
                <p className="text-slate-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
