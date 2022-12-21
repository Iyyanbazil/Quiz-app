import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./dataSlice";
const store=configureStore({
    reducer:{
Data:DataSlice
    }
})

export default store
