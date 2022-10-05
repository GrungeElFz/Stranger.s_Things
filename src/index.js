import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';
import { Posts } from './components'
import { getPosts } from './api'
import Register from './components/Register';

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
            <Posts />
        </>
    )
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);