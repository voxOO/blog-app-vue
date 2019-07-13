import Vue from 'vue'
import VueRouter from 'vue-router'

import AppPosts from './components/AppPosts'
import SinglePost from './components/SinglePost'
import AddPost from './components/AddPost'


Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/posts'},
    { path: '/posts', component: AppPosts},
    { path: '/post/:id', component: SinglePost },
    { path: '/add', component: AddPost},
    { path: '/add/:id' , component: AddPost}
]

export const router = new VueRouter({
    routes,
    mode: 'history'
})