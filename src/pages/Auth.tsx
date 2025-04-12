
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthForms from '@/components/Auth/AuthForms';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Auth = () => {
  const location = useLocation();
  const activeTab = location.pathname.includes('register') ? 'register' : 'login';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block">
              <h1 className="text-4xl font-bold mb-6 gradient-heading">
                {activeTab === 'login' ? 'Welcome Back!' : 'Join Our Community'}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {activeTab === 'login'
                  ? 'Sign in to continue your learning journey, connect with mentors, and track your progress.'
                  : 'Create an account to start tracking your learning journey, connect with mentors, and join our community of creators.'}
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-blue text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Track Your Progress</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Monitor your learning journey with interactive dashboards and visual progress trackers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-teal text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Connect with Mentors</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Book sessions with experienced mentors who can guide you through your learning journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-orange text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Share Your Success</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Showcase your achievements and inspire others in our community of creators.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <AuthForms activeTab={activeTab as 'login' | 'register'} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
