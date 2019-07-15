<template>
  <div class="container">
    <ul v-for="post in posts" :key="post.id">
      <li>
        {{ post.title }}
         <router-link class="btn btn-light" v-bind:to="dynamicId(post.id)" name="posts">View post</router-link>
      </li>
      <p>{{ post.text }}</p>
      <p>{{ dateFormat(post.createdAt) }}</p>
         <router-link class="btn btn-light" :to="'/add/' + post.id">EDIT</router-link>  
         <button class="btn btn-light" @click="deletePost(post.id)" >DELETE</button>
      <hr>
    </ul>
  </div>
</template>

<script>
import { postService } from "../services/posts";
import { DateMixin } from "../Mixins/DateMixin";

export default {
  mixins: [DateMixin],
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    dynamicId(id) {
      return "/post/" + id; 
    },
    deletePost(id) {
    postService.deletePost(id)
    .then(response => {this.$router.go()})
    .catch(e=> {
        this.errors.push(e);
    })
   }
  },
  created() {
    postService.getAll().then(response => {
      this.posts = response.data;
      //console.log(response)
      //console.log(this.posts.comments)
    });
    //Thnis will call service
  }
};
</script>

<style>
</style>
