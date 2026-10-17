import React from 'react'
import PageBanner from '../components/PageBanner'
import PolicySidebar from '../components/PolicySidebar'
import { FileCheck, MailCheck, Clock, ShieldCheck, AlertCircle, PhoneCall } from 'lucide-react'

export default function FulfillmentPolicyPage() {
  return (
    <div className="policy-page-wrapper">
      <PageBanner
        eyebrow="Order Delivery Standards"
        title="Fulfillment Policy"
        description="Comprehensive delivery terms, electronic ticketing timelines, order verification procedures, and fulfillment guarantees."
        updatedDate="January 2026"
      />

      <div className="policy-container">
        <PolicySidebar />

        <main className="policy-content">
          <section className="policy-section">
            <div className="section-title-wrap">
              <FileCheck className="section-icon text-primary" size={28} />
              <div>
                <h2>Electronic Service Delivery Standards</h2>
                <p className="subtitle">How Uniflighto fulfills and delivers your flight reservations.</p>
              </div>
            </div>

            <p>
              This Fulfillment Policy outlines the delivery method, standard timelines, and verification protocols
              governing all travel bookings made through <strong>Uniflighto (uniflighto.com)</strong>.
            </p>
            <p>
              As a modern digital travel agency, Uniflighto specializes exclusively in <strong>Electronic Ticketing (E-Tickets)</strong>.
              We do not issue or physically ship paper tickets. All travel documentation is generated electronically and transmitted
              directly to the customer's registered email address.
            </p>
          </section>

          {/* Delivery Method & Timelines */}
          <section className="policy-section">
            <h2>Delivery Method & Timelines</h2>
            <div className="feature-grid-2">
              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <MailCheck size={22} />
                </div>
                <h3>Immediate Booking Confirmation</h3>
                <p>
                  Upon completing checkout, an automated booking confirmation email containing your temporary reservation
                  reference is dispatched within <strong>5 minutes</strong>.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <Clock size={22} />
                </div>
                <h3>Official E-Ticket Issuance</h3>
                <p>
                  Over 95% of confirmed e-tickets are issued within <strong>15 to 60 minutes</strong>. In rare situations involving
                  complex multi-airline connections or secondary fraud reviews, issuance may take up to <strong>4 hours</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* What Your E-Ticket Delivery Contains */}
          <section className="policy-section">
            <h2>What Your E-Ticket Confirmation Includes</h2>
            <p>
              Your final E-Ticket receipt delivered by Uniflighto contains all legally required flight and passenger records:
            </p>
            <ul className="bullet-list">
              <li><strong>Airline Booking Reference (PNR):</strong> A unique 6-character alphanumeric code for online check-in on the airline’s website.</li>
              <li><strong>13-Digit E-Ticket Number(s):</strong> Assigned to each individual traveler and registered in the operating carrier’s flight manifest.</li>
              <li><strong>Comprehensive Flight Itinerary:</strong> Flight numbers, aircraft type, departure/arrival airports, terminals, layover durations, and cabin class.</li>
              <li><strong>Itemized Financial Invoice:</strong> Transparent breakdown of base fare, government excise taxes, passenger facility charges, and service fees.</li>
              <li><strong>Baggage & Check-In Guidelines:</strong> Information regarding luggage allowances and online check-in opening times.</li>
            </ul>
          </section>

          {/* Delayed Fulfillment & Verification */}
          <section className="policy-section">
            <h2>Order Verification & Fraud Safeguards</h2>
            <p>
              To protect travelers and cardholders against credit card fraud, unauthorized transactions, or compromised identities,
              certain high-value, last-minute, or international bookings may undergo automated risk assessment.
            </p>
            <p>
              If a transaction triggers a risk alert, a Uniflighto verification agent may contact the cardholder via telephone
              or email to verify authorization. In such instances, ticket fulfillment will proceed immediately upon successful
              confirmation. If authorization cannot be validated within 24 hours, the reservation will be voided and the authorization hold released.
            </p>
          </section>

          {/* What to do if ticket not received */}
          <section className="policy-section">
            <h2>What to Do If You Have Not Received Your E-Ticket</h2>
            <p>
              If you have submitted a booking and have not received your e-ticket receipt within 4 hours:
            </p>
            <ol className="number-list">
              <li><strong>Check Your Spam/Junk Folder:</strong> Email filters occasionally route automated booking emails to junk or promotional folders.</li>
              <li><strong>Verify Your Email Address:</strong> Ensure there were no typos in the email address provided during checkout.</li>
              <li><strong>Call Our 24/7 Fulfillment Desk:</strong> Contact us immediately at <strong>+1 347-777-1900</strong> or email <strong>support@uniflighto.com</strong> with your passenger names and payment details. Our agents will re-send your documentation instantly.</li>
            </ol>
          </section>

          {/* Unfulfilled Orders Guarantee */}
          <section className="policy-section">
            <h2>Unfulfilled Bookings Guarantee</h2>
            <div className="highlight-callout">
              <ShieldCheck size={24} className="callout-icon" />
              <div>
                <strong>100% Refund for Unfulfilled Bookings</strong>
                <p>
                  In the rare event that an airline withdraws seats, updates tariff classes, or technical errors prevent Uniflighto
                  from successfully issuing your ticket at the agreed fare, you will be notified immediately.
                </p>
                <p>
                  You will have the option to review alternative flight options or cancel the request. If canceled, <strong>100% of your funds will be released immediately</strong> with zero cancellation or administrative fees.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
