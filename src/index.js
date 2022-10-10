import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom'

import { Header, Register, Posts, Login } from './components'
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
            <div>
                <Header />
            </div>

            <div>
                <Routes>
                    <Route path='/Posts' element={<Posts />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Register' element={<Register />} />
                </Routes>
            </div>

        </>
    )
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <Router>
        <App />
    </Router>
);