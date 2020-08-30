<template>
  <div class="post-wrapper">
      <div class="nav-bar">
          <div class="menuBtn" @click="drawer">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
          </div>
      </div>
      <div class="side-bar">
          <ul class="side-bar-menu">
              <header>MENU</header>
              <li v-for="topic in topics" v-bind:key="topic.id">
                  {{ topic }} (0)
              </li>
          </ul>
      </div>
      <div class="content-wrapper pa-4">
          <div class="content-header text-center">Articles</div>
          <p class="text-center white--text mt-10" v-if="posts.length == 0">아직 작성된 글이 없습니다.</p>
          <v-card v-for="i in posts" v-bind:key="i.id" class="mt-4 rounded-lg content">
              <v-card-title>{{i}} 글 제목</v-card-title>
              <v-card-text>글 내용 요약</v-card-text>
          </v-card>
      </div>
  </div>
</template>

<script>

export default {
    name: 'Posts',
    data(){
        return {
            topics: ['Algorithm', 'Data Structure', 'Network', 'Problem Solving'],
            posts:[]
        }
    },
    methods:{
        drawer: function(){
            const navBar = document.querySelector('.side-bar')
            navBar.classList.toggle('active')
            document.querySelector('.side-bar-menu').classList.toggle('side-bar-menu-active')
            document.querySelector('.menuBtn').classList.toggle('change')
            document.querySelector('.content-wrapper').classList.toggle('content-wrapper-change')
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
@import url('https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css');


.post-wrapper{
    margin: 2vw 2vw;
    height: 100px;
}

.nav-bar{
    width: 100%;
    height: 50px;
    
}

.side-bar{
    width: 0%;
    height: 100vh;
    border-radius: 30px;
    position: fixed;
    transition: 0.5s;
    font-family: 'Teko', sans-serif;
}

.active{
    width: 20%;
    height: 100vh;
    background-color: rgb(255, 255, 255, 0.6);
    border-radius: 30px;
    position: fixed;
    transition: 0.5s;
    overflow-x: hidden;

}
.side-bar-menu{
    display:none;
}

.side-bar-menu li{
    font-size: 0;
}

.side-bar-menu-active{
    display:flex;
    flex-direction: column;
    list-style: none;
    margin: 20px auto;
    padding-left: 0px;
}

.side-bar-menu-active header{
    color: black;
    font-weight: bold;
    font-size: 2.5vw;
    align-self: center;
    transition: 0.3s;
}

.side-bar-menu-active li{
    align-self: center;
    font-size: 2vw;
    margin-top: 0.4rem;
    transition: 0.5s;
}

.side-bar-menu-active li:hover{
    font-weight: bold;
    color: white;
} 


.menuBtn {
    position: relative;
    left: 10px;
    top: 10px;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {
    opacity: 0;
}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

.content-wrapper{
    width: 100%;
    height: 100%;
    transition: 0.4s;
    font-family: 'NanumSquare', sans-serif;
}

.content-wrapper-change{
    width: 79%;
    margin-left:21%;
    transition: 0.4s;
    
}

.content-header{
    font-size: 3vw;
    font-weight: bold;
    color: white;
}

.content:hover{
    background-color:rgb(100,100,100);
    transition: 0.4s;
    z-index: 2;
}

</style>
