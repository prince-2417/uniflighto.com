import React from 'react'
import PageBanner from '../components/PageBanner'
import PolicySidebar from '../components/PolicySidebar'
import { Megaphone, ShieldAlert, Sparkles, CheckCircle2, FileText, Info } from 'lucide-react'

export default function AdvertiserDisclosurePage() {
  return (
    <div className="policy-page-wrapper">
      <PageBanner
        eyebrow="Marketing Transparency"
        title="Advertiser Disclosure"
        description="Our commitment to ethical advertising, promotional clarity, Google Ads compliance, and transparent travel marketing."
        updatedDate="January 2026"
      />

      <div className="policy-container">
        <PolicySidebar />

        <main className="policy-content">
          <section className="policy-section">
            <div className="section-title-wrap">
              <Megaphone className="section-icon text-primary" size={28} />
              <div>
                <h2>Advertising Ethics & Transparency</h2>
                <p className="subtitle">Clear standards for how flight offers and promotional content are presented.</p>
              </div>
            </div>

            <p>
              At <strong>Uniflighto (uniflighto.com)</strong>, we believe that honest, clear, and responsible advertising
              is the foundation of customer trust. This Advertiser Disclosure explains how flight promotions, sponsored search ads,
              and special deals are presented across digital advertising networks (including Google Ads, Bing Ads, and social media platforms).
            </p>
            <p>
              We operate in full compliance with Federal Trade Commission (FTC) guidelines, Google Ads travel advertising policies,
              and Department of Transportation (DOT) full-fare advertising rules.
            </p>
          </section>

          {/* Independent Agency Statement */}
          <section className="policy-section">
            <h2>Independent Travel Agency Disclosure</h2>
            <div className="highlight-callout">
              <ShieldAlert size={24} className="callout-icon" />
              <div>
                <strong>Non-Affiliation Notice</strong>
                <p>
                  Uniflighto is an <strong>independent online travel agency</strong>. In all our advertising campaigns, search engine
                  headlines, and landing pages, we clearly identify ourselves as an independent booking intermediary.
                </p>
                <p>
                  We do not claim to be, impersonate, or represent the direct or official website of any commercial airline,
                  railway, or hotel chain. Any mention of airline trademarks or brand names in our advertisements is solely for the
                  purpose of describing the flights and routes available through our booking portal.
                </p>
              </div>
            </div>
          </section>

          {/* Real-time Pricing Caveat */}
          <section className="policy-section">
            <h2>Real-Time Pricing & Inventory Availability</h2>
            <p>
              Commercial airfares are highly dynamic and change continually based on airline seat availability, passenger demand,
              fuel surcharges, and advance purchase requirements. When reviewing promotional fares on our ads:
            </p>
            <ul className="bullet-list">
              <li>
                <strong>Fares Subject to Seat Availability:</strong> Discounted promotional fares (e.g., “Fares from $120*”)
                reflect actual seat availability at the time the advertisement was created or indexed. Fares are limited and may
                sell out rapidly on peak dates or high-demand flights.
              </li>
              <li>
                <strong>Full Fare Inclusion:</strong> In compliance with 14 CFR Part 399, all quoted airfares in our advertising
                include all mandatory government excise taxes, passenger facility charges (PFC), and standard agency fulfillment fees.
              </li>
              <li>
                <strong>Price Guarantee:</strong> Fares are not locked or guaranteed until payment authorization is complete and
                an official 13-digit electronic ticket number has been issued by the operating airline.
              </li>
            </ul>
          </section>

          {/* How We Are Compensated */}
          <section className="policy-section">
            <h2>Commercial Relationships & Compensation</h2>
            <p>
              Uniflighto generates revenue through:
            </p>
            <div className="feature-grid-2">
              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <CheckCircle2 size={22} />
                </div>
                <h3>Agency Service Fees</h3>
                <p>
                  Nominal fulfillment and booking service fees charged for our search technology, consolidator tariff access,
                  and 24/7 travel desk customer support.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <CheckCircle2 size={22} />
                </div>
                <h3>Airline & Supplier Commissions</h3>
                <p>
                  In certain instances, airlines or travel consolidators may provide incentive commissions or discounted net rates
                  for generating flight bookings through their distribution networks.
                </p>
              </div>
            </div>
            <p style={{ marginTop: '16px' }}>
              Importantly, compensation received from suppliers does not influence our commitment to showing you objective,
              transparent flight search results tailored to your schedule and budget.
            </p>
          </section>

          {/* Privacy & Advertising Standards */}
          <section className="policy-section">
            <h2>Consumer Privacy in Advertising</h2>
            <p>
              We respect your digital privacy. Digital advertising on uniflighto.com is conducted strictly under our
              <a href="/privacy-policy"> Privacy Policy</a>. We do not engage in deceptive tracking, and users may opt out of
              personalized interest-based advertising at any time through standard browser controls or the Digital Advertising Alliance (DAA) opt-out portal.
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}
