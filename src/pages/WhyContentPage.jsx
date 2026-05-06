import React from 'react';
import { Helmet } from 'react-helmet-async';
import WhyContent from '../components/WhyContent';

export default function WhyContentPage() {
  return (
    <>
      <Helmet>
        <title>Why Content Marketing Works | Grow Up Media</title>
        <meta name="description" content="Understand why content is the highest-ROI marketing channel for brands today. Grow Up Media breaks down the strategy behind content-first growth." />
        <link rel="canonical" href="https://growupmedia.in/why-content" />
      </Helmet>
      <div className="page-padding">
        <WhyContent />
      </div>
    </>
  );
}
