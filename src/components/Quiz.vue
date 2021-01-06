<template>
  <Container class="md:px-8 px-10">
    <div class="quiz border-oliveGreen border-opacity-30 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 md:p-8 p-4">
      <div class="quiz-card heading md:text-left text-center justify-center lg:p-4 p-0">
        <p class="uppercase text-lososPink md:mb-0 mb-2">Zajímavé fakty</p>
        <h3 class="uppercase text-oliveGreen text-4xl font-bold mb-8">Rychlý kvíz<br>o festivalu culturea</h3>
      </div>
      <QuizCard
        v-for="(quizCard, index) in quizCards"
        :key="index"
        :quizCard="quizCard"
      />      
    </div>
  </Container>  
</template>

<script>
import Container from './Container.vue'
import QuizCard from './QuizCard.vue'

export default {
  components: { Container, QuizCard },
  data() {
    return {
      quizCards: [
        {
          index: 1,
          cardImage: '../assets/img/about/cards/card1.png',
          cardText: 'Jaké znáte místní delikatesy Polska a Íránu?',
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
          cardImage: '../assets/img/about/cards/card2.png',
          cardText: 'Jaké znáte zvyky a tradice?',
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
          cardImage: '../assets/img/about/cards/card3.png',
          cardText: 'Jaké zemí byli minuly rok?',
          isAnswer: false,
          answer: {
            textOne: 'Srí Lanka',
            textTwo: 'Ukrajina',
          }
        },
        {
          index: 4,
          cardImage: '../assets/img/about/cards/card4.png',
          cardText: 'Co jste víte o historii našeho festivalu?',
          isAnswer: false,
          answer: {
            textOne: 'V roce 2013 to vše začalo. Pilotní ročník festivalu vzal návštévníky do vášnivé Itálie, kterou propojil se zemí vycházejíciho slunce - Japonskem.'
          }
        },
        {
          index: 5,
          cardImage: '../assets/img/about/cards/card5.png',
          cardText: 'Kolik let je našemu festivalu?',
          isAnswer: false,
          answer: {
            isBig: true,
            titleOne: '7'
          }
        },
        {
          index: 6,
          cardImage: '../assets/img/about/cards/card6.png',
          cardText: 'Místo konání festivalu?',
          isAnswer: false,
          answer: {
            titleOne: 'Zlín',
            textOne: '14 | 15 BAŤŮV INSTITUT'
          }
        },
        {
          index: 7,
          cardImage: '../assets/img/about/cards/card7.png',
          cardText: 'Letenka?',
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