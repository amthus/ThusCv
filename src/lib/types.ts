export interface User {
  id: string;
  email: string;
}

export interface Profile {
  id: string;
  userId: string;
  fullName: string;
  title?: string;
  summary?: string;
}

export interface Experience {
  id: string;
  profileId: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export interface Education {
  id: string;
  profileId: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
}

export interface Skill {
  id: string;
  profileId: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}