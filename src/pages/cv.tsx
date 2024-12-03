import React, { useState, useEffect } from 'react';
import { useAuth } from '../lib/context/auth-context';
import { CVPreview } from '../components/cv/cv-preview';
import { CVExport } from '../components/cv/cv-export';
import type { Profile, Experience, Education, Skill } from '../lib/types';
import { db } from '../lib/db' 

export function CVPage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    if (user) {
      // Load profile data
      const profileData = db.prepare(
        'SELECT * FROM profiles WHERE user_id = ?'
      ).get(user.id);
      setProfile(profileData);

      // Load experiences
      const experienceData = db.prepare(
        'SELECT * FROM experiences WHERE profile_id = ? ORDER BY start_date DESC'
      ).all(profileData.id);
      setExperiences(experienceData);

      // Load education
      const educationData = db.prepare(
        'SELECT * FROM education WHERE profile_id = ? ORDER BY start_date DESC'
      ).all(profileData.id);
      setEducation(educationData);

      // Load skills
      const skillsData = db.prepare(
        'SELECT * FROM skills WHERE profile_id = ?'
      ).all(profileData.id);
      setSkills(skillsData);
    }
  }, [user]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <CVExport
            profile={profile}
            experiences={experiences}
            education={education}
            skills={skills}
          />
        </div>

        <CVPreview
          profile={profile}
          experiences={experiences}
          education={education}
          skills={skills}
        />
      </div>
    </div>
  );
}