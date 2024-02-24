import axios from "axios";

const userInstance = axios.create({
    baseURL: "http://localhost:4000",
});

const adminInstance = axios.create({
    baseURL: `${"http://localhost:4000"}/admin`,
})
export {userInstance, adminInstance};