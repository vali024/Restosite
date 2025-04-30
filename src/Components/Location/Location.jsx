import React from 'react'
import './Location.css'

const Location = () => {
  const handleGetDirections = () => {
    window.open('https://maps.app.goo.gl/FsDF3bAcaXZgEDC9A', '_blank');
  };

  return (
    <div className="location-section" id="location">
      <div className="location-content">
        <h2>Visit Our Restaurant</h2>
        <p className="address">4879 NY-30, Amsterdam, NY 12010</p>
        <p className="hours">
          <span>Hours:</span><br />
          Monday: Closed<br />
          Tuesday - Saturday: 11 AM - 8 PM<br />
          Sunday: 11 AM - 6 PM
        </p>
        <button onClick={handleGetDirections} className="directions-btn">
          Get Directions
        </button>
      </div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11677.800189896849!2d-74.20356869660672!3d42.968792519259246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de6167b3ea7e3b%3A0x257f7e4cb43b63ab!2sZOOBEAR%20MC%20LLC.!5e0!3m2!1sen!2sin!4v1741807797402!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Location