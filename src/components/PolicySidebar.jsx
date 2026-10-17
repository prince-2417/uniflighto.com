import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  FileText,
  Shield,
  HelpCircle,
  PhoneCall,
  Scale,
  Receipt,
  DollarSign,
  Briefcase,
  AlertOctagon,
  RefreshCcw,
  CheckCircle,
  Megaphone,
  CreditCard,
  Building2,
  Luggage,
  Sparkles,
  Info
} from 'lucide-react'

export const IMPORTANT_LINKS = [
  { path: '/about', label: 'About Us', icon: Info },
  { path: '/legal-busines-information', label: 'Legal Business Info', icon: Building2 },
  { path: '/how-we-book-and-issue-airline-tickets', label: 'How We Book Tickets', icon: Sparkles },
  { path: '/payment-transparency-disclosure', label: 'Payment Disclosure', icon: CreditCard },
  { path: '/faqs', label: 'FAQs & Help', icon: HelpCircle },
  { path: '/contact', label: 'Contact Us', icon: PhoneCall },
  { path: '/disclaimer', label: 'Disclaimer', icon: AlertOctagon },
  { path: '/terms-of-conditions', label: 'Terms & Conditions', icon: Scale },
  { path: '/privacy-policy', label: 'Privacy Policy', icon: Shield },
  { path: '/price-match-promise', label: 'Price Match Promise', icon: CheckCircle },
  { path: '/taxes-and-fees', label: 'Taxes & Fees', icon: Receipt },
  { path: '/post-ticketing-fee', label: 'Post-Ticketing Fee', icon: DollarSign },
  { path: '/damage-management-policy', label: 'Damage Management', icon: Luggage },
  { path: '/services-fees', label: 'Services Fees', icon: Briefcase },
  { path: '/fulfillment-policy', label: 'Fulfillment Policy', icon: FileText },
  { path: '/cancellation-and-refund', label: 'Cancellation & Refund', icon: RefreshCcw },
  { path: '/advertiser-disclosure', label: 'Advertiser Disclosure', icon: Megaphone },
  { path: '/fare-disclosure-policy', label: 'Fare Disclosure', icon: FileText },
]

export default function PolicySidebar() {
  return (
    <aside className="policy-sidebar">
      <div className="sidebar-header">
        <h3>Important Links</h3>
        <p>Official Policies & Disclosures</p>
      </div>

      <nav className="sidebar-nav">
        {IMPORTANT_LINKS.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
            >
              <Icon size={16} className="sidebar-icon" />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>

      <div className="sidebar-card">
        <h4>Need Immediate Help?</h4>
        <p>Our travel agents are available 24/7 to assist with your bookings.</p>
        <a href="tel:+13477771900" className="sidebar-call-btn">
          📞 +1 347-777-1900
        </a>
      </div>
    </aside>
  )
}
