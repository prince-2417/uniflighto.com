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
import FlightsPage from './pages/FlightsPage'
import DestinationPage from './pages/DestinationPage'
import ResourcePage from './pages/ResourcePage'

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
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/flights-booking" element={<ResourcePage title="Flight Booking" subtitle="Simple booking assistance for domestic and international travel." sections={[{ heading: 'How to book', text: 'Share your route, travel dates, passenger details, and preferred cabin with our travel specialists.' }, { heading: 'Before confirming', items: ['Review fare rules and baggage terms', 'Confirm passenger names and airport codes', 'Understand change and cancellation conditions'] }]} />} />
          <Route path="/tickets" element={<ResourcePage title="Airline Tickets" subtitle="Guidance and support for airline ticket purchases and itinerary changes." sections={[{ heading: 'Ticket assistance', text: 'Compare available fares and receive help reviewing an itinerary before purchase.' }, { heading: 'Available support', items: ['New airline tickets', 'Schedule and itinerary questions', 'Post-ticketing changes', 'Cancellation guidance'] }]} />} />
          <Route path="/tickets-sitelink-1" element={<ResourcePage title="Flight Ticket Support" subtitle="One-to-one assistance for finding and issuing airline tickets." sections={[{ heading: 'Personal ticket help', text: 'Speak with a specialist for route recommendations and current fare information.' }]} />} />
          <Route path="/tickets-sitelink-2" element={<ResourcePage title="International Tickets" subtitle="International itinerary and airport guidance." sections={[{ heading: 'International travel', text: 'Get help reviewing connection times, airlines, baggage options, and fare conditions.' }]} />} />
          <Route path="/tickets-sitelink-3" element={<ResourcePage title="Domestic Tickets" subtitle="Domestic fare and route booking assistance." sections={[{ heading: 'Domestic travel', text: 'Compare convenient nonstop and connecting routes across the United States.' }]} />} />
          <Route path="/tickets-sitelink-4" element={<ResourcePage title="Last-Minute Tickets" subtitle="Guidance for time-sensitive travel." sections={[{ heading: 'Urgent itinerary help', text: 'Call to review available inventory and route options for near-term departure dates.' }]} />} />
          <Route path="/tickets-sitelink-5" element={<ResourcePage title="Flexible Tickets" subtitle="Compare change-friendly fare options." sections={[{ heading: 'Flexible fares', text: 'Ask about fare rules, change fees, and available flexible ticket options before purchase.' }]} />} />
          <Route path="/tickets-sitelink-6" element={<ResourcePage title="Group Tickets" subtitle="Booking assistance for family, group, and event travel." sections={[{ heading: 'Group travel', text: 'Review routes and seating availability for multiple travelers in one itinerary.' }]} />} />
          <Route path="/airline-reservations" element={<ResourcePage title="Airline Reservations" subtitle="Compare airline options and confirm travel details." sections={[{ heading: 'Reservation support', text: 'Our team helps compare available airlines and booking conditions.' }]} />} />
          <Route path="/american-airlines-reservations" element={<ResourcePage title="American Airlines Reservations" subtitle="Independent booking assistance for American Airlines routes." sections={[{ heading: 'Reservation help', text: 'Call for help reviewing available American Airlines fares and itinerary options.' }]} />} />
          <Route path="/en-flight-reservation" element={<ResourcePage title="English Flight Reservations" subtitle="Flight reservation assistance in English." sections={[{ heading: 'Reservation support', text: 'Speak with our travel team about domestic or international flight options.' }]} />} />
          <Route path="/zeptoair" element={<ResourcePage title="ZeptoAir" subtitle="Fast flight search and reservation guidance." sections={[{ heading: 'How we can help', text: 'Compare route options and review fare details with a travel specialist.' }]} />} />

          <Route path="/cheap-flights-to-new-york" element={<DestinationPage destination="new-york" />} />
          <Route path="/cheap-flights-to-las-vegas" element={<DestinationPage destination="las-vegas" />} />
          <Route path="/cheap-flights-to-miami" element={<DestinationPage destination="miami" />} />
          <Route path="/cheap-flights-to-chicago" element={<DestinationPage destination="chicago" />} />
          <Route path="/cheap-flights-to-san-francisco" element={<DestinationPage destination="san-francisco" />} />
          <Route path="/cheap-flights-to-boston" element={<DestinationPage destination="boston" />} />

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

          {/* Additional public pages */}
          <Route path="/refund-policy" element={<CancellationRefundPage />} />
          <Route path="/cookie-policy" element={<ResourcePage title="Cookie Policy" subtitle="Information about cookies and website usage." sections={[{ heading: 'How cookies are used', text: 'Cookies help a website remember preferences, improve navigation, and understand site usage.' }, { heading: 'Managing cookies', text: 'You can manage or disable cookies through your browser settings.' }]} />} />
          <Route path="/ccpa" element={<ResourcePage title="California Privacy Notice" subtitle="Privacy rights for California residents." sections={[{ heading: 'Your privacy rights', text: 'Eligible California residents may request access, correction, or deletion of personal information where applicable.' }]} />} />
          <Route path="/gdpr" element={<ResourcePage title="GDPR Privacy Notice" subtitle="Information about rights for individuals in regulated regions." sections={[{ heading: 'Privacy rights', text: 'Where applicable, you may request access to, correction of, or deletion of personal information.' }]} />} />
          <Route path="/taxes-and-fee" element={<TaxesAndFeesPage />} />
          <Route path="/es-mx" element={<ResourcePage title="Reservaciones de vuelos" subtitle="Asistencia para vuelos nacionales e internacionales." sections={[{ heading: 'Cómo podemos ayudar', text: 'Un especialista puede ayudarle a comparar rutas y revisar opciones disponibles.' }]} />} />
          <Route path="/es-usa" element={<ResourcePage title="Vuelos a Estados Unidos" subtitle="Encuentre asistencia para reservar vuelos hacia EE. UU." sections={[{ heading: 'Asistencia disponible', text: 'Compare itinerarios, horarios y tarifas con ayuda personalizada.' }]} />} />
          <Route path="/es-usa-sitelink-1" element={<ResourcePage title="Reservas aéreas" subtitle="Ayuda con reservaciones de vuelos." sections={[{ heading: 'Servicio personalizado', text: 'Llame para recibir asistencia con su viaje.' }]} />} />
          <Route path="/es-usa-sitelink-2" element={<ResourcePage title="Vuelos internacionales" subtitle="Opciones para viajes internacionales." sections={[{ heading: 'Itinerarios', text: 'Compare aerolíneas, conexiones y tarifas disponibles.' }]} />} />
          <Route path="/es-usa-sitelink-3" element={<ResourcePage title="Vuelos nacionales" subtitle="Asistencia para viajar dentro de Estados Unidos." sections={[{ heading: 'Rutas domésticas', text: 'Encuentre opciones de vuelos según sus fechas y presupuesto.' }]} />} />
          <Route path="/es-usa-sitelink-4" element={<ResourcePage title="Viajes de último minuto" subtitle="Ayuda con viajes cercanos a la fecha." sections={[{ heading: 'Disponibilidad', text: 'Consulte opciones disponibles llamando a nuestro equipo.' }]} />} />
          <Route path="/es-usa-sitelink-5" element={<ResourcePage title="Cambios y cancelaciones" subtitle="Orientación sobre cambios de boleto." sections={[{ heading: 'Políticas de la aerolínea', text: 'Las condiciones dependen de la aerolínea y la tarifa seleccionada.' }]} />} />
          <Route path="/es-usa-sitelink-6" element={<ResourcePage title="Viajes en grupo" subtitle="Asistencia para grupos y familias." sections={[{ heading: 'Reserva grupal', text: 'Revise opciones de asientos y rutas para varios pasajeros.' }]} />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
