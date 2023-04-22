import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

export const register = (firstName, lastName, email, mobile, password) => {
    return axios.post(API_URL + 'register', {
        firstName,
        lastName,
        email,
        mobile,
        password
    });
};

export const login = (input) => {
    return axios.post(API_URL + 'login', input)
        .then(res => {
            if (res.status === 200) {
                alert('Login successfully!');
            }
            localStorage.setItem('user', JSON.stringify(res.data))
            return res.data;
        })
        .catch(err => {
            alert({ 'Login failed': err.message });
        })

};


// module.exports = { register, login };
