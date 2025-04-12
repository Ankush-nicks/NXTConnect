
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MentorshipCalendar from '@/components/Dashboard/MentorshipCalendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, CreditCard, History } from 'lucide-react';

const Mentorship = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Mentorship</h1>
            <p className="text-gray-600 mt-1">Find mentors and book sessions to accelerate your learning</p>
          </div>

          <Tabs defaultValue="find">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="find">Find Mentors</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
              <TabsTrigger value="history">Session History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="find" className="mt-6">
              <MentorshipCalendar />
              
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>How Mentorship Works</CardTitle>
                  <CardDescription>Learn about our mentorship process</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <Calendar className="h-6 w-6 text-brand-blue" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">1. Find & Book</h3>
                      <p className="text-gray-600">
                        Browse mentors based on your learning goals and book a session that fits your schedule.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-teal-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <CreditCard className="h-6 w-6 text-brand-teal" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">2. Secure Payment</h3>
                      <p className="text-gray-600">
                        Pay securely through our platform. Payment is released to the mentor after the session.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <Clock className="h-6 w-6 text-brand-orange" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">3. Attend Session</h3>
                      <p className="text-gray-600">
                        Join your session via video call at the scheduled time. Get personalized guidance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="upcoming" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Mentorship Sessions</CardTitle>
                  <CardDescription>Your scheduled sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        mentor: {
                          name: 'Jason Rodriguez',
                          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
                          initials: 'JR',
                          specialization: 'Frontend Development'
                        },
                        date: 'Apr 15, 2025',
                        time: '10:00 AM - 11:00 AM',
                        topic: 'React Hooks Deep Dive',
                        notes: 'Prepare questions about useEffect and custom hooks.'
                      },
                      {
                        mentor: {
                          name: 'Priya Sharma',
                          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
                          initials: 'PS',
                          specialization: 'Data Science'
                        },
                        date: 'Apr 18, 2025',
                        time: '2:00 PM - 3:00 PM',
                        topic: 'Python Data Analysis',
                        notes: 'Will go through pandas library fundamentals.'
                      }
                    ].map((session, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-4">
                              <AvatarImage src={session.mentor.avatar} alt={session.mentor.name} />
                              <AvatarFallback>{session.mentor.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-medium">{session.topic}</h3>
                              <p className="text-sm text-gray-500">with {session.mentor.name} ({session.mentor.specialization})</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Reschedule</Button>
                            <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                              Cancel
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="mr-3">{session.date}</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{session.time}</span>
                        </div>
                        {session.notes && (
                          <div className="mt-3 text-sm bg-gray-50 p-2 rounded-md">
                            <strong>Notes:</strong> {session.notes}
                          </div>
                        )}
                        <div className="mt-4">
                          <Button className="w-full">
                            Join Session
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="history" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Session History</CardTitle>
                  <CardDescription>Your past mentorship sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Mentor</TableHead>
                        <TableHead>Topic</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          mentor: {
                            name: 'Alex Chen',
                            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
                            initials: 'AC'
                          },
                          topic: 'JavaScript ES6 Features',
                          date: 'Mar 28, 2025',
                          duration: '1 hour',
                          status: 'Completed'
                        },
                        {
                          mentor: {
                            name: 'Sophia Kim',
                            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
                            initials: 'SK'
                          },
                          topic: 'Portfolio Review',
                          date: 'Mar 15, 2025',
                          duration: '45 min',
                          status: 'Completed'
                        },
                        {
                          mentor: {
                            name: 'Mike Johnson',
                            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
                            initials: 'MJ'
                          },
                          topic: 'React State Management',
                          date: 'Feb 20, 2025',
                          duration: '1 hour',
                          status: 'Cancelled'
                        }
                      ].map((session, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <div className="flex items-center">
                              <Avatar className="h-8 w-8 mr-2">
                                <AvatarImage src={session.mentor.avatar} alt={session.mentor.name} />
                                <AvatarFallback>{session.mentor.initials}</AvatarFallback>
                              </Avatar>
                              <span>{session.mentor.name}</span>
                            </div>
                          </TableCell>
                          <TableCell>{session.topic}</TableCell>
                          <TableCell>{session.date}</TableCell>
                          <TableCell>{session.duration}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              session.status === 'Completed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {session.status}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">View Notes</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mentorship;
