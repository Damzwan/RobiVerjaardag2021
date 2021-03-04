<template>
  <div id="app" style="height: 100%">
    <div style="height: 100%" v-if="getDay() == 8">
      <audio src="./assets/kokomo.mp3" loop="loop" id="robiAudio"></audio>
      <header>
        <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src="./assets/rocket.mp4" type="video/mp4">
        </video>
        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <vue-typed-js :strings="['Mio Fratello', 'Bro', 'Retard', 'Rat', 'Frate', 'Beste Vriend', 'Robi :)']">
                <h1 class="display-2 w-100">Happy Birthday <span class="typing"></span></h1>
              </vue-typed-js>
            </div>
          </div>
          <div class="d-flex justify-content-center gei">
            <a href="#section1" @click="flip" class="btn btn-primary active"><i class="material-icons" style="font-size: 35px">arrow_downward</i></a>
          </div>
        </div>

      </header>

      <section id="section1">
        <img src="./assets/meer.jpg" alt="brakke foto" class="background-img">
        <img src="./assets/underwater.jpg" alt="brakke foto" class="background-img" style="top: 150%">
        <div class="h-100" style="top: 50px; position: relative;">
          <div class="d-flex text-center align-items-center">
            <div class="w-100 text-white">
              <vue-typed-js :strings="['Thank you for being a retard together with me']" v-if="randomBool1">
                <h1 class="display-4 w-50 typing"></h1>
              </vue-typed-js>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center gei">
          <a href="#section2" @click="flip" class="btn btn-primary active"><i class="material-icons" style="font-size: 35px">arrow_downward</i></a>
        </div>
      </section>

      <section style="height: 100%; background-color: #f4623a" id="section2">

        <div style="top: 30px; position: relative;">
          <div class="d-flex text-center align-items-center">
            <div class="w-100 text-white">
              <vue-typed-js :strings="['For so damn long...']" v-if="randomBool2">
                <h1 class="display-4 w-100 typing"></h1>
              </vue-typed-js>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <b-carousel
              id="carousel-1"
              :interval="0"
              img-width="1024"
              img-height="800"
              style="text-shadow: 1px 1px 2px #333; margin-top: 50px; width: 75%"
              class="col-10"
              fade
              indicators
              controls
          >
            <b-carousel-slide img-src="./assets/c1.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="./assets/c2.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="./assets/c3.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="./assets/c4.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="./assets/c5.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="./assets/c6.jpg"></b-carousel-slide>
          </b-carousel>
        </div>

        <div style="height: 50px"></div>

        <div class="d-flex justify-content-center gei" style="z-index: 10; bottom: -5%">
          <a href="#section3" @click="flip" class="btn btn-primary active"><i class="material-icons" style="font-size: 35px">arrow_downward</i></a>
        </div>
      </section>

      <section style="height: 200%; background-color: #343a40" id="section3">
        <div class="container h-100">
          <div class="d-flex h-100 text-center">
            <div class="w-100 text-white" style="margin-top: 100px" v-if="randomBool3">
              <vue-typed-js :strings="['Ciao bro ^1000, Damiano from the past here ^1500 (21 februari, 7am om precies te zijn :p). ^2000 Ik heb besloten om deze website te maken in plaats van een traditionele brief te schrijven aangezien ' +
             'ik de italiaanse post niet vertrouw. ^2000 Het spijt me ten zeerste dat ik er niet kan zijn op deze speciale gelegenheid en ook dat ik over het algemeen niet zoveel contact heb met je. ^2000 Dit betekent echter niet dat ik nooit aan je denk. ' +
              ' ^2000 Net het omgekeerde. ^1000 Het heeft me doen beseffen hoeveel geluk ik heb met deze vriendschap en wat voor een goede vriend je altijd al voor mij bent geweest. ^2000 Van jongs af aan daagde je me altijd uit om beter te presteren en niet op te geven. ^2000 Al die keren' +
               ' dat je eindeloos moest aandringen om mij (of Tamara) te overtuigen om ergens heen te gaan waren niet voor niets. ^2000 Waar anderen zouden stoppen bleef jij doorgaan en ik waardeer dit enorm hard. ^1000 Je bent nog altijd een grote bron van inspiratie voor mij en één van de enige redenen waarom ik er naar uitkijk om terug te keren naar België. ^2000 Happy Birthday Bro :)']">
                <h1 class="display-5 w-100 typing"></h1>
              </vue-typed-js>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div v-else-if="getDay() == 6" style="height: 100%;" class="potter">
      <audio src="./assets/shittyflute.mp3" loop="loop" id="yanan"></audio>
      <div class="container h-25">
        <div class="d-flex h-100 text-center align-items-center">
          <div class="w-100 text-white">
            <vue-typed-js :strings="['Wizard 🧙‍♂', 'Tea-Buddy 🍵', 'Book-Buddy 📚', 'Yanan 😎']">
              <h1 class="display-2 w-100">Happy Birthday <span class="typing"></span></h1>
            </vue-typed-js>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <a @click="playHarryPotter" class="btn btn-primary active"><i class="material-icons" style="font-size: 100px">play_arrow</i></a>
      </div>

      <div class="d-flex row" style="margin-top: 50px">
        <div class="col" align="center">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="./assets/hairy.png" style="width:300px;height:300px;">
              </div>
              <div class="flip-card-back">
                <img src="./assets/robi_boos.jpg" style="width:300px;height:300px;">
              </div>
            </div>
          </div>
        </div>

        <div class="col" align="center">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="./assets/hermione.jpg" style="width:300px;height:300px;">
              </div>
              <div class="flip-card-back">
                <img src="./assets/yanan.jpg" style="width:300px;height:300px;">
              </div>
            </div>
          </div>
        </div>

        <div class="col" align="center">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="./assets/voldemort.webp" style="width:300px;height:300px;">
              </div>
              <div class="flip-card-back">
                <img src="./assets/damiano.jpg" style="width:300px;height:300px;">
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {defineComponent, ref} from "@vue/composition-api";

export default defineComponent ({
  setup(props, ctx) {
    const randomBool1 = ref(false)
    const randomBool2 = ref(false)
    const randomBool3 = ref(false)

    const isPlayHarryPotterTheme = ref(false);

    function flip(){
      if (randomBool2.value == true) randomBool3.value = true;
      else if (randomBool1.value == true) randomBool2.value = true;
      else {
        randomBool1.value = true;
        const audio = document.getElementById("robiAudio") as HTMLAudioElement
        audio.play();
      }
    }

    function getDay(){
      return new Date().getDay();
    }

    function playHarryPotter(){
      if (isPlayHarryPotterTheme.value == true) return;
      isPlayHarryPotterTheme.value = true;
      const audio = document.getElementById("yanan") as HTMLAudioElement;
      audio.play();
    }

    return {flip, randomBool1, randomBool2, randomBool3, getDay, playHarryPotter}
  }
})
</script>

<style>
header {
  position: relative;
  background-color: black;
  height: 100%;
  /*min-height: 25rem;*/
  width: 100%;
  overflow: hidden;
}

header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

.background-img {
  position: absolute;
  min-width: 100%;
  width: auto;
  height: 50%;
  z-index: -1;
}

header .container {
  position: relative;
  z-index: 2;
}

section{
  height: 100%;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}

html {
  scroll-behavior: smooth;
  height:100%;
}

html,body{
  height:100%;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

.img-fluid {
  height: 550px !important;
}

.btn{
  border-radius: 50%;
}

.gei{
  bottom: 10%;
  position: relative;
}

.potter{
  background: url('assets/potter.jpg') no-repeat center center fixed;
}

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  transform: rotateY(180deg);
}
</style>
