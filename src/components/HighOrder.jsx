import { useEffect, useState } from "react/cjs/react.production.min";

const HighOrder = (Component, callback ) => {
    const user = {profile:"real",name :"shivani"};
    const [isReal, setIsReal] = useState(false);
    useEffect(()=>{
       let isreal= callback(user);
       setIsReal(isreal)
    },[])
    
    
    return () =>{
        return(
            <>
               {isReal?  <Component/> : null}
            </>
         
        )
     
    }
}

export default HighOrder;
// Create an HOC in react which accepts a callback as 2nd parameter which returns a boolean if user has permission to the page, assume a random user object to be passeod as argument of callback*/