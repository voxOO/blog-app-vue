<template>
  <div class="container">
    <ul v-for="post in posts" :key="post.id">
      <li>
        {{ post.title }}
         <router-link class="btn btn-light" v-bind:to="dynamicId(post.id)" name="posts">View posts</router-link>
      </li>
      <p>{{ post.text }}</p>
    </ul>
  </div>
</template>

<script>
import { postService } from "../services/posts";

export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    dynamicId(id) {
      return "/post/" + id; 
    }
  },
  computed: {
   
  },
  created() {
    postService.getAll().then(response => {
      this.posts = response.data;
      //console.log(response)
    });
    //Thnis will call service
  }
};
</script>

<style>
</style>
