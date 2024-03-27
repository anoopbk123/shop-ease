import axios from "axios";

const userInstance = axios.create({
    baseURL: "http://localhost:4000",
});

const adminInstance = axios.create({
    baseURL: `${"http://localhost:4000"}/admin`,
})

userInstance.interceptors.request.use((req)=>{
    const token = localStorage.getItem('userToken')
    req.headers.Authorization = `Bearer ${token}`;
    return req;
})


export {userInstance, adminInstance};