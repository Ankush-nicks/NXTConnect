
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ThumbsUp, MessageSquare, Share2, Filter, Search, Award, BookOpen, Users } from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState("stories");
  
  // Sample data for success stories
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
      description: 'After 6 months of learning on this platform and building projects, I finally got my first job offer! The mentorship sessions were incredibly helpful. I focused on building real-world projects and getting feedback from mentors. My portfolio impressed the interviewers!',
      date: '2 days ago',
      likes: 42,
      comments: 8,
      tags: ['React', 'Job Success', 'Frontend']
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
      description: 'Just finished my certification in Data Science. The interactive dashboard helped me stay on track with my learning goals. Now on to the next challenge! Looking forward to applying these skills in real-world projects and eventually transitioning into a data role.',
      date: '1 week ago',
      likes: 36,
      comments: 5,
      tags: ['Data Science', 'Certification', 'Achievement']
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
      description: 'My team won first place at our college hackathon! Applied everything I learned from my web development courses and got amazing feedback from the judges. We built a sustainability tracking app that helps users monitor their carbon footprint and suggests personalized ways to reduce it.',
      date: '2 weeks ago',
      likes: 58,
      comments: 12,
      tags: ['Hackathon', 'Web Development', 'Team']
    },
    {
      id: 4,
      user: {
        name: 'Emma Williams',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=100&auto=format&fit=crop',
        initials: 'EW',
        role: 'UX Designer'
      },
      title: 'Got my first freelance design project!',
      description: 'After completing the UX/UI courses and building my portfolio, I landed my first freelance project! A startup hired me to redesign their app interface. The client was impressed with my user research methods and wireframing skills that I learned here.',
      date: '3 weeks ago',
      likes: 45,
      comments: 7,
      tags: ['UX Design', 'Freelance', 'Success']
    }
  ];

  // Sample data for community members
  const communityMembers = [
    {
      id: 1,
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
      initials: 'DK',
      role: 'Senior Developer',
      specialization: 'Full Stack Development',
      achievements: ['Mentor', 'Top Contributor'],
      joinedDate: 'Jan 2025'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
      initials: 'PS',
      role: 'Data Scientist',
      specialization: 'Machine Learning',
      achievements: ['Mentor', 'Certificate Pro'],
      joinedDate: 'Feb 2025'
    },
    {
      id: 3,
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
      initials: 'JW',
      role: 'Student',
      specialization: 'Mobile Development',
      achievements: ['Fast Learner'],
      joinedDate: 'Mar 2025'
    },
    {
      id: 4,
      name: 'Sofia Garcia',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=100&auto=format&fit=crop',
      initials: 'SG',
      role: 'UX Designer',
      specialization: 'User Experience',
      achievements: ['Design Expert'],
      joinedDate: 'Feb 2025'
    },
    {
      id: 5,
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop',
      initials: 'AT',
      role: 'Frontend Developer',
      specialization: 'React Development',
      achievements: ['Project Star'],
      joinedDate: 'Mar 2025'
    },
    {
      id: 6,
      name: 'Emma Johnson',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop',
      initials: 'EJ',
      role: 'Backend Developer',
      specialization: 'Node.js',
      achievements: ['Bug Hunter'],
      joinedDate: 'Jan 2025'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Community</h1>
            <p className="text-gray-600 mt-1">Connect with other learners and share your journey</p>
          </div>

          <Tabs defaultValue="stories" onValueChange={setActiveTab} value={activeTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="stories" className="flex items-center">
                <Award className="h-4 w-4 mr-2" />
                Success Stories
              </TabsTrigger>
              <TabsTrigger value="members" className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Community Members
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="stories" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="relative w-full max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input 
                        placeholder="Search success stories" 
                        className="pl-10"
                      />
                    </div>
                    <div className="flex items-center">
                      <Button variant="outline" className="ml-2 flex items-center">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                      <Button className="ml-2">
                        Share Your Story
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-6">
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
                          <div className="flex flex-wrap gap-2 mt-4">
                            {story.tags.map((tag, index) => (
                              <Badge key={index} variant="outline">{tag}</Badge>
                            ))}
                          </div>
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

                <div className="lg:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Share Your Success</CardTitle>
                      <CardDescription>Inspire others with your achievements</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div>
                          <Input placeholder="Title of your success story" />
                        </div>
                        <div>
                          <Textarea 
                            placeholder="Share the details of your achievement..." 
                            rows={6}
                          />
                        </div>
                        <div>
                          <Input placeholder="Add tags separated by commas" />
                        </div>
                        <Button className="w-full">Post Your Story</Button>
                      </form>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Popular Tags</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {['Job Success', 'React', 'Web Development', 'Certification', 'Interview', 'Data Science', 'Freelance', 'Portfolio', 'Hackathon'].map((tag, index) => (
                          <Badge key={index} variant="secondary" className="cursor-pointer">{tag}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="members" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="relative w-full max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input 
                        placeholder="Search community members" 
                        className="pl-10"
                      />
                    </div>
                    <Button variant="outline" className="ml-2 flex items-center">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {communityMembers.map((member) => (
                      <Card key={member.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                          <div className="flex items-start">
                            <Avatar className="h-14 w-14 mr-4">
                              <AvatarImage src={member.avatar} alt={member.name} />
                              <AvatarFallback>{member.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-medium text-lg">{member.name}</h3>
                              <p className="text-sm text-gray-500">{member.role}</p>
                              <p className="text-sm text-gray-500">{member.specialization}</p>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {member.achievements.map((achievement, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {achievement}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                            <span>Joined: {member.joinedDate}</span>
                            <Button variant="ghost" size="sm">View Profile</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Community Stats</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Users className="h-5 w-5 text-brand-blue mr-2" />
                            <span>Active Members</span>
                          </div>
                          <span className="font-bold">1,250+</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Award className="h-5 w-5 text-brand-teal mr-2" />
                            <span>Success Stories</span>
                          </div>
                          <span className="font-bold">485</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <BookOpen className="h-5 w-5 text-brand-orange mr-2" />
                            <span>Learning Paths</span>
                          </div>
                          <span className="font-bold">24</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Popular Specializations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {[
                          { name: 'Web Development', count: 320 },
                          { name: 'Data Science', count: 245 },
                          { name: 'UX/UI Design', count: 189 },
                          { name: 'Mobile Development', count: 156 },
                          { name: 'DevOps', count: 108 }
                        ].map((specialization, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span>{specialization.name}</span>
                            <Badge variant="secondary">{specialization.count}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Become a Mentor</CardTitle>
                      <CardDescription>
                        Help others while reinforcing your own skills
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        Apply to become a student-mentor and earn while helping others in their learning journey.
                      </p>
                      <Button className="w-full">Apply Now</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
