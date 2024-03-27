import react from "react";
import User from "./User";
import UserClass from "./UserClass";
// const About = () => {
//   return (
//     <>
//       <h1>Hi People !</h1>
//       <h4> I want a nyc high paisa vasool job</h4>

//       {/* Let us here try to understand the concept of class components in react */}
//       <User  name = {"Shivani sharma (function)"} location ={"Hamirpur"}/>

//       {/* Here is the same component but with class implementation */ }
//       <UserClass  name = {"Shivani sharma (class)"} location ={"Hamirpur"}/>
//       {/* As you can see that Passing data through props is same for both types of components. */}

//     </>
//   );
// };
// export default About;

// Let us create a class component for About component

class About extends react.Component {
  constructor(props) {
    console.log("constructor of parent is called");
    super(props);
  }

  componentDidMount() {
    console.log("componentDidMount of parent is called");
  }

  render() {
    console.log("render of parent is called");
    return (
      <>
        <h1 className = "text-xl font-extrabold p-4">Hi People !</h1>
       

        <UserClass name={"Shivani sharma (class 1)"} location={"Hamirpur"} />

        {/* <UserClass  name = {"Shivani sharma (class 2)"} location ={"Hamirpur"}/>
       <UserClass  name = {"Shivani sharma (class 3)"} location ={"Hamirpur"}/> */}
      </>
    );
  }
}
export default About;
