import axios from 'axios';

export default class PostService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getAll() {
        console.log("dfd")
        return axios.get('posts');
    }
}

export const postService= new PostService()