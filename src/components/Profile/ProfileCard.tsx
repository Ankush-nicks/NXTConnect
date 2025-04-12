
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit, Github, Linkedin, Globe, Award, BookOpen, Check, X } from 'lucide-react';

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  // Sample user data
  const [profileData, setProfileData] = useState({
    name: 'Alex Thompson',
    role: 'Frontend Developer',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop',
    initials: 'AT',
    bio: 'Frontend developer passionate about creating beautiful UI. Learning React and TypeScript. Looking for mentorship in backend technologies.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'github.com/alexthompson',
    linkedin: 'linkedin.com/in/alexthompson',
    portfolio: 'alexthompson.dev',
    publicProfile: true,
    publicSkills: true,
    publicLinks: false,
    progress: {
      courses: 5,
      projects: 3,
      certificates: 2
    }
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here we would normally save the data to a backend
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset any changes
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="relative pb-0">
          <div className="absolute top-4 right-4">
            {isEditing ? (
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" onClick={handleCancel} className="flex items-center">
                  <X className="h-4 w-4 mr-1" />
                  Cancel
                </Button>
                <Button size="sm" onClick={handleSave} className="flex items-center">
                  <Check className="h-4 w-4 mr-1" />
                  Save
                </Button>
              </div>
            ) : (
              <Button size="sm" variant="outline" onClick={handleEdit} className="flex items-center">
                <Edit className="h-4 w-4 mr-1" />
                Edit Profile
              </Button>
            )}
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={profileData.avatar} alt={profileData.name} />
              <AvatarFallback>{profileData.initials}</AvatarFallback>
            </Avatar>
            {isEditing ? (
              <Input 
                className="text-center font-bold text-xl max-w-xs" 
                value={profileData.name}
                onChange={(e) => setProfileData({...profileData, name: e.target.value})}
              />
            ) : (
              <CardTitle className="text-center text-2xl">{profileData.name}</CardTitle>
            )}
            {isEditing ? (
              <Input 
                className="text-center text-gray-500 max-w-xs" 
                value={profileData.role}
                onChange={(e) => setProfileData({...profileData, role: e.target.value})}
              />
            ) : (
              <CardDescription className="text-center text-lg">{profileData.role}</CardDescription>
            )}
            <div className="flex space-x-3">
              <Badge variant="outline" className="flex items-center">
                <BookOpen className="h-3 w-3 mr-1" />
                {profileData.progress.courses} Courses
              </Badge>
              <Badge variant="outline" className="flex items-center">
                <Award className="h-3 w-3 mr-1" />
                {profileData.progress.certificates} Certificates
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="mt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Bio</h3>
                  {isEditing ? (
                    <Textarea 
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      rows={4}
                    />
                  ) : (
                    <p className="text-gray-700">{profileData.bio}</p>
                  )}
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Links</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Github className="h-4 w-4 mr-2 text-gray-500" />
                      {isEditing ? (
                        <Input 
                          value={profileData.github}
                          onChange={(e) => setProfileData({...profileData, github: e.target.value})}
                          className="h-8"
                        />
                      ) : (
                        <a href={`https://${profileData.github}`} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
                          {profileData.github}
                        </a>
                      )}
                    </div>
                    <div className="flex items-center">
                      <Linkedin className="h-4 w-4 mr-2 text-gray-500" />
                      {isEditing ? (
                        <Input 
                          value={profileData.linkedin}
                          onChange={(e) => setProfileData({...profileData, linkedin: e.target.value})}
                          className="h-8"
                        />
                      ) : (
                        <a href={`https://${profileData.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
                          {profileData.linkedin}
                        </a>
                      )}
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-gray-500" />
                      {isEditing ? (
                        <Input 
                          value={profileData.portfolio}
                          onChange={(e) => setProfileData({...profileData, portfolio: e.target.value})}
                          className="h-8"
                        />
                      ) : (
                        <a href={`https://${profileData.portfolio}`} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
                          {profileData.portfolio}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="skills" className="mt-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {profileData.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                      {isEditing && (
                        <button 
                          className="ml-1 text-gray-400 hover:text-gray-600"
                          onClick={() => {
                            const newSkills = [...profileData.skills];
                            newSkills.splice(index, 1);
                            setProfileData({...profileData, skills: newSkills});
                          }}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      )}
                    </Badge>
                  ))}
                  {isEditing && (
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        const input = e.currentTarget.elements.namedItem('newSkill') as HTMLInputElement;
                        if (input.value.trim()) {
                          setProfileData({
                            ...profileData, 
                            skills: [...profileData.skills, input.value.trim()]
                          });
                          input.value = '';
                        }
                      }}
                      className="flex mt-2 w-full"
                    >
                      <Input 
                        name="newSkill"
                        placeholder="Add a skill"
                        className="mr-2"
                      />
                      <Button type="submit" size="sm">Add</Button>
                    </form>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Public Profile</h3>
                    <p className="text-sm text-gray-500">Make your profile visible to others</p>
                  </div>
                  <Switch 
                    checked={profileData.publicProfile}
                    onCheckedChange={(checked) => setProfileData({...profileData, publicProfile: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Show Skills</h3>
                    <p className="text-sm text-gray-500">Display your skills on your public profile</p>
                  </div>
                  <Switch 
                    checked={profileData.publicSkills}
                    onCheckedChange={(checked) => setProfileData({...profileData, publicSkills: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Show Links</h3>
                    <p className="text-sm text-gray-500">Display your social and professional links</p>
                  </div>
                  <Switch 
                    checked={profileData.publicLinks}
                    onCheckedChange={(checked) => setProfileData({...profileData, publicLinks: checked})}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCard;
