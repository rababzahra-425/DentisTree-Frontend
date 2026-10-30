// import 'bootstrap-icons/font/bootstrap-icons.css';
// import React, { useEffect, useRef } from 'react'; 
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header'; 
// import Hero from './components/Hero';
// import AboutSection from './components/AboutSection'; 
// import StatsSection from './components/StatsSection';
// import ServicesSection from './components/ServicesSection';
// import TreatmentsGallery from './components/TreatmentsGallery';
// import BestDentist from './components/BestDentist';
// import WhyChoose from './components/WhyChoose';
// import ReviewSection from './components/ReviewSection';
// import AppointmentForm from './components/AppointmentForm';
// import Footer from './components/Footer';
// import ContactPage from './components/ContactPage';
// import AboutPage from './components/AboutPage';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import './assets/scss/style.scss'; 
// import './assets/styles/style.css';
// import './assets/styles/responsive.css';
// import Navbar from './components/navbar';
// import Gallerypage from './components/Gallerypage';
// import ServiceDetailPage from './components/ServiceDetailPage';
// import AppointmentPage from './components/AppointmentPage';
// import CookieConsentManager from './components/cookies/CookieConsentManager';
// import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
// import CookiePolicyPage from './pages/CookiePolicyPage';
// // import ParticleBackground from './components/ParticleBackground';

// function App() {
//   const formRef = useRef();
  
//   useEffect(() => {
//     AOS.init({ 
//       duration: 1000, 
//       once: false,     
//     });
//   }, []);

//   return (
//     <>
//       {/* 1. Background layer pooray project ke pichhe chalegi */}
//       {/* <ParticleBackground />

//        Fix: Div ko yahan open kiya taake saara content layers ke upar aa sake 
//       <div style={{ position: "relative", zIndex: 1 }}> */}
//         <main>
//           <Routes>
//             <Route 
//               path="/" 
//               element={
//                 <> 
//                   <Navbar formRef={formRef}/>
//                   <Hero formRef={formRef}/>

//                   <div data-aos="fade-up">
//                     <AboutSection />
//                   </div>

//                   <div data-aos="fade-up">
//                     <StatsSection />
//                   </div>

//                   <div data-aos="fade-up">
//                     <ServicesSection />
//                   </div>

//                   <div data-aos="fade-up">
//                     <TreatmentsGallery />
//                   </div>

//                   <div data-aos="fade-up">
//                     <BestDentist />
//                   </div>

//                   <div data-aos="fade-up">
//                     <WhyChoose />
//                   </div>

//                   <div data-aos="fade-up">
//                     <ReviewSection />
//                   </div>

//                   <div data-aos="fade-up">
//                     <AppointmentForm formRef={formRef} />
//                   </div>
//                 </>
//               } 
//             />
//             {/* Ab yeh sab routes bhi is dynamic wrapper ke andar hain */}
//             <Route path="/contact" element={<ContactPage />} />
//             <Route path="/book-appointment" element={<AppointmentPage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/gallery" element={<Gallerypage />} />
//             <Route path="/services/:slug" element={<ServiceDetailPage />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
//             <Route path="/cookie-policy" element={<CookiePolicyPage />} />
//           </Routes>
//         </main>
//         <Footer />
//         <CookieConsentManager />
//        {/* Fix: Wrapper div ko yahan close kiya hai */}
//     </>
//   );
// }

// export default App;



import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useEffect, useRef } from 'react'; 
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Hero from './components/Hero';
import AboutSection from './components/AboutSection'; 
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import TreatmentsGallery from './components/TreatmentsGallery';
import BestDentist from './components/BestDentist';
import WhyChoose from './components/WhyChoose';
import ReviewSection from './components/ReviewSection';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
import './assets/scss/style.scss'; 
import './assets/styles/style.css';
import './assets/styles/responsive.css';
import Navbar from './components/navbar';
import Gallerypage from './components/Gallerypage';
import ServiceDetailPage from './components/ServiceDetailPage';
import AppointmentPage from './components/AppointmentPage';
import FloatingWhatsApp from './components/Floatingwhatsapp';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import CookieConsentManager from './components/cookies/CookieConsentManager';
// import ParticleBackground from './components/ParticleBackground';

/* ── SEO Imports ── */
import SEO from './components/SEO';
import { seoConfig } from './seo/seoConfig';
import {
  dentistSchema,
  websiteSchema,
  homeFAQSchema,
  buildBreadcrumbSchema,
} from './seo/localBusinessSchema';
 
function App() {
  const formRef = useRef();
  
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: false,     
    });
  }, []);
 
  return (
    <>
      {/* Skip to main content for keyboard users */}
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <main id="main-content">
          <ScrollToTop />
          <Routes>

            {/* ── HOME ── */}
            <Route 
              path="/" 
              element={
                <> 
                  <SEO
                    {...seoConfig['/']}
                    schemas={[
                      dentistSchema,
                      websiteSchema,
                      homeFAQSchema,
                      buildBreadcrumbSchema([{ name: 'Home', path: '/' }]),
                    ]}
                  />
                  <Navbar formRef={formRef}/>
                  <Hero formRef={formRef}/>
 
                  <div data-aos="fade-up">
                    <AboutSection />
                  </div>
 
                  <div data-aos="fade-up">
                    <StatsSection />
                  </div>
 
                  <div data-aos="fade-up">
                    <ServicesSection />
                  </div>
 
                  <div data-aos="fade-up">
                    <TreatmentsGallery />
                  </div>
 
                  <div data-aos="fade-up">
                    <BestDentist />
                  </div>
 
                  <div data-aos="fade-up">
                    <WhyChoose />
                  </div>
 
                  <div data-aos="fade-up">
                    <ReviewSection />
                  </div>
 
                  <div data-aos="fade-up">
                    <AppointmentForm formRef={formRef} />
                  </div>
                </>
              } 
            />

            {/* ── CONTACT ── */}
            <Route path="/contact" element={
              <>
                <SEO
                  {...seoConfig['/contact']}
                  schemas={[
                    dentistSchema,
                    buildBreadcrumbSchema([
                      { name: 'Home', path: '/' },
                      { name: 'Contact Us', path: '/contact' },
                    ]),
                  ]}
                />
                <ContactPage />
              </>
            } />

            {/* ── BOOK APPOINTMENT ── */}
            <Route path="/book-appointment" element={
              <>
                <SEO
                  {...seoConfig['/book-appointment']}
                  schemas={[
                    dentistSchema,
                    buildBreadcrumbSchema([
                      { name: 'Home', path: '/' },
                      { name: 'Book Appointment', path: '/book-appointment' },
                    ]),
                  ]}
                />
                <AppointmentPage />
              </>
            } />

            {/* ── ABOUT ── */}
            <Route path="/about" element={
              <>
                <SEO
                  {...seoConfig['/about']}
                  schemas={[
                    dentistSchema,
                    buildBreadcrumbSchema([
                      { name: 'Home', path: '/' },
                      { name: 'About Us', path: '/about' },
                    ]),
                  ]}
                />
                <AboutPage />
              </>
            } />

            {/* ── GALLERY ── */}
            <Route path="/gallery" element={
              <>
                <SEO
                  {...seoConfig['/gallery']}
                  schemas={[
                    dentistSchema,
                    buildBreadcrumbSchema([
                      { name: 'Home', path: '/' },
                      { name: 'Patient Gallery', path: '/gallery' },
                    ]),
                  ]}
                />
                <Gallerypage />
              </>
            } />

            {/* ── SERVICE DETAIL (SEO handled inside ServiceDetailPage) ── */}
            <Route path="/services/:slug" element={<ServiceDetailPage />} />

            {/* ── PRIVACY POLICY ── */}
            <Route path="/privacy-policy" element={
              <>
                <SEO {...seoConfig['/privacy-policy']} />
                <PrivacyPolicyPage />
              </>
            } />

            {/* ── COOKIE POLICY ── */}
            <Route path="/cookie-policy" element={
              <>
                <SEO {...seoConfig['/cookie-policy']} />
                <CookiePolicyPage />
              </>
            } />

          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
        <CookieConsentManager />
       {/* Fix: Wrapper div ko yahan close kiya hai */}
    </>
  );
}
 
export default App;