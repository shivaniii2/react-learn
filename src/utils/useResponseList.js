import { useEffect,useState } from "react/cjs/react.development";
import { DATA_URL } from "./constants";

const useResponseList = () =>{
    const [listOfRes, setlistOfRes] = useState([]);
    
    useEffect(() => {
       fetchData();
       
    }, []);
    
    const fetchData = async() =>{
        try{
            let response = await fetch(DATA_URL);
        const json = await response.json();
        setlistOfRes(
            json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          ); 
        }catch(error){
            console.error("Error fetching data:", error);
        }
       
        
    }
    return  listOfRes;
    
}
export default useResponseList;