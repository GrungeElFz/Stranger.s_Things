import React from "react";
import { Link } from 'react-router-dom';

const Header = ({setIsUserLogin}) => {

    const logout = () => {
        localStorage.removeItem("token");
        setIsUserLogin(null);
    };

    return (
        <>
            <header>
                <div>
                    <h1>Stranger's Things</h1>
                    <nav>
                        <Link to='/Posts'> Posts </Link>
                        {localStorage.getItem("token")
                        ? <Link to='/CreatePost'> CreatePost </Link>
                        : null}
                        <Link to='/Login'> Login </Link>
                        <button onClick={logout}>Log-out</button>
                        <Link to='/Register'> Register </Link>
                    </nav>
                </div>
            </header>
        </>
    )
};

export default Header;