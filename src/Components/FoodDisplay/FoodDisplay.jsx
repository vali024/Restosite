import React, { useContext, useState } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import { assets } from '../../assets/assets'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
    const [searchQuery, setSearchQuery] = useState('')

    const filteredItems = food_list.filter(item => {
        const matchesCategory = category === "All" || category === item.category
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && (searchQuery === '' || matchesSearch)
    })

    return (
        <div className="food-display" id="food-display">
            <div className="food-display-header">
                <h2>Top Dishes For You</h2>
                {category === "All" && (
                    <div className="search-container">
                        <img src={assets.search_icon} alt="search" />
                        <input
                            type="text"
                            placeholder="Search dishes..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                )}
            </div>
            <div className="food-display-list">
                {filteredItems.map((item, index) => (
                    <FoodItem 
                        key={index}
                        id={item._id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>
            <a 
                href="https://www.doordash.com/store/zoobear-mc-indian-cuisine-amsterdam-24947223/22790156/?event_type=autocomplete&pickup=false" 
                className="order-now-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                Order Now
            </a>
        </div>
    )
}

export default FoodDisplay