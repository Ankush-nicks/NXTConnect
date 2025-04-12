
import React, { useEffect, useState } from 'react';
import { Plus, Trash2, Pencil, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/components/Auth/AuthProvider';

interface Course {
  id: string;
  title: string;
  description?: string;
  category?: string;
  completion_percentage: number;
  completed: boolean;
  certificate_url?: string;
  created_at: string;
}

const CourseTracker = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [completion, setCompletion] = useState(0);
  const [certificateUrl, setCertificateUrl] = useState('');
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  useEffect(() => {
    fetchCourses();
  }, [user]);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      if (!user) return;

      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setCourses(data);
    } catch (error: any) {
      toast.error(error.message || 'Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setCategory('');
    setCompletion(0);
    setCertificateUrl('');
    setEditingCourse(null);
  };

  const handleAddOrUpdateCourse = async () => {
    try {
      if (!title) {
        toast.error('Course title is required');
        return;
      }

      if (editingCourse) {
        // Update existing course
        const { error } = await supabase
          .from('courses')
          .update({
            title,
            description,
            category,
            completion_percentage: completion,
            completed: completion === 100,
            certificate_url: certificateUrl,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingCourse.id);

        if (error) throw error;
        toast.success('Course updated successfully');
      } else {
        // Add new course
        const { error } = await supabase
          .from('courses')
          .insert({
            title,
            description,
            category,
            user_id: user?.id,
            completion_percentage: completion,
            completed: completion === 100,
            certificate_url: certificateUrl
          });

        if (error) throw error;
        toast.success('Course added successfully');
      }

      resetForm();
      setOpen(false);
      fetchCourses();
    } catch (error: any) {
      toast.error(error.message || 'Failed to save course');
    }
  };

  const handleEditCourse = (course: Course) => {
    setEditingCourse(course);
    setTitle(course.title);
    setDescription(course.description || '');
    setCategory(course.category || '');
    setCompletion(course.completion_percentage);
    setCertificateUrl(course.certificate_url || '');
    setOpen(true);
  };

  const handleDeleteCourse = async (id: string) => {
    try {
      const { error } = await supabase
        .from('courses')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setCourses(courses.filter(course => course.id !== id));
      toast.success('Course deleted successfully');
    } catch (error: any) {
      toast.error(error.message || 'Failed to delete course');
    }
  };

  const handleCompletionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setCompletion(value);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Your Courses</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="mr-2 h-4 w-4" /> Add Course
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingCourse ? 'Edit Course' : 'Add New Course'}</DialogTitle>
              <DialogDescription>
                {editingCourse ? 'Update your course information below.' : 'Enter the details of the course you want to add.'}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Course Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., React Fundamentals"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Input
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Brief description of the course"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category (Optional)</Label>
                <Input
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="e.g., Web Development"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="completion">Completion Percentage</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="completion"
                    type="number"
                    min="0"
                    max="100"
                    value={completion}
                    onChange={handleCompletionChange}
                  />
                  <span>%</span>
                </div>
                <Progress value={completion} className="mt-2" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="certificate">Certificate URL (Optional)</Label>
                <Input
                  id="certificate"
                  value={certificateUrl}
                  onChange={(e) => setCertificateUrl(e.target.value)}
                  placeholder="Link to your certificate"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => {
                resetForm();
                setOpen(false);
              }}>
                Cancel
              </Button>
              <Button onClick={handleAddOrUpdateCourse}>
                {editingCourse ? 'Update Course' : 'Add Course'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="text-center py-6">Loading your courses...</div>
      ) : courses.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-md">
          <p className="text-gray-500 mb-4">You haven't added any courses yet.</p>
          <Button onClick={() => setOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Your First Course
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <Card key={course.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <div className="flex space-x-1">
                    <Button size="sm" variant="ghost" onClick={() => handleEditCourse(course)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => handleDeleteCourse(course.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
                {course.category && (
                  <CardDescription>{course.category}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                {course.description && <p className="text-sm mb-3">{course.description}</p>}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Completion</span>
                    <span>{course.completion_percentage}%</span>
                  </div>
                  <Progress value={course.completion_percentage} />
                </div>
              </CardContent>
              {course.certificate_url && (
                <CardFooter className="pt-0">
                  <a 
                    href={course.certificate_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-blue hover:underline"
                  >
                    View Certificate
                  </a>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseTracker;
