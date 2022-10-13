const BASE_URL = "https://strangers-things.herokuapp.com";
const COHORT_NAME = "2208-FTB-ET-WEB-FT";
const BASE_API = `${BASE_URL}/api/${COHORT_NAME}`

export const getPosts = async () => {
    try {
        fetch(`${BASE_API}/posts`)
            .then(response => response.json())
            .then(result => {console.log(result)})
            .catch(console.error)
        
    } catch (error) {
        console.error(error);
    }
};


export const getNewPost = async (token, newPost) => {
    try {
        const response = await fetch(`${BASE_API}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                post: newPost
            }),
        });

        const result = await response.json();
        const post = result.data.post;
        return post;

    } catch (error) {
        alert(`Cannot create post: ${error}`)
    }
};


export const userLogin = async (username, password) => {
    
    try {
        const response = await fetch(`${BASE_API}/users/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        });
        
        const result = await response.json();
        const token = result.data.token;
        
        localStorage.setItem("token", token);

        return token;
        
    } catch (error) {
        console.error(error);
    }

};


export const registerUser = async (username, password) => {
    try {
        const response = await fetch(`${BASE_API}/users/register`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user: { username, password }
            })
        });

        const result = await response.json();
        return result;

    } catch (error) {
        console.error(error);
    }
};