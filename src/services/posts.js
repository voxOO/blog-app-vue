import axios from 'axios';

export default class PostService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getAll() {
        return axios.get('posts');
    }

    getSinglePost (id) {
        return axios.get(`posts/${id}`);
    }

    submitPost(newPost) {
        return axios.post( '/posts' ,newPost)
    }
}

export const postService= new PostService()