import React from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import PolicySidebar from '../components/PolicySidebar'
import {
  ShieldCheck,
  Users,
  Compass,
  Headphones,
  Award,
  Globe2,
  HeartHandshake,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="policy-page-wrapper">
      <PageBanner
        eyebrow="Who We Are"
        title="About Uniflighto"
        description="Your dedicated independent flight booking platform committed to transparent pricing, seamless reservations, and 24/7 human customer support."
        updatedDate="January 2026"
      />

      <div className="policy-container">
        <PolicySidebar />

        <main className="policy-content">
          {/* Intro Card */}
          <section className="policy-section intro-card">
            <div className="section-title-wrap">
              <Compass className="section-icon text-primary" size={28} />
              <div>
                <h2>Welcome to Uniflighto</h2>
                <p className="subtitle">Reimagining flight booking with complete transparency and real human care.</p>
              </div>
            </div>

            <p>
              At <strong>Uniflighto (uniflighto.com)</strong>, we believe booking airline tickets should be
              straightforward, transparent, and accessible to everyone. Founded by passionate travel professionals
              and aviation technology specialists, Uniflighto operates as an <strong>independent online travel agency (OTA)</strong>.
              We connect travelers with over 400 major legacy carriers, low-cost airlines, and regional carriers worldwide.
            </p>
            <p>
              Whether you are flying across the country for a crucial business meeting, heading abroad for a long-awaited
              family holiday, or managing complex multi-destination itineraries, our mission is to empower you with
              real-time fare intelligence, negotiated consolidator rates, and round-the-clock personalized assistance.
            </p>

            <div className="highlight-callout">
              <ShieldCheck size={24} className="callout-icon" />
              <div>
                <strong>Independent Travel Agency Transparency</strong>
                <p>
                  Uniflighto is an independent travel portal and is not directly owned by or affiliated with any single airline.
                  This independence allows us to provide unbiased comparisons across competing airlines, guaranteeing that you
                  receive objective recommendations tailored solely to your schedule, preferences, and budget.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="policy-section">
            <h2>Our Core Values</h2>
            <div className="feature-grid-2">
              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <Award size={22} />
                </div>
                <h3>100% Pricing Transparency</h3>
                <p>
                  No unpleasant surprises at checkout. All government-imposed taxes, airport passenger facility charges (PFC),
                  and agency fulfillment fees are displayed clearly before you submit payment.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <Headphones size={22} />
                </div>
                <h3>24/7 Live Human Support</h3>
                <p>
                  Aviation does not sleep, and neither do we. Our seasoned travel desks in New York and global operational
                  centers are available 24 hours a day, 365 days a year to assist with schedule disruptions, cancellations, and inquiries.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <Globe2 size={22} />
                </div>
                <h3>Global Distribution Reach</h3>
                <p>
                  Powered by direct GDS (Global Distribution System) integration with Amadeus, Sabre, and Travelport,
                  we search millions of flight routes in milliseconds to locate unpublished consolidator discounts and flexible routing options.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <HeartHandshake size={22} />
                </div>
                <h3>Customer-First Advocacy</h3>
                <p>
                  When flight delays or involuntary airline schedule changes occur, we advocate on your behalf directly
                  with the airline to secure prompt re-routing, waiver approvals, or eligible DOT cash refunds.
                </p>
              </div>
            </div>
          </section>

          {/* By the Numbers */}
          <section className="policy-section stats-banner">
            <h2>Uniflighto in Numbers</h2>
            <div className="stats-metric-grid">
              <div className="metric-box">
                <span className="metric-number">150,000+</span>
                <span className="metric-label">Satisfied Travelers</span>
              </div>
              <div className="metric-box">
                <span className="metric-number">400+</span>
                <span className="metric-label">Airline Partners</span>
              </div>
              <div className="metric-box">
                <span className="metric-number">99.8%</span>
                <span className="metric-label">Ticketing Accuracy</span>
              </div>
              <div className="metric-box">
                <span className="metric-number">24 / 7</span>
                <span className="metric-label">Travel Desk Hotline</span>
              </div>
            </div>
          </section>

          {/* What We Offer */}
          <section className="policy-section">
            <h2>Our Comprehensive Travel Services</h2>
            <div className="services-checklist">
              <div className="check-item">
                <CheckCircle2 size={18} className="text-primary" />
                <div>
                  <strong>Domestic & International Flight Reservations:</strong> Access one-way, round-trip, open-jaw, and complex multi-city flight bookings with flexible cancellation terms.
                </div>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} className="text-primary" />
                <div>
                  <strong>Price Match Promise:</strong> If you find a lower qualifying published fare within 24 hours of booking, we match the fare or refund the difference.
                </div>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} className="text-primary" />
                <div>
                  <strong>Post-Ticketing Care:</strong> Date adjustments, seat selection, extra baggage booking, meal requests, and frequent flyer mileage integration.
                </div>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} className="text-primary" />
                <div>
                  <strong>Corporate & Group Travel:</strong> Dedicated travel management specialists for family reunions, corporate teams, and sporting groups requiring coordinated flights.
                </div>
              </div>
            </div>
          </section>

          {/* Legal Details Box */}
          <section className="policy-section legal-summary-card">
            <h3>Corporate Identity & Operating Headquarters</h3>
            <p>
              Uniflighto operates in full compliance with United States Department of Transportation (DOT) consumer protection regulations,
              international IATA standards, and PCI-DSS payment security frameworks.
            </p>
            <div className="corporate-details-grid">
              <div>
                <strong>Entity Name:</strong> Uniflighto Travel LLC
              </div>
              <div>
                <strong>Operational Portal:</strong> uniflighto.com
              </div>
              <div>
                <strong>Headquarters:</strong> 795 South Park Avenue, New York, NY 10017, USA
              </div>
              <div>
                <strong>Telephone Support:</strong> +1 347-777-1900
              </div>
              <div>
                <strong>Customer Inquiries:</strong> support@uniflighto.com
              </div>
              <div>
                <strong>Hours of Operation:</strong> 24 Hours / 7 Days a Week
              </div>
            </div>
            <div style={{ marginTop: '18px' }}>
              <Link to="/contact" className="primary-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                Contact Our Travel Team
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
