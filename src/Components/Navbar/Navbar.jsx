import React, { useState, useContext, useEffect } from 'react'
import "./Navbar.css"
import {assets} from "../../assets/assets"
import { Link } from 'react-router-dom';
import {StoreContext} from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

  const navigate = useNavigate();
  const [menu,setMenu] = useState("Home");
  const {getTotalCartAmount,token, setToken} = useContext(StoreContext)
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasVideoBackground, setHasVideoBackground] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const checkForVideoBackground = () => {
      const videoElement = document.querySelector('video');
      if (videoElement) {
        const rect = videoElement.getBoundingClientRect();
        if (rect.top <= 60 && rect.bottom >= 0) {
          setHasVideoBackground(true);
        } else {
          setHasVideoBackground(false);
        }
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we've scrolled enough to change navbar appearance
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setHidden(true);
      } else {
        // Scrolling up
        setHidden(false);
      }
      
      // Update last scroll position
      setLastScrollY(currentScrollY);

      checkForVideoBackground();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${hidden ? 'hide' : ''}`}>
      <Link to='/' className="logo-link" onClick={scrollToTop}>
        <img src={assets.logo} alt="" className="logo"/>
      </Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => {setMenu("Home"); scrollToTop();}} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Food Items</a>
        <a href='#location' onClick={()=>setMenu("Location")} className={menu === "Location" ? "active" : ""}>Location</a>
        <a href='#footer' onClick={()=>setMenu("Contact us")} className={menu === "Contact us" ? "active" : ""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
            <Link to="/chefs"><img 
                    src={assets.chef_icon} 
                    alt="Our Chefs" 
                    style={{ width: '45px', height: '45px' }}/></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>    
        <button onClick={() => window.open('https://www.doordash.com/store/zoobear-mc-indian-cuisine-amsterdam-24947223/22790156/?event_type=autocomplete&pickup=false', '_blank')}>Order now</button>
      </div>
    </nav>
  )
}

export default Navbar