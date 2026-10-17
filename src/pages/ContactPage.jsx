import React, { useState } from 'react'
import PageBanner from '../components/PageBanner'
import PolicySidebar from '../components/PolicySidebar'
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertTriangle,
  Headphones,
  ShieldCheck
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    bookingRef: '',
    department: 'Reservations & New Bookings',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <div className="policy-page-wrapper">
      <PageBanner
        eyebrow="24/7 Customer Care"
        title="Contact Uniflighto"
        description="We're here for you 24 hours a day, 7 days a week. Connect with our dedicated ticketing and travel specialists."
        updatedDate="January 2026"
      />

      <div className="policy-container">
        <PolicySidebar />

        <main className="policy-content">
          {/* Urgent Departure Notice */}
          <section className="urgent-banner">
            <AlertTriangle size={20} className="urgent-icon" />
            <div>
              <strong>Is your flight departing within the next 24 hours?</strong>
              <p>
                Please do not wait for an email response. Call our emergency travel desk immediately at
                <strong> +1 347-777-1900</strong> for priority queue handling.
              </p>
            </div>
          </section>

          {/* Contact Details Grid */}
          <section className="contact-methods-grid">
            <div className="contact-card">
              <div className="contact-card-icon">
                <PhoneCall size={24} />
              </div>
              <h3>Telephone Support</h3>
              <p>Toll-Free 24/7 Live Customer Care</p>
              <a href="tel:+13477771900" className="contact-link highlight">
                +1 347-777-1900
              </a>
              <span className="availability-tag">Available 24/7/365</span>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <Mail size={24} />
              </div>
              <h3>Email Assistance</h3>
              <p>Fast responses within 1–2 hours</p>
              <a href="mailto:support@uniflighto.com" className="contact-link">
                support@uniflighto.com
              </a>
              <span className="availability-tag">Ticketing & Inquiries</span>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <MapPin size={24} />
              </div>
              <h3>Corporate Office</h3>
              <p>Headquarters</p>
              <address className="office-address">
                795 South Park Avenue<br />
                New York, NY 10017, USA
              </address>
              <span className="availability-tag">Administrative HQ</span>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="policy-section">
            <div className="form-container-card">
              <h2>Send an Inquiry to Our Travel Desk</h2>
              <p className="subtitle">
                Fill out the form below and one of our flight coordinators will review your request promptly.
              </p>

              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={48} className="text-success" />
                  <h3>Thank you, {formData.fullName}!</h3>
                  <p>
                    Your message regarding <strong>{formData.department}</strong> has been successfully received
                    by our travel desk.
                  </p>
                  <p className="reference-note">
                    A confirmation email has been dispatched to <strong>{formData.email}</strong>.
                    Our specialists will respond shortly.
                  </p>
                  <button
                    type="button"
                    className="primary-btn"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        bookingRef: '',
                        department: 'Reservations & New Bookings',
                        message: ''
                      })
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row-2">
                    <label className="form-group">
                      <span>Full Legal Name *</span>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </label>

                    <label className="form-group">
                      <span>Email Address *</span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john.doe@example.com"
                        required
                      />
                    </label>
                  </div>

                  <div className="form-row-2">
                    <label className="form-group">
                      <span>Phone Number *</span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        required
                      />
                    </label>

                    <label className="form-group">
                      <span>Booking Reference / PNR (If applicable)</span>
                      <input
                        type="text"
                        name="bookingRef"
                        value={formData.bookingRef}
                        onChange={handleChange}
                        placeholder="e.g. K9L2M5"
                        maxLength={10}
                      />
                    </label>
                  </div>

                  <label className="form-group">
                    <span>Department / Topic *</span>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                    >
                      <option value="Reservations & New Bookings">Reservations & New Bookings</option>
                      <option value="Date Change & Rebooking">Date Change & Rebooking</option>
                      <option value="Cancellation & Refund Request">Cancellation & Refund Request</option>
                      <option value="Seat Assignment & Baggage">Seat Assignment & Baggage</option>
                      <option value="Billing & Payment Inquiries">Billing & Payment Inquiries</option>
                      <option value="Price Match Guarantee Claim">Price Match Guarantee Claim</option>
                      <option value="General Support">General Support</option>
                    </select>
                  </label>

                  <label className="form-group">
                    <span>Your Message *</span>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please include full travel details, flight numbers, or dates to help us assist you faster..."
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className="submit-form-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      'Sending Inquiry...'
                    ) : (
                      <>
                        <Send size={16} /> Submit Travel Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
