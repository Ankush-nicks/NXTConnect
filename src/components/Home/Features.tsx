
import React from 'react';
import { Award, BarChart, Users, Calendar, MessageSquare, ShieldCheck } from 'lucide-react';

const features = [
  {
    name: 'Learning Progress Tracker',
    description: 'Track your course progress, upload certificates, and showcase completed projects to visualize your growth.',
    icon: Award,
    color: 'text-brand-blue',
    bgColor: 'bg-blue-50'
  },
  {
    name: 'Interactive Dashboard',
    description: 'Visualize your learning journey with dynamic charts, milestone timelines, and achievement badges.',
    icon: BarChart,
    color: 'text-brand-teal',
    bgColor: 'bg-teal-50'
  },
  {
    name: 'Community & Success Stories',
    description: 'Share your achievements, connect with peers, and learn from success stories in our growing community.',
    icon: Users,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    name: 'Mentorship Calendar',
    description: 'Book sessions with student-mentors who are ahead in your learning path to get personalized guidance.',
    icon: Calendar,
    color: 'text-brand-orange',
    bgColor: 'bg-orange-50'
  },
  {
    name: 'AI Doubt Solver',
    description: 'Get instant answers to your questions using our integrated AI assistant to overcome learning roadblocks.',
    icon: MessageSquare,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    name: 'Secure & Private',
    description: 'Control the visibility of your profile information with public/private toggles for each section.',
    icon: ShieldCheck,
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need to <span className="gradient-heading">succeed</span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our platform offers all the tools you need to track your learning journey, connect with mentors, and build your personal brand.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow card-shadow"
              >
                <div className={`absolute top-8 left-8 ${feature.bgColor} rounded-md p-2`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} aria-hidden="true" />
                </div>
                <div className="mt-8 pt-4">
                  <h3 className="text-xl font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
