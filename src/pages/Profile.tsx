
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProfileCard from '@/components/Profile/ProfileCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, BookOpen, FileCode, Upload, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
            <p className="text-gray-600 mt-1">Manage your profile and showcase your achievements</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <ProfileCard />
            </div>
            
            <div className="lg:col-span-2">
              <Tabs defaultValue="courses">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="courses">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Courses
                  </TabsTrigger>
                  <TabsTrigger value="projects">
                    <FileCode className="h-4 w-4 mr-2" />
                    Projects
                  </TabsTrigger>
                  <TabsTrigger value="certificates">
                    <Award className="h-4 w-4 mr-2" />
                    Certificates
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="courses" className="mt-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle>Your Courses</CardTitle>
                          <CardDescription>Track your learning progress</CardDescription>
                        </div>
                        <Button>
                          <Plus className="h-4 w-4 mr-2" />
                          Add Course
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { 
                            title: 'React Fundamentals', 
                            provider: 'NxtWave', 
                            progress: 75, 
                            color: 'bg-brand-blue',
                            startDate: 'Jan 15, 2025',
                            status: 'In Progress'
                          },
                          { 
                            title: 'TypeScript Mastery', 
                            provider: 'Udemy', 
                            progress: 40, 
                            color: 'bg-brand-teal',
                            startDate: 'Feb 10, 2025',
                            status: 'In Progress'
                          },
                          { 
                            title: 'Node.js Backend', 
                            provider: 'Coursera', 
                            progress: 0, 
                            color: 'bg-brand-orange',
                            startDate: 'Not Started',
                            status: 'Not Started'
                          },
                          { 
                            title: 'HTML & CSS Fundamentals', 
                            provider: 'freeCodeCamp', 
                            progress: 100, 
                            color: 'bg-green-500',
                            startDate: 'Oct 5, 2024',
                            status: 'Completed'
                          },
                          { 
                            title: 'JavaScript Basics', 
                            provider: 'NxtWave', 
                            progress: 100, 
                            color: 'bg-green-500',
                            startDate: 'Nov 20, 2024',
                            status: 'Completed'
                          }
                        ].map((course, index) => (
                          <div key={index} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{course.title}</h3>
                                <p className="text-sm text-gray-500">{course.provider}</p>
                              </div>
                              <div className="text-sm px-2 py-1 rounded-full bg-gray-100">
                                {course.status}
                              </div>
                            </div>
                            <div className="mt-4">
                              <div className="flex justify-between text-sm mb-1">
                                <span>Progress</span>
                                <span>{course.progress}%</span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full">
                                <div 
                                  className={`h-2 ${course.color} rounded-full`} 
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                            </div>
                            <div className="mt-2 text-xs text-gray-500">
                              Started: {course.startDate}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="projects" className="mt-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle>Your Projects</CardTitle>
                          <CardDescription>Showcase your work</CardDescription>
                        </div>
                        <Button>
                          <Plus className="h-4 w-4 mr-2" />
                          Add Project
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            title: 'Personal Portfolio Website',
                            description: 'A responsive portfolio built with React and Tailwind CSS',
                            tags: ['React', 'Tailwind CSS', 'Vite'],
                            link: 'github.com/username/portfolio',
                            demo: 'portfolio-demo.netlify.app'
                          },
                          {
                            title: 'Weather App',
                            description: 'A weather application using OpenWeather API',
                            tags: ['JavaScript', 'API', 'CSS'],
                            link: 'github.com/username/weather-app',
                            demo: 'weather-app-demo.vercel.app'
                          },
                          {
                            title: 'Task Management App',
                            description: 'A full-stack task management application',
                            tags: ['React', 'Node.js', 'MongoDB'],
                            link: 'github.com/username/task-app',
                            demo: 'task-app.herokuapp.com'
                          }
                        ].map((project, index) => (
                          <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                            <h3 className="font-medium">{project.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {project.tags.map((tag, idx) => (
                                <span key={idx} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="mt-3 text-sm">
                              <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
                                GitHub Repository
                              </a>
                              <span className="mx-2">•</span>
                              <a href={`https://${project.demo}`} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
                                Live Demo
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="certificates" className="mt-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle>Your Certificates</CardTitle>
                          <CardDescription>Showcase your achievements</CardDescription>
                        </div>
                        <Button>
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Certificate
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            title: 'HTML & CSS Fundamentals',
                            issuer: 'freeCodeCamp',
                            date: 'March 2025',
                            credential: 'credential-123456'
                          },
                          {
                            title: 'JavaScript Basics',
                            issuer: 'NxtWave',
                            date: 'January 2025',
                            credential: 'credential-789012'
                          }
                        ].map((certificate, index) => (
                          <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="font-medium">{certificate.title}</h3>
                                <p className="text-sm text-gray-500">{certificate.issuer}</p>
                              </div>
                              <Award className="h-6 w-6 text-yellow-500" />
                            </div>
                            <div className="mt-2 text-sm text-gray-600">
                              Issued: {certificate.date}
                            </div>
                            <div className="mt-3">
                              <Button variant="outline" size="sm">View Certificate</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
