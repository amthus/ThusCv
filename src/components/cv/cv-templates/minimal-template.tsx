import React from 'react';
import type { CVTemplateProps } from './types';
import { formatDate } from '../../../lib/utils';

export function MinimalTemplate({ profile, experiences, education, skills }: CVTemplateProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white p-12" id="cv-content">
      <header className="border-b border-gray-200 pb-6 mb-8">
        <h1 className="text-4xl font-light text-gray-900">{profile.fullName}</h1>
        {profile.title && (
          <p className="mt-2 text-xl text-gray-600">{profile.title}</p>
        )}
        {profile.summary && (
          <p className="mt-4 text-gray-600 leading-relaxed">{profile.summary}</p>
        )}
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-light text-gray-900 mb-4">Experience</h2>
        {experiences.map((exp) => (
          <div key={exp.id} className="mb-6 last:mb-0">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-medium text-gray-900">{exp.position}</h3>
              <p className="text-sm text-gray-500">
                {formatDate(new Date(exp.startDate))} -{' '}
                {exp.endDate ? formatDate(new Date(exp.endDate)) : 'Present'}
              </p>
            </div>
            <p className="text-gray-600">{exp.company}</p>
            {exp.description && (
              <p className="mt-2 text-gray-600">{exp.description}</p>
            )}
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-light text-gray-900 mb-4">Education</h2>
        {education.map((edu) => (
          <div key={edu.id} className="mb-4 last:mb-0">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-medium text-gray-900">{edu.degree}</h3>
              <p className="text-sm text-gray-500">
                {formatDate(new Date(edu.startDate))} -{' '}
                {edu.endDate ? formatDate(new Date(edu.endDate)) : 'Present'}
              </p>
            </div>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-gray-600">{edu.field}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-light text-gray-900 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill.id}
              className="px-3 py-1 border border-gray-200 rounded-full text-sm text-gray-600"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}