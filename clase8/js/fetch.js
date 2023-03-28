const URL_POSTS = "https://jsonplaceholder.typicode.com/posts";
const URL_USERS = "https://jsonplaceholder.typicode.com/users";

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

const getPostsByUsersId = async (userId) => {
    try{
        const res = await fetch(`${URL_POSTS}?userId=${userId}`);
        if (!res.ok) throw new Error(`${res.status}-${res.statusText}`);
        return res.json();
    }catch(error){
        console.error(error.message);
    }
}

const getUserById = async (id) => {
    try{
        const res = await fetch(`${URL_USERS}/${id}`);
        if (!res.ok) throw new Error(`${res.status}-${res.statusText}`);
        return res.json();
    } catch(error){
        console.error(error.message);
    }
}

const getAllUsers = async () => {
    try{
        const res = await fetch(URL_USERS);
        if (!res.ok) throw new Error(`${res.status}-${res.statusText}`);
        return res.json();
    }catch(error){
        console.error(error.message);
    }
}

export { getPostById, getPostsByUsersId, getUserById, getAllUsers }