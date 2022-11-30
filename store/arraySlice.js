import {createSlice} from '@reduxjs/toolkit';

const arraySlice = createSlice({
    name:'arraySlice',
    initialState: {
        array: []
    },
    reducers:{
        addElement(state,action){
            state.array.push(action.payload)
        }
    },
})

export const {addElement} = arraySlice.actions;
export default arraySlice.reducer;