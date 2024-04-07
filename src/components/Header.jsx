// importing a named export has a slightly different syntax where we use curly braces as shown below.
import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const[btn , setBtn] = useState('Login');
  const statusNet = useOnlineStatus();
  const {loggedInUser} = useContext(userContext);
  //Refer to conetxt.txt for details.
  
  // subscribing to the store (refer to redux.txt)
  const cart = useSelector((store)=>store.cart.items);

  
  
  
 
    return (
      <div className="flex justify-between bg-lime-50">
        <div className="w-24 m-4 ">
          <img
            className="rounded-[50%]"
            // You can always use hard coded values for trailwind css with this syntax of square braces for example if you want to give a specific width you can use className = "w-[]" and in the braces you can write the hardcoded value.
            src={LOGO_URL}
          ></img>
        </div>
        <div className="mt-8">
          <ul className="flex">
            <li className=" ml-8 font-extrabold font-sans text-2xl">
              Active : {statusNet ?   '✅ ': '🔴'}
            </li>
            <li className="ml-8 font-extrabold font-sans text-2xl"> <Link to ="/"> Home </Link> </li>
            
            {/* <li><a href = "/About"> About us </a></li> */}
            {/* I want to go to the About page of my app I can go by just simply putting the above line in anchor tag and use href like that :
            
            But  you see the entire page got refreshed and we have learnt that react router dom gives us the advantage of rendering components based on a URL without reloading the entire page . 
            
            For that there is this Link component provided by react router dom let us see how to use it .
            
            
            browser does not get LINK , behind the scenes react router dom is using anchor tag actually.
             */}
             <li className="ml-8 font-extrabold font-sans text-2xl">
              <Link to ="/About">
              About Us
              </Link>
             </li>
            <li className="ml-8 font-extrabold font-sans text-2xl"><Link  to = "/contact">Contact us</Link></li>
            <li className="ml-8 font-extrabold font-sans text-2xl"><Link to="/groceries">InstaStore</Link></li> 
            
            {/* ofcourse you can see the difference of page reload and not reload :) */}
            <li className="ml-8 font-extrabold font-sans text-2xl">
              <Link to="/cart">
              Cart - ({cart.length})
              </Link>
              </li>
            <button className="ml-8 mr-4 min-w-24 font-extrabold font-sans text-2xl" onClick={() =>{ btn === "Login" ? setBtn('Logout'):setBtn('Login') }}>{btn}</button>
            
            {/* Refer to learnin6.txt please */}
            <li className="font-bold mr-4 font-sans text-2xl">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;
  
  
  