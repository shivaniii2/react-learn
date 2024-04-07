import { useState , useEffect} from "react";

const useOnlineStatus  = () =>{
    const[statusOnline,setStatusOnline] = useState(true)
    useEffect(() => {
        checkStatus();
    }, []);  // an empty array because I want to fetch data/status only once when this hook is called.   
    
   const checkStatus = () =>{
    window.addEventListener('online', ()=>{
        setStatusOnline(true);
    })
    
    window.addEventListener('offline', ()=>{
        setStatusOnline(false)
    })
   }
    

    
    return statusOnline;
    
}
export default useOnlineStatus;