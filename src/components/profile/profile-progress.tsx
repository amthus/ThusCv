import React from 'react';
import type { Profile, Experience, Education, Skill } from '../../lib/types';
import { CheckCircle2, Circle } from 'lucide-react';

interface ProfileProgressProps {
  profile: Profile;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
}

interface ProgressItem {
  label: string;
  isComplete: boolean;
}

export function ProfileProgress({ profile, experiences, education, skills }: ProfileProgressProps) {
  const progressItems: ProgressItem[] = [
    {
      label: 'Basic Information',
      isComplete: Boolean(profile.fullName && profile.title),
    },
    {
      label: 'Professional Summary',
      isComplete: Boolean(profile.summary),
    },
    {
      label: 'Work Experience',
      isComplete: experiences.length > 0,
    },
    {
      label: 'Education',
      isComplete: education.length > 0,
    },
    {
      label: 'Skills',
      isComplete: skills.length > 0,
    },
  ];

  const completedItems = progressItems.filter((item) => item.isComplete).length;
  const progressPercentage = (completedItems / progressItems.length) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Profile Completion</h3>
        <span className="text-2xl font-bold text-blue-600">{Math.round(progressPercentage)}%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-blue-600 rounded-full h-2 transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="space-y-3">
        {progressItems.map((item) => (
          <div key={item.label} className="flex items-center text-gray-700">
            {item.isComplete ? (
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
            ) : (
              <Circle className="h-5 w-5 text-gray-400 mr-2" />
            )}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}