import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Users, Award } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useAuth } from '../lib/context/auth-context';

export function HomePage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">ThusCv</h1>
          <div className="space-x-4">
            {user ? (
              <>
                <Link to="/profile">
                  <Button variant="secondary">My Profile</Button>
                </Link>
                <Link to="/cv">
                  <Button>My CV</Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="secondary">Sign In</Button>
                </Link>
                <Link to="/register">
                  <Button>Create Account</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Showcase Your Professional Journey
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Create a standout CV that highlights your skills and experience
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <div className="flex items-center">
                    <FileText className="h-8 w-8 text-blue-600" />
                    <h3 className="ml-3 text-xl font-medium text-gray-900">
                      Easy CV Creation
                    </h3>
                  </div>
                  <p className="mt-4 text-gray-600">
                    Build your professional CV with our intuitive tools and templates
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <div className="flex items-center">
                    <Users className="h-8 w-8 text-blue-600" />
                    <h3 className="ml-3 text-xl font-medium text-gray-900">
                      Profile Evaluation
                    </h3>
                  </div>
                  <p className="mt-4 text-gray-600">
                    Get expert feedback to improve your professional profile
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <div className="flex items-center">
                    <Award className="h-8 w-8 text-blue-600" />
                    <h3 className="ml-3 text-xl font-medium text-gray-900">
                      Job Opportunities
                    </h3>
                  </div>
                  <p className="mt-4 text-gray-600">
                    Apply directly to relevant job and internship positions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}