import {configureStore} from "@reduxjs/toolkit"
import userslice from "../redux/userSlice"

const store = configureStore({
    reducer:{
        user:userslice
    }
})
export type RootState = ReturnType<typeof store.getState>

export default store;