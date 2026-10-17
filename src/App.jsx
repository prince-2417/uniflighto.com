import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LegalBusinessInfoPage from './pages/LegalBusinessInfoPage'
import HowWeBookPage from './pages/HowWeBookPage'
import PaymentTransparencyPage from './pages/PaymentTransparencyPage'
import FaqsPage from './pages/FaqsPage'
import ContactPage from './pages/ContactPage'
import DisclaimerPage from './pages/DisclaimerPage'
import TermsConditionsPage from './pages/TermsConditionsPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import PriceMatchPromisePage from './pages/PriceMatchPromisePage'
import TaxesAndFeesPage from './pages/TaxesAndFeesPage'
import PostTicketingFeePage from './pages/PostTicketingFeePage'
import DamageManagementPage from './pages/DamageManagementPage'
import ServicesFeesPage from './pages/ServicesFeesPage'
import FulfillmentPolicyPage from './pages/FulfillmentPolicyPage'
import CancellationRefundPage from './pages/CancellationRefundPage'
import AdvertiserDisclosurePage from './pages/AdvertiserDisclosurePage'
import FareDisclosurePage from './pages/FareDisclosurePage'

import './App.css'

// Helper component to handle direct hash routes like #/about or #about
function HashRedirectHandler() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const hash = window.location.hash
    if (hash && hash.startsWith('#/')) {
      const targetPath = hash.replace('#', '')
      if (targetPath && targetPath !== location.pathname) {
        navigate(targetPath, { replace: true })
      }
    }
  }, [navigate, location])

  return null
}

function getBasename() {
  const path = window.location.pathname
  if (path.includes('/uniflighto.com/dist')) {
    return '/uniflighto.com/dist'
  }
  if (path.includes('/uniflighto.com')) {
    return '/uniflighto.com'
  }
  return '/'
}

export default function App() {
  return (
    <Router basename={getBasename()}>
      <ScrollToTop />
      <HashRedirectHandler />
      <div className="travel-page">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* 1. About */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about-us" element={<AboutPage />} />

          {/* 2. Legal Business Information */}
          <Route path="/legal-busines-information" element={<LegalBusinessInfoPage />} />
          <Route path="/legal-business-information" element={<LegalBusinessInfoPage />} />

          {/* 3. How We Book and Issue Airline Tickets */}
          <Route path="/how-we-book-and-issue-airline-tickets" element={<HowWeBookPage />} />

          {/* 4. Payment & Transparency Disclosure */}
          <Route path="/payment-transparency-disclosure" element={<PaymentTransparencyPage />} />
          <Route path="/payment-and-transparency-disclosure" element={<PaymentTransparencyPage />} />
          <Route path="/payment-transparency" element={<PaymentTransparencyPage />} />

          {/* 5. FAQs */}
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/faq" element={<FaqsPage />} />

          {/* 6. Contact */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact-us" element={<ContactPage />} />

          {/* 7. Disclaimer */}
          <Route path="/disclaimer" element={<DisclaimerPage />} />

          {/* 8. Terms-of-Conditions */}
          <Route path="/terms-of-conditions" element={<TermsConditionsPage />} />
          <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
          <Route path="/terms" element={<TermsConditionsPage />} />

          {/* 9. Privacy-Policy */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />

          {/* 10. Price-Match-Promise */}
          <Route path="/price-match-promise" element={<PriceMatchPromisePage />} />
          <Route path="/price-match" element={<PriceMatchPromisePage />} />

          {/* 11. Taxes-and-Fees */}
          <Route path="/taxes-and-fees" element={<TaxesAndFeesPage />} />
          <Route path="/taxes-fees" element={<TaxesAndFeesPage />} />

          {/* 12. Post-Ticketing-Fee */}
          <Route path="/post-ticketing-fee" element={<PostTicketingFeePage />} />
          <Route path="/post-ticketing-fees" element={<PostTicketingFeePage />} />
          <Route path="/post-ticketing" element={<PostTicketingFeePage />} />

          {/* 13. Damage-Management-Policy */}
          <Route path="/damage-management-policy" element={<DamageManagementPage />} />
          <Route path="/damage-management" element={<DamageManagementPage />} />

          {/* 14. Sevices-Fees */}
          <Route path="/services-fees" element={<ServicesFeesPage />} />
          <Route path="/sevices-fees" element={<ServicesFeesPage />} />
          <Route path="/service-fees" element={<ServicesFeesPage />} />

          {/* 15. Fulfillment-Policy */}
          <Route path="/fulfillment-policy" element={<FulfillmentPolicyPage />} />
          <Route path="/fulfillment" element={<FulfillmentPolicyPage />} />

          {/* 16. Cancellation-And-Refund */}
          <Route path="/cancellation-and-refund" element={<CancellationRefundPage />} />
          <Route path="/cancellation-and-refund-policy" element={<CancellationRefundPage />} />
          <Route path="/cancellation-policy" element={<CancellationRefundPage />} />
          <Route path="/refund-policy" element={<CancellationRefundPage />} />

          {/* 17. Advertiser-Disclosure */}
          <Route path="/advertiser-disclosure" element={<AdvertiserDisclosurePage />} />
          <Route path="/advertiser-policy" element={<AdvertiserDisclosurePage />} />

          {/* 18. Fare-Disclosure-Policy */}
          <Route path="/fare-disclosure-policy" element={<FareDisclosurePage />} />
          <Route path="/fare-disclosure" element={<FareDisclosurePage />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
