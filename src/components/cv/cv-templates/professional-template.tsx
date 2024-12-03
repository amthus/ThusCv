import React from 'react';
import type { CVTemplateProps } from './types';
import { formatDate } from '../../../lib/utils';

export function ProfessionalTemplate({ profile, experiences, education, skills }: CVTemplateProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg" id="cv-content">
      <div className="px-8 py-12 bg-gray-50 border-b-4 border-blue-600">
        <h1 className="text-4xl font-bold text-gray-900">{profile.fullName}</h1>
        {profile.title && (
          <p className="mt-2 text-xl text-gray-600">{profile.title}</p>
        )}
        {profile.summary && (
          <p className="mt-4 text-gray-600 max-w-3xl leading-relaxed">{profile.summary}</p>
        )}
      </div>

      <div className="px-8 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">
            Professional Experience
          </h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-8 last:mb-0">
              <div className="flex justify-between items-baseline mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <p className="text-gray-600">
                  {formatDate(new Date(exp.startDate))} -{' '}
                  {exp.endDate ? formatDate(new Date(exp.endDate)) : 'Present'}
                </p>
              </div>
              {exp.description && (
                <p className="mt-2 text-gray-600 leading-relaxed">{exp.description}</p>
              )}
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-6 last:mb-0">
              <div className="flex justify-between items-baseline mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-blue-600">{edu.institution}</p>
                  <p className="text-gray-600">{edu.field}</p>
                </div>
                <p className="text-gray-600">
                  {formatDate(new Date(edu.startDate))} -{' '}
                  {edu.endDate ? formatDate(new Date(edu.endDate)) : 'Present'}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded"
              >
                <span className="font-medium text-gray-900">{skill.name}</span>
                <span className="text-blue-600">{skill.level}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}