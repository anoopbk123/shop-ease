import { configureStore } from "@reduxjs/toolkit";
import userAuth from "./slices/userAuth";
const store = configureStore({
    reducer:{
        isAuthorizedUser: userAuth,
        // isAuthorizedAdmin:''
    }
})
export default store