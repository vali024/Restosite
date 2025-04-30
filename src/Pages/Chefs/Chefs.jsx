import React, { useState } from 'react';
import './Chefs.css';
import { assets } from '../../assets/assets';

const chefs = [
    {
        name: "Zoobear",
        role: "Executive Chef",
        image: assets.zoo,
        speciality: "Italian Cuisine",
        experience: "15 years",
        bio: "Master of Italian cuisine with expertise in traditional pasta making and modern fusion dishes."
    },
    {
        name: "Maria Garcia",
        role: "Pastry Chef",
        image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548",
        speciality: "French Pastries",
        experience: "10 years",
        bio: "Specializes in French pastries and desserts, trained in Paris under renowned pastry chefs."
    },
    {
        name: "James Smith",
        role: "Sous Chef",
        image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f",
        speciality: "Mediterranean",
        experience: "8 years",
        bio: "Expert in Mediterranean cuisine, focusing on seafood and traditional cooking methods."
    }
];

const reviews = [
    {
        name: "John Doe",
        rating: 5,
        text: "Amazing food and atmosphere! The Italian dishes are outstanding."
    },
    {
        name: "Sarah Smith",
        rating: 4,
        text: "The pastries are heavenly. Definitely worth visiting!"
    },
    {
        name: "Mike Johnson",
        rating: 5,
        text: "Best Mediterranean food in town. The seafood is super fresh!"
    }
];

const Chefs = () => {
    const [selectedChef, setSelectedChef] = useState(null);

    const handleChefClick = (index) => {
        setSelectedChef(selectedChef === index ? null : index);
    };

    return (
        <div className="chefs-container">
            <h1 className="chefs-title">Meet Our Culinary Masters</h1>
            <div className="chefs-grid">
                {chefs.map((chef, index) => (
                    <div 
                        className="chef-card"
                        key={index}
                        onClick={() => handleChefClick(index)}
                    >
                        <div className="chef-image">
                            <img src={chef.image} alt={chef.name} />
                            <div className="chef-overlay">
                                <span>Click to learn more</span>
                            </div>
                        </div>
                        <div className="chef-info">
                            <h2>{chef.name}</h2>
                            <h3>{chef.role}</h3>
                            <p className="chef-specialty">Speciality: {chef.speciality}</p>
                            <p className="chef-experience">Experience: {chef.experience}</p>
                            {selectedChef === index && (
                                <div className="chef-bio show">
                                    <p>{chef.bio}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="reviews-section">
                <h2>Customer Reviews</h2>
                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="review-rating">
                                {"★".repeat(review.rating)}
                                {"☆".repeat(5 - review.rating)}
                            </div>
                            <p className="review-text">{review.text}</p>
                            <p className="review-author">- {review.name}</p>
                        </div>
                    ))}
                </div>
                <a 
                    href="https://www.google.com/maps/place/ZOOBEAR+MC+LLC./@42.9687925,-74.2035687,15z/data=!4m8!3m7!1s0x89de6167b3ea7e3b:0x257f7e4cb43b63ab!8m2!3d42.9687783!4f-74.1851147!9m1!1b1!16s%2Fg%2F11sjvbwf18?entry=ttu&g_ep=EgoyMDI1MDMxMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="review-button"
                >
                    Write a Review on Google
                </a>
            </div>
        </div>
    );
};

export default Chefs;
