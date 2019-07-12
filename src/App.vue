<template>
   <div>
        <nav class="navbar navbar-expand-sm bg-light">
            <div class="container-fluid">
              <div class="navbar-header">
                <p class="navbar-brand">BLOG-APP</p>
              </div>
              <ul class="nav navbar-nav">
                  <li class="nav-item">
                    <router-link class="btn btn-primary" to="/posts">Posts</router-link>
                  </li>
                  <li>
                    <router-link class="btn btn-primary" to="/add">Add Post</router-link>
                  </li>
              </ul>
            </div>
          </nav>
          <router-view />
    </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

li {
  margin-right:5px
}
</style>
