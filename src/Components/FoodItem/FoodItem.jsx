import React from 'react'
import "./FoodItem.css"
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({id, name, price, description, image}) => {
  const {url} = useContext(StoreContext);

  return (
    <div className="food-item">
        <div className="food-item-img-container">
             <img className="food-item-image" src={url+"/images/"+image} alt={name}/>
        </div>
        <div className="food-item-info">
            <div className="food-item-name">
                <p>{name}</p>
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem