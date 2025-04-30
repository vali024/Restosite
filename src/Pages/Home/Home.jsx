import React,{useState} from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Location from '../../Components/Location/Location'

const Home = () => {
    const [category,setCategory] = useState("All");

    return (
        <div className="home">
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
            <Location/>
        </div>
    )
}

export default Home