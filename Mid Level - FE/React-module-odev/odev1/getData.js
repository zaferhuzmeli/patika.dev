import axios from "axios";

const getData = async (userId) => {
    try {
        const {data:user} = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const {data:posts} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId${userId}`);
        user.posts = posts;
        return user;
    } catch (error) {
        console.error(error.message);
    }
};

export default getData;
