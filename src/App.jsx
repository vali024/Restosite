import React,{useState} from 'react'
import Navbar from "./Components/Navbar/Navbar"
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import Verify from './Pages/Verify/Verify'
import MyOrders from "./Pages/MyOrders/MyOrders"
import Menu from './Pages/Menu/Menu'
import Chefs from './Pages/Chefs/Chefs'
import About from './Pages/About/About'

const App = () => {


  const [showLogin,setShowLogin] = useState(false)

  return (
   <>
   {showLogin ? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<MyOrders/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/chefs' element={<Chefs/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      
    </div>
      <Footer/>
   </>
  )
}

export default App