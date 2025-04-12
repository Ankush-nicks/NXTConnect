
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// Sample data for the charts
const progressData = [
  { name: 'Jan', progress: 10 },
  { name: 'Feb', progress: 25 },
  { name: 'Mar', progress: 30 },
  { name: 'Apr', progress: 45 },
  { name: 'May', progress: 50 },
  { name: 'Jun', progress: 65 },
  { name: 'Jul', progress: 75 },
  { name: 'Aug', progress: 85 },
];

const projectsData = [
  { name: 'Web Dev', value: 3 },
  { name: 'Data Science', value: 2 },
  { name: 'Mobile', value: 1 },
  { name: 'DevOps', value: 1 },
];

const skillsData = [
  { name: 'HTML', value: 90 },
  { name: 'CSS', value: 85 },
  { name: 'JavaScript', value: 70 },
  { name: 'React', value: 65 },
  { name: 'Python', value: 60 },
  { name: 'SQL', value: 55 },
];

const COLORS = ['#2563eb', '#0d9488', '#f97316', '#8b5cf6', '#ec4899'];

const ProgressCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Learning Progress</CardTitle>
          <CardDescription>Your course completion over time</CardDescription>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={progressData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="progress" 
                stroke="#2563eb" 
                fill="url(#colorProgress)" 
              />
              <defs>
                <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="h-full">
        <CardHeader>
          <CardTitle>Projects by Category</CardTitle>
          <CardDescription>Distribution of your projects</CardDescription>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={projectsData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {projectsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="h-full">
        <CardHeader>
          <CardTitle>Skill Proficiency</CardTitle>
          <CardDescription>Your self-assessed skill levels</CardDescription>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={skillsData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Bar dataKey="value" fill="#0d9488" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="h-full">
        <CardHeader>
          <CardTitle>Monthly Activity</CardTitle>
          <CardDescription>Your engagement with the platform</CardDescription>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={progressData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="progress" stroke="#f97316" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressCharts;
