import React, { useEffect, useState } from 'react';

const Posts = () => {
    const [userPosts, setUserPosts] = useState([]);
    const [featurePost, setFeaturedPost] = useState('')

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2208-FTB-ET-WEB-FT/posts');
            const data = await response.json();
            setUserPosts(data.data.posts)
            console.log(data)
        }

        getPosts();
    }, [])

    return (
        <div>
            <div>
                <h1>Posts</h1>
                <ul>
                    {
                        userPosts.map(post => <li onClick={(setFeaturedPost)} className="post" key={post._id}>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                        </li>
                        )
                    }
                </ul>
            </div>
        </div>
    ) 
}

export default Posts