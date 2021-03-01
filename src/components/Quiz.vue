<template>
  <Container class="px-6 lg:px-0">
    <div class="bg-lightGrey p-8">
      <transition-group
        appear
        tag="div"
        @before-enter="beforeEnter"
        @enter="enter"
        class="quiz grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-2">
        <div :key=0 class="quiz-card bg-white flex flex-col justify-between px-6 pt-4 h-72 sm-mobile:h-80 mobile:h-96 sm:h-80 md:h-96 3xl:h-xl">
          <p class="uppercase text-lososPink mb-4 text-xl font-bold">Zajímavé fakty</p>
          <h3 class="uppercase xl:text-4xl lg:text-3xl md:text-4xl text-2xl font-heading mb-8 xl:leading-normal">Rychlý kvíz<br>o festivalu culturea</h3>
        </div>
        <QuizCard
          v-for="(quizCard, index) in quizCards"
          :key="index"
          :quizCard="quizCard"
          class="cursor-pointer select-none h-72 sm-mobile:h-80 mobile:h-96 sm:h-80 md:h-96 3xl:h-xl"
          @click="quizCard.isAnswer = !quizCard.isAnswer"
        />      
      </transition-group>
    </div> 
  </Container>  
</template>

<script>
import Container from './Container.vue'
import QuizCard from './QuizCard.vue'
import gsap from 'gsap'

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
          cardText: 'Jaké země byly minulý rok?',
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
            titleOne: '9'
          }
        },
        {
          index: 6,
          cardText: 'Kde se Culturea konala minulý rok?',
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
  },

  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'scaleX(0)'
    },

    enter(el, done) {
      gsap.to(el, {
        duration: 0.8,
        opacity: 1,
        scaleX: 1,
        onComplete: done
      })
    }
  }
}
</script>

<style>
</style>