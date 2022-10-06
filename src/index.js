import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';

import { Register, Posts, Login } from './components'
import { getPosts } from './api'


const App = () => {
    useEffect(() => {
        const getData = async () => {
            await getPosts();
        }
        getData();
    }, []);

    return (
        <>
            <Register />,
            <Login />,
            <Posts />
        </>
    )
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);