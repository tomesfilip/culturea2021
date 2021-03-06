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

import card1Img from '../assets/img/about/cards/card1.webp'
import card2Img from '../assets/img/about/cards/card2.webp'
import card3Img from '../assets/img/about/cards/card3.webp'
import card4Img from '../assets/img/about/cards/card4.webp'
import card5Img from '../assets/img/about/cards/card5.webp'
import card6Img from '../assets/img/about/cards/card6.webp'
import card7Img from '../assets/img/about/cards/card7.webp'

import card1ImgPng from '../assets/img/about/cards/card1.png'
import card2ImgPng from '../assets/img/about/cards/card2.png'
import card3ImgPng from '../assets/img/about/cards/card3.png'
import card4ImgPng from '../assets/img/about/cards/card4.png'
import card5ImgPng from '../assets/img/about/cards/card5.png'
import card6ImgPng from '../assets/img/about/cards/card6.png'
import card7ImgPng from '../assets/img/about/cards/card7.png'

export default {
  components: { Container, QuizCard },
  data() {
    return {
      quizCards: [
        {
          index: 1,
          cardText: 'Jaké znáte místní delikatesy Polska a Íránu?',
          webpImg: card1Img,
          pngImg: card1ImgPng,
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
          webpImg: card2Img,
          pngImg: card2ImgPng,
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
          webpImg: card3Img,
          pngImg: card3ImgPng,
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
          webpImg: card4Img,
          pngImg: card4ImgPng,
          alt: 'květinový lidový vzor',
          isAnswer: false,
          answer: {
            textOne: 'V roce 2013 to vše začalo. Pilotní ročník festivalu vzal návštévníky do vášnivé Itálie, kterou propojil se zemí vycházejíciho slunce - Japonskem.'
          }
        },
        {
          index: 5,
          cardText: 'Kolik let je našemu festivalu?',
          webpImg: card5Img,
          pngImg: card5ImgPng,
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
          webpImg: card6Img,
          pngImg: card6ImgPng,
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
          webpImg: card7Img,
          pngImg: card7ImgPng,
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