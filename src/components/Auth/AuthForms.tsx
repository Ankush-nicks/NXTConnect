
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

interface AuthFormsProps {
  activeTab?: 'login' | 'register';
}

const AuthForms = ({ activeTab = 'login' }: AuthFormsProps) => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<'login' | 'register'>(activeTab);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, simulate successful login
    toast.success("Logged in successfully!");
    navigate('/dashboard');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, simulate successful registration
    toast.success("Registered successfully! Please check your email for verification.");
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-center gradient-heading text-2xl font-bold">
            {tab === 'login' ? 'Welcome Back' : 'Join CreatorCollective'}
          </CardTitle>
          <CardDescription className="text-center">
            {tab === 'login' 
              ? 'Sign in to your account to continue your learning journey.' 
              : 'Create an account to track your progress and connect with mentors.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={tab} onValueChange={(v) => setTab(v as 'login' | 'register')} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleLogin}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link to="/forgot-password" className="text-xs text-brand-blue hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input id="password" type="password" placeholder="••••••••" required />
                  </div>
                  <Button type="submit" className="w-full">Sign In</Button>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="register">
              <form onSubmit={handleRegister}>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="••••••••" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" placeholder="••••••••" required />
                  </div>
                  <Button type="submit" className="w-full">Create Account</Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">
            {tab === 'login' ? (
              <>
                Don't have an account?{' '}
                <button 
                  className="text-brand-blue hover:underline" 
                  onClick={() => setTab('register')}
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button 
                  className="text-brand-blue hover:underline" 
                  onClick={() => setTab('login')}
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthForms;
