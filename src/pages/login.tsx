import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/auth/LoginForm';
import { AuthLayout } from '../components/auth/auth-layout';

export function LoginPage() {
  return (
    <AuthLayout
      title="Sign in to your account"
      subtitle={
        <>
          Or{' '}
          <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
            create a new account
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthLayout>
  );
}