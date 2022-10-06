import React, { useEffect, useState } from 'react';
import { userLogin } from '../api/index.js';



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);

    const submitLogin = async (event) => {
        event.preventDefault();

        try {
            const token = await userLogin(username, password);

            if (token) {
                setUsername('');
                setPassword('');
                setLogin(true);
                
                localStorage.setItem(token);
                localStorage.setItem(username);

                alert('Successfully Logged-in.');
            }
        } catch (error) {
            alert('Failed to log-in');
            console.error(`Error: {error}`);
        }
    };
    
    
    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };


    return (
        <>
            <h1>Log-in</h1>
            <form onSubmit={submitLogin} >
                <label>
                    Username: &nbsp;
                    <input required={true} minLength={8} value={username} onChange={handleUsername} />
                </label><br/>

                <label>
                    Password: &nbsp;
                    <input required={true} minLength={8} value={password} onChange={handlePassword} />
                </label><br/>

                <button type='submit'>Submit</button>
            </form>
        </>
    );
};

export default Login;