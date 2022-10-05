const BASE_URL = "https://strangers-things.herokuapp.com";
const COHORT_NAME = "2208-FTB-ET-WEB-FT";
const BASE_API = `${BASE_URL}/api/${COHORT_NAME}`

export const getPosts = async () => {
    fetch(`${BASE_API}/posts`)
        .then(response => response.json())
        .then(result => {console.log(result)})
        .catch(console.error)
};


export const userLogin = async (username, password) => {
    const response = await fetch(`${BASE_API}/users/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    });

    const result = await response.json();

    const token = result.data.token;
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    return token;

};