# hi React


LET US UNDERSTAND WHY REACT IS FAST WHEN IT COMES TO UPDATING UI :

React is fast primarily due to its efficient rendering mechanism, which includes several key factors:


Virtual DOM: React uses a Virtual DOM to represent the UI in memory. When changes occur, React first updates the Virtual DOM rather than directly manipulating the actual browser DOM. This allows React to perform comparisons and compute updates efficiently, resulting in faster rendering.( The Virtual DOM is a lightweight copy of the Real DOM, maintained by libraries like React. It's a JavaScript representation of the UI, stored in memory. However, unlike the Real DOM, the Virtual DOM is not directly attached to the browser's rendering engine.)

Reconciliation: React's reconciliation algorithm compares the previous Virtual DOM with the updated Virtual DOM to identify the minimal set of changes needed to update the actual DOM. This process optimizes rendering performance by minimizing unnecessary updates and DOM manipulations.

Component-based architecture: React's component-based architecture encourages the creation of small, reusable UI components. Components encapsulate their own state and logic, making it easier for React to manage and update only the components that have changed, rather than re-rendering the entire UI.

Asynchronous rendering: React Fiber(algo), introduced in React 16, enables asynchronous rendering and supports concurrent mode. This allows React to prioritize and schedule updates based on their priority, improving responsiveness and perceived performance for the user.

Overall, React's combination of Virtual DOM, efficient reconciliation algorithm, component-based architecture, and other optimizations contribute to its fast rendering performance, making it a popular choice for building high-performance web applications.



# redux:


install redux toolkit and react redux .
Build our store. (configure the store)
connect app with that store.
create slice in store(cartSlice).
dispatch(action).
selector(subscribe)







