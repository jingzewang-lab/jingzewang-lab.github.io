
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const publications = [
  {
    id: 1,
    title: "The Impact of Remote Work on Team Creativity and Innovation",
    journal: "Journal of Applied Management",
    year: 2024,
    doi: "10.1000/journal.123456",
    abstract: "This study examines how remote work arrangements affect team creativity and innovation outcomes in knowledge-intensive industries.",
    tags: ["Remote Work", "Innovation", "Team Dynamics"]
  },
  {
    id: 2,
    title: "Strategic HRM Practices and Organizational Resilience During Crisis",
    journal: "Strategic Management Journal",
    year: 2023,
    doi: "10.1000/journal.789123",
    abstract: "This paper investigates how specific human resource management practices contribute to organizational resilience during periods of external crisis.",
    tags: ["Strategic HRM", "Crisis Management", "Organizational Resilience"]
  },
  {
    id: 3,
    title: "Sustainable Management Practices in Emerging Markets",
    journal: "Journal of International Business Studies",
    year: 2022,
    doi: "10.1000/journal.456789",
    abstract: "A comparative analysis of sustainable management practices adopted by multinational corporations operating in emerging market contexts.",
    tags: ["Sustainability", "Emerging Markets", "Corporate Strategy"]
  }
];

const ResearchSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-academic-navy mb-2">Research</h2>
      <p className="text-academic-slate mb-8 max-w-3xl">
        My research focuses on organizational behavior, strategic human resource management, 
        and the future of work. I use both qualitative and quantitative methodologies to 
        explore how management practices affect employee outcomes and organizational performance.
      </p>
      
      <h3 className="text-2xl font-semibold text-academic-navy mb-6 mt-12">Publications</h3>
      <div className="space-y-6">
        {publications.map((publication) => (
          <Card key={publication.id} className="border-l-4 border-l-academic-blue">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{publication.title}</CardTitle>
              <CardDescription>
                {publication.journal}, {publication.year} • DOI: {publication.doi}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{publication.abstract}</p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                {publication.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-academic-light-blue/10 text-academic-blue border-academic-blue/30">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <h3 className="text-2xl font-semibold text-academic-navy mb-6 mt-12">Current Projects</h3>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Digital Transformation and Employee Well-being</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              A longitudinal study examining how organizational digital transformation initiatives 
              affect employee well-being, productivity, and work-life balance.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Inclusive Leadership and Team Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Investigating how inclusive leadership practices influence team performance, psychological safety,
              and innovation in diverse workplace settings.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResearchSection;
