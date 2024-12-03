import type { Profile, Experience, Education, Skill } from '../../../lib/types';

export interface CVTemplateProps {
  profile: Profile;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
}