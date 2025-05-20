export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface ValueItem {
  name: string;
  description: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Milestone {
  year: string;
  event: string;
  description: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
}
