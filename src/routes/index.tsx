import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { LoginForm } from '../components/auth/LoginForm';
import { CVBuilder } from '../components/cv/CVBuilder';
import { ProtectedRoute } from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'login',
        element: <LoginForm />
      },
      {
        path: 'cv',
        element: (
          <ProtectedRoute>
            <CVBuilder />
          </ProtectedRoute>
        )
      }
    ]
  }
]);