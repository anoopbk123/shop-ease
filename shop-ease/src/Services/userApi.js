import { userInstance } from "../Axios/axiosinstance";

//POST METHODS
export const userSignup = values => {
    // console.log(values, "@@@@@@@")
   return userInstance.post("/signup",{...values});
}

export const userLogin = values => {
    return userInstance.post("/login", {...values})
}

//GET METHODS
export const userProfile = ()=>{
    return userInstance.get('/profile');
}