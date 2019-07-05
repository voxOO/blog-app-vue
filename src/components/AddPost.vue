<template>
    <div class="container">
        <h3>Add new post</h3>
        <form action="">
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" id="title" class="form-control" v-model="newPost.title" required>
            </div>
            <div class="form-group">
                 <label for="text">Text:</label>
                <input type="text" id="text" class="form-control" v-model="newPost.text" required>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Add Post</button>
            </div>
        </form>
    </div>
</template>

<script>
import { postService } from "../services/posts";


export default {
    data () {
        return {
            newPost: {
                'title': '',
                'text': '',
            }
        }
    },
    methods: {
        submitPost () {
            postService.submitPost(this.newPost)
            .then({ path: '/', redirect: '/posts'})
            .catch(e=> {
           this.errors.push(e)
       })
    }
  }
}

</script>

<style>

</style>
