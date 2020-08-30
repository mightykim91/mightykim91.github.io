<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark
      prominent
      class="pa-0 d-flex justify-center"
    >
      <div class="d-flex justify-center pa-0 mr-10">
        <router-link :to="{ name:'Posts' }" class="black--text align-self-end mx-3">Home</router-link>
        <router-link :to="{ name:'AboutMe' }" class="black--text align-self-end mx-3">About Me</router-link>
        <!-- <router-link :to="{ name:'Home' }"> -->
        <img
          class="blog-logo"
          alt="Blog Logo"
          contain
          src="./assets/CodingIslandIcon.png"
          width="110px"
          height="110px"
          @click="toHome"
          style="cursor:pointer"
        />
        <!-- </router-link> -->
        <router-link :to="{ name:'Posts' }" class="black--text align-self-end mx-3">Posts</router-link>
        <router-link :to="{ name:'Works' }" class="black--text align-self-end mx-3">Works</router-link>
      </div>
    </v-app-bar>

    <v-main class="body">
        <router-view/>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),

  methods: {
    toHome: function() {
      this.$router.push({name:'Home'})
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400&display=swap');

a {
  text-decoration:none;
  font-family: 'Teko', sans-serif !important;
  font-weight: 400;
  font-size: 1.8vw;
}

a:hover{
  border-bottom-style: solid;
  border-bottom-color: #1d76e2;
  transition: 0.2s;
}

.body {
  background-image: url('./assets/space.jpg');
  background-size: 100vw, 100%;
  background-repeat:repeat-y;
}
</style>
