
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-academic-light-gray">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-academic-navy mb-4">
              Dr. Academic
            </h1>
            <h2 className="text-2xl md:text-3xl text-academic-slate mb-6">
              PhD in Management
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              I'm a management researcher specializing in organizational behavior and strategic human resource management. 
              Currently on the academic job market for assistant professor positions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-academic-blue hover:bg-academic-navy">
                <Link to="/research">View Research</Link>
              </Button>
              <Button asChild variant="outline" className="border-academic-blue text-academic-blue hover:bg-academic-light-blue/10">
                <Link to="/cv">Download CV</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Dr. Academic" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
