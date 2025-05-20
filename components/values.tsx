import { CheckIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface ValueItem {
  name: string;
  description: string;
}

export default function Values() {
  const values: ValueItem[] = [
    {
      name: '実用性最優先',
      description: '全ての製品は厳格なテストを経て、日常の使用ニーズを満たします'
    },
    {
      name: 'シンプルな美学',
      description: '余分なデザインを排除し、機能と形の純粋さを保ちます'
    },
    {
      name: '品質への誓い',
      description: '厳選された材料と精巧な技術で、長持ちする製品を作ります'
    },
    {
      name: 'ユーザー中心',
      description: 'ユーザーの真のニーズから出発し、製品体験を最適化します'
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/features-illustration-02.svg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-aos="fade-up">
              私たちの価値観
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-up" data-aos-delay="100">
            これらの原則が私たちのすべての意思決定とデザインを導きます
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {values.map((value, index) => (
              <div key={value.name} className="relative pl-16" data-aos="fade-up" data-aos-delay={150 + index * 50}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {value.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
