const URL_POSTS = "https://jsonplaceholder.typicode.com/posts";
const URL_USERS = "https://jsonplaceholder.typicode.com/users/";

const getPostById = async (id) => {
    try{
        const res = await fetch(`${URL_POSTS}/${id}`);
        if (!res.ok){
            throw new Error(`${res.status}-${res.statusText}`);
        }
        return res.json();
    } catch(error){
        console.error(error.message);
    }
}

export { getPostById }