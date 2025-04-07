
import React from 'react';
import Layout from '@/components/Layout';
import TeachingSection from '@/components/TeachingSection';

const Teaching = () => {
  return (
    <Layout>
      <div className="bg-academic-light-gray py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-academic-navy">Teaching</h1>
          <p className="text-xl text-academic-slate mt-4">
            Courses, philosophy, and student testimonials
          </p>
        </div>
      </div>
      <TeachingSection />
    </Layout>
  );
};

export default Teaching;
