import {createSlice} from '@reduxjs/toolkit';

const arraySlice = createSlice({
    name:'arraySlice',
    initialState: {
        array: []
    },
    reducers:{
        addElement(state,action){
            state.array.push(action.payload)
        },
        removeElement(state,action){
            state.array.splice(action.payload, 1)
        },
    },
})

export const {addElement,removeElement} = arraySlice.actions;
export default arraySlice.reducer;