import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import logo from '/assets/logo_without_text.png';
import './Footer.css';
import wtspLogo from '/assets/whatsapp.png';
import gmailLogo from '/assets/gmail.png';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <footer className={`footer ${theme === 'dark' ? 'dark-footer' : ''}`}>
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo Column */}
          <div className="footer-logo-col">
            <Link to="/">
              <img src={logo} alt="RBM Granites logo" className="footer-logo" />
            </Link>
          </div>

          {/* Contact Info Column */}
          <div className="footer-contact-col">
            <h3 className="footer-heading">Contact Info</h3>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <svg className="footer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p>Survey No. 35/A, Kazipur Village, Kothapally Mandal, Karimnagar District, Telangana</p>
              </div>
              
              <div className="footer-contact-item">
                <svg className="footer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <p>demo@gmail.com</p>
              </div>
              
              <div className="footer-contact-item">
                <svg className="footer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <p>+91 98480 49585</p>
              </div>
              
              <div className="footer-contact-item">
                <svg className="footer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <p>GSTIN: 36AAVFR5307G1ZV</p>
              </div>
            </div>
          </div>

          {/* Social Media Column */}
          <div className="footer-social-col">
            <h3 className="footer-heading">Connect With Us</h3>
            <div className="footer-social-icons">
              <a href="mailto:demo.gmail.com" className="footer-social-link">
                <img src={gmailLogo} alt="Email" className="footer-social-icon" />
              </a>
              <a href="https://wa.me/919848049585" className="footer-social-link">
                <img src={wtspLogo} alt="WhatsApp" className="footer-social-icon" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} RBM Granites.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
