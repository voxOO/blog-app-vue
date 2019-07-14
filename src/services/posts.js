import axios from 'axios';

export default class PostService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getAll() {
        return axios.get('posts');
        //return axios.get('posts?filter={"inlude":["comments"]}')
    }

    getSinglePost (id) {
        //return axios.get(`posts/${id}`);
        return axios.get('posts/' + id + '?' + 'filter={"include":["comments"]}')
    }
    //api/posts/{id}?filter={"include":["comments"]}
    submitPost(newPost) {
        return axios.post('posts' ,newPost);
    }

    editPost(id, editedPost) {
        return axios.put('posts/'+id, editedPost);
    }

    deletePost(id) {
        return axios.delete('posts/' + id);
    }

    addComment(comment, postId) {
        return axios.post('posts/' + postId + '/comments', comment);
    }
}

export const postService= new PostService()