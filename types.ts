export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  socials?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  PROJECTS = 'projects',
  TEAM = 'team',
  CONTACT = 'contact'
}