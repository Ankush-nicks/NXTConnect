
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample success stories data
const successStories = [
  {
    id: 1,
    user: {
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
      initials: 'AJ',
      role: 'Frontend Developer'
    },
    title: 'Landed my first job as a React Developer!',
    description: 'After 6 months of learning on this platform and building projects, I finally got my first job offer! The mentorship sessions were incredibly helpful.',
    date: '2 days ago',
    likes: 42,
    comments: 8
  },
  {
    id: 2,
    user: {
      name: 'Sarah Miller',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop',
      initials: 'SM',
      role: 'Data Analyst'
    },
    title: 'Completed my Data Science certification!',
    description: 'Just finished my certification in Data Science. The interactive dashboard helped me stay on track with my learning goals. Now on to the next challenge!',
    date: '1 week ago',
    likes: 36,
    comments: 5
  },
  {
    id: 3,
    user: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop',
      initials: 'MC',
      role: 'Student'
    },
    title: 'Won the college hackathon!',
    description: 'My team won first place at our college hackathon! Applied everything I learned from my web development courses and got amazing feedback from the judges.',
    date: '2 weeks ago',
    likes: 58,
    comments: 12
  }
];

const SuccessStories = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Success Stories</h2>
        <Button variant="outline">Share Your Success</Button>
      </div>
      
      <div className="space-y-4">
        {successStories.map((story) => (
          <Card key={story.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={story.user.avatar} alt={story.user.name} />
                    <AvatarFallback>{story.user.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl">{story.title}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <span className="font-medium text-gray-700">{story.user.name}</span>
                      <span className="mx-2">•</span>
                      <span className="text-gray-500">{story.user.role}</span>
                      <span className="mx-2">•</span>
                      <span className="text-gray-500">{story.date}</span>
                    </CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{story.description}</p>
            </CardContent>
            <CardFooter className="border-t py-3 space-x-4">
              <Button variant="ghost" size="sm" className="flex items-center text-gray-500 hover:text-brand-blue">
                <ThumbsUp className="h-4 w-4 mr-2" />
                <span>{story.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center text-gray-500 hover:text-brand-blue">
                <MessageSquare className="h-4 w-4 mr-2" />
                <span>{story.comments}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center text-gray-500 hover:text-brand-blue ml-auto">
                <Share2 className="h-4 w-4 mr-2" />
                <span>Share</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
