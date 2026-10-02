import profileData from "@/content/profile.json";

export interface PersonLinks {
  github: string;
  linkedin: string;
  leetcode: string;
  instagram: string;
  resumePdf: string | null;
  website: string;
}

export interface Person {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string | null;
  summary: string;
  availability: string;
  links: PersonLinks;
}

export interface Education {
  school: string;
  degree?: string;
  score?: string;
  cgpa?: string;
  period?: string;
  year?: number;
}

export interface ProjectHighlight {
  text: string;
  verify?: boolean;
  verifyNote?: string;
  keyFacts?: {
    radiusMeters?: number;
    windowMinutes?: number;
  };
}

export interface ProjectLinks {
  live: string | null;
  repo: string | null;
  video: string | null;
}

export type ProjectMetrics = Record<string, string>;

export interface Project {
  id: string;
  featured: boolean;
  name: string;
  tagline: string;
  status?: string;
  stack: string[];
  links: ProjectLinks;
  metrics?: ProjectMetrics;
  deployedOn?: string[];
  problem: string;
  highlights: ProjectHighlight[];
}

export interface OtherProject {
  name: string;
  stack?: string;
  link?: string;
  note: string;
}

export interface Achievement {
  title: string;
  detail: string;
  stats?: {
    solved?: string;
    language?: string;
    profile?: string;
  };
}

export interface Experience {
  role: string;
  org: string;
  period: string;
  points: string[];
}

export interface Skills {
  [category: string]: string[];
}

export interface BeyondCode {
  oneLiner?: string;
  interests?: string[];
}

export interface Profile {
  _note: string;
  person: Person;
  education: Education[];
  projects: Project[];
  otherProjects: OtherProject[];
  achievements: Achievement[];
  experience: Experience[];
  skills: Skills;
  beyondCode: BeyondCode;
  todo: string[];
}

export function getProfile(): Profile {
  return profileData as unknown as Profile;
}

export function getFeaturedProjects(): Project[] {
  return (getProfile().projects as Project[]).filter((p) => p.featured);
}

export function getProjectById(id: string): Project | undefined {
  return (getProfile().projects as Project[]).find((p) => p.id === id);
}
