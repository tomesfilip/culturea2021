<template>
  <div class="about-top mobile:py-24">
    <Container class="text-center lg:w-1/3 md:w-1/2 md:px-0 px-4">
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <h2 class="uppercase text-4xl mb-4 ml-4 font-heading">O festivalu</h2>
        </transition>
        <article>
          <p class="mb-4">Culturea je cestovatelský projekt, který každoročně pořádají studenti Fakulty multimediálních komunikací<br>Univerzity Tomáše Bati ve Zlíně.</p>
          <p class="mb-2">Culturea je festival o dvou zemích, kde se představí to nejlepší z nich. Místní delikatesy, národní tradice, zvyky - zkrátka vše, čím je země výjimečná.</p>
        </article>
        <button 
          class="mt-4 font-bold inline-flex items-center text-green text-lg focus:outline-none"
          @click="scroll"
          @mouseover="arrowHovered = true" @mouseleave="arrowHovered = false">
          Historie festivalu
          <span>
            <img src="../assets/img/arrow.png" alt="šipka" class="w-6 mt-1.5 ml-2 transition-transform"
            :class="{ 'transform translate-x-1.5': arrowHovered }">
          </span>
        </button>
    </Container>
  </div>  
  <Quiz class="mt-12" />
</template>

<script>
import Container from './Container.vue'
import Quiz from './Quiz.vue'

import gsap from 'gsap'

export default {
  components: { Container, Quiz },
  data() {
    return {
      arrowHovered: false
    }
  },
  methods: {
    scroll() {
      const section = document.getElementById('history')
      section.scrollIntoView({ behavior: 'smooth' })
    },

    beforeEnter(el) {
      el.style.transform = 'translateY(-60px)'
      el.style.opacity = 0
    },

    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        onComplete: done
      })
    },
  },
}
</script>

<style>
@media only screen and (min-width: 1024px) {
  .about-top {
    background-size: 10rem;
  }
}

.sec-head-enter-from {
  opacity: 0;
  transform: scale(0.2);
}

.set-head-enter-to {
  opacity: 1;
  transform: scale(1);
}

.set-head-enter-active {
  transition: all .8s ease;
}
</style>