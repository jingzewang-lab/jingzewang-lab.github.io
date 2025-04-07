
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const CVSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-start mb-8">
        <h2 className="text-3xl font-bold text-academic-navy">Curriculum Vitae</h2>
        <Button className="bg-academic-blue hover:bg-academic-navy">
          Download Full CV
        </Button>
      </div>
      
      <div className="space-y-10">
        {/* Education */}
        <section>
          <h3 className="text-2xl font-semibold text-academic-navy mb-4">Education</h3>
          <Separator className="mb-6" />
          
          <div className="space-y-6">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h4 className="text-lg font-medium">Ph.D. in Management</h4>
                <p className="text-academic-slate">2018 - 2023</p>
              </div>
              <p className="font-medium text-academic-blue">Stanford University</p>
              <p className="text-gray-600 mt-2">
                Dissertation: "The Evolution of Remote Work Practices and Their Impact on Organizational Outcomes"
              </p>
              <p className="text-gray-600">Advisor: Prof. Jane Smith</p>
            </div>
            
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h4 className="text-lg font-medium">M.S. in Management Science</h4>
                <p className="text-academic-slate">2016 - 2018</p>
              </div>
              <p className="font-medium text-academic-blue">Massachusetts Institute of Technology</p>
              <p className="text-gray-600 mt-2">
                Concentration in Organizational Studies
              </p>
            </div>
            
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h4 className="text-lg font-medium">B.A. in Business Administration</h4>
                <p className="text-academic-slate">2012 - 2016</p>
              </div>
              <p className="font-medium text-academic-blue">University of California, Berkeley</p>
              <p className="text-gray-600 mt-2">
                Minor in Psychology
              </p>
            </div>
          </div>
        </section>
        
        {/* Research Experience */}
        <section>
          <h3 className="text-2xl font-semibold text-academic-navy mb-4">Research Experience</h3>
          <Separator className="mb-6" />
          
          <div className="space-y-6">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h4 className="text-lg font-medium">Postdoctoral Researcher</h4>
                <p className="text-academic-slate">2023 - Present</p>
              </div>
              <p className="font-medium text-academic-blue">Harvard Business School</p>
              <ul className="list-disc ml-5 mt-2 text-gray-600 space-y-1">
                <li>Leading research projects on digital transformation in organizations</li>
                <li>Collaborating with faculty on studies of organizational resilience</li>
                <li>Developing and validating new measurement scales for team innovation</li>
              </ul>
            </div>
            
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h4 className="text-lg font-medium">Research Assistant</h4>
                <p className="text-academic-slate">2018 - 2023</p>
              </div>
              <p className="font-medium text-academic-blue">Stanford Graduate School of Business</p>
              <ul className="list-disc ml-5 mt-2 text-gray-600 space-y-1">
                <li>Designed and conducted studies on remote work and virtual team collaboration</li>
                <li>Developed survey instruments and interviewed organizational leaders</li>
                <li>Performed quantitative analyses of organizational performance data</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Teaching Experience */}
        <section>
          <h3 className="text-2xl font-semibold text-academic-navy mb-4">Teaching Experience</h3>
          <Separator className="mb-6" />
          
          <div className="space-y-6">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h4 className="text-lg font-medium">Instructor</h4>
                <p className="text-academic-slate">2021 - 2023</p>
              </div>
              <p className="font-medium text-academic-blue">Stanford University</p>
              <ul className="list-disc ml-5 mt-2 text-gray-600 space-y-1">
                <li>Organizational Behavior (Undergraduate, 2 sections)</li>
                <li>Leadership in Organizations (MBA, 1 section)</li>
              </ul>
            </div>
            
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h4 className="text-lg font-medium">Teaching Assistant</h4>
                <p className="text-academic-slate">2019 - 2021</p>
              </div>
              <p className="font-medium text-academic-blue">Stanford University</p>
              <ul className="list-disc ml-5 mt-2 text-gray-600 space-y-1">
                <li>Strategic Human Resource Management (MBA)</li>
                <li>Research Methods in Management (PhD)</li>
                <li>Introduction to Organizational Psychology (Undergraduate)</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Awards & Honors */}
        <section>
          <h3 className="text-2xl font-semibold text-academic-navy mb-4">Awards & Honors</h3>
          <Separator className="mb-6" />
          
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:justify-between">
              <p><span className="font-medium">Outstanding Dissertation Award</span>, Academy of Management</p>
              <p className="text-academic-slate">2023</p>
            </div>
            
            <div className="flex flex-col md:flex-row md:justify-between">
              <p><span className="font-medium">Best Conference Paper Award</span>, Strategic Management Society</p>
              <p className="text-academic-slate">2022</p>
            </div>
            
            <div className="flex flex-col md:flex-row md:justify-between">
              <p><span className="font-medium">Graduate Research Fellowship</span>, National Science Foundation</p>
              <p className="text-academic-slate">2018 - 2021</p>
            </div>
            
            <div className="flex flex-col md:flex-row md:justify-between">
              <p><span className="font-medium">Dean's List</span>, UC Berkeley</p>
              <p className="text-academic-slate">2012 - 2016</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CVSection;
