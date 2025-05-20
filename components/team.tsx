import Image from 'next/image';
import { TeamMember } from '@/types';

interface TeamProps {
  members?: TeamMember[];
}

export default function Team({ members = defaultMembers }: TeamProps) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <Image
          src="/images/features-illustration-02.svg"
          alt=""
          width={1440}
          height={440}
          className="opacity-15"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-aos="fade-up">
              私たちのチーム
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-up" data-aos-delay="100">
            業界のエキスパートが集まり、質の高い生活を創造します
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {members.map((member, index) => (
            <div key={member.name} className="group relative" data-aos="fade-up" data-aos-delay={150 + index * 50}>
              <div className="aspect-[1/1] w-full overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-base text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const defaultMembers: TeamMember[] = [
  {
    name: '佐藤 明',
    role: '創業者兼CEO',
    imageUrl: '/images/team-01.jpg'
  },
  {
    name: '田中 華',
    role: 'プロダクトディレクター',
    imageUrl: '/images/team-02.jpg'
  },
  {
    name: '鈴木 芳恵',
    role: 'デザインディレクター', 
    imageUrl: '/images/team-03.jpg'
  },
  {
    name: '高橋 強',
    role: 'オペレーションディレクター',
    imageUrl: '/images/team-04.jpg'
  }
];
