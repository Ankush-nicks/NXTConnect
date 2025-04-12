
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl max-w-full break-words">
                <span className="block xl:inline">Build your skills and</span>{' '}
                <span className="block gradient-heading xl:inline">grow your brand</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 max-w-full break-words">
                Connect with mentors, showcase your achievements, and join a community of aspiring creators on their learning journey.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link to="/auth/register">
                    <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-blue hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                      Get started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/mentorship">
                    <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-blue bg-white hover:bg-gray-50 hover:text-brand-blue md:py-4 md:text-lg md:px-10">
                      Find a mentor
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-gradient-to-r from-brand-blue/10 to-brand-teal/10 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center p-8">
          <div className="grid grid-cols-2 gap-4 max-w-lg">
            <div className="bg-white p-4 rounded-lg shadow-md transform rotate-2 hover-scale">
              <Award className="h-8 w-8 text-brand-blue mb-2" />
              <h3 className="text-lg font-semibold">Track Progress</h3>
              <p className="text-sm text-gray-500">Visualize your learning journey</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md transform -rotate-2 hover-scale">
              <Users className="h-8 w-8 text-brand-teal mb-2" />
              <h3 className="text-lg font-semibold">Join Community</h3>
              <p className="text-sm text-gray-500">Connect with like-minded creators</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md transform -rotate-1 hover-scale">
              <Calendar className="h-8 w-8 text-brand-orange mb-2" />
              <h3 className="text-lg font-semibold">Book Mentors</h3>
              <p className="text-sm text-gray-500">Get guidance from experts</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md transform rotate-1 hover-scale">
              <svg className="h-8 w-8 text-purple-500 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16.5C14.21 16.5 16 14.71 16 12.5H8C8 14.71 9.79 16.5 12 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 8.5C8 10.71 9.79 12.5 12 12.5C14.21 12.5 16 10.71 16 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 20.5V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 8.5V4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 22.5C17.523 22.5 22 18.023 22 12.5C22 6.977 17.523 2.5 12 2.5C6.477 2.5 2 6.977 2 12.5C2 18.023 6.477 22.5 12 22.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="text-lg font-semibold">AI Assistant</h3>
              <p className="text-sm text-gray-500">Get instant help with your doubts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
