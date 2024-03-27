import { useState } from "react/cjs/react.development";

const User =(props)=>{
   const[exp,setExp] =  useState("2yrs");
   const[email,setEmail] =  useState("shivani78076@gmail.com")
   // This is how we have states in our functional components .
    
    return (
        <div className='user-card'>
            <h2>experience : {exp} </h2>
            <h2>email : {email}</h2>
            <h2>Name : {props.name}</h2>
            <h2> Location : {props.location}</h2>
            <h2> Contacts : 8219040840</h2>
        </div>
    )
}
export default User;


// The above entire functionality of listening to the props can also  be alternatively be  done  simply with the help of destructuring on the fly see how :

// const User =(name , location )=>{
//     return (
//         <div className='user-card'>
//             <h2>Name : {name}</h2>
//             <h2> Location : {location}</h2>
//             <h2> Contact : 8219040840</h2>
//         </div>
//     )
// }



// you can destructure props of various types in React function components. Destructuring allows you to extract values from objects, arrays, and other data structures, making your code cleaner and more concise. 


// In React, props are typically passed to components as objects, but they can also be passed as any other JavaScript data type, depending on the specific needs of the application.


// Object Props: Most commonly, props are passed as objects. Example :

// <MyComponent name="John" age={30} />


// Single Value Props : 
// <WelcomeMessage message="Welcome to our website!" />


// Function Props:


// <Button onClick={handleClick} />



// They all can be destructured :) following the syntax given above 