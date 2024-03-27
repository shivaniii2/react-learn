import ResCard,{ withLocality }  from "./ResCardComponent";
import react from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect,useContext } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResponseList from "../utils/useResponseList";
import userContext from "../utils/userContext";

const Body = () => {
 
 
  const[inputVal, setInputVal] = useState('')
  const statusNet = useOnlineStatus();
  const listOfRes = useResponseList();
  const [filteredRes,setFilteredRes] = useState([]);
  const ResCardWithLocal = withLocality(ResCard);
  const{loggedInUser,setUserName} = useContext(userContext);
  
  useEffect(()=>{
    setFilteredRes(listOfRes)
  },[listOfRes])
  
 
  

  // refer to learnings5.txt and useEffect.txt please
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.00480&lng=75.94630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //     );
  //     const json = await response.json();
  //     console.log(json), "yo";
  //     setlistOfRes(
  //       json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //     setFilteredRes( json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants)//because we are now rendering only filtered data which initially should have a value.
  //   } catch {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // Let us show a shimmer UI while the API is fetching data .
  //  if(listOfRes.length === 0){
  //   debugger
  //   return <Shimmer/>
  //  }
  if(statusNet === false)return <h1>Looks like you are offline . Please check your internet connection</h1>
  return (
    <>
      {listOfRes && listOfRes.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="p-5">
          <div className="flex mb-3">
            <div className= "search-bar flex-class">
            {/* choose <input> when you need to capture short, single-line inputs, and choose <textarea> when you need to capture longer, multi-line inputs. */}
              <input className="border border-solid border-gray-950" value = {inputVal} onChange = { (e) =>{setInputVal(e.target.value)}}> 
              {/* above we are binding whatever we write in the input box to the local state variable inputVal and also on changing/typing the input we are updating the local state var with the current input value .  Refer to learning6.txt again */}
              </input> 
              <button className="ml-4 bg-green-200 px-3 py-1 rounded-lg" onClick = {() =>{
                let filteredData  = listOfRes.filter((res)=>{
                   return res.info.name.toLowerCase().includes(inputVal.toLowerCase())
                })
               // setlistOfRes(filteredData)
                // Now as you are updating the actual list of restaurants you have so now if you will again search for something then that means ypu are only searching from filtered restaurants. so , the actual list of restaurants should not be updated like this , we are going to have another local state variable that have all the filtered stuff and we are going to display it but the actual filtering will always be on the entire list of restaurants 
                setFilteredRes(filteredData);
                
                
              }}>Search</button>
            </div>
            <button
              className="ml-4 bg-green-200 px-3 py-1 rounded-lg"
              onClick={() => {
                const filteredList = listOfRes.filter((res) => {
                  return res.info.avgRating > 3;
                });
                setlistOfRes(filteredList);
                console.log(listOfRes); // This will be the original array as far as we are not getting what filter returns so let us assign listOfRes back to what is being returned.
              }}
            >
              Top Rated Restaurants
            </button>
            {/* The filter method doesn't modify the original array; it returns a new array containing the elements that pass the test specified by the callback function. So, in your code, listOfRes remains unchanged after filtering, and you're logging the original listOfRes array, not the filtered one. */}
            {/* so today's take away : Please do not forget to take the new array that filter method has returned  */}

            {/* Even after changing listOfRes we found that our UI is not updating accordingly .
        for now listOfRes is a common js variable , we need to change it in to a local state variable 
        let us understand about local state variables . */}

            {/* A local state variable refers to a variable that holds data within the scope of a particular component.In React, components can have their own state, which is data that affects the rendering of the component.This state is local to that component, meaning it's not accessible from outside the component unless explicitly passed down as props.
        
        so in conclusion we can say that a local state variable in react is a variable that is not accessible outside of the component in which it is declared and this variable holds data that affects the rendering of the component. */}

            {/* The useState hook is used to declare local state variables within functional components. It allows you to define state variables and their initial values, as well as provides a function to update those variables.
        By using the setter function returned by useState, you can update the value of the local state variable. This triggers a re-render of the component with the updated state.
        
        so now question comes ? what are hooks ?
        so hooks are basically functions. They are special functions that enable you to add state and other React features to functional components. Each hook function serves a specific purpose, such as managing state (useState), performing side effects (useEffect), accessing context (useContext), and more.  */}

            {/* so now let us make listOfRes a local state variable */}

            {/* NOTE : whenerver a state variable changes , React rerenders the component. So as soon as the data layer updates , UI layer also updates */}
            <span className="ml-4 mr-2"> userName : </span> 
            {/* refer to context.txt */}
            <input className= " border border-black p-2" type="text" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)} />
            
          </div>
          <div className="flex flex-wrap">
            {/* <ResCard resData={resList[0]} />
        <ResCard resData={resList[1]} />
        <ResCard resData={resList[2]} />
        <ResCard resData={resList[3]} />
        <ResCard resData={resList[4]} />
        <ResCard resData={resList[5]} />
        <ResCard resData={resList[6]} />
        <ResCard resData={resList[7]} /> */}

            {/* instead of writing code like this we should use a for loop or map method to iterarte over the entire array to return the same jsx code for different data as ahown below */}

            {/* {resList.map(restaurant => {
         return <ResCard key={restaurant.info.id} resData={restaurant}/>
        })
        } */}
            {/* for now let us take a list of two restaurants (listOfRes) to understand the concept of hooks in react  */}
            {/* {listOfRes.map((rest) => {
              return <ResCard key={rest.info.id} resData={rest} />;
            })}
             */}
            {/* Now  we are rendering only filtered data for that search button feature  */}
            {filteredRes && filteredRes.map((res) => {
              return<Link  key={res.info.id}  to={"/restaurants/"+ res.info.id}>
                {/* I will add  Higher order component here refer to  higherOrder.txt */}
                {res.info.locality == "Panchkula"  ? <ResCardWithLocal  resData={res}/>: <ResCard   resData={res}/> }
                 </Link> 
            })}

            {/* You must be thinking about this key attribute : React uses the key attribute to optimize the process of reconciling the component tree. When a list of elements is rendered dynamically, React needs a way to identify which items have changed, been added, or been removed. The key attribute helps React efficiently update the DOM by minimizing unnecessary re-renders and ensuring that the correct components are updated.  You can use index as keys  but that is a bad practice as the index of an item can change if items are added, removed, or reordered in the list. If the index changes, React may incorrectly identify components as new or deleted, leading to unnecessary re-renders or incorrect updates. */}

            {/* here in above map function , you at first forgot touse a return statement and if you won't use return then map method will return undefined by default and if you dont want to use return statement then you can use () to wrap your jsx code as using  these parentheses implicitly returns the JSX inside them, which is a common syntax for arrow functions in React when returning JSX. so you can write the above method as something like this also :
       {resList.map(restaurant =>
        (ResCard resData={restaurant}/>) 
       )} */}
            {/* you know about props right ? they are like arguments that we pass to a function in js . 
        In React, "props" is short for "properties," and it's a system for passing data from a parent component to a child component. Props are a way to make components more dynamic and reusable. 
        A parent component can pass data to a child component by including attributes in the JSX of the child component.
        In the child component, you can access the passed data using the props object.
        Props in React are immutable, meaning that a child component cannot modify the props it receives from its parent. They are read-only.
        */}
            {/* <ResCard resName="Starbucks Coffee" resCuisine ="Beverages, Cafe" resStars ="4.3 stars"/> */}
          </div>
        </div>
      )}
    </>
  );
};
// A small take away of css is here : when the container has display flex property and you want all the flex children to be  in the same line or in the multiline within the container then you can use properties like Flex wrap .
export default Body;

