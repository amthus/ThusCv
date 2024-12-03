import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/Button';

const educationSchema = z.object({
  institution: z.string().min(1, 'Institution is required'),
  degree: z.string().min(1, 'Degree is required'),
  field: z.string().min(1, 'Field of study is required'),
  startDate: z.string(),
  endDate: z.string().optional(),
});

type EducationFormData = z.infer<typeof educationSchema>;

interface EducationFormProps {
  onSubmit: (data: EducationFormData) => void;
  defaultValues?: Partial<EducationFormData>;
}

export function EducationForm({ onSubmit, defaultValues }: EducationFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<EducationFormData>({
    resolver: zodResolver(educationSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="institution" className="block text-sm font-medium text-gray-700">
          Institution
        </label>
        <input
          {...register('institution')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.institution && (
          <p className="mt-1 text-sm text-red-600">{errors.institution.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="degree" className="block text-sm font-medium text-gray-700">
          Degree
        </label>
        <input
          {...register('degree')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.degree && (
          <p className="mt-1 text-sm text-red-600">{errors.degree.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="field" className="block text-sm font-medium text-gray-700">
          Field of Study
        </label>
        <input
          {...register('field')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.field && (
          <p className="mt-1 text-sm text-red-600">{errors.field.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            {...register('startDate')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            type="date"
            {...register('endDate')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <Button type="submit">Save Education</Button>
    </form>
  );
}