<template>
  <div class="work-wrapper">
    <h1 class="wrapper-title">WORKS</h1>
    <v-container class="content-wrapper">
      <v-row>
        <v-col cols="12" lg="6" v-for="project in projects" v-bind:key="project.id">
          <v-card :id="project.titleEn" class="project flex-column d-flex justify-center" @mouseover="hoverEvent(project.titleEn)" @mouseleave="hoverLeave(project.titleEn)">
            <v-card-title 
            :id="'title' + '-' + project.titleEn" 
            class="project-title align-self-center"
            >
              {{project.title}}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    name: 'Works',
    data(){
      return {
        projects:{
          utchaPlay: {
            title: "읏챠플레이",
            titleEn: "UtchaPlay",
            image: ""
          },
          appleMango: {
            title: "애플망고",
            titleEn: "AppleMango",
            image: ""
          }
        }
      }
    },
    methods:{
      hoverEvent: function(id){
        const card = document.querySelector(`#${id}`)
        const cardTitle = document.querySelector(`#title-${id}`)
        card.style.transition = "0.5s";
        card.style.opacity = "50%"
        card.style.zIndex = "0"
        card.style.cursor = "pointer"
        cardTitle.style.display = "block"
        cardTitle.style.zIndex = "0"
        cardTitle.style.position = "absolute"
      },
      hoverLeave: function(id){
        const card = document.querySelector(`#${id}`)
        const cardTitle = document.querySelector(`#title-${id}`)
        card.style.transition = "0";
        card.style.opacity = "100%"
        card.style.cursor = "pointer"
        cardTitle.style.display = "none"
      }
    },
    mounted(){
    }

}
</script>

<style scoped>

@import url('https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css');
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400&display=swap');

.work-wrapper{
  margin: 40px 10vw 0px 10vw;

}


.wrapper-title{
  color: white;
  text-align: center;
  font-size: 48px;
  font-family: 'Teko', sans-serif
  
}

.project{
  border-radius:15px;
  height: 300px;
  
}

.project-title{
  display: none;
  font-family: 'NanumSqaure', sans-serif;
  font-size: 3vw;
  font-weight: bold;
}

/* .project:hover {
  cursor: pointer;
  transition: 0.5s;
  opacity: 60%
} */

</style>