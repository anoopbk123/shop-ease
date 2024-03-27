import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
    name:'userAuth',
    initialState:localStorage.getItem('userToken')?true:false,
    reducers:{
        updateUserAuth:(state, actions)=>{
            return localStorage.getItem('userToken')?true:false
        }
    },
})
export default userAuthSlice.reducer
export const{updateUserAuth} = userAuthSlice.actions