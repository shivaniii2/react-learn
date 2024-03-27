// this file will be used for all the hard coded data that is being used througout the app.
export const LOGO_URL = "https://cdn.dribbble.com/users/6259396/screenshots/14473720/media/1eae778854c9c1a22cd9bf68797e571b.png";
export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/"
export const MENU_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.00480&lng=75.94630&restaurantId=";
export const DATA_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.68557163860428&lng=76.84117008000614&is-seo-homepage-enabled=true"


// here as the same file has to export multiple functions or objects or  variables so we will use named exports instead of default exports. so it is clear that there are two main types of exports :
// named and default 
// In default exports only one module can be exported and in named exports we simply write export keyword in front of variables, objects, functions etc we want to export.



// In JavaScript, the exports object is a special object provided by the CommonJS module system, primarily used in Node.js environments. It allows you to export values (variables, functions, objects, etc.) from a module so that they can be imported and used in other modules.
// Named Exports:

// With named exports, you explicitly specify which values you want to export from a module by assigning them as properties of the exports object or using the export keyword.
// Named exports are useful when you want to export multiple values from a module and import them individually by their names in other modules.
// Default Export:

// With default exports, you export a single value from a module as the default export using the module.exports or export default syntax.
// Default exports are useful when a module needs to export only one value, such as a class or a function, and you want to import it with any name in other modules.


// you can leverage both named exports and a default export in the same module, providing flexibility in how you structure and use your exported values.





// In JavaScript, a module is a reusable piece of code that encapsulates related functionality, such as variables, functions, classes, or objects. 