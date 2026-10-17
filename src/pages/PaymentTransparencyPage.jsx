import React from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import PolicySidebar from '../components/PolicySidebar'
import {
  CreditCard,
  ShieldCheck,
  Receipt,
  AlertCircle,
  Lock,
  DollarSign,
  HelpCircle,
  CheckCircle2
} from 'lucide-react'

export default function PaymentTransparencyPage() {
  return (
    <div className="policy-page-wrapper">
      <PageBanner
        eyebrow="Financial Clarity"
        title="Payment & Transparency Disclosure"
        description="Clear billing practices, split charge explanations, merchant descriptors, and our ironclad commitment to zero hidden fees."
        updatedDate="January 2026"
      />

      <div className="policy-container">
        <PolicySidebar />

        <main className="policy-content">
          <section className="policy-section">
            <div className="section-title-wrap">
              <CreditCard className="section-icon text-primary" size={28} />
              <div>
                <h2>Zero Hidden Fees Commitment</h2>
                <p className="subtitle">Every dollar explained before you authorize payment.</p>
              </div>
            </div>

            <p>
              At <strong>Uniflighto (uniflighto.com)</strong>, we take pricing transparency very seriously.
              Online travel bookings have historically suffered from obscure markups and unexpected checkout fees.
              Our policy is straightforward: <strong>the final price displayed on your checkout screen is the total amount you will pay</strong>.
            </p>
            <p>
              We disclose all fare components—including airline base fares, mandatory government excise taxes, airport
              facility charges, and any applicable agency booking fees—prior to collecting payment details.
            </p>
          </section>

          {/* Split Billing Explanation */}
          <section className="policy-section">
            <h2>Understanding "Split Billing" On Your Bank Statement</h2>
            <div className="highlight-callout">
              <Receipt size={24} className="callout-icon" />
              <div>
                <strong>Why You Might See Two Separate Line Items</strong>
                <p>
                  Depending on the airline, fare contract, and ticketing method, your credit or debit card statement may
                  display <strong>two separate charges</strong> that together equal the exact total amount you authorized at checkout.
                </p>
              </div>
            </div>

            <div className="billing-example-card">
              <h3>Example of Split Billing Breakdown:</h3>
              <div className="split-billing-grid">
                <div className="split-box">
                  <span className="split-tag">Charge 1: Airline Direct</span>
                  <h4>Airline Name (e.g. DELTA AIR, AMERICAN AIR)</h4>
                  <p>Covers the airline base airfare and mandatory government taxes & passenger fees.</p>
                  <span className="split-amount">$320.00</span>
                </div>

                <div className="split-plus">+</div>

                <div className="split-box">
                  <span className="split-tag">Charge 2: Agency Service</span>
                  <h4>UNIFLIGHTO / TRAVEL AGENCY NY</h4>
                  <p>Covers agency booking fulfillment, 24/7 travel desk support, and technology fee.</p>
                  <span className="split-amount">$30.00</span>
                </div>

                <div className="split-equals">=</div>

                <div className="split-box total-box">
                  <span className="split-tag">Total Authorized</span>
                  <h4>Exact Total at Checkout</h4>
                  <p>Your bank statement will reflect these two charges totaling the exact agreed fare.</p>
                  <span className="split-amount text-primary">$350.00</span>
                </div>
              </div>
            </div>

            <p className="note-text">
              <strong>Important:</strong> You are <em>never</em> double-billed. The combined total of the airline charge
              and the Uniflighto charge will precisely match the grand total presented and approved on your booking screen.
            </p>
          </section>

          {/* Billing Descriptors */}
          <section className="policy-section">
            <h2>Card Statement Descriptors</h2>
            <p>
              When reviewing your online banking or credit card statements, transactions initiated through Uniflighto
              will typically appear under one of the following official descriptors:
            </p>
            <ul className="bullet-list">
              <li><code>UNIFLIGHTO TRAVEL NY</code></li>
              <li><code>UNIFLIGHTO.COM RESERVATIONS</code></li>
              <li><code>AIRLINE TICKET / [AIRLINE NAME]</code> (e.g., <code>DELTA AIR 0061234567890</code>)</li>
              <li><code>UNIFLIGHTO FLIGHT BOOKING 347-777-1900</code></li>
            </ul>
            <p>
              If you ever see a charge you do not recognize, please contact our 24/7 Billing Support Department at
              <strong> +1 347-777-1900</strong> before disputing the transaction with your financial institution.
              Our representatives can immediately locate your PNR and send you an itemized receipt.
            </p>
          </section>

          {/* Accepted Payment Methods */}
          <section className="policy-section">
            <h2>Accepted Payment Methods</h2>
            <div className="payment-methods-grid">
              <div className="method-chip">Visa</div>
              <div className="method-chip">MasterCard</div>
              <div className="method-chip">American Express</div>
              <div className="method-chip">Discover Card</div>
              <div className="method-chip">Diners Club</div>
              <div className="method-chip">JCB</div>
            </div>
            <p style={{ marginTop: '16px' }}>
              We do not accept personal checks, cash, or third-party wire transfers for online reservations.
              All credit and debit cards must be issued in the name of the traveler or authorized booking contact.
            </p>
          </section>

          {/* Security Standards */}
          <section className="policy-section">
            <h2>Payment Security & Data Protection</h2>
            <div className="security-badges-row">
              <div className="security-item">
                <Lock size={20} className="text-primary" />
                <div>
                  <strong>PCI-DSS Level 1 Certified</strong>
                  <p>Highest industry security standard for credit card processing.</p>
                </div>
              </div>
              <div className="security-item">
                <ShieldCheck size={20} className="text-primary" />
                <div>
                  <strong>256-Bit TLS 1.3 Encryption</strong>
                  <p>All sensitive financial data is encrypted end-to-end.</p>
                </div>
              </div>
              <div className="security-item">
                <CheckCircle2 size={20} className="text-primary" />
                <div>
                  <strong>Tokenized Storage</strong>
                  <p>We do not store your complete CVV/CVC code or raw card numbers on web servers.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Foreign Transactions */}
          <section className="policy-section">
            <h2>Currency & Foreign Transaction Disclosures</h2>
            <p>
              All prices displayed on <strong>uniflighto.com</strong> are denominated and processed in <strong>United States Dollars (USD)</strong>
              unless explicitly noted otherwise.
            </p>
            <p>
              If your payment method is issued in a currency other than USD (such as CAD, EUR, GBP, AUD, or INR),
              your card issuer will convert the charge using their prevailing foreign exchange rate. Your financial
              institution may also assess an international or foreign transaction fee (typically 1% to 3%), which is
              levied directly by your bank, not by Uniflighto.
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}
