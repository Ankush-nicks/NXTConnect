
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProgressCharts from '@/components/Dashboard/ProgressCharts';
import SuccessStories from '@/components/Dashboard/SuccessStories';
import CourseTracker from '@/components/Dashboard/CourseTracker';
import MentorshipScheduler from '@/components/Dashboard/MentorshipScheduler';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, BookOpen, Check, Target } from 'lucide-react';
import { useAuth } from '@/components/Auth/AuthProvider';
import { toast } from 'sonner';

const Dashboard = () => {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (user && !loading) {
      toast.success(`Welcome back, ${user.user_metadata.first_name || 'User'}!`);
    }
  }, [user, loading]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Track your learning progress and achievements</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2">
              <div className="bg-white p-2 rounded-lg shadow-sm flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Target className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Current Goal</p>
                  <p className="font-medium">Frontend Development</p>
                </div>
              </div>
              <div className="bg-white p-2 rounded-lg shadow-sm flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Streak</p>
                  <p className="font-medium">12 days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-brand-blue" />
                  Active Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3</div>
                <div className="text-sm text-gray-500 mt-1">2 in progress, 1 not started</div>
                <div className="mt-4">
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">React Fundamentals</span>
                        <span>75%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-brand-blue rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">TypeScript Mastery</span>
                        <span>40%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-brand-teal rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Node.js Backend</span>
                        <span>0%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-brand-orange rounded-full" style={{ width: '0%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Award className="h-5 w-5 mr-2 text-brand-teal" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2</div>
                <div className="text-sm text-gray-500 mt-1">Completed certifications</div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center p-2 bg-gray-50 rounded-md">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    <div>
                      <p className="font-medium text-sm">HTML & CSS Fundamentals</p>
                      <p className="text-xs text-gray-500">Issued Mar 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 bg-gray-50 rounded-md">
                    <Award className="h-4 w-4 mr-2 text-yellow-500" />
                    <div>
                      <p className="font-medium text-sm">JavaScript Basics</p>
                      <p className="text-xs text-gray-500">Issued Jan 2025</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Target className="h-5 w-5 mr-2 text-brand-orange" />
                  Learning Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">4/6</div>
                <div className="text-sm text-gray-500 mt-1">Monthly goals completed</div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full flex items-center justify-center border-2 border-green-500 mr-2">
                      <Check className="h-3 w-3 text-green-500" />
                    </div>
                    <span className="text-sm">Complete React course module 3</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full flex items-center justify-center border-2 border-green-500 mr-2">
                      <Check className="h-3 w-3 text-green-500" />
                    </div>
                    <span className="text-sm">Build portfolio website</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full flex items-center justify-center border-2 border-gray-300 mr-2"></div>
                    <span className="text-sm">Attend 2 mentorship sessions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Course Tracker */}
          <div className="mb-8">
            <CourseTracker />
          </div>

          {/* Mentorship Scheduler */}
          <div className="mb-8">
            <MentorshipScheduler />
          </div>

          <Tabs defaultValue="progress" className="mb-8">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="progress">Learning Progress</TabsTrigger>
              <TabsTrigger value="community">Community Updates</TabsTrigger>
            </TabsList>
            <TabsContent value="progress">
              <ProgressCharts />
            </TabsContent>
            <TabsContent value="community">
              <SuccessStories />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
