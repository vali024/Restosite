import { createContext , useEffect, useState} from "react";
// import {food_list} from "../assets/assets"
import axios from "axios";

export const StoreContext = createContext(null);

export const StoreContextProvider = ({children}) =>{

    const [cartItems, setCartItems] = useState({});
    const url = "https://backend-food-delivery-xzjc.onrender.com"
    const [token,setToken] = useState("")
    // Data carry from database now
    const [food_list,setFoodList] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    const addToCart = async (itemId) => {
        if(!cartItems[itemId]) {
            setCartItems((prev) => ({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let intemInfo = food_list.find((product)=>product._id === item);
                totalAmount += intemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }
    // useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems])

    // Data carry from database now
    const fetchFoodList = async () => {
        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data);
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setCartItems(response.data.cartData);
    }

    // on refreash we were logout hence need this -> store token
    useEffect(()=>{
        async function loadData(){
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])

    const searchFoodItems = (query) => {
        if (!query.trim()) {
          setFilteredItems([]);
          return;
        }
        
        const filtered = food_list.filter(item => 
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
        searchFoodItems,
        filteredItems
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;
