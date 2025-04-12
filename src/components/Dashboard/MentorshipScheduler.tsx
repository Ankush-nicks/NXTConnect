
import React, { useState, useEffect } from 'react';
import { CalendarIcon, Clock, X, RefreshCw, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/components/Auth/AuthProvider';

interface MentorAvailability {
  id: string;
  mentor_id: string;
  day_of_week: number;
  start_time: string;
  end_time: string;
  specific_date?: string;
  mentor?: {
    name: string;
    email: string;
  };
}

interface MentorshipSession {
  id: string;
  mentor_id: string;
  student_id: string;
  title: string;
  description?: string;
  start_time: string;
  end_time: string;
  google_meet_link?: string;
  status: 'scheduled' | 'completed' | 'cancelled' | 'rescheduled';
  mentor?: {
    name: string;
    email: string;
  };
}

const MentorshipScheduler = () => {
  const { user } = useAuth();
  const [sessions, setSessions] = useState<MentorshipSession[]>([]);
  const [availableSlots, setAvailableSlots] = useState<MentorAvailability[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [rescheduleSession, setRescheduleSession] = useState<MentorshipSession | null>(null);
  const [sessionDialogOpen, setSessionDialogOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<MentorAvailability | null>(null);
  const [sessionTitle, setSessionTitle] = useState('');
  const [sessionDescription, setSessionDescription] = useState('');

  useEffect(() => {
    if (user) {
      fetchSessions();
      fetchAvailableSlots();
    }
  }, [user]);

  const fetchSessions = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('mentorship_sessions')
        .select('*')
        .eq('student_id', user?.id)
        .order('start_time', { ascending: true });

      if (error) throw error;
      setSessions(data);
    } catch (error: any) {
      toast.error(error.message || 'Failed to fetch sessions');
    } finally {
      setLoading(false);
    }
  };

  const fetchAvailableSlots = async () => {
    try {
      const { data, error } = await supabase
        .from('mentor_availability')
        .select('*');

      if (error) throw error;
      setAvailableSlots(data);
    } catch (error: any) {
      toast.error(error.message || 'Failed to fetch available slots');
    }
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      // This is where you would fetch available slots for the selected date
      // For now, we'll just close the calendar
      setCalendarOpen(false);
      setSessionDialogOpen(true);
    }
  };

  const handleScheduleSession = async () => {
    try {
      if (!selectedDate || !sessionTitle) {
        toast.error('Please select a date and provide a session title');
        return;
      }

      // Here we would normally generate a Google Meet link
      // For the proof of concept, we'll create a placeholder link
      const meetLink = `https://meet.google.com/example-${Math.random().toString(36).substring(2, 7)}`;
      
      const startTime = new Date(selectedDate);
      startTime.setHours(10, 0, 0); // Assuming 10 AM start time
      
      const endTime = new Date(selectedDate);
      endTime.setHours(11, 0, 0); // Assuming 1-hour session
      
      // Use rescheduleSession if we're rescheduling, otherwise create a new session
      if (rescheduleSession) {
        const { error } = await supabase
          .from('mentorship_sessions')
          .update({
            start_time: startTime.toISOString(),
            end_time: endTime.toISOString(),
            status: 'rescheduled',
            updated_at: new Date().toISOString()
          })
          .eq('id', rescheduleSession.id);

        if (error) throw error;
        toast.success('Session rescheduled successfully');
        setRescheduleSession(null);
      } else {
        // Create a new session
        const { error } = await supabase
          .from('mentorship_sessions')
          .insert({
            mentor_id: selectedSlot?.mentor_id || '00000000-0000-0000-0000-000000000000', // Placeholder, would be a real mentor ID
            student_id: user?.id,
            title: sessionTitle,
            description: sessionDescription,
            start_time: startTime.toISOString(),
            end_time: endTime.toISOString(),
            google_meet_link: meetLink,
            status: 'scheduled'
          });

        if (error) throw error;
        toast.success('Session scheduled successfully');
      }

      // Reset form and fetch updated sessions
      setSessionTitle('');
      setSessionDescription('');
      setSelectedDate(undefined);
      setSessionDialogOpen(false);
      fetchSessions();
    } catch (error: any) {
      toast.error(error.message || 'Failed to schedule session');
    }
  };

  const handleRescheduleSession = (session: MentorshipSession) => {
    setRescheduleSession(session);
    setCalendarOpen(true);
  };

  const handleCancelSession = async (sessionId: string) => {
    try {
      const { error } = await supabase
        .from('mentorship_sessions')
        .update({
          status: 'cancelled',
          updated_at: new Date().toISOString()
        })
        .eq('id', sessionId);

      if (error) throw error;
      
      // Update the local state to reflect the cancelled session
      setSessions(sessions.map(session => 
        session.id === sessionId ? { ...session, status: 'cancelled' } : session
      ));
      
      toast.success('Session cancelled successfully');
    } catch (error: any) {
      toast.error(error.message || 'Failed to cancel session');
    }
  };

  const openJoinSession = (session: MentorshipSession) => {
    if (session.google_meet_link) {
      window.open(session.google_meet_link, '_blank');
    } else {
      toast.error('No meeting link available for this session');
    }
  };

  // Check if a session is upcoming (not cancelled and in the future)
  const isUpcomingSession = (session: MentorshipSession) => {
    return session.status !== 'cancelled' && 
           new Date(session.start_time) > new Date();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Mentorship Sessions</h2>
        <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {rescheduleSession ? 'Pick New Date' : 'View Calendar'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              initialFocus
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Session Dialog */}
      <Dialog open={sessionDialogOpen} onOpenChange={setSessionDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {rescheduleSession ? 'Reschedule Session' : 'Schedule New Session'}
            </DialogTitle>
            <DialogDescription>
              {rescheduleSession 
                ? 'Select a new date and time for your session.' 
                : 'Fill in the details to schedule a new mentorship session.'}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="sessionTitle" className="text-sm font-medium">
                Session Title
              </label>
              <input
                id="sessionTitle"
                className="w-full p-2 border rounded-md"
                value={sessionTitle}
                onChange={(e) => setSessionTitle(e.target.value)}
                placeholder="e.g., React Component Design"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="sessionDescription" className="text-sm font-medium">
                Description (Optional)
              </label>
              <textarea
                id="sessionDescription"
                className="w-full p-2 border rounded-md h-24"
                value={sessionDescription}
                onChange={(e) => setSessionDescription(e.target.value)}
                placeholder="What would you like to discuss in this session?"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Selected Date
              </label>
              <div className="p-2 border rounded-md bg-gray-50">
                {selectedDate ? format(selectedDate, 'PPP') : 'No date selected'}
              </div>
            </div>
            {/* In a real implementation, you would show available time slots here */}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setSessionDialogOpen(false);
              setRescheduleSession(null);
            }}>
              Cancel
            </Button>
            <Button onClick={handleScheduleSession}>
              {rescheduleSession ? 'Reschedule' : 'Schedule Session'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Sessions List */}
      {loading ? (
        <div className="text-center py-6">Loading your sessions...</div>
      ) : sessions.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-md">
          <p className="text-gray-500 mb-4">You don't have any scheduled sessions.</p>
          <Button onClick={() => setCalendarOpen(true)}>
            <CalendarIcon className="mr-2 h-4 w-4" /> Schedule Your First Session
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {sessions.map((session) => (
            <Card key={session.id} className={session.status === 'cancelled' ? 'opacity-70' : ''}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg flex items-center">
                      {session.title}
                      {session.status === 'cancelled' && (
                        <span className="ml-2 text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                          Cancelled
                        </span>
                      )}
                      {session.status === 'rescheduled' && (
                        <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                          Rescheduled
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription>
                      {new Date(session.start_time) > new Date() ? 'Upcoming' : 'Past'} Session
                    </CardDescription>
                  </div>
                  {isUpcomingSession(session) && (
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleRescheduleSession(session)}>
                        <RefreshCw className="h-4 w-4 mr-1" /> Reschedule
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-500" onClick={() => handleCancelSession(session.id)}>
                        <X className="h-4 w-4 mr-1" /> Cancel
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {session.description && (
                    <p className="text-sm">{session.description}</p>
                  )}
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    {format(new Date(session.start_time), 'PPP')}
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    {format(new Date(session.start_time), 'h:mm a')} - {format(new Date(session.end_time), 'h:mm a')}
                  </div>
                  
                  {isUpcomingSession(session) && session.google_meet_link && (
                    <Button 
                      variant="default" 
                      className="mt-3 w-full"
                      onClick={() => openJoinSession(session)}
                    >
                      <Video className="h-4 w-4 mr-2" /> Join Session
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MentorshipScheduler;
