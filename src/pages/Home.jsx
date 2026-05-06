import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import SelectedWorks from '../components/SelectedWorks';
import Problem from '../components/Problem';
import Services from '../components/Services';
import Work from '../components/Work';
import Testimonials from '../components/Testimonials';
import CtaFaq from '../components/CtaFaq';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Grow Up Media — Digital Marketing Agency & Content-First Growth Studio</title>
        <meta name="description" content="Grow Up Media is a premium digital marketing agency in Nashik helping brands scale through strategic content systems — social media, cinematic video production, design, and web development." />
        <link rel="canonical" href="https://growupmedia.in/" />
      </Helmet>
      <Hero />
      <SelectedWorks />
      <Problem />
      <Services />
      <Work />
      <Testimonials />
      <CtaFaq />
    </>
  );
}
