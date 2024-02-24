import { userInstance } from "../Axios/axiosinstance";

//POST METHODS

export const userSignup = values => {
    console.log(values, "@@@@@@@")
   return userInstance.post("/signup",{...values});
}