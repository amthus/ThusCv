import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../components/auth/register-form';
import { AuthLayout } from '../components/auth/auth-layout';


export function RegisterPage() {
  return (
    <AuthLayout
      title="Create your account"
      subtitle={
        <>
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in
          </Link>
        </>
      }
    >
      <RegisterForm />
    </AuthLayout>
  );
}