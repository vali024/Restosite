import React, { useState } from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=gmassthanvali11870@gmail.com&su=Message from ${formData.name}&body=${formData.message}`,
      "_blank"
    );
  };

  return (
    <div className="footer" id="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
      <div className="footer-content">
        <div className="footer-content-left animate-fade-in">
          <img src={assets.logo} alt="Foody Logo" className="logo-pulse" />
          <div className="footer-info">
            <h3>Taste the Experience</h3>
            <p>Bringing flavors to your dine since 2020</p>
            <div className="footer-contact-info">
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <span>+1  (518) 212-2558</span>
              </div>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>4879 NY-30, Amsterdam, NY.12010</span>
              </div>
            </div>
          </div>
          <div className="social-media-container">
            <a
              href="https://www.facebook.com/profile.php?id=61573011554949"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com/foody"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com/foody"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com/company/foody"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-content-right animate-slide-up">
          <h2 className="contact-title">Let's Connect</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="input-animate"
            />
            <textarea
              placeholder="Write your message here..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="input-animate message-box"
            ></textarea>
            <button type="submit" className="submit-btn">
              <span>Send</span>
              <i className="fas fa-paper-plane send-icon"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="footer-attribution">
        <p className="credit-text">crafted by</p>
        <a
          href="https://vali024.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="designer-link"
        >
          <span className="designer-name">Vali</span>
          <i className="fas fa-external-link-alt link-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
