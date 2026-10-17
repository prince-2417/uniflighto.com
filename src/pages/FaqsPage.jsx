import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import PolicySidebar from '../components/PolicySidebar'
import {
  HelpCircle,
  ChevronDown,
  Plane,
  RefreshCcw,
  CreditCard,
  Luggage,
  FileText,
  PhoneCall,
  Search
} from 'lucide-react'

const FAQ_DATA = [
  {
    category: 'Booking & Reservations',
    icon: Plane,
    questions: [
      {
        q: 'How do I book a flight on Uniflighto?',
        a: 'Booking is simple: enter your departure city, destination, travel dates, and number of passengers on our homepage search tool. Browse through real-time airline choices, select your preferred itinerary, enter passenger details exactly as they appear on your passport or government ID, and complete payment. You will receive an immediate booking confirmation and electronic ticket.'
      },
      {
        q: 'How quickly will I receive my electronic ticket (E-ticket)?',
        a: 'Over 95% of e-tickets are issued and delivered to your registered email address within 15 to 60 minutes. In occasional cases involving complex multi-airline itineraries or routine fraud verification checks, issuance may take up to 4 hours. If your flight departs within 24 hours and you have not received your ticket, please call us immediately at +1 347-777-1900.'
      },
      {
        q: 'Can I book a flight for someone else?',
        a: 'Yes, you can book for family, friends, or colleagues. Simply ensure that the passenger name, date of birth, and gender match their government-issued photo ID (passport for international travel, REAL ID/driver’s license for domestic U.S. travel) exactly.'
      },
      {
        q: 'What is a PNR or Airline Booking Reference?',
        a: 'A PNR (Passenger Name Record) is a unique 6-character alphanumeric code (e.g., K9L2M5) assigned by the airline to your reservation. You can use this code alongside your last name on the airline’s official website or mobile app to check flight status, choose seats, and check in online.'
      }
    ]
  },
  {
    category: 'Cancellations & Refunds',
    icon: RefreshCcw,
    questions: [
      {
        q: 'Can I cancel my flight within 24 hours of booking for a full refund?',
        a: 'Yes! In strict compliance with U.S. Department of Transportation (DOT) guidelines, qualifying flight bookings made at least 7 days (168 hours) prior to scheduled departure can be canceled within 24 hours of purchase for a 100% full refund with zero cancellation penalties. Please call our 24/7 desk at +1 347-777-1900 promptly to initiate a 24-hour void.'
      },
      {
        q: 'What happens if the airline cancels or significantly delays my flight?',
        a: 'If an airline cancels your flight, makes a significant schedule change (typically 3+ hours domestic or 6+ hours international), or modifies routing with unacceptable layovers, you are legally entitled to a full cash refund for the unused portion of your ticket under DOT regulations, even if you bought a non-refundable ticket. Our team will handle the airline claim on your behalf.'
      },
      {
        q: 'How long do airline refunds take to reach my bank account?',
        a: 'Once approved by the operating airline, credit card refunds are processed by the carrier within 7 to 14 business days. Depending on your financial institution or credit card issuer, the funds will reflect on your billing statement within 1 to 2 subsequent billing cycles.'
      }
    ]
  },
  {
    category: 'Changes & Date Adjustments',
    icon: FileText,
    questions: [
      {
        q: 'How do I change my travel dates or flight times?',
        a: 'To change your itinerary, contact our 24/7 customer care team at +1 347-777-1900. Our agents will review your airline’s fare rules. If changes are permitted, you will be quoted any applicable airline change fee, agency processing fee, plus any difference in airfare between the original ticket and the new flight.'
      },
      {
        q: 'Can I transfer my airline ticket to another person?',
        a: 'No. Airline security regulations and IATA ticketing rules strictly prohibit the transfer or resale of airline tickets to another individual. Tickets must be used only by the passenger named on the reservation.'
      },
      {
        q: 'What should I do if a passenger’s name is misspelled?',
        a: 'Contact us immediately! Minor typographical errors (typically up to 3 letters) can often be corrected under airline name correction policies without canceling the ticket. However, substantial name changes or replacing a traveler require rebooking at current market fares.'
      }
    ]
  },
  {
    category: 'Baggage & Seating',
    icon: Luggage,
    questions: [
      {
        q: 'Is baggage included in my flight fare?',
        a: 'Baggage allowances depend entirely on the airline, fare category, and route. Basic Economy or Light fares typically include only a small personal item (or one carry-on), while standard economy often includes carry-on luggage and sometimes one checked bag on international flights. We recommend checking the specific baggage allowance listed on your e-ticket or on the airline’s official baggage page.'
      },
      {
        q: 'How do I select or purchase seats in advance?',
        a: 'You can select seats during checkout when available, or log into the operating airline’s official website using your 6-character Airline Confirmation Code (PNR) and last name under the “Manage Booking” section. Some airlines offer complimentary seat selection during online check-in (24 hours prior to departure).'
      }
    ]
  },
  {
    category: 'Payments & Billing',
    icon: CreditCard,
    questions: [
      {
        q: 'Why do I see two separate charges on my credit card statement?',
        a: 'This is standard in online travel booking and is known as “Split Billing”. One charge is processed directly by the airline for the base fare and government taxes, while the second nominal charge represents Uniflighto’s booking fulfillment and technology fee. The sum of both charges will exactly equal the total price you agreed to at checkout.'
      },
      {
        q: 'Are my payment and personal information secure?',
        a: 'Absolutely. Uniflighto employs bank-grade 256-bit SSL encryption (TLS 1.3) across our entire platform and complies with PCI-DSS Level 1 standards. We never sell your personal data or store sensitive CVV codes.'
      }
    ]
  }
]

export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState(FAQ_DATA[0].category)
  const [openItems, setOpenItems] = useState({})
  const [searchQuery, setSearchQuery] = useState('')

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  // Filter questions if search query is entered
  const filteredData = FAQ_DATA.map((cat) => ({
    ...cat,
    questions: cat.questions.filter(
      (q) =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter((cat) => searchQuery === '' || cat.questions.length > 0)

  return (
    <div className="policy-page-wrapper">
      <PageBanner
        eyebrow="Help & Knowledge Base"
        title="Frequently Asked Questions (FAQs)"
        description="Find clear answers to common questions about booking flights, 24-hour cancellations, split billing, baggage rules, and refunds."
        updatedDate="January 2026"
      />

      <div className="policy-container">
        <PolicySidebar />

        <main className="policy-content">
          {/* Search Box */}
          <section className="policy-section">
            <div className="faq-search-box">
              <Search size={18} className="search-icon text-primary" />
              <input
                type="text"
                placeholder="Search FAQs (e.g., 24-hour cancellation, e-ticket, split billing, baggage)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="faq-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="clear-search-btn"
                  onClick={() => setSearchQuery('')}
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills (shown when not actively searching) */}
            {!searchQuery && (
              <div className="faq-category-pills">
                {FAQ_DATA.map((cat) => {
                  const Icon = cat.icon
                  return (
                    <button
                      key={cat.category}
                      type="button"
                      className={`faq-pill-btn ${activeCategory === cat.category ? 'active' : ''}`}
                      onClick={() => setActiveCategory(cat.category)}
                    >
                      <Icon size={14} />
                      <span>{cat.category}</span>
                    </button>
                  )
                })}
              </div>
            )}
          </section>

          {/* Accordion Questions List */}
          <section className="policy-section">
            {filteredData.map((cat, catIdx) => {
              if (!searchQuery && cat.category !== activeCategory) return null
              const Icon = cat.icon

              return (
                <div key={cat.category} className="faq-category-group">
                  <div className="faq-category-title">
                    <Icon size={20} className="text-primary" />
                    <h3>{cat.category}</h3>
                  </div>

                  <div className="faq-accordion-list">
                    {cat.questions.map((item, qIdx) => {
                      const isOpen = !!openItems[`${catIdx}-${qIdx}`]
                      return (
                        <div
                          key={item.q}
                          className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
                        >
                          <button
                            type="button"
                            className="faq-question-btn"
                            onClick={() => toggleItem(catIdx, qIdx)}
                            aria-expanded={isOpen}
                          >
                            <span>{item.q}</span>
                            <ChevronDown
                              size={18}
                              className={`faq-arrow ${isOpen ? 'rotate' : ''}`}
                            />
                          </button>
                          {isOpen && (
                            <div className="faq-answer-pane">
                              <p>{item.a}</p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}

            {filteredData.length === 0 && (
              <div className="no-results-box">
                <HelpCircle size={40} className="text-primary" />
                <h3>No matching answers found</h3>
                <p>Try searching with different keywords, or speak with our live travel support team directly.</p>
                <a href="tel:+13477771900" className="primary-btn" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '12px' }}>
                  Call 24/7 Support: +1 347-777-1900
                </a>
              </div>
            )}
          </section>

          {/* Need More Assistance Card */}
          <section className="policy-section support-contact-card">
            <div className="support-card-inner">
              <div>
                <h3>Didn't find what you were looking for?</h3>
                <p>
                  Our ticketing specialists are available 24 hours a day, 7 days a week to answer your specific flight inquiries.
                </p>
              </div>
              <div className="support-card-actions">
                <a href="tel:+13477771900" className="primary-btn">
                  📞 Call +1 347-777-1900
                </a>
                <Link to="/contact" className="secondary-btn">
                  Submit a Message
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
