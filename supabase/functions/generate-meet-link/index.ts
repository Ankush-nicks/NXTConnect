
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// CORS headers for browser compatibility
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      headers: corsHeaders 
    });
  }

  try {
    // In a real implementation, you would use the Google Calendar API
    // to create a meeting and retrieve the link
    // For this proof of concept, we'll create a mock Google Meet link
    
    const { data } = await req.json();
    const { title, startTime, endTime } = data;
    
    // Generate a random meeting code
    const meetingCode = Math.random().toString(36).substring(2, 7) + "-" + 
                       Math.random().toString(36).substring(2, 7) + "-" +
                       Math.random().toString(36).substring(2, 7);
    
    const meetLink = `https://meet.google.com/${meetingCode}`;
    
    console.log(`Generated meeting link for "${title}": ${meetLink}`);
    
    return new Response(
      JSON.stringify({
        meetLink,
        title,
        startTime,
        endTime
      }),
      { 
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders
        } 
      }
    );
  } catch (error) {
    console.error("Error generating meeting link:", error.message);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders
        } 
      }
    );
  }
});
