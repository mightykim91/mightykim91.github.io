<template>
  <v-container class="text-center mt-10">
      <h1 style="color:white; font-family: 'Teko', sans-serif; font-size: 3rem">About Me</h1>
      <v-row justify="center">
        
            <div id="my-photo" class="d-flex justify-center rounded-circle pa-2" transition="scale-transition">
                <v-img :src="require('../assets/myPhoto.jpg')" class="rounded-circle align-self-center" id="responsive"/>
            </div>
        
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
      <v-row class="d-flex flex-column py-2 px-4">
          <h1 style="color:white; font-family: 'Teko', sans-serif; font-size: 3rem" class="mb-5">Education</h1>
          <div 
          style="
          color:white;
          font-family: 'Do Hyeon', sans-serif;
          font-size: 1.2rem" 
          class="rounded-xl text-left">
                <div id="ssafy">
                    2020.01 - Present<br>
                    <b>Samsung Software Academy for Youth</b>, <i>Seoul, South Korea</i>
                </div>
                <br>
                <div id="college">
                    2016.09-2019.08<br>
                    <b>King's College London</b>, <i>London, United Kingdom</i><br>
                    BEng in Electronic and Information Engineering | Grade: Second Upper Class Honours(2:1)
                </div>
                <br>
                <div id="highschool">
                    2008.08-2010.05<br>
                    <b>Bishop Carroll Catholic High School</b>, <i>Ebensburg, PA, USA</i><br>
                    High School Diploma
                </div>
          </div>
      </v-row>
      <hr>
      <v-row class="d-flex flex-column pa-2">
          <h1 style="color:white; font-family: 'Teko', sans-serif; font-size: 3rem" id="skill-title" class="mb-5">Skills</h1>
          <v-container>
              <v-row v-for="(stack,index) in stacks" v-bind:key="index">
                  <v-col cols="2" align="left">
                      <img :src="stack.logo" >
                  </v-col>
                  <v-col cols="10" class="align-self-center"> 
                      <v-progress-linear
                      rounded
                      height="2rem"
                      :value="stack.mastery * 20"
                      >
                      </v-progress-linear>
                      <div class="d-flex justify-space-between">
                          <p style="color:white" v-for="(x,index) in [0,1,2,3,4,5]" v-bind:key="index">{{x}}</p>
                      </div>
                  </v-col>
              </v-row>
          </v-container>
      </v-row>
      <!--for icon license purpose-->
      <div style="display:none">
      <a href="https://icons8.com/icon/rY6agKizO9eb/vue-js">Vue Js icon by Icons8</a>
      <a href="https://icons8.com/icon/qV-JzWYl9dzP/django">Django icon by Icons8</a>
      <a href="https://icons8.com/icon/13679/java">Java icon by Icons8</a>
      <a href="https://icons8.com/icon/90519/spring-logo">Spring Logo icon by Icons8</a>
      <a href="https://icons8.com/icon/13441/python">Python icon by Icons8</a>
      </div>
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
            stacks: {
                java: {
                    logo: 'https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png',
                    mastery: 3
                },
                python: {
                    logo: 'https://img.icons8.com/color/96/000000/python.png',
                    mastery: 3
                },
                SpringBoot: {
                    logo: 'https://img.icons8.com/color/96/000000/spring-logo.png',
                    mastery: 3
                },
                Django: {
                    logo: 'https://img.icons8.com/color/96/000000/django.png',
                    mastery: 3
                },
                Vue: {
                    logo: 'https://img.icons8.com/color/96/000000/vue-js.png',
                    mastery: 3
                },
            }
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
    background-color: rgba(228,224,224,0.1);
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