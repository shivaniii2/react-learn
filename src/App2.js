// React Components :( nvm use 18.0.0)
import react from "react";
import reactDom from "react-dom";
// In React, components are the building blocks of the user interface.
// Almost everything in React is a component, and the application is typically structured as a tree of components.
// Components are reusable, self-contained units that can be composed together to create complex UIs.
// There are two main types of components in React:
// 1. Functional Components    2. Class Components



// Let us know about functional components :
// Functional components in React are a type of component that is defined as a JavaScript function which return React elements/jsx elements 
//(as When you write a JSX element in a React component, it is essentially a syntactic sugar for creating React elements,so you can say  both)

// component name always start with capital letter :)

const HeadingComponent = () =>{
    return <h2>Hello people ! first functional component</h2>
}

// also below is same code or same function 

// if i have to create a react element then it woukd look something like this :

const heading = (<h1>hello peops!</h1>)
// and now you can see how easily a react element can be converted into react component by just adding an arrow function in between :)

//  this is how you render a react element : root.render(heading)  but you can only render a react component like this:
const root = reactDom.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)


// Let us say there is this title component :
const Title = () => <h1>I am the title</h1>

// And you want to render it between your headingcomponent2 then this is how you will do it :

const HeadingComponent2 =() => (
    <>
    <Title/>
    
    <h2>Hello people ! first functional component</h2>
    </>
)
    // as i have removed return  and multiple line jsx needs to be enclosed in a  bracket.
    
// The above is an example of Component composition.
    root.render(<HeadingComponent2/>)

    
// You can embed JavaScript expressions inside JSX using curly braces {}. This allows you to dynamically include values, variables, or JavaScript expressions within your JSX code.
const headings = (
  <h3>hii i think i need to be a liitle more disciplined from now on guys 🥺</h3>
);

// heading is a react element and not a react component 

const name = 'John';
const age = 25;
const OneComponent = () =>{
    return (
        <div>
          <p>Hello, {name}!</p>
          <p>You are {age} years old.</p>
          <p>The result of 2 + 2 is {2 + 2}.</p>
          <h1>{headings}</h1>
          <h1><Title/></h1>
          <h1>{Title()}</h1>
          <h1><Title></Title></h1>
          {/* above three lines area same things */}
        </div>
      );
}
root.render(<OneComponent/>)



// let us talk a little about the security that jsx provides us from XSS (cross site scripting) attacks.

//JSX, when used with React, does provide some level of protection against Cross-Site Scripting (XSS) attacks through automatic escaping. When you use JSX to render dynamic content, React by default escapes the content, preventing potential malicious scripts from being executed.

// For example, if you have a component like this:

const MyComponent = ({ userContent }) => {
    return <div>{userContent}</div>;
  };

//  If userContent contains HTML or script tags, React will automatically escape it, rendering the tags as plain text rather than interpreting them as executable code.

// However, while this helps mitigate certain types of XSS attacks, it doesn't cover all possible security concerns.

