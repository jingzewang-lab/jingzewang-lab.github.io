
import React from 'react';
import Layout from '@/components/Layout';
import ResearchSection from '@/components/ResearchSection';

const Research = () => {
  return (
    <Layout>
      <div className="bg-academic-light-gray py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-academic-navy">Research</h1>
          <p className="text-xl text-academic-slate mt-4">
            Exploring organizational behavior and management practices
          </p>
        </div>
      </div>
      <ResearchSection />
    </Layout>
  );
};

export default Research;
