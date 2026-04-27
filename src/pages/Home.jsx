import React from 'react';
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
