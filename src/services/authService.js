import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

const register = (firstName, lastName, email, mobile, password) => {
    return axios.post(API_URL + 'register', {
        firstName,
        lastName,
        email,
        mobile,
        password
    });
};

const login = (email, password) => {

};