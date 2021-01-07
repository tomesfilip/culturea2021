<template>
  <div @click="quizCard.isAnswer = !quizCard.isAnswer" v-if="!quizCard.isAnswer" class="quiz-card bg-white xl:p-8 p-2">
    <img :src="getImgSrc"  alt="" class="md:mb-12 mx-auto">
    <div class="quiz-card-text text-center text-lososPink my-4">
      {{ quizCard.cardText }}
    </div>
  </div>
  <div 
    @click="quizCard.isAnswer = !quizCard.isAnswer" 
    v-else class="quiz-card answer bg-red flex justify-center items-center">
    <div class="quiz-card-text answer text-center text-white md:px-16 px-8">
      <h4 v-if="quizCard.answer.titleOne" class="font-bold mb-1" :class="{ 'text-2xl': quizCard.answer.isBig }">
        {{ quizCard.answer.titleOne}}
      </h4>
      <p v-if="quizCard.answer.textOne" class="mb-3">
        {{ quizCard.answer.textOne }}
      </p>
      <h4 v-if="quizCard.answer.titleTwo" class="font-bold mb-1">
        {{ quizCard.answer.titleTwo }}
      </h4>
      <p v-if="quizCard.answer.textTwo">
        {{ quizCard.answer.textTwo }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'QuizCard',
  props: ['quizCard'],
  computed: {
    getImgSrc() {
      return require(`../assets/img/about/cards/card${this.quizCard.index}.jpg`);
    }
  }
}
</script>

<style>

.quiz-card {
  height: 24rem;
}

  .quiz-card-text.answer {
    white-space: pre-wrap; 
  }
</style>