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

    return (
        <>
            <h1>Register</h1>
        </>
    )
};

export default Register;