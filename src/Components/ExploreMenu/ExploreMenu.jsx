import React from 'react'
import './ExploreMenu.css'
import { menu_list} from "../../assets/assets"
import { useNavigate } from 'react-router-dom'

const ExploreMenu = ({category,setCategory}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="header">
            <div className="header-contents">
                <h2>We Redefine Indian Cuisine</h2>
                <p>We believe great food is about flavors, not just spice. Dive into our menu and experience the true essence of Indian cuisine—a perfect blend of vibrant tastes and irresistible aromas. Come, savor the difference at Zoobear Flavors!. 
                </p>
                <button onClick={() => navigate('/about')}>About Us</button>
            </div>
        </div>
      <div className="explore-menu" id="explore-menu">
          <h1>Explore Our More</h1>
          <p className="explore-menu-text">Choose from a diverse menu featuring delectable array of dishes crafted with the finest 
               ingredients an culinary expertise . Our Mission is to satisfy your cravings and elevate your dininr experiences ,
                one delicious meal at a time.
         </p>
         <div className="explore-menu-wrapper">
             <div className="explore-menu-list">
                  {menu_list.map((item,index)=>{
                      return (
                          <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "All":item.menu_name)} key={index} className="explore-menu-list-item">
                              <img className={category === item.menu_name ? "active":""} src={item.menu_image} alt= "" />
                              <p>{item.menu_name}</p>
                          </div>
                      )
                  })
                 }
             </div>
         </div>
         <hr/>
      </div>
    </div>
  )
}

export default ExploreMenu