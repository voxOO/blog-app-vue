<template>
    <div class="container">
        <div>
            <h3>
                {{ singlePost.title }}
            </h3>
            <p>
                {{ singlePost.text }}
            </p>
            <p>
                <i>{{ dateFormat(singlePost.createdAt) }}</i>
            </p>
        </div>
        <div>
            <h5>Add comments:</h5>
            <form @submit.prevent="submitComment">
                <div class="for-group">
                    <label for="text">Your comment:</label>
                    <input type="text" id="text" class="form-control" v-model="newComment.text" required>
                </div>
                <div class="for-group">
                    <button class ="btn btn-primary" >Add Comment</button>
                </div>
            </form>
        </div>
        <hr>
        <div>
            <ul v-for="comment in singlePost.comments" :key="comment.id">
                <li>
                    {{ comment.text }}
                </li>
                <p>
                    <i>{{ diffForHumans(comment.createdAt) }}</i>
                </p>
            </ul>
        </div>
    </div>
</template>

<script>
import { postService } from "../services/posts";
import { DateMixin } from "../Mixins/DateMixin"


export default {
    mixins: [DateMixin], 
    data () {
        return {
            singlePost: [],
            newComment: {
                'text':''
            },  
        }
    },
     created() {
        postService.getSinglePost(this.$route.params.id).then(response => {
        this.singlePost = response.data;
        //console.log(this.singlePost);
        //console.log(this.singlePost.comments[0].text)
    });
  },
  methods: {
     submitComment () {
         postService.addComment(this.newComment,this.singlePost.id)
         .then(response => {this.$router.go()})
         .catch(e=> {
             this.errors.push(e);
         })
     }
  },

}
</script>

<style>

</style>
