const BASE_URL = "https://strangers-things.herokuapp.com";
const COHORT_NAME = "2208-FTB-ET-WEB-FT";
const BASE_API = `${BASE_URL}/api/${COHORT_NAME}`

export const getPosts = async () => {
    fetch(`${BASE_API}/posts`)
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
        .catch(console.error)
}