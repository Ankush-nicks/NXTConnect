
import React from 'react';
import Hero from '@/components/Home/Hero';
import Features from '@/components/Home/Features';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                What our <span className="gradient-heading">community</span> says
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Hear from our students and mentors about their experience with NxtConnect.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  quote: "This platform helped me track my learning progress and connect with mentors who guided me to land my dream job.",
                  author: "Sophia Chen",
                  role: "Frontend Developer"
                },
                {
                  quote: "Being a mentor on NxtConnect has been incredibly rewarding. I get to help others while reinforcing my own skills.",
                  author: "Marcus Johnson",
                  role: "Senior Software Engineer"
                },
                {
                  quote: "The AI assistant helped me overcome roadblocks in my learning journey, and the progress tracking kept me motivated.",
                  author: "Jamie Rodriguez",
                  role: "Computer Science Student"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold">
                      {testimonial.author.split(' ').map(word => word[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-brand-blue to-brand-teal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl max-w-3xl mx-auto">
              Ready to start your learning journey?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-white/80">
              Join our community today and take your skills to the next level.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="/auth/register" className="bg-white text-brand-blue px-6 py-3 border border-transparent rounded-md text-base font-medium hover:bg-gray-50 shadow-lg">
                Create Your Account
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
