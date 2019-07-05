<template>
   <div>
        <nav class="navbar navbar-expand-sm bg-light">
        <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/posts">Posts</router-link>
                </li>
        </ul>
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
</style>
