<template>
  <v-container class="text-center mt-10">
      <h1 style="color:white; font-family: 'Teko', sans-serif; font-size: 3rem">About Me</h1>
      <v-row justify="center">
        <v-expand-transition>
            <div id="my-photo" class="d-flex justify-center rounded-circle pa-2">
                <img :src="require('../assets/myPhoto.jpg')" class="rounded-circle align-self-center" id="responsive"/>
            </div>
        </v-expand-transition>
      </v-row>
      <v-row justify="center" align="center" class="pa-2 mt-2">
          <div id="hello-korean">
              안녕하세요 {{dream}} {{name}}입니다<br>
          </div>
      </v-row>
      <v-row justify="center" class="pa-2">
          <div id="hello-English">
              Hi, I'm Yeonsu Kim dreaming full-stack developer
          </div>
      </v-row>
      <hr>
      <v-row class="d-flex flex-column pa-2">
          <h1 style="color:white; font-family: 'Teko', sans-serif; font-size: 3rem">Education</h1>
      </v-row>
      <hr>
      <v-row class="d-flex flex-column pa-2">
          <h1 id="skill-title">Skills</h1>
      </v-row>
      
  </v-container>
</template>

<script>
export default {
    name: 'AboutMe',
    data(){
        return {
            name: '김연수',
            email: 'mightykim91@naver.com',
            dream: '풀스택 개발자를 꿈꾸는',
            stacks: [],
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
#my-photo{
    height:300px;
    width:240px;
    background-color: rgba(228,224,224,0.1)
}

#responsive{
    width: 100%;
    max-height: 100%;
}

#hello-English{
    color: white;
    font-family: 'Teko', sans-serif;
    font-size: 2.5rem;
}
#hello-korean{
    color: white;
    font-family: 'Do Hyeon', sans-serif;
    font-size: 2rem;
}

#skill-title{
    color: white;
    font-family: 'Teko', sans-serif;
    font-size: 3rem;
}
</style>