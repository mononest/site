import { CalendarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface Milestone {
  year: string;
  event: string;
  description: string;
}

export default function History() {
  const milestones: Milestone[] = [
    {
      year: '2015',
      event: 'ブランド設立',
      description: '東京でMONONESTを設立し、実用性と美学のバランスを探求開始'
    },
    {
      year: '2017',
      event: '初シリーズ発表',
      description: '初のキッチン用品シリーズをリリースし、デザイン賞を受賞'
    },
    {
      year: '2019',
      event: '国際展開',
      description: '中国市場に進出し、上海に事務所を設立'
    },
    {
      year: '2021',
      event: 'ECプラットフォーム',
      description: '自社ECプラットフォームを構築し、グローバル顧客に直接サービスを提供'
    },
    {
      year: '2023',
      event: 'サステナビリティ計画',
      description: '環境に優しい材料の研究開発プロジェクトを開始し、カーボンフットプリントを削減'
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <Image
          src="/images/cta-illustration.svg"
          alt=""
          width={1440}
          height={440}
          className="opacity-15"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-aos="fade-up">
              沿革
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-up" data-aos-delay="100">
            スタートアップから業界のリーダーへと成長した軌跡
          </p>
        </div>
        <div className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="-my-8 divide-y divide-gray-200">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="py-8" data-aos="fade-up" data-aos-delay={150 + index * 50}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-6 flex items-center justify-center rounded-lg bg-indigo-600 p-2">
                      <CalendarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {milestone.year}
                        </h3>
                        <span className="ml-2 rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
                          {milestone.event}
                        </span>
                      </div>
                      <p className="mt-2 text-base text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
