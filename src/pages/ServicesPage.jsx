import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services — Social Media, Video & Design | Grow Up Media</title>
        <meta name="description" content="Explore Grow Up Media's full suite of services — social media management, cinematic video production, brand design, and web development for ambitious brands." />
        <link rel="canonical" href="https://growupmedia.in/services" />
      </Helmet>
      <div className="page-padding">
        <Services />
      </div>
    </>
  );
}
