import {configureStore} from "@reduxjs/toolkit"
import userslice from "../redux/userslice"

const store = configureStore({
    reducer:{
        user:userslice
    }
})

export default store;