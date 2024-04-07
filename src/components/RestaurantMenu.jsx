import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import ResMenuCategory from "./ResMenuCategory";
// useParams is another hook like useRouteError hook provided by react router dom library. This hook is used to access that segment of the URL which is dynamic and has been represented after colon sign which is resId in our case so below also we are destructuring resId on the fly to get the value of the dynamic part of the URL and then uses it in creating url for fetch API call so that dynamic URL to be set for API call .


// Let us try to create our own custom hook to make this component more of a single responsibility component 


const RestaurantMenu = () => {
  //const [resMenu, setResMenu] = useState(null);
  const {resId} = useParams();
  const[showIndex,setShowIndex] = useState(null)
  // just like useParams() , we can create our own custom hook to have resInfo like this:
  
  const resMenu = useRestaurantMenu(resId);
  // And now we don't have to bother about  fetching data . That fetching data logic is moved to some other single responsibility file.
  
  
  
  
  
  // I just learnt a new thing of not destructuring data if its null  it as I was constantly getting this error of "can't destructure a null value something ".

  
  // Let us learn about 
  
  
  if(resMenu == null)
 return  <Shimmer />
   

  
  
  
  // Let us bring all the data from the API call itself.
  
  
  
  // let us bring this data from a custom hook and move this logic from here to useRestaurantMenu.js
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_URL+ resId );
  //   let json = await data.json();
  //   setResMenu(json.data);
  //   console.log(json);
  // };
  const cardInfo = resMenu?.cards[2]?.card?.card?.info;
  const infoCard = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const menuCategoriesToDisplay = infoCard && infoCard.filter((c)=> c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  
  return (
    <div>
      <div className="text-center font-bold text-lg mb-1 bg-purple-50">
      <h1 className=" pt-2 "> {cardInfo && cardInfo.name}</h1>
      <p className=""> {cardInfo && cardInfo.cuisines.join(", ")}</p>
      </div>
    
      {menuCategoriesToDisplay && menuCategoriesToDisplay.map((item,index)=> {
      return (
        
        // controlled component refer to stateUplifting.txt
      <ResMenuCategory
       key={item?.card?.card.title} 
       data = {item?.card?.card}
       //showBody={index===1? true : false}
       // The above line says that only the index 1 item will be expanded while other will be closed.
       // Let us take a state variable for index such that if its value is 0 then that means only first element is expanded .
       // now the last LOC 71 will become 
       showBody ={index===showIndex? true : false}
       
       // So now one thing is clear that if we somehow manage to set showIndex to the index of the item that is being clicked , that item will be expanded only.
    
       
       // Refer to childToParent.txt
      toggleShowBody={()=>{setShowIndex(index)}}
      
      // Now if you want to collapse the expanded index on clicking it again then you can modify the above LOC 80 as :
       
      // toggleShowBody={() => setShowIndex(prevIndex => prevIndex === index ? null : index)}
      //  Always remember that When you call setShowIndex with a function argument, React will internally call this function and pass the current state value of showIndex as an argument. This argument, conventionally named prevState or prevIndex, represents the previous state value of showIndex.prevIndex refers to the previous state value of the showIndex state variable. 
       
       />)})}
       
      
    </div>
  );
};
export default RestaurantMenu;



// we just saw that writing the above return statement like this as shown below is invalid 
// return 
// resMenu === null ? (
//     <Shimmer />
//   ) : (
//     <div>
//       <h1> Name</h1>
//       <h2> Menu </h2>
//       <ul>
//         <li> biryani</li>
//         <li> coke </li>
//         <li> pizza</li>
//       </ul>
//     </div>
//   );

// why? 
// The reason the first code snippet is valid while the second one is not is due to JavaScript's automatic semicolon insertion (ASI) feature.

// In JavaScript, semicolons are optional at the end of statements. When JavaScript encounters a line break, it automatically inserts a semicolon if it believes it's necessary to complete the statement. This process is known as automatic semicolon insertion (ASI).

// In the first code snippet, the return statement and the conditional expression resMenu === null ? (...) : (...) are all on the same line. Therefore, JavaScript considers it as a single statement, and the absence of a semicolon is not an issue.

// However, in the second code snippet, there's a line break after the return statement. JavaScript automatically inserts a semicolon after the return statement, which effectively terminates the statement. As a result, the subsequent code block (resMenu === null ? (...) : (...)) is treated as a separate statement, leading to a syntax error.

// To fix the issue in the second code snippet, you can either remove the line break after return or use parentheses to wrap the entire conditional expression:

// return (
//     resMenu === null ? (
//       <Shimmer />
//     ) : (
//       <div>
//         <h1> Name</h1>
//         <h2> Menu </h2>
//         <ul>
//           <li> biryani</li>
//           <li> coke </li>
//           <li> pizza</li>
//         </ul>
//       </div>
//     )
//   );
  
