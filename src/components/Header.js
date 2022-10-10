import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <div>
                    <h1>Stranger's Things</h1>
                    <nav>
                        <Link to='/Posts'> Posts </Link>
                        <Link to='/CreatePost'> CreatePost </Link>
                        <Link to='/Login'> Login </Link>
                        <Link to='/Register'> Register </Link>
                    </nav>
                </div>
            </header>
        </>
    )
};

export default Header;