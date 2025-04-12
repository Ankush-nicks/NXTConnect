
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

// Sample mentorship sessions data
const upcomingSessions = [
  {
    id: 1,
    mentor: {
      name: 'Jason Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
      initials: 'JR',
      specialization: 'Frontend Development'
    },
    date: 'Apr 15, 2025',
    time: '10:00 AM - 11:00 AM',
    topic: 'React Hooks Deep Dive',
    status: 'confirmed'
  },
  {
    id: 2,
    mentor: {
      name: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
      initials: 'PS',
      specialization: 'Data Science'
    },
    date: 'Apr 18, 2025',
    time: '2:00 PM - 3:00 PM',
    topic: 'Python Data Analysis',
    status: 'pending'
  }
];

// Sample available mentors
const availableMentors = [
  {
    id: 1,
    name: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop',
    initials: 'DK',
    specialization: 'Full Stack Development',
    rating: 4.9,
    sessions: 42
  },
  {
    id: 2,
    name: 'Maria Garcia',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop',
    initials: 'MG',
    specialization: 'UX/UI Design',
    rating: 4.8,
    sessions: 35
  },
  {
    id: 3,
    name: 'James Wilson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
    initials: 'JW',
    specialization: 'Mobile Development',
    rating: 4.7,
    sessions: 28
  }
];

const MentorshipCalendar = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Mentorship Sessions</CardTitle>
          <CardDescription>Your scheduled sessions with mentors</CardDescription>
        </CardHeader>
        <CardContent>
          {upcomingSessions.length > 0 ? (
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="flex items-start p-4 border rounded-lg hover:bg-gray-50">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={session.mentor.avatar} alt={session.mentor.name} />
                    <AvatarFallback>{session.mentor.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-medium">{session.topic}</h4>
                      <Badge variant={session.status === 'confirmed' ? 'default' : 'outline'}>
                        {session.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500">with {session.mentor.name}</p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-3">{session.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{session.time}</span>
                    </div>
                  </div>
                  <div className="flex ml-4 space-x-2">
                    <Button variant="outline" size="sm">Reschedule</Button>
                    <Button variant="ghost" size="sm" className="text-gray-500">Cancel</Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6">
              <p className="text-gray-500">No upcoming sessions</p>
              <Button variant="outline" className="mt-2">Book a Session</Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Available Mentors</CardTitle>
          <CardDescription>Browse and book sessions with our mentors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableMentors.map((mentor) => (
              <div key={mentor.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={mentor.avatar} alt={mentor.name} />
                    <AvatarFallback>{mentor.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{mentor.name}</h4>
                    <p className="text-sm text-gray-500">{mentor.specialization}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1">{mentor.rating}</span>
                    <span className="mx-2">•</span>
                    <span>{mentor.sessions} sessions</span>
                  </div>
                </div>
                <Button className="w-full mt-3">View Calendar</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MentorshipCalendar;
