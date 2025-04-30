import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  // Update video paths to match your public folder structure
  const videoUrls = [
    '/Videos/Video1.mp4',
    '/Videos/video2.mp4',
    '/Videos/video3.mp4'
  ];

  useEffect(() => {
    let currentIndex = 0;
    const video = videoRef.current;

    const handleVideoEnd = () => {
      currentIndex = (currentIndex + 1) % videoUrls.length;
      video.src = videoUrls[currentIndex];
      video.play().catch(error => {
        console.log("Video playback error:", error);
      });
    };

    // Initial video load
    video.src = videoUrls[0];
    video.load();
    video.play().catch(error => {
      console.log("Initial video playback error:", error);
    });

    video.addEventListener('ended', handleVideoEnd);
    return () => video.removeEventListener('ended', handleVideoEnd);
  }, []);

  const handleAboutClick = () => {
    navigate('/menu');
  };

  return (
    <div className="header-container">
      <video
        ref={videoRef}
        className="header-video"
        muted
        playsInline
        autoPlay
        loading="lazy"
      />
      <div className="header-overlay">
        <h1 className="header-title">Discover Our Culinary Journey</h1>
        <p className="header-subtitle">From Traditional Favorites to Modern Delights</p>
        <button onClick={handleAboutClick} className="about-button animate-button">
          Explore Our Menu
        </button>
      </div>
    </div>
  );
};

export default Header;