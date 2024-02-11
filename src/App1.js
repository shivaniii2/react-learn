import React from "react";
import ReactDOM from "react-dom/client"


// Let us create a react element which we already know is an object that will become an HTML object when rendered on DOM eventually
 let heading = React.createElement("h1",{id:"heading"} , " I am here to learn React and then make a change 😃");
 let root = ReactDOM.createRoot(document.getElementById("root"));
 console.log(heading);
 root.render(heading);

 
 
 //But see writing your code like that and creating heading like this a lot of mess so there is this thing called as jsx .
 // JSX stands for JavaScript XML, and it is a syntax extension for JavaScript. JSX allows you to write HTML-like code in your JavaScript files, particularly associated with React.js.
 //JSX is not a separate language; it is a syntax extension that gets transformed into standard JavaScript code before being processed by the browser.
 
 
 let heading1 = (<h1>
    hii people through jsx😄
    </h1> )
 // jsx is a syntax  . 
 // The resulting element is a JavaScript object representing a React element.
 root.render(heading1);
 console.log(heading1);
 // heading1 is also a react element which is an object
 // one thing i noticed that we can not log heading1 before rendering it while you can log heading een before rendering it.
 
 
 // jsx is not something that our browser can understand directly so it needs to be transpiled into regular JavaScript using tools like Babel so that browser can undertstand. go and have a look at babel which is a there in node mudules installed by parcel itself for this work.
 
 //Babel is commonly used for transforming JSX (JavaScript XML) syntax, which is commonly associated with React.js. JSX is a syntax extension that allows developers to write UI components more declaratively. Babel, along with the @babel/preset-react preset, can transpile JSX into standard JavaScript.
 
// Babel is a popular JavaScript compiler that allows developers to use the latest ECMAScript features and syntax in their code, even if those features are not yet supported by all browsers. Babel can transform (or transpile) modern JavaScript code into an older version that is widely compatible across different browsers.
 
 
 // jsx code => React.createElement => react element(js object) => HTML element(render)
 // so it will not be wrong to say that babel is converting jsx code into a js object or a react element using React.cretaElement method  and then into HTML  element by render method.
 // When you write a JSX element in a React component, it is essentially a syntactic sugar for creating React elements. 
 
 
 // if you have to write an attribute in jsx then you need to write it in camelcase + there is no class but className to give class to your jsx element and also you should remember jsx is not HTML but yes it looks like html.
 
 
 // for jsx code of one line it is fine as written above but for multiple lines we need to enclose our jsx element into brackets so that babel can understand from where does it starts and where it ends.
 
 
 