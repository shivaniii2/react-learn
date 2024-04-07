import { useDispatch, useSelector } from "react-redux";
import ResMenuCatBody from "./ResMenuCatBody";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    // Refer to redux.txt
    const cartItems =  useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    
    
    
    const handleClearCart = () =>{
        dispatch(clearCart())
    }
    
    
    return(
        <>
         <div className = "grid  mt-4 "> 
         <span className="text-center font-bold text-2xl  text-orange-700 m-auto w-[50%]">Cart Items</span>
        {cartItems && cartItems.length !== 0 &&
         <button  onClick = {handleClearCart} className ="m-1 bg-slate-950 text-white w-[8%] p-2 absolute ml-4 rounded-lg">Clear Cart</button>}
         
         </div>
         <div className="w-[50%] m-auto">
            {cartItems && cartItems.length ?
             (<ResMenuCatBody  itemcards={cartItems}/>):<h1 className="mt-4 font-semibold italic text-cyan-950 text-center">Your cart is empty . Please add items in your cart   </h1>
            }
        
         </div>
        
        </>
       
    )
    
}
export default Cart;