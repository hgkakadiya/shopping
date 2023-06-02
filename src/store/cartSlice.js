const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    // reducers: {
    //     add(state, action) {
    //         state.push(action.payload);
    //     },
    reducers: {
        add(state, action) {
            const item = { ...action.payload };
            item.cardId = new Date().getTime();

            state.push(item);
            console.log(item.cardId)
            // alert(JSON.stringify(item));
        },


        remove(state, action) {
            return state.filter((item) => item.cardId !== action.payload);
        },

        // remove(state, action) {
        //     return state.filter((item) => item.id !== action.payload);
        // },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;


