const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello People ! Its my first react program :)")
console.log(heading,"hi"); // here we see that heading created through React.createElement is actually an object which has props (children and attributes)field which has everything we passed to React.createElement as arguments as values like 
const root = ReactDOM.createRoot(document.getElementById("root")); // here ReactDOM is being used to actually create a root inside which react can render whatever we want it to .
root.render(heading); // render is actually responsible for taking this object we just created and rendering it as h1 in DOM.



// the empty object that we passed as an argument to createElement method is where you can set attributes to your element that you have created using react.


// now let us see how can we create a nested HTML elements in react like let us take a div which has another div as child and then this div has another two children that are headings :)


// As we know that the third argument to this createElement method is the children (as learnt while logging this object to console) so we will pass  another element as third arg.
const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am shivani"),React.createElement("h2",{},"I am cool")]))
root.render(parent)

// for sibling elements , use an array.



// You see whatever your root id div had in it already(heading) is replaced by what we are passing as argument in our render method (parent).


// React is a js library .
//A library is a collection of functions or modules that you can call directly in your code to perform specific tasks.
// In a library, you have control over the flow of your application. You decide when and how to use the library's functions.
// Libraries are typically less prescriptive and provide more flexibility to the developer in terms of application structure.
// example : jquery , react

// see there could be an entire web page of js and then there is this small part of page say footer that might be using react .


// A framework is a pre-defined architecture with rules and guidelines that dictate how your application should be structured.
// In a framework, the control flow is inverted. Instead of calling the framework, the framework calls and controls your code.
// example angular , Vue.js






