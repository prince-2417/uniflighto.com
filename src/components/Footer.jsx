import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Phone, Mail, MapPin, Clock, Lock, CheckCircle2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Trust Badges Strip */}
      <div className="footer-trust-strip">
        <div className="trust-strip-inner">
          <div className="trust-item">
            <Lock size={20} className="trust-icon" />
            <div>
              <strong>256-Bit SSL Secured</strong>
              <small>Bank-grade encrypted booking transactions</small>
            </div>
          </div>
          <div className="trust-item">
            <Phone size={20} className="trust-icon" />
            <div>
              <strong>24/7 Agent Support</strong>
              <small>Live travel experts always on call</small>
            </div>
          </div>
          <div className="trust-item">
            <Shield size={20} className="trust-icon" />
            <div>
              <strong>Price Match Promise</strong>
              <small>Competitive airline fares guaranteed</small>
            </div>
          </div>
          <div className="trust-item">
            <CheckCircle2 size={20} className="trust-icon" />
            <div>
              <strong>Instant E-Ticketing</strong>
              <small>Direct GDS reservation & quick issuance</small>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        {/* Brand & Summary Column */}
        <div className="footer-brand">
          <div className="brand-wrap footer-brand-wrap">
            <div className="brand-mark">✈</div>
            <div className="brand-name">
              <span>AIRLINE RESERVATIONS</span>
              <strong>UNIFLIGHTO</strong>
            </div>
          </div>
          <p className="footer-tagline">
            Uniflighto is your trusted independent flight booking portal. We compare fares
            across hundreds of domestic and international airlines to deliver unmatched
            value, clear pricing, and 24/7 human travel assistance.
          </p>
          <div className="footer-contact-mini">
            <p><Phone size={14} /> +1 347-777-1900</p>
            <p><Mail size={14} /> support@uniflighto.com</p>
            <p><MapPin size={14} /> 795 South Park Avenue, New York, NY 10017, USA</p>
          </div>
        </div>

        {/* Group 1: Important Links - General & Booking */}
        <div className="footer-col">
          <h4>Essential Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/how-we-book-and-issue-airline-tickets">How We Book Airline Tickets</Link></li>
            <li><Link to="/faqs">FAQs & Help Center</Link></li>
            <li><Link to="/contact">Contact Customer Care</Link></li>
            <li><Link to="/price-match-promise">Price Match Promise</Link></li>
            <li><Link to="/fulfillment-policy">Fulfillment Policy</Link></li>
          </ul>
        </div>

        {/* Group 2: Important Links - Policies & Legal */}
        <div className="footer-col">
          <h4>Policies & Terms</h4>
          <ul>
            <li><Link to="/legal-busines-information">Legal Business Information</Link></li>
            <li><Link to="/terms-of-conditions">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/cancellation-and-refund">Cancellation & Refund</Link></li>
            <li><Link to="/damage-management-policy">Damage Management Policy</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>

        {/* Group 3: Important Links - Disclosures & Fees */}
        <div className="footer-col">
          <h4>Fees & Disclosures</h4>
          <ul>
            <li><Link to="/payment-transparency-disclosure">Payment & Transparency Disclosure</Link></li>
            <li><Link to="/taxes-and-fees">Taxes & Fees Schedule</Link></li>
            <li><Link to="/post-ticketing-fee">Post-Ticketing Fee</Link></li>
            <li><Link to="/services-fees">Services Fees Breakdown</Link></li>
            <li><Link to="/fare-disclosure-policy">Fare Disclosure Policy</Link></li>
            <li><Link to="/advertiser-disclosure">Advertiser Disclosure</Link></li>
          </ul>
        </div>
      </div>

      {/* Comprehensive Legal Disclaimer Box */}
      <div className="footer-disclaimer-box">
        <p>
          <strong>Independent Travel Agency Disclaimer:</strong> Uniflighto (uniflighto.com) is an independent
          online travel service provider and booking intermediary. We are not an airline, carrier, or direct transport operator,
          nor are we owned by, affiliated with, or an official representative of any airline, hotel chain, or cruise line unless
          expressly declared. All registered trademarks, logos, carrier names, and brand symbols displayed on this website
          belong to their respective legal owners and are utilized strictly for descriptive and identification purposes under fair use doctrine.
          All airfares, flight schedules, government taxes, and service fees are subject to seat inventory and airline approval until full payment
          is completed and electronic tickets are issued.
        </p>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Uniflighto (Uniflighto Travel LLC). All rights reserved.</span>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy</Link>
          <span>•</span>
          <Link to="/terms-of-conditions">Terms</Link>
          <span>•</span>
          <Link to="/disclaimer">Disclaimer</Link>
          <span>•</span>
          <Link to="/contact">Support</Link>
        </div>
      </div>
    </footer>
  )
}
