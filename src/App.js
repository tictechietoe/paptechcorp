// src/App.js
import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './Pages/HomePage';
import TeamPage from './Pages/TeamPage';
import Footer from './components/Footer';
import ContactUsPage from './Pages/ContactUsPage';
import ProductsPage from './Pages/ProductsPage';
import ApplicationsPage from './Pages/ProductsPage';
import DisclaimerPage from './Pages/DisclaimerPage';
import AboutUs from './Pages/AboutUsPage';
import NoContentPage from './Pages/NoContentPage';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';
import WhatsAppButton from './components/WhatsappButton';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './Pages/TermsAndConditionsPage';

import './styles/custom.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <ScrollToTop />
          <SplashScreen>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/applications" element={<ApplicationsPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              <Route path="/privacy_policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms_conditions" element={<TermsAndConditionsPage />} />
              <Route path="/*" element={<NoContentPage />} />
            </Routes>
          </SplashScreen>
        </main>
        <WhatsAppButton phoneNumber="7738463018" />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
