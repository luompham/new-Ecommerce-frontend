import { useState } from 'react';

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
        console.log(input);
        fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            // body: input,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input),
            credentials: "include",

        })
            .then(res => {
                if (res.status === 200) {
                    alert('Login successfully!');
                }
                return res.json();
            })
            .then(data => {
                setToken(data.token)
            })
            .catch(err => {
                console.log('Login failed', err.message);
            })
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
