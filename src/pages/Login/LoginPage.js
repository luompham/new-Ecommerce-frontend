import { useState } from 'react';

import { register, login } from '../../services/authService';

const LoginPage = () => {
    const [token, setToken] = useState('');
    const [input, setInput] = useState({
        email: '',
        password: '',
    });
    const inputKeys = Object.keys(input);
    console.log(token);
    function handleChange(e) {

        // console.log(e.target.name);
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        login(input);
        // fetch('http://localhost:5000/api/auth/login', {
        //     method: 'POST',
        //     // body: input,
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(input),
        //     credentials: "include",

        // })
        //     .then(res => {
        //         if (res.status === 200) {
        //             alert('Login successfully!');
        //         }
        //         return res.json();
        //     })
        //     .then(data => {
        //         setToken(data.accessToken)
        //     })
        //     .catch(err => {
        //         alert({ 'Login failed': err.message });
        //     })
    }
    return (
        <>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                {inputKeys.map(item => {
                    return (
                        <div key={item}>
                            <label htmlFor="">{item}</label>
                            <input name={item} onChange={handleChange} type="text" />
                        </div>
                    )
                })}
                <button type='submit' >Log in</button>
            </form>
        </>
    )
};


export default LoginPage;
