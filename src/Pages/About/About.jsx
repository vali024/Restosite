import React, { useEffect } from 'react';
import './About.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Our Journey</h1>
      </section>

      <section className="about-section-split">
        <div className="about-text-left">
          <h2 className="section-title">Welcome to Zoobear MC</h2>
          <p className="content-paragraph">
            Step into a world where tradition meets modern culinary artistry. In the heart of Amsterdam, NY, 
            we've created more than just a restaurant – we've built a sanctuary of flavors where every dish 
            tells a story of authentic Indian heritage.
          </p>
          <p className="content-paragraph">
            Our journey began with a simple dream: to bring the genuine tastes and aromas of India to our 
            community, creating a space where memories are made and traditions are honored.
          </p>
        </div>
        <div className="image-gallery">
          <img 
            src={assets.entrance} 
            alt="Restaurant Entrance" 
            className="entrance-image fade-in"
            loading="lazy"
          />
          <img 
            src={assets.dinning2} 
            alt="Dining Area 2" 
            className="entrance-image fade-in-delay-1"
            loading="lazy"
          />
        </div>
      </section>

      <div className="dining-gallery">
        <img 
          src={assets.dinning} 
          alt="Dining Area" 
          className="dining-image slide-in-left"
          loading="lazy"
        />
        <img 
          src={assets.dinning3} 
          alt="Dining Area 3" 
          className="dining-image slide-in-right"
          loading="lazy"
        />
      </div>

      <div className="about-text">
        <h2 className="section-title">Our Culinary Philosophy</h2>
        <p className="content-paragraph">
          At Zoobear MC, we believe that dining is an art form that engages all the senses. Our carefully 
          curated menu showcases the diverse regional cuisines of India, from the robust flavors of the 
          North to the subtle coastal influences of the South.
        </p>
        <p className="content-paragraph">
          Each dish is crafted with precision and care, using traditional techniques and the finest 
          ingredients. Our master chefs bring decades of experience and passion to every plate, ensuring 
          an authentic and memorable dining experience.
        </p>
        <p className="content-paragraph">
          Whether you're joining us for a casual dinner or celebrating a special occasion, our commitment 
          to excellence remains unwavering. We take pride in creating an atmosphere where every guest feels 
          like part of our extended family.
        </p>
      </div>

      <button 
        className="meet-chefs-btn" 
        onClick={() => navigate('/chefs')}
        aria-label="Meet Our Chefs"
      >
        Meet Our Expert Chefs ✨
      </button>

      <div className="contact-section">
        <h2>Visit Us Today</h2>
        <p>📍 4879 NY-30 Unit 8, Amsterdam, NY 12010</p>
        <p>📞 +1 (518) 212-2558</p>
        <p>📧 zoobearmc@gmail.com</p>
        <p className="welcome-note">Join us for an unforgettable experience! 🌟</p>
      </div>
    </div>
  );
};

export default About;
