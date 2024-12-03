import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../ui/Button';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const cvSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  summary: z.string().min(10, 'Summary should be at least 10 characters'),
  education: z.array(z.object({
    institution: z.string().min(1, 'Institution is required'),
    degree: z.string().min(1, 'Degree is required'),
    field: z.string().min(1, 'Field of study is required'),
    startDate: z.string(),
    endDate: z.string().optional(),
    current: z.boolean(),
    description: z.string()
  })),
  experience: z.array(z.object({
    company: z.string().min(1, 'Company is required'),
    position: z.string().min(1, 'Position is required'),
    startDate: z.string(),
    endDate: z.string().optional(),
    current: z.boolean(),
    description: z.string()
  })),
  skills: z.array(z.object({
    name: z.string().min(1, 'Skill name is required'),
    level: z.enum(['Beginner', 'Intermediate', 'Advanced', 'Expert'])
  }))
});

type CVFormData = z.infer<typeof cvSchema>;

export const CVBuilder: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CVFormData>({
    resolver: zodResolver(cvSchema)
  });

  const onSubmit = (data: CVFormData) => {
    console.log(data);
    // TODO: Implement CV submission
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Build Your CV</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            Basic Information
          </h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Professional Title
            </label>
            <input
              {...register('title')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="e.g., Senior Software Engineer"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Professional Summary
            </label>
            <textarea
              {...register('summary')}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Brief overview of your professional background and key achievements"
            />
            {errors.summary && (
              <p className="mt-1 text-sm text-red-600">{errors.summary.message}</p>
            )}
          </div>
        </section>

        <Button type="submit" className="mt-8">
          Save CV
        </Button>
      </form>
    </div>
  );
};