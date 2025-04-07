
import React from 'react';
import Layout from '@/components/Layout';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <Layout>
      <div className="bg-academic-light-gray py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-academic-navy">Contact</h1>
          <p className="text-xl text-academic-slate mt-4">
            Get in touch about research collaboration or job opportunities
          </p>
        </div>
      </div>
      <ContactSection />
    </Layout>
  );
};

export default Contact;
