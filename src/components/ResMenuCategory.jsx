import { useState } from "react/cjs/react.development";
import ResMenuCatBody from "./ResMenuCatBody";

const ResMenuCategory = ({data,showBody,toggleShowBody}) =>{
    
    //const[showBody , setShowBody] = useState(false);
// I commented the above line because refer to stateUplift.txt please
    const handleClick = () =>{
       // setShowBody(!showBody);
       
    //    whenever the child component is calling this prop , it is a different callback function at the same Time(in the parent component)
    toggleShowBody();
    }
    
    return (
        <div className=" w-[50%] m-auto  shadow-lg rounded-lg  bg-gray-100 p-2  mb-4 cursor-pointer" onClick={handleClick}>
            <div className="flex justify-between ">
            <span className="font-bold pl-3">{data.title} ({data.itemCards.length}) </span>
            <span>⬇️</span> 
            </div>
           {showBody &&
             <ResMenuCatBody  itemcards={data.itemCards}/> 
           }
          
            
           
        </div>
    )
}
export default ResMenuCategory;