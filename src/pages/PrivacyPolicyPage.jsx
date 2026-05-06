import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const sections = [
  {
    id: 1,
    title: 'Introduction',
    content: `Welcome to Grow Up Media ("we," "our," or "us"), a digital marketing agency dedicated to helping businesses grow their online presence through strategic marketing, advertising, content creation, SEO, social media management, and performance analytics.

This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, engage with our services, or interact with us in any capacity. We are committed to protecting your personal data in accordance with applicable global privacy laws and regulations.

By accessing or using our website and services, you agree to the terms outlined in this Privacy Policy. If you do not agree, please discontinue use of our services.`,
  },
  {
    id: 2,
    title: 'Who We Are',
    content: `Grow Up Media is a full-service digital marketing agency offering services including but not limited to:`,
    list: [
      'Search Engine Optimization (SEO) & Content Marketing',
      'Paid Advertising (Google Ads, Meta Ads, programmatic campaigns)',
      'Social Media Management & Strategy',
      'Brand Identity & Creative Design',
      'Email Marketing & Automation',
      'Web Analytics, Conversion Rate Optimization (CRO)',
      'Influencer Marketing & Campaign Management',
    ],
    footer: 'For privacy-related enquiries, please contact us at: privacy@growupmedia.com',
  },
  {
    id: 3,
    title: 'Information We Collect',
    subsections: [
      {
        title: '3.1 Information You Provide Directly',
        list: [
          'Name, email address, phone number, and business details (via contact forms or onboarding)',
          'Billing information, invoices, and payment references',
          'Account credentials if you register on our platform or client portal',
          'Content, assets, and materials shared with us to fulfil marketing campaigns',
          'Communications with our team via email, chat, or support tickets',
        ],
      },
      {
        title: '3.2 Information Collected Automatically',
        list: [
          'IP address, browser type, device type, and operating system',
          'Pages visited, time spent on pages, and navigation paths',
          'Referring URLs and search terms',
          'Cookie identifiers and session data',
          'Geolocation data (country or city level, not precise location)',
        ],
      },
      {
        title: '3.3 Information from Third Parties',
        list: [
          'Advertising platforms (Google, Meta, LinkedIn, TikTok Ads) for campaign performance',
          'Analytics tools such as Google Analytics, Hotjar, or Mixpanel',
          'CRM systems and marketing automation platforms',
          'Publicly available professional data (e.g., LinkedIn, business directories)',
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'How We Use Your Information',
    list: [
      'To provide, manage, and improve our digital marketing services',
      'To communicate with you about projects, campaigns, proposals, and support',
      'To process payments, issue invoices, and manage billing',
      'To send service updates, newsletters, or promotional content (with your consent)',
      'To analyse website traffic and optimise user experience',
      'To comply with legal obligations and enforce our terms of service',
      'To detect fraud, prevent abuse, and maintain platform security',
      'To conduct market research and improve our internal processes',
    ],
  },
  {
    id: 5,
    title: 'Legal Basis for Processing (GDPR & Global Compliance)',
    content: 'Where applicable, we rely on the following legal bases to process your personal data:',
    list: [
      'Contractual Necessity — Processing required to fulfil a contract or service agreement with you',
      'Legitimate Interests — For analytics, fraud prevention, and service improvement',
      'Consent — For marketing emails, cookies, and non-essential data collection',
      'Legal Obligation — To comply with applicable laws, regulations, and court orders',
    ],
  },
  {
    id: 6,
    title: 'Cookies & Tracking Technologies',
    content: 'We use cookies and similar tracking technologies to enhance your browsing experience and analyse site performance. Types of cookies we use include:',
    list: [
      'Essential Cookies — Required for the website to function correctly',
      'Analytics Cookies — To understand how visitors interact with our site (e.g., Google Analytics)',
      'Marketing Cookies — To deliver relevant advertising and track campaign effectiveness',
      'Preference Cookies — To remember your settings and preferences',
    ],
    footer: 'You can control or disable cookies through your browser settings at any time. Please note that disabling certain cookies may affect the functionality of our website.',
  },
  {
    id: 7,
    title: 'Data Sharing & Disclosure',
    content: 'We do not sell your personal data. We may share your information with trusted parties under the following circumstances:',
    list: [
      'Service Providers — Third-party vendors who assist in delivering our services (hosting, analytics, payment processing)',
      'Advertising Partners — Platforms such as Google, Meta, and LinkedIn for running paid campaigns on your behalf',
      'Legal Authorities — When required by law, regulation, or valid legal process',
      'Business Transfers — In the event of a merger, acquisition, or sale of assets',
      'With Your Consent — Any other sharing done only with your explicit permission',
    ],
    footer: 'All third-party providers we work with are contractually obligated to handle your data securely and in accordance with applicable privacy laws.',
  },
  {
    id: 8,
    title: 'Data Retention',
    content: 'We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required or permitted by law. Typical retention periods include:',
    list: [
      'Client data: Retained for the duration of our engagement plus 5 years for legal/tax compliance',
      'Marketing contact data: Retained until you unsubscribe or request deletion',
      'Website analytics data: Retained for up to 26 months',
      'Financial records: Retained for 7 years in line with accounting regulations',
    ],
  },
  {
    id: 9,
    title: 'Your Rights & Choices',
    content: 'Depending on your location, you may have the following rights regarding your personal data:',
    list: [
      'Right of Access — Request a copy of the personal data we hold about you',
      'Right to Rectification — Correct inaccurate or incomplete data',
      'Right to Erasure — Request deletion of your personal data ("right to be forgotten")',
      'Right to Restriction — Limit how we process your data in certain circumstances',
      'Right to Data Portability — Receive your data in a structured, machine-readable format',
      'Right to Object — Object to processing based on legitimate interests or for direct marketing',
      'Right to Withdraw Consent — Withdraw consent at any time where processing is consent-based',
    ],
    footer: 'To exercise any of these rights, please contact us at privacy@growupmedia.com. We will respond to all valid requests within 30 days.',
  },
  {
    id: 10,
    title: 'International Data Transfers',
    content: 'As a digital marketing agency operating with global clients and platforms, your data may be transferred to and processed in countries outside your jurisdiction. We ensure appropriate safeguards are in place, such as Standard Contractual Clauses (SCCs) approved by relevant regulatory authorities, to protect your data during international transfers.',
  },
  {
    id: 11,
    title: 'Data Security',
    content: 'We implement industry-standard security measures to protect your personal data, including:',
    list: [
      'SSL/TLS encryption for all data transmitted via our website',
      'Access controls and role-based permissions for internal data access',
      'Regular security audits and vulnerability assessments',
      'Secure cloud storage with reputable third-party providers',
    ],
    footer: 'While we strive to use commercially acceptable means to protect your data, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security but remain committed to taking all reasonable precautions.',
  },
  {
    id: 12,
    title: "Children's Privacy",
    content: 'Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a minor, please contact us immediately and we will take steps to delete that information.',
  },
  {
    id: 13,
    title: 'Third-Party Websites & Links',
    content: 'Our website may contain links to external websites, social media platforms, or partner services. We are not responsible for the privacy practices or content of those third-party sites. We encourage you to review the privacy policies of any external sites you visit.',
  },
  {
    id: 14,
    title: 'Changes to This Privacy Policy',
    content: 'We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal obligations. When we make material changes, we will notify you via email or a prominent notice on our website. The updated policy will be effective as of the date listed at the top of this document. Continued use of our services after changes are posted constitutes your acceptance of the updated policy.',
  },
  {
    id: 15,
    title: 'Contact Us',
    content: 'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact:',
    contact: {
      name: 'Grow Up Media',
      email: 'management.growupmedia@gmail.com',
      contact: '+91 7821092963',
    },
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Grow Up Media</title>
        <meta name="description" content="Read Grow Up Media's privacy policy to understand how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://growupmedia.in/privacy" />
      </Helmet>
    <div className="legal-page page-padding">
      <div className="legal-container">

        <div className="legal-hero">
          <span className="legal-eyebrow">Legal</span>
          <h1 className="legal-title">Privacy <span className="legal-title-accent">Policy</span></h1>
          <p className="legal-meta">Effective Date: January 1, 2026 &nbsp;|&nbsp; Last Updated: April 2026</p>
        </div>

        <div className="legal-body">
          <aside className="legal-toc">
            <p className="legal-toc-head">On this page</p>
            <ol className="legal-toc-list">
              {sections.map(s => (
                <li key={s.id}>
                  <a href={`#section-${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </aside>

          <main className="legal-content">
            {sections.map(s => (
              <section key={s.id} id={`section-${s.id}`} className="legal-section">
                <h2 className="legal-section-title">
                  <span className="legal-section-num">{s.id}.</span> {s.title}
                </h2>

                {s.content && <p className="legal-text">{s.content}</p>}

                {s.list && (
                  <ul className="legal-list">
                    {s.list.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                )}

                {s.subsections && s.subsections.map((sub, i) => (
                  <div key={i} className="legal-subsection">
                    <h3 className="legal-subsection-title">{sub.title}</h3>
                    {sub.content && <p className="legal-text">{sub.content}</p>}
                    {sub.list && (
                      <ul className="legal-list">
                        {sub.list.map((item, j) => <li key={j}>{item}</li>)}
                      </ul>
                    )}
                  </div>
                ))}

                {s.footer && <p className="legal-text legal-note">{s.footer}</p>}

                {s.contact && (
                  <div className="legal-contact-card">
                    <p className="legal-contact-name">{s.contact.name}</p>
                    <p>Email: <a href={`mailto:${s.contact.email}`}>{s.contact.email}</a></p>
                    <p>Phone: {s.contact.contact}</p>
                  </div>
                )}
              </section>
            ))}
          </main>
        </div>

        <div className="legal-footer-nav">
          <Link to="/" className="legal-back-link">← Back to Home</Link>
          <Link to="/terms" className="legal-switch-link">Terms of Service →</Link>
        </div>

      </div>
    </div>
    </>
  );
}
