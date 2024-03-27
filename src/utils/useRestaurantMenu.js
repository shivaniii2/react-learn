import { useEffect, useState } from "react/cjs/react.development";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    
    const[resMenu,setResMenu] = useState(null);
     useEffect(()=>{
        fetchdata();
     },[])
     // empty array as dependency argument because we want to make the API call once .
     const fetchdata = async () =>{
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResMenu(json.data)
     }
    
    return resMenu;
    
}

export default useRestaurantMenu;