import { configureStore }  from "@reduxjs/toolkit";
import readerReducer from "./reader"

export default configureStore({
    reducer:{
        reader: readerReducer,
    }
})