import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom'

import { Header, CreatePost, Register, Posts, Login } from './components'
import { getPosts } from './api'


const App = () => {

    const [isUserLogin, setIsUserLogin] = useState(localStorage.getItem("token"));

    useEffect(() => {
        const getData = async () => {
            await getPosts();
        }
        getData();
    }, []);

    console.log(localStorage.getItem("token"));

    return (
        <>
            <div>
                <Header setIsUserLogin={setIsUserLogin} />
            </div>

            <div>
                <Routes>
                    <Route path='/Posts' element={<Posts />} />
                    {isUserLogin
                    ? <Route path='/CreatePost' element={<CreatePost />} />
                    : null}
                    <Route path='/Login' element={<Login setIsUserLogin={setIsUserLogin} />} />
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