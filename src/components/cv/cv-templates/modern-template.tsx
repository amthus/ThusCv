import React from 'react';
import type { CVTemplateProps } from './types';
import { formatDate } from '../../../lib/utils';

export function ModernTemplate({ profile, experiences, education, skills }: CVTemplateProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden" id="cv-content">
      <div className="bg-blue-600 px-8 py-12 text-white">
        <h1 className="text-4xl font-bold">{profile.fullName}</h1>
        {profile.title && (
          <p className="mt-2 text-xl opacity-90">{profile.title}</p>
        )}
      </div>

      {profile.summary && (
        <div className="px-8 py-6 border-b border-gray-200">
          <p className="text-gray-600 leading-relaxed">{profile.summary}</p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-8 px-8 py-6">
        <div className="col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-8 last:mb-0">
              <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
              <p className="text-blue-600 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-500 mt-1">
                {formatDate(new Date(exp.startDate))} -{' '}
                {exp.endDate ? formatDate(new Date(exp.endDate)) : 'Present'}
              </p>
              {exp.description && (
                <p className="mt-3 text-gray-600 leading-relaxed">{exp.description}</p>
              )}
            </div>
          ))}
        </div>

        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-4 last:mb-0">
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-blue-600">{edu.institution}</p>
                <p className="text-gray-600 text-sm">{edu.field}</p>
                <p className="text-sm text-gray-500">
                  {formatDate(new Date(edu.startDate))} -{' '}
                  {edu.endDate ? formatDate(new Date(edu.endDate)) : 'Present'}
                </p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="space-y-2">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                >
                  {skill.name}
                  <span className="text-blue-400 ml-1">• {skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}