import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import './Menu.css';

const Menu = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const toggleBook = () => {
    setIsOpen(!isOpen);
  };

  const handleImageClick = (index) => {
    setSelectedImage(selectedImage === index ? null : index);
  };

  const handleOrderNow = () => {
    window.open('https://www.doordash.com/store/zoobear-mc-indian-cuisine-amsterdam-24947223/22790156/?event_type=autocomplete&pickup=false', '_blank');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % menuImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? menuImages.length - 1 : prev - 1));
  };

  const menuImages = [assets.M1, assets.M2, assets.M3, assets.M4, assets.M5, assets.M6];

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Discover our delicious selection of carefully crafted dishes</p>
      </div>

      <div className="slideshow-container">
        <button className="slideshow-btn prev" aria-label="Previous slide" onClick={prevImage}></button>
        <img 
          src={menuImages[currentImageIndex]} 
          alt={`Menu Item ${currentImageIndex + 1}`} 
          className="slideshow-image"
        />
        <button className="slideshow-btn next" aria-label="Next slide" onClick={nextImage}></button>
      </div>

      <div className="thumbnail-grid">
        {menuImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Menu Thumbnail ${index + 1}`}
            className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          />
          
        ))}
        
        

      </div>
      <button className="order-now-btn" onClick={handleOrderNow}>
        Order Now
      </button>
      <div className="menu-header">
        <h1>Book Menu</h1>
        <p>Experience our menu in an interactive book style presentation</p>
      </div>
      <div className="book-section">
        <div className={`book ${isOpen ? 'open' : ''}`}>
          <div className="page cover" onClick={toggleBook}>
            <img src={assets.menuP0} alt="Menu Cover" className="page-content" />
          </div>
          <div className="page front" onClick={() => !isMobile && setIsOpen(false)}>
            <img src={assets.menuP1} alt="Menu Page 1" className="page-content" />
          </div>
          <div className="page back">
            <img src={assets.menuP2} alt="Menu Page 2" className="page-content" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
