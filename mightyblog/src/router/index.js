import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutMe from '@/views/AboutMe.vue'
import Posts from '@/views/Posts.vue';
import Home from "@/views/Home.vue";
import Works from "@/views/Works.vue";

Vue.use(VueRouter)

  const routes = [
    {
      path: "/about",
      name: "AboutMe",
      component: AboutMe,
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts,
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/works",
      name: "Works",
      component: Works,
    },
  ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
