const { createSlice } = require("@reduxjs/toolkit");


const cartSlice = createSlice({
    name :'cart',
    initialState: {
        items:[]
    },
    reducers:{
        addItem : (state,action) =>{
             // we are mutating the state here
            state.items.push(action.payload)
        },
        deleteItem : (state, action) =>{
            state.items.pop();
        },
        clearCart : (state,action) =>{
            state.items.length = 0;
        }
        
    }
})


export const{addItem,deleteItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;