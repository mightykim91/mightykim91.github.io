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
        <router-link :to="{ name:'HelloWorld'}" class="black--text align-self-end mx-3">Home</router-link>
        <router-link :to="{ name:'AboutMe'}" class="black--text align-self-end mx-3">About Me</router-link>
        <v-img
          alt="Vuetify Logo"
          class="shrink"
          contain
          src="./assets/CodingIslandIcon.png"
          transition="scale-transition"
          width="110"
          height="110"
        />
        <router-link :to="{ name:'HelloWorld'}" class="black--text align-self-end mx-3">Posts</router-link>
        <router-link :to="{ name:'HelloWorld'}" class="black--text align-self-end mx-3">Works</router-link>
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
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400&display=swap');
a {
  text-decoration:none;
  font-family: 'Teko', sans-serif;
  font-weight: 400;
  font-size: 1.3em;
}

.body {
  background-image: url('./assets/space.jpg');
  background-size: cover;
}
</style>
