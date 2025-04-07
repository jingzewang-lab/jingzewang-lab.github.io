
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TeachingSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-academic-navy mb-2">Teaching</h2>
      <p className="text-academic-slate mb-8 max-w-3xl">
        I am passionate about teaching and mentoring future management professionals. My teaching
        philosophy emphasizes critical thinking, practical application, and inclusive learning environments.
      </p>
      
      <h3 className="text-2xl font-semibold text-academic-navy mb-6">Teaching Philosophy</h3>
      <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
        <p className="text-gray-600 mb-4">
          My teaching approach is guided by three core principles:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
          <li>
            <span className="font-medium text-academic-navy">Bridging Theory and Practice:</span> I connect theoretical concepts with real-world applications to help students develop practical management skills.
          </li>
          <li>
            <span className="font-medium text-academic-navy">Fostering Critical Thinking:</span> I design activities that encourage students to analyze complex management scenarios and develop evidence-based solutions.
          </li>
          <li>
            <span className="font-medium text-academic-navy">Creating Inclusive Learning Environments:</span> I employ diverse teaching methods to accommodate different learning styles and ensure all students can succeed.
          </li>
        </ol>
      </div>
      
      <h3 className="text-2xl font-semibold text-academic-navy mb-6">Courses Taught</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Organizational Behavior</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Undergraduate course covering individual, group, and organizational influences on workplace behavior. 
              Topics include motivation, leadership, teams, and organizational culture.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Strategic Human Resource Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Graduate-level course examining how organizations can align their human resource practices with business 
              strategy to achieve competitive advantage.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Management Research Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Graduate seminar introducing quantitative and qualitative research methods in management studies, 
              including research design, data collection, and analysis techniques.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Leadership and Change Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              MBA elective exploring theories and practices of effective leadership in times of organizational change, 
              with emphasis on change implementation strategies.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <h3 className="text-2xl font-semibold text-academic-navy mt-12 mb-6">Student Testimonials</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-academic-light-gray p-6 rounded-lg">
          <p className="italic text-gray-600 mb-4">
            "Dr. Academic's organizational behavior course was one of the most engaging and practical classes I've taken. 
            The case studies and group projects helped me understand how theoretical concepts apply in real organizations."
          </p>
          <p className="font-medium">— MBA Student, Class of 2023</p>
        </div>
        
        <div className="bg-academic-light-gray p-6 rounded-lg">
          <p className="italic text-gray-600 mb-4">
            "The research methods seminar prepared me well for my dissertation. Dr. Academic provided clear guidance 
            and valuable feedback throughout the course, which greatly improved my research skills."
          </p>
          <p className="font-medium">— PhD Student, Class of 2022</p>
        </div>
      </div>
    </div>
  );
};

export default TeachingSection;
