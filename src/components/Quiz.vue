<template>
  <Container class="md:px-8 px-10">
    <div class="md:hidden block heading md:text-left text-center justify-center lg:p-4 p-0">
      <p class="uppercase text-lososPink md:mb-0 mb-2">Zajímavé fakty</p>
      <h3 class="uppercase text-oliveGreen text-4xl font-bold mb-8">Rychlý kvíz<br>o festivalu culturea</h3>
    </div>
    <div class="quiz border-oliveGreen border-opacity-30 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 grid-rows-1 md:p-8 p-4">
      <div class="quiz-card md:flex flex-col hidden heading md:text-left text-center justify-center lg:p-4 p-0">
        <p class="uppercase text-lososPink mb-4">Zajímavé fakty</p>
        <h4 class="uppercase text-oliveGreen xl:text-4xl lg:text-3xl md:text-4xl font-bold mb-8 xl:leading-normal ">Rychlý kvíz<br>o festivalu culturea</h4>
      </div>
      <QuizCard
        v-for="(quizCard, index) in quizCards"
        :key="index"
        :quizCard="quizCard"
        class="cursor-pointer"
        @click="quizCard.isAnswer = !quizCard.isAnswer"
      />      
    </div>
  </Container>  
</template>

<script>
import Container from './Container.vue'
import QuizCard from './QuizCard.vue'

import card1Img from '../assets/img/about/cards/card1.png'
import card2Img from '../assets/img/about/cards/card2.png'
import card3Img from '../assets/img/about/cards/card3.png'
import card4Img from '../assets/img/about/cards/card4.png'
import card5Img from '../assets/img/about/cards/card5.png'
import card6Img from '../assets/img/about/cards/card6.png'
import card7Img from '../assets/img/about/cards/card7.png'

export default {
  components: { Container, QuizCard },
  data() {
    return {
      quizCards: [
        {
          index: 1,
          cardText: 'Jaké znáte místní delikatesy Polska a Íránu?',
          img: card1Img,
          isAnswer: false,
          answer: {
            titleOne: 'Írán:',
            textOne: 'Kabab koobideh\nGhormeh sabzi',
            titleTwo: 'Polsko:',
            textTwo: 'Czernina\nBigos',
          }
        },
        {
          index: 2,
          cardText: 'Jaké znáte zvyky a tradice?',
          img: card2Img,
          isAnswer: false,
          answer: {
            titleOne: 'Polsko:',
            textOne: 'Marzanna\nOczepiny',
            titleTwo: 'Írán:',
            textTwo: 'Nowruz\nSizdah be dar',
          }
        },
        {
          index: 3,
          cardText: 'Jaké zemí byli minuly rok?',
          img: card3Img,
          isAnswer: false,
          answer: {
            textOne: 'Srí Lanka',
            textTwo: 'Ukrajina',
          }
        },
        {
          index: 4,
          cardText: 'Co jste víte o historii našeho festivalu?',
          img: card4Img,
          isAnswer: false,
          answer: {
            textOne: 'V roce 2013 to vše začalo. Pilotní ročník festivalu vzal návštévníky do vášnivé Itálie, kterou propojil se zemí vycházejíciho slunce - Japonskem.'
          }
        },
        {
          index: 5,
          cardText: 'Kolik let je našemu festivalu?',
          img: card5Img,
          isAnswer: false,
          answer: {
            isBig: true,
            titleOne: '7'
          }
        },
        {
          index: 6,
          cardText: 'Místo konání festivalu?',
          img: card6Img,
          isAnswer: false,
          answer: {
            titleOne: 'Zlín',
            textOne: '14 | 15 BAŤŮV INSTITUT'
          }
        },
        {
          index: 7,
          cardText: 'Letenka?',
          img: card7Img,
          isAnswer: false,
          answer: {
            textOne: 'Letenku nepotrebuješ,\n príď to zažiť!'
          }
        }
      ]
    }
  }
}
</script>

<style>
  .quiz {
    border-width: 6px;
  }
</style>