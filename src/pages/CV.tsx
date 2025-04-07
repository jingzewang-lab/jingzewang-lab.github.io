
import React from 'react';
import Layout from '@/components/Layout';
import CVSection from '@/components/CVSection';

const CV = () => {
  return (
    <Layout>
      <div className="bg-academic-light-gray py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-academic-navy">Curriculum Vitae</h1>
          <p className="text-xl text-academic-slate mt-4">
            Academic credentials and professional experience
          </p>
        </div>
      </div>
      <CVSection />
    </Layout>
  );
};

export default CV;
