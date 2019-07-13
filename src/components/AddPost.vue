<template>
    <div class="container">
        <h3>Add new post</h3>
        <form @submit.prevent="submitPost">
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" id="title" class="form-control" v-model="newPost.title" minlenght=2 required>
            </div>
            <div class="form-group">
                 <label for="text">Text:</label>
                <input type="text" id="text" class="form-control" v-model="newPost.text" maxlenght=300 required>
            </div>
            <div class="form-group">
                <button v-if="add_edit()" class="btn btn-primary">Add Post</button>
                <button v-else class="btn btn-primary" @click="editPost()">Edit Post</button>
            </div>
            <div class="form-group">
                <button class="btn btn-secondary" @click="resetForm">Reset</button>
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
            //.then({ path: '/', redirect: '/posts'})
            .then( this.$router.push('/posts'))
            .catch(e=> {
           this.errors.push(e)
       })
    },
    editPost () {
        postService.editPost(this.$route.params.id, this.newPost )
        .then(this.$router.push('/posts'))
        .catch(e=> {
            this.errors.push(e);
        })
    },
    resetForm () {
        this.newPost.title= '';
        this.newPost.text= '';
    },
    add_edit() {
        if(this.$route.params.id) {
            return false;
        } else {
            return true;
        }
    }
  },
  created () {
      if(this.$route.params.id) {
        postService.getSinglePost(this.$route.params.id).then ( response => {
            this.newPost=response.data
        });
      }
  }
}

</script>

<style>

</style>
