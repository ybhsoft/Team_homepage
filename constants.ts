import { TeamMember, SectionId } from './types';

export const GITHUB_USERNAME = 'ybhsoft';

export const NAV_LINKS = [
  { label: 'Home', id: SectionId.HOME },
  { label: 'About', id: SectionId.ABOUT },
  { label: 'Updates', id: SectionId.PROJECTS },
  { label: 'Contact', id: SectionId.CONTACT },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Ybhsoft',
    role: 'Founder & Lead Engineer',
    avatar: 'https://avatars.githubusercontent.com/u/1000000?v=4', // Placeholder, replaced by logic if needed
    bio: 'Visionary architect behind the core innovation engine.',
    socials: {
      github: 'https://github.com/ybhsoft',
    }
  },
  {
    name: 'Alex Chen',
    role: 'Creative Director',
    avatar: 'https://picsum.photos/200/200?random=1',
    bio: 'Crafting immersive digital experiences and visual identities.',
  },
  {
    name: 'Sarah Lin',
    role: 'AI Specialist',
    avatar: 'https://picsum.photos/200/200?random=2',
    bio: 'Bridging the gap between human intent and machine intelligence.',
  },
  {
    name: 'David Kim',
    role: 'Full Stack Ninja',
    avatar: 'https://picsum.photos/200/200?random=3',
    bio: 'Building scalable systems from the ground up.',
  }
];

export const SKILL_DATA_EN = [
  { subject: 'Innovation', A: 120, fullMark: 150 },
  { subject: 'Design', A: 98, fullMark: 150 },
  { subject: 'AI/ML', A: 110, fullMark: 150 },
  { subject: 'Cloud', A: 90, fullMark: 150 },
  { subject: 'Security', A: 85, fullMark: 150 },
  { subject: 'DevOps', A: 100, fullMark: 150 },
];

export const SKILL_DATA_ZH = [
  { subject: '创新', A: 120, fullMark: 150 },
  { subject: '设计', A: 98, fullMark: 150 },
  { subject: '人工智能', A: 110, fullMark: 150 },
  { subject: '云技术', A: 90, fullMark: 150 },
  { subject: '安全', A: 85, fullMark: 150 },
  { subject: '运维', A: 100, fullMark: 150 },
];

export const SYSTEM_INSTRUCTION = `You are the AI assistant for "Ybhsoft Innovation" (Chinese: 燧标创新). 
The team's mission is "Turning ideas into reality".
The Github username is "ybhsoft".
Answer questions about the team, their tech stack (React, Node, AI, Cloud), and their philosophy politely and concisely.
If asked about specific projects, mention they specialize in web innovation and AI solutions.
Always maintain a futuristic, professional, yet bold tone.`;