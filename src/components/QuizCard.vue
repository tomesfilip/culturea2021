<template>
  <div v-if="!quizCard.isAnswer" class="quiz-card bg-white justify-between items-center p-8">
    <div class="quiz-card-img mb-8 flex h-4/5 items-center justify-center">
      <img :src="getImgSrc"  alt="" class="w-full h-auto">
    </div>
    <div class="quiz-card-text text-center text-lososPink">
      {{ quizCard.cardText }}
    </div>
  </div>
  <div v-else class="quiz-card answer bg-red justify-center">
    <div class="quiz-card-text text-center">
      <h4 class="font-bold text-white" :class="{ 'text-2xl': quizCard.answer.isBig }"></h4>
      <p></p>
      <h4 class="font-bold"></h4>
      <p></p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'QuizCard',
  props: ['quizCard'],
  mounted() {
    console.log(this.quizCard.cardImage)
  },
  computed: {
    getImgSrc() {
      return require(`../assets/img/about/cards/card${this.quizCard.index}.png`);
    }
  }
}
</script>

<style>
  .quiz-card {
    height: 24rem;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 1280px) {
    .quiz-card {
      height: 16rem;
    }
  }
  @media only screen and (max-width: 1024px) {
    .quiz-card {
      height: 20rem;
    }
  }
</style>