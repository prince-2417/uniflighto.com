import React from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import PolicySidebar from '../components/PolicySidebar'
import { Building2, ShieldAlert, CheckCircle, Scale, Mail, Phone, MapPin, FileCheck } from 'lucide-react'

export default function LegalBusinessInfoPage() {
  return (
    <div className="policy-page-wrapper">
      <PageBanner
        eyebrow="Corporate Disclosure"
        title="Legal Business Information"
        description="Official corporate registration details, regulatory compliance disclosures, and operational transparency for Uniflighto."
        updatedDate="January 2026"
      />

      <div className="policy-container">
        <PolicySidebar />

        <main className="policy-content">
          <section className="policy-section">
            <div className="section-title-wrap">
              <Building2 className="section-icon text-primary" size={28} />
              <div>
                <h2>Corporate Profile & Legal Identity</h2>
                <p className="subtitle">Public entity disclosures in compliance with US consumer protection regulations.</p>
              </div>
            </div>

            <p>
              In accordance with United States federal and state consumer disclosure regulations,
              including United States Department of Transportation (DOT) guidelines and digital merchant transparency
              rules, this page provides complete, verifiable business information for <strong>uniflighto.com</strong>.
            </p>

            <div className="legal-table-card">
              <table className="info-table">
                <tbody>
                  <tr>
                    <th>Website Domain</th>
                    <td><strong>uniflighto.com</strong></td>
                  </tr>
                  <tr>
                    <th>Legal Operating Name</th>
                    <td><strong>Uniflighto Travel LLC</strong></td>
                  </tr>
                  <tr>
                    <th>Business Structure</th>
                    <td>Limited Liability Company (LLC)</td>
                  </tr>
                  <tr>
                    <th>Industry Classification</th>
                    <td>NAICS 561510 — Travel Agencies & Reservation Services</td>
                  </tr>
                  <tr>
                    <th>Corporate Headquarters</th>
                    <td>795 South Park Avenue, New York, NY 10017, United States</td>
                  </tr>
                  <tr>
                    <th>Customer Support Telephone</th>
                    <td><strong>+1 347-777-1900</strong> (Toll-Free, 24/7/365)</td>
                  </tr>
                  <tr>
                    <th>Official Support Email</th>
                    <td>support@uniflighto.com</td>
                  </tr>
                  <tr>
                    <th>Legal & Compliance Inquiries</th>
                    <td>legal@uniflighto.com</td>
                  </tr>
                  <tr>
                    <th>Official Operating Hours</th>
                    <td>24 Hours a Day / 7 Days a Week / 365 Days a Year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="policy-section">
            <h2>Independent Travel Agency Declaration</h2>
            <div className="highlight-callout alert-style">
              <ShieldAlert size={24} className="callout-icon" />
              <div>
                <strong>Non-Carrier Declaration</strong>
                <p>
                  Uniflighto Travel LLC operates exclusively as an <strong>independent travel agency</strong>.
                  We are not an airline, air carrier, or direct transportation company. We do not own, manage,
                  or operate commercial aircraft. All flight services, boarding rules, in-flight amenities, baggage
                  handling, and transportation operations are executed by the licensed operating airline named on the
                  traveler's itinerary and electronic ticket.
                </p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>Regulatory Compliance & Consumer Protection</h2>
            <p>
              Uniflighto Travel LLC conducts all online and offline sales in strict adherence to:
            </p>
            <ul className="bullet-list">
              <li>
                <strong>U.S. Department of Transportation (DOT) Requirements:</strong> Including 14 CFR Part 399
                (Full-Fare Advertising Rule), post-purchase price increase prohibitions, 24-hour cancellation rule
                disclosures, and automated refund processing mandates for canceled or significantly disrupted flights.
              </li>
              <li>
                <strong>Payment Card Industry Data Security Standards (PCI-DSS):</strong> We utilize Level 1 PCI-compliant
                payment tokenization and 256-bit Secure Sockets Layer (SSL/TLS 1.3) encryption to ensure cardholder data
                is never stored insecurely on our public servers.
              </li>
              <li>
                <strong>State Seller of Travel Regulations:</strong> We comply with applicable registration, financial
                responsibility, and escrow guidelines required in all jurisdictions where our travel services are offered.
              </li>
              <li>
                <strong>Consumer Privacy Standards:</strong> Compliant with the California Consumer Privacy Act (CCPA/CPRA),
                General Data Protection Regulation (GDPR), and federal privacy guidelines.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Intellectual Property & Trademark Rights</h2>
            <p>
              All trademarks, trade names, registered airline logos, and corporate brand emblems shown on
              <strong> uniflighto.com</strong> are the property of their respective owners (such as American Airlines,
              Delta Air Lines, United Airlines, British Airways, Emirates, etc.).
            </p>
            <p>
              Their inclusion on this website is solely for the descriptive identification of available flights,
              schedules, and fares pursuant to the doctrine of nominative fair use. The display of third-party
              trademarks does not indicate, imply, or constitute any direct sponsorship, affiliation, endorsement,
              or joint venture between Uniflighto Travel LLC and said airlines.
            </p>
          </section>

          <section className="policy-section">
            <h2>Service of Process & Legal Notices</h2>
            <p>
              Formal legal notices, subpoenas, or official administrative inquiries must be directed in writing to
              our corporate office:
            </p>
            <div className="contact-box-simple">
              <p><strong>Uniflighto Travel LLC — Legal Department</strong></p>
              <p><MapPin size={15} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> 795 South Park Avenue, New York, NY 10017, USA</p>
              <p><Mail size={15} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Email: legal@uniflighto.com</p>
              <p><Phone size={15} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Phone: +1 347-777-1900</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
