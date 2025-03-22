import { useState, useEffect } from "react";
import logo from "/assets/logo_without_text.png"; 
import wtspLogo from "/assets/whatsapp.png";
import gmailLogo from "/assets/gmail.png";
import "./Contact.css";

const Contact = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  

  // Add Google Maps script
  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.gomaps.pro/maps/api/js?key=AlzaSyywxw-25h4C42_Bn81OWGrew9AhTgsse6W&callback=initMap`;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);

    window.initMap = function() {
      setIsMapLoaded(true);
      const location = { lat: 18.4318, lng: 79.1243 }; // Approximate location for Kazipur Village, Karimnagar
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 14,
        mapId: "8d193001f940fde3",
        mapTypeControl: false,
      });

      const marker = new window.google.maps.Marker({
        position: location,
        map: map,
        title: "RBM Granites",
      });
    };

    return () => {
      window.document.body.removeChild(googleMapScript);
      window.initMap = null;
    };
  }, []);

  

  

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <img src={logo} alt="RBM Granites logo" className="contact-logo" />
        <h1>Contact Us</h1>
        <p>Promise you won't regret! Reach out for inquiries about our premium granite products.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            
            <div className="info-item">
              <div className="icon-container">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3>Address</h3>
                <p>Survey No. 35/A, Kazipur Village, Kothapally Mandal, Karimnagar District, Telangana</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-container">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3>Email</h3>
                <p>demo@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-container">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              <div>
                <h3>Phone</h3>
                <p>+91 98480 49585</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-container">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <h3>GST Info</h3>
                <p>GSTIN: 36AAVFR5307G1ZV</p>
              </div>
            </div>

            <div className="contact-social">
              <h3>Connect With Us</h3>
              <div className="social-icons">
                <a href="mailto:demo.gmail.com" className="social-icon">
                  <img src={gmailLogo} alt="Email" />
                </a>
                <a href="https://wa.me/919848049585" className="social-icon">
                  <img src={wtspLogo} alt="WhatsApp" />
                </a>
              </div>
            </div>
          </div>

          
        </div>

        <div className="map-container">
          <h2>Find Us</h2>
          <div id="map" className="google-map"></div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;