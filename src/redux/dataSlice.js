import { createSlice } from "@reduxjs/toolkit";

const DataSlice=createSlice({
    name:"data",
    initialState:{data:"ayyan"},
    reducers:{
        setname(state,action){
            state.data =action.payload
        }
    }
})

export const {setname}=DataSlice.actions
export default DataSlice.reducer