import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    id: 1,
    title: 'Introduction & Acceptance of Terms',
    content: `These Terms and Conditions ("Terms", "Agreement") govern the relationship between Grow Up Media ("Company", "we", "our", "us") and any individual, business, or entity ("Client", "you", "your") that accesses our website or engages our digital marketing services.

Grow Up Media is a digital marketing agency headquartered in Nashik, Maharashtra, India, offering a full suite of marketing solutions to clients across India and internationally.

By accessing our website at www.growupmedia.com, signing a service agreement, making a payment, or engaging with any of our services, you confirm that you have read, understood, and agreed to be bound by these Terms. If you do not agree, please refrain from using our services.`,
  },
  {
    id: 2,
    title: 'Company Details',
    contact: {
      lines: [
        'Business Name: Grow Up Media',
        'Nature of Business: Digital Marketing Agency',
        'Registered Office: Nashik, Maharashtra, India',
        'Email: management.growupmedia@gmail.com',
      ],
    },
  },
  {
    id: 3,
    title: 'Our Services',
    content: 'Grow Up Media provides the following digital marketing services, subject to individual agreements and the scope defined in each project proposal or Statement of Work (SOW):',
    list: [
      'Search Engine Optimization (SEO) — On-page, off-page, technical, and local SEO',
      'Paid Advertising (PPC) — Google Ads, Meta Ads, Instagram Ads, LinkedIn Ads, and programmatic campaigns',
      'Social Media Management — Strategy, content creation, scheduling, and community management',
      'Content Marketing — Blog writing, copywriting, video scripts, and creative content',
      'Email Marketing & Automation — Campaign management, drip sequences, and performance reporting',
      'Brand Identity & Graphic Design — Logo creation, brand kits, and visual identity',
      'Web Design & Development — Landing pages, websites, and campaign microsites',
      'Analytics & Reporting — Monthly performance dashboards, KPI tracking, and insights',
      'Influencer Marketing — Influencer identification, outreach, and collaboration management',
    ],
    footer: 'The specific scope of services, deliverables, timelines, and pricing will be outlined in a separate Proposal, Agreement, or Statement of Work signed by both parties.',
  },
  {
    id: 4,
    title: 'Eligibility',
    content: 'By engaging our services or using our website, you represent that:',
    list: [
      'You are at least 18 years of age or the legal age of majority in your jurisdiction',
      'You have the legal authority to enter into a binding agreement on behalf of yourself or your organisation',
      'You will provide accurate and truthful information during onboarding and throughout the engagement',
      'Your use of our services does not violate any applicable laws or regulations',
    ],
  },
  {
    id: 5,
    title: 'Proposals, Agreements & Scope of Work',
    subsections: [
      {
        title: '5.1 Proposals',
        content: 'All proposals submitted by Grow Up Media are valid for 15 days from the date of issue unless otherwise stated. Proposals are non-binding until accepted in writing by the Client and countersigned or confirmed by Grow Up Media.',
      },
      {
        title: '5.2 Scope Changes',
        content: 'Any changes to the agreed scope of work must be requested in writing. Grow Up Media reserves the right to charge additional fees for out-of-scope work. Work on amended scope will not commence until a revised proposal or change order has been approved by the Client.',
      },
      {
        title: '5.3 Client Responsibilities',
        content: 'The Client agrees to:',
        list: [
          'Provide timely access to necessary assets, credentials, brand materials, and approvals',
          'Assign a dedicated point of contact for campaign communication',
          'Review and approve deliverables within the timeframe specified in the agreement',
          'Ensure that all content and information provided to Grow Up Media is accurate and legally compliant',
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Payment Terms & Billing',
    subsections: [
      {
        title: '6.1 Fees',
        content: 'All fees for services will be communicated in the Proposal or Agreement. Prices are quoted in Indian Rupees (INR) unless otherwise agreed in writing. Quoted prices are exclusive of applicable taxes including Goods and Services Tax (GST) as per Indian law.',
      },
      {
        title: '6.2 Payment Schedule',
        list: [
          'Retainer-based services: Payable monthly in advance, on or before the 1st of each month',
          'Project-based services: 100% advance upon agreement',
          'Ad spend budgets: Payable in advance and separate from agency service fees',
        ],
      },
      {
        title: '6.3 Late Payments',
        content: 'Invoices are due within 7 days of the invoice date unless otherwise agreed. Grow Up Media reserves the right to:',
        list: [
          'Pause or suspend all ongoing campaigns and deliverables for overdue accounts',
          'Charge a late payment fee of 2% per month on outstanding balances',
          'Terminate the agreement with 7 days\' written notice if payment remains outstanding beyond 30 days',
        ],
      },
      {
        title: '6.4 Refunds',
        content: 'Service fees are generally non-refundable once work has commenced. Ad spend paid to third-party platforms (Google, Meta, etc.) is governed by those platforms\' own refund policies. Refunds, if applicable, will be considered on a case-by-case basis at the sole discretion of Grow Up Media.',
      },
    ],
  },
  {
    id: 7,
    title: 'Intellectual Property Rights',
    subsections: [
      {
        title: '7.1 Client-Owned Materials',
        content: 'All content, logos, trademarks, and brand assets provided by the Client remain the sole intellectual property of the Client. The Client grants Grow Up Media a limited, non-exclusive licence to use these materials solely for the purpose of delivering agreed services.',
      },
      {
        title: '7.2 Agency-Created Work',
        content: 'All creative work, strategies, content, and deliverables produced by Grow Up Media under a paid engagement become the property of the Client upon receipt of full and final payment. Until full payment is received, all work remains the intellectual property of Grow Up Media.',
      },
      {
        title: '7.3 Proprietary Tools & Frameworks',
        content: 'Any internal tools, templates, methodologies, processes, or frameworks developed or used by Grow Up Media remain the exclusive intellectual property of Grow Up Media, regardless of whether they were used in the Client\'s project.',
      },
      {
        title: '7.4 Portfolio Rights',
        content: 'Grow Up Media reserves the right to feature completed work in its portfolio, case studies, presentations, and marketing materials, unless the Client explicitly requests confidentiality in writing prior to project commencement.',
      },
    ],
  },
  {
    id: 8,
    title: 'Confidentiality',
    content: 'Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. This includes, but is not limited to, business strategies, financial data, campaign results, client lists, pricing structures, and technical specifications.',
    footer: 'Confidential information shall not be disclosed to any third party without prior written consent, except where required by law. This obligation of confidentiality survives the termination of the agreement for a period of two (2) years.',
  },
  {
    id: 9,
    title: 'Third-Party Platforms & Ad Spend',
    content: 'Grow Up Media manages campaigns on third-party platforms including Google, Meta, Instagram, LinkedIn, YouTube, and others. By engaging our paid advertising services, you acknowledge that:',
    list: [
      'Ad spend is paid directly to third-party platforms and is separate from our agency fee',
      'Campaign results are subject to platform algorithms, audience behaviour, and market conditions that are beyond our control',
      'Platform policy changes may affect campaign delivery, reach, and performance',
      'Grow Up Media is not liable for account suspensions or ad disapprovals caused by the Client\'s content or business category',
    ],
    footer: 'We will always act in good faith and apply best practices to maximise your campaign performance, but we do not guarantee specific results, rankings, leads, or return on ad spend (ROAS).',
  },
  {
    id: 10,
    title: 'No Guarantee of Results',
    content: 'Digital marketing outcomes depend on a wide range of factors outside our control, including market competition, algorithm changes, budget levels, audience behaviour, and the quality of the Client\'s products or services. Grow Up Media does not guarantee specific results including, but not limited to:',
    list: [
      'A specific number of leads, conversions, or sales',
      'First-page Google rankings or a specific SEO position',
      'A minimum return on investment (ROI) or return on ad spend (ROAS)',
      'A guaranteed number of social media followers or engagement rate',
    ],
    footer: 'All projections, targets, and forecasts shared in proposals or reports are estimates based on available data and industry benchmarks, not contractual guarantees.',
  },
  {
    id: 11,
    title: 'Termination of Services',
    subsections: [
      {
        title: '11.1 Termination by Client',
        content: 'The Client may terminate services by providing 30 days\' written notice to Grow Up Media. All fees due up to the termination date, including for work in progress, remain payable in full.',
      },
      {
        title: '11.2 Termination by Grow Up Media',
        content: 'Grow Up Media reserves the right to terminate services immediately and without liability in the event that:',
        list: [
          'The Client fails to make payment within 30 days of the due date',
          'The Client engages in illegal, unethical, or abusive conduct toward our team',
          'The Client requests us to create content that is misleading, defamatory, or violates any law',
          'Continuing the engagement poses a reputational or legal risk to Grow Up Media',
        ],
      },
      {
        title: '11.3 Post-Termination',
        content: 'Upon termination, Grow Up Media will hand over all completed deliverables and assets (subject to full payment). Access to any platforms managed by us on the Client\'s behalf will be transferred within 7 business days of termination.',
      },
    ],
  },
  {
    id: 12,
    title: 'Limitation of Liability',
    content: 'To the maximum extent permitted by applicable law, Grow Up Media shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, data, business opportunities, or goodwill, arising out of or in connection with our services.',
    footer: 'In any case, our total aggregate liability to the Client shall not exceed the total fees paid by the Client to Grow Up Media in the three (3) months preceding the event giving rise to the claim.',
  },
  {
    id: 13,
    title: 'Indemnification',
    content: 'The Client agrees to indemnify, defend, and hold harmless Grow Up Media, its directors, employees, contractors, and affiliates from and against any claims, damages, losses, liabilities, costs, and expenses (including legal fees) arising from:',
    list: [
      'The Client\'s misuse of our services or breach of these Terms',
      'Content, materials, or information provided by the Client that infringes third-party rights',
      'Violations of applicable laws or regulations by the Client or their business',
    ],
  },
  {
    id: 14,
    title: 'Governing Law & Jurisdiction',
    content: 'These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts located in Nashik, Maharashtra, India.',
    footer: 'Both parties agree to first attempt to resolve any dispute amicably through good-faith negotiations before initiating any legal proceedings.',
  },
  {
    id: 15,
    title: 'Dispute Resolution',
    content: 'In the event of any dispute, claim, or controversy arising out of or relating to these Terms or the services provided by Grow Up Media, the parties shall:',
    list: [
      'First attempt to resolve the matter through direct negotiation within 15 days of written notice of the dispute',
      'If unresolved, seek resolution through mediation in Nashik, Maharashtra, before a mutually agreed mediator',
      'If mediation fails, submit to the jurisdiction of the competent courts in Nashik, Maharashtra, India',
    ],
  },
  {
    id: 16,
    title: 'Amendments to These Terms',
    content: 'Grow Up Media reserves the right to update or amend these Terms and Conditions at any time. Clients will be notified of material changes via email or a notice on our website. Continued use of our services after such notice constitutes acceptance of the revised Terms. We recommend checking this page periodically for updates.',
  },
  {
    id: 17,
    title: 'Force Majeure',
    content: 'Grow Up Media shall not be held liable for any failure or delay in performing its obligations where such failure or delay results from causes beyond our reasonable control, including but not limited to acts of God, natural disasters, pandemics, government actions, power failures, internet outages, or platform-level disruptions by third-party providers such as Google or Meta.',
  },
  {
    id: 18,
    title: 'Entire Agreement',
    content: 'These Terms and Conditions, together with any signed Proposals, Statements of Work, or Service Agreements, constitute the entire agreement between Grow Up Media and the Client with respect to the subject matter herein, and supersede all prior discussions, representations, or agreements, whether written or oral.',
    footer: 'If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.',
  },
  {
    id: 19,
    title: 'Contact & Legal Enquiries',
    content: 'For any questions, concerns, or legal matters related to these Terms, please contact us:',
    contactCard: {
      name: 'Grow Up Media',
      address: 'Nashik, Maharashtra, India',
      email: 'management.growupmedia@gmail.com',
      contact: '+91 7821092963',
    },
  },
];

export default function TermsPage() {
  return (
    <div className="legal-page page-padding">
      <div className="legal-container">

        <div className="legal-hero">
          <span className="legal-eyebrow">Legal</span>
          <h1 className="legal-title">Terms &amp; <span className="legal-title-accent">Conditions</span></h1>
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
                    {s.contact.lines.map((line, i) => <p key={i}>{line}</p>)}
                  </div>
                )}

                {s.contactCard && (
                  <div className="legal-contact-card">
                    <p className="legal-contact-name">{s.contactCard.name}</p>
                    <p>Address: {s.contactCard.address}</p>
                    <p>Email: <a href={`mailto:${s.contactCard.email}`}>{s.contactCard.email}</a></p>
                    <p>Phone: {s.contactCard.contact}</p>
                  </div>
                )}
              </section>
            ))}
          </main>
        </div>

        <div className="legal-footer-nav">
          <Link to="/" className="legal-back-link">← Back to Home</Link>
          <Link to="/privacy" className="legal-switch-link">Privacy Policy →</Link>
        </div>

      </div>
    </div>
  );
}
