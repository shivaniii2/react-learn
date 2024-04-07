// let us create a food ordering app that has :
// Header : that has a logo and a horizontal navigation bar
// a body : that has a search bar and a restaurant container that has restaurant cards.
// a footer : that has links , copyrights , Address etc.
// our website is driven by configuration sent by backend .
import reactDom from "react-dom/client";
import Body from "./components/Body";
import About from "./components/About";
import { Suspense, useEffect, useState } from "react/cjs/react.development";

import Header from "./components/Header";
// the above line is also making  0 difference with the line : import Header from "./components/Header.jsx" because this behaviour is part of  module resolution algorithm of the JavaScript runtime.JavaScript runtime will look for files with various extensions in the specified path until it finds one that matches.
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// createBrowserRouter is a  component provided by React Router DOM. It's used to wrap your entire React application and provide routing functionality.
// this is responsible for providing the routing functionality to your React application. It listens for changes in the URL and renders the appropriate components based on the current URL path.

//import Contact from "./components/Contact";
import ErrorPage from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import { lazy } from "react/cjs/react.development";
//import Grocery from "./components/Grocery";

// lazy loading conecept : refer to lazyload.txt
const Grocery = lazy(()=>import("./components/Grocery"))
// if you are using curly braces then do not forget to add a return statement bro:) so the above code can be rewritten as 
//const Grocery = lazy(()=>{ return import("./components/Grocery")})
const Contact = lazy(()=> import("./components/Contact"))
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";



const AppLayout = () => {
  const[userName,setUserName] = useState();
  
  useEffect(()=>{
    // Made an API call to get the actual user name and API gave us this data
    
    const data = {
      loggedInUser : "Shivani"
    }
    setUserName(data.loggedInUser);
    //Refer to context.txt
    
  },[])
  
  
  return (
    <Provider store={appStore}>
       <userContext.Provider value={{loggedInUser:userName,  setUserName}}>
      {/* Refer to context.txt for above line */}
       <div >
      <Header />
      <Outlet/>     {/* Child routes will be rendered here so Outlet -  It acts as a placeholder within a parent route component, allowing child routes to be rendered within it.*/}
      {/* <Body/>  */}
    </div>
    </userContext.Provider>
    </Provider>
   
   
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      
      {
        path:"/",
        element:<Body/>
      },
      {
        
        path:"/About",
        element:<About/>
        
      },
      {
        path: "/contact",
        element:<Suspense fallback = {<h1>Loading...</h1>}>
           <Contact/>
        </Suspense>
       
      },
      {
        path: "/restaurants/:resId",  
        // The colon sign indicates that this part of the URL can vary dynamically, and whatever value is present in that segment of the URL will be accessible as the resId parameter in the component that handles this route which is RestaurantMenu component.
        element:<RestaurantMenu/>
      },
      {
        path:"/groceries",
        element:<Suspense fallback={<h1>Loading...</h1>}>
        <Grocery />
      </Suspense>
      
      },
      {
        path:"/cart",
        element:<Cart/>
      }
      
    ],
    // if you will try to go to a page that doesn't exist( within your react application ) ,react router dom will take you to an error page and you can even have your own custom error pages by using another key value pair here as shown below.
   
    errorElement: <ErrorPage/>
  },
  // {
  //   path:"/About",
  //   element:<About/>
    
  // },
  // {
  //   path: "/contact",
  //   element:<Contact/>
  // }
])

// appRouter variable is created using createBrowserRouter, which seems to be a custom function for creating a router configuration. appRouter is  a router object that contains the defined routes and their corresponding components.

// What if you want that your header component remains there  and only the body component keeps on changing according to the component that is there on that specified URL whenever the route changes.
// For this there is another component provided by react router dom that is outlet .<Outlet> was introduced as a part of the new routing architecture. 

// For example, you might have a layout component representing a common structure for multiple pages, and within that layout, you want to render different child pages based on the URL.


// so now you will have another key that is children in the parent route.
const root = reactDom.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter}/>)

// RouterProvider: This component is imported from "react-router-dom" and this component is there to provide the  router configuration (hold by appRouter variable) to your entire React application.

// This routing is a part of client side routing . When a user clicks on a link or interacts with the application, JavaScript intercepts the request, updates the URL using the browser's History API, and renders the appropriate content without a full page reload.

// there is another type of routing too that is Server-Side Routing: Server-side routing involves routing requests on the server based on the URL path and HTTP method (GET, POST, etc.). The server receives a request from the client, matches the URL path to a specific route handler, and returns the corresponding response. In such routing type , a handler is written on the server side to act when a request with specific URl comes. Example API calls : with requested URL : /ml/supt.
