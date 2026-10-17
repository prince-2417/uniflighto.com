import React from 'react'
import PageBanner from '../components/PageBanner'
import PolicySidebar from '../components/PolicySidebar'
import { Shield, Lock, Eye, FileText, CheckCircle2, Globe, UserCheck } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <div className="policy-page-wrapper">
      <PageBanner
        eyebrow="Data Protection"
        title="Privacy Policy"
        description="How Uniflighto collects, safeguards, utilizes, and discloses your personal information in compliance with CCPA and GDPR."
        updatedDate="January 2026"
      />

      <div className="policy-container">
        <PolicySidebar />

        <main className="policy-content">
          <section className="policy-section">
            <div className="section-title-wrap">
              <Shield className="section-icon text-primary" size={28} />
              <div>
                <h2>Your Privacy Matters to Us</h2>
                <p className="subtitle">Committed to protecting your personal data with the highest industry standards.</p>
              </div>
            </div>

            <p>
              <strong>Uniflighto Travel LLC</strong> (“Uniflighto”, “we”, “our”, or “us”) respects your privacy and is committed
              to safeguarding the personal information you share with us while visiting <strong>uniflighto.com</strong> or
              using our travel reservation services.
            </p>
            <p>
              This Privacy Policy explains what personal information we collect, how it is processed and secured, the circumstances
              under which it may be shared with airlines and travel suppliers, and the privacy rights available to you under
              applicable data protection laws, including the <strong>California Consumer Privacy Act (CCPA/CPRA)</strong> and the
              <strong> General Data Protection Regulation (GDPR)</strong>.
            </p>
          </section>

          <section className="policy-section">
            <h2>1. Information We Collect</h2>
            <p>
              To process flight bookings and comply with aviation security mandates, we collect the following categories of information:
            </p>
            <div className="privacy-categories-grid">
              <div className="category-card">
                <h4>Personal Identification Details</h4>
                <p>Full legal name, gender, date of birth, passport number, issuing country, nationality, and expiry date (as mandated by TSA Secure Flight).</p>
              </div>

              <div className="category-card">
                <h4>Contact Details</h4>
                <p>Billing address, email address, telephone number, and emergency contact details for sending e-tickets and schedule change alerts.</p>
              </div>

              <div className="category-card">
                <h4>Financial & Payment Data</h4>
                <p>Payment card number, cardholder name, billing zip code, and expiration date. Raw CVV security codes are processed via PCI-compliant tokenization and never stored.</p>
              </div>

              <div className="category-card">
                <h4>Technical & Device Data</h4>
                <p>IP address, browser type, operating system, geolocation data, referring URLs, and website interaction data gathered via cookies and server logs.</p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>2. How We Use Your Information</h2>
            <p>We process your personal information strictly for legitimate business and travel fulfillment purposes:</p>
            <ul className="bullet-list">
              <li><strong>Reservation Fulfillment:</strong> Generating PNRs, booking seats, and issuing airline electronic tickets through Global Distribution Systems (GDS).</li>
              <li><strong>Customer Service:</strong> Assisting you with date changes, cancellations, baggage queries, and 24/7 flight monitoring.</li>
              <li><strong>Important Travel Notifications:</strong> Transmitting e-ticket receipts, gate changes, airline delays, and involuntary schedule modifications.</li>
              <li><strong>Fraud Prevention & Security:</strong> Validating credit card transactions, screening for unauthorized card usage, and protecting against identity theft.</li>
              <li><strong>Legal Compliance:</strong> Complying with TSA Secure Flight mandates, DOT consumer regulations, and tax reporting requirements.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Information Sharing & Third Parties</h2>
            <p>
              <strong>We do not sell your personal data.</strong> We disclose personal information only to trusted third parties
              necessary to complete your travel arrangements:
            </p>
            <ul className="bullet-list">
              <li><strong>Operating Airlines:</strong> To issue tickets, confirm seat assignments, and maintain passenger manifests.</li>
              <li><strong>Global Distribution Systems (GDS):</strong> Such as Amadeus, Sabre, and Travelport to execute automated airline bookings.</li>
              <li><strong>Secure Payment Processors:</strong> To authenticate and settle credit/debit card transactions under PCI-DSS standards.</li>
              <li><strong>Government & Aviation Authorities:</strong> When required by federal law, court order, or TSA security screening regulations.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. California Consumer Privacy Rights (CCPA / CPRA)</h2>
            <p>
              If you are a resident of California, you hold specific statutory rights regarding your personal information:
            </p>
            <ul className="bullet-list">
              <li><strong>Right to Know:</strong> You may request the categories and specific pieces of personal information collected about you in the preceding 12 months.</li>
              <li><strong>Right to Deletion:</strong> You may request deletion of your personal data, subject to legal exceptions (such as retaining completed ticket records for tax and DOT audit requirements).</li>
              <li><strong>Right to Opt-Out:</strong> We do not sell personal data. You have the right to direct us not to share your data for cross-context behavioral advertising.</li>
              <li><strong>Right to Non-Discrimination:</strong> We will never deny service, charge different rates, or alter quality of service if you exercise your privacy rights.</li>
            </ul>
            <p>
              To exercise your California privacy rights, email our privacy team at <strong>privacy@uniflighto.com</strong> or call
              toll-free at <strong>+1 347-777-1900</strong>.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. European Economic Area & UK GDPR Rights</h2>
            <p>
              For users located within the European Union, European Economic Area (EEA), or United Kingdom:
            </p>
            <ul className="bullet-list">
              <li><strong>Data Controller:</strong> Uniflighto Travel LLC serves as the data controller for personal data collected through uniflighto.com.</li>
              <li><strong>Legal Basis for Processing:</strong> We process your data under the legal basis of contractual necessity (to fulfill your airline booking), legitimate interest (fraud prevention), and legal obligation.</li>
              <li><strong>Data Subject Rights:</strong> You have the right to access, rectify, erase, restrict processing, data portability, and object to processing.</li>
              <li><strong>Cross-Border Transfers:</strong> When data is transferred to the United States for ticketing, we apply Standard Contractual Clauses (SCCs) to ensure equivalent protection.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>6. Data Security & Retention</h2>
            <p>
              We implement comprehensive physical, electronic, and procedural safeguards:
            </p>
            <ul className="bullet-list">
              <li>All web traffic and sensitive transactions are encrypted using <strong>256-bit TLS 1.3 protocol</strong>.</li>
              <li>Restricted internal access: only authorized ticketing personnel have access to passenger booking files.</li>
              <li>We retain booking records only as long as necessary to complete travel, resolve disputes, satisfy accounting mandates, and meet federal statutory retention requirements.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>7. Contact the Privacy Officer</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact:
            </p>
            <div className="contact-box-simple">
              <p><strong>Uniflighto Travel LLC — Data Privacy Officer</strong></p>
              <p>795 South Park Avenue, New York, NY 10017, USA</p>
              <p>Email: <a href="mailto:privacy@uniflighto.com">privacy@uniflighto.com</a></p>
              <p>Phone: +1 347-777-1900</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
