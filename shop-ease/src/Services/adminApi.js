import { adminInstance } from "../Axios/axiosinstance";

//POST METHODS
export const adminLogin = (values) => {
    return adminInstance.post('/login',{
        ...values
    })
}