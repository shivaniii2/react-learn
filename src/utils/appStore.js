const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice.js";

const appStore = configureStore({
    reducer:{
        cart : cartReducer
    }
})

export default appStore;



// so here appStore is that one big object that has the entire state of the application . Refer to redux.txt