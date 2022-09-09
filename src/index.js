import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';
import { Posts } from './components'
import { getPosts } from './api'

// const BASE_URL = "https://strangers-things.herokuapp.com";
// const COHORT_NAME = "2208-FTB-ET-WEB-FT";
// const BASE_API = `${BASE_URL}/api/${COHORT_NAME}`;

const App = () => {
    // const [userPosts, setUserPosts] = useState();

    useEffect(() => {
        const getData = async () => {
            await getPosts();
        }
        getData();
    }, []);

    // const getPosts = async () => {
    //     const response = await fetch(`${BASE_API}/posts`)
    //     const result = await response.json();
    //     const userPostsList = result.results;
    //     setUserPosts(userPostsList)
    // }

    return (
        <Posts />
    )
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);