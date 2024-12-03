import React from 'react';
import type { Profile, Experience, Education, Skill } from '../../lib/types';
import { formatDate } from '../../lib/utils';

interface CVPreviewProps {
  profile: Profile;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
}

export function CVPreview({ profile, experiences, education, skills }: CVPreviewProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-8 py-6 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">{profile.fullName}</h1>
        {profile.title && (
          <p className="mt-2 text-xl text-gray-600">{profile.title}</p>
        )}
        {profile.summary && (
          <p className="mt-4 text-gray-600">{profile.summary}</p>
        )}
      </div>

      <div className="px-8 py-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
        {experiences.map((exp) => (
          <div key={exp.id} className="mb-6 last:mb-0">
            <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-500">
              {formatDate(new Date(exp.startDate))} -{' '}
              {exp.endDate ? formatDate(new Date(exp.endDate)) : 'Present'}
            </p>
            {exp.description && (
              <p className="mt-2 text-gray-600">{exp.description}</p>
            )}
          </div>
        ))}
      </div>

      <div className="px-8 py-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
        {education.map((edu) => (
          <div key={edu.id} className="mb-6 last:mb-0">
            <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-gray-600">{edu.field}</p>
            <p className="text-sm text-gray-500">
              {formatDate(new Date(edu.startDate))} -{' '}
              {edu.endDate ? formatDate(new Date(edu.endDate)) : 'Present'}
            </p>
          </div>
        ))}
      </div>

      <div className="px-8 py-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill.id}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {skill.name} - {skill.level}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}