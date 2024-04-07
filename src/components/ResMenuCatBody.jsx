import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";


const ResMenuCatBody  = ({itemcards}) =>{
    // Refer to redux.txt
    const Dispatch = useDispatch();
    
    const handleAddItem = (item) =>{
        Dispatch(addItem(item))
    }
    
    
    return (
        <>
        {itemcards && itemcards.map((item) => (
        <div data-testid="itemlist" className=" border-b-2  p-2 m-2" key={item.card?.info?.id} > 
        <div className="flex justify-between w-full">
        <div className="w-[80%]">
        <span> {item.card?.info?.name}</span>
        <span> - ₹{item.card?.info?.price?item.card?.info?.price/100:item.card?.info?.defaultPrice/100}</span>
        <p className="text-xs py-3">{item.card?.info?.description}</p>
        </div>
        <div className="w-[20%]">
        <button className="absolute bg-black text-white rounded-lg p-1" onClick = {()=> handleAddItem(item)}>Add + </button>
            <img src={CDN_URL+item.card?.info.imageId}/>
           
        </div>
        </div>
        
       
       
        </div>
        )
       )} 
        </>
        
    
      
    )
}
export default ResMenuCatBody;