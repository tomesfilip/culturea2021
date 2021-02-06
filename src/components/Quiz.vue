<template>
  <Container class="px-6 lg:px-0">
    <div class="bg-lightGrey p-8">
      <div class="quiz grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 grid-rows-1">
        <div class="quiz-card bg-white grid grid-cols-1 gap-y-32 p-4 h-80 mobile:h-96 sm:h-80 md:h-96">
          <p class="uppercase text-lososPink mb-4 text-xl font-bold">Zajímavé fakty</p>
          <h3 class="uppercase xl:text-4xl lg:text-3xl md:text-4xl text-2xl font-heading mb-8 xl:leading-normal ">Rychlý kvíz<br>o festivalu culturea</h3>
        </div>
        <QuizCard
          v-for="(quizCard, index) in quizCards"
          :key="index"
          :quizCard="quizCard"
          class="cursor-pointer"
          @click="quizCard.isAnswer = !quizCard.isAnswer"
        />      
      </div>
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
          alt: 'delikatesy Polska a Íránu',
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
          alt: 'zvyky a tradice Polska a Íránu',
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
          cardText: 'Jaké zemi byli minuly rok?',
          img: card3Img,
          alt: 'hory',
          isAnswer: false,
          answer: {
            textOne: 'Srí Lanka',
            textTwo: 'Ukrajina',
          }
        },
        {
          index: 4,
          cardText: 'Co víte o historii našeho festivalu?',
          img: card4Img,
          alt: 'květinový lidový vzor',
          isAnswer: false,
          answer: {
            textOne: 'V roce 2013 to vše začalo. Pilotní ročník festivalu vzal návštévníky do vášnivé Itálie, kterou propojil se zemí vycházejíciho slunce - Japonskem.'
          }
        },
        {
          index: 5,
          cardText: 'Kolik let je našemu festivalu?',
          img: card5Img,
          alt: 'koláž',
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
          alt: 'koberec',
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
          alt: 'letenka',
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
/* @media only screen and (min-width: 1000px) {
  .quiz {
    height: 120vh;
  }
} */
</style>