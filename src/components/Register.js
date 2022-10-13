import React, { useEffect, useState } from 'react';
import { registerUser } from '../api/index.js';

const Register = () => {
    const [newUsername, setNewUsername] = useState('');
    const [newPasswordConf, setNewPasswordConf] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const submitUser = async (event) => {
        event.preventDefault();

        if (newPassword !== newPasswordConf) {
            alert('The password does not match.');

        } else {

            const result = await registerUser(newUsername, newPassword);
            const token = result.data.token;

            localStorage.setItem('newUsername', newUsername);
            localStorage.setItem('token', token);

            setNewUsername('');
            setNewPassword('');
            setNewPasswordConf('');

            alert('Successfully Registered.');
        }
    };

    const handleNewUsername = (event) => {
        setNewUsername(event.target.value);
    };

    const handleNewPassword = (event) => {
        setNewPassword(event.target.value);
    };
    
    const handleNewPasswordConf = (event) => {
        setNewPasswordConf(event.target.value);
    };


    return (
        <>
            <h1>Register</h1>
            <form onSubmit={submitUser} >
                <label>
                    Username: &nbsp;
                    <input required={true} minLength={8} value={newUsername} onChange={handleNewUsername} />
                </label><br/>

                <label>
                    Password: &nbsp;
                    <input required={true} minLength={8} value={newPassword} onChange={handleNewPassword} />
                </label><br/>

                <label>
                    Password confirmation: &nbsp;
                    <input required={true} minLength={8} value={newPasswordConf} onChange={handleNewPasswordConf} />
                </label><br/>

                <button type='submit'>Submit</button>
            </form>
        </>
    )
};

export default Register;