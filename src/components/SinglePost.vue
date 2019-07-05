<template>
    <div class="container">
        <h3>
            {{ singlePost.title}}
        </h3>
        <p>
            {{ singlePost.text}}
        </p>
        <p>
            {{ singlePost.createdAt}}
        </p>
    </div>
</template>

<script>
import { postService } from "../services/posts";

export default {
    data () {
        return {
            singlePost: []
        }
    },
     created() {
        postService.getSinglePost(this.$route.params.id).then(response => {
        this.singlePost = response.data;
    });
  }
}
</script>

<style>

</style>
