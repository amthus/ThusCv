import React, { useState, useEffect } from 'react';
import { useAuth } from '../lib/context/auth-context';
import { ProfileForm } from '../components/profile/profile-form';
import { ExperienceForm } from '../components/profile/experience-form';
import { EducationForm } from '../components/profile/education-form';
import { ProfileProgress } from '../components/profile/profile-progress';
import type { Profile, Experience, Education, Skill } from '../lib/types';
import { db } from '../lib/db';

export function ProfilePage() {
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

      if (profileData) {
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
    }
  }, [user]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
              <ProfileForm />
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h2>
              <ExperienceForm onSubmit={console.log} />
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
              <EducationForm onSubmit={console.log} />
            </div>
          </div>

          <div>
            <ProfileProgress
              profile={profile}
              experiences={experiences}
              education={education}
              skills={skills}
            />
          </div>
        </div>
      </div>
    </div>
  );
}