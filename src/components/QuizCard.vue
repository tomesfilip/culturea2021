<template>
  <div v-if="!quizCard.isAnswer" class="quiz-card flex flex-col overflow-hidden">
    <picture class="w-full h-3/4 object-cover">
      <source :srcset="quizCard.webpImg" type="image/webp">
      <img width="800" height="607" :src="quizCard.jpgImg" :alt="quizCard.alt">
    </picture>
    <div class="quiz-card-text text-center h-full flex items-center justify-center bg-black text-white 3xl:px-20 xl:px-12 px-2 sm-mobile:py-8 py-4">
      {{ quizCard.cardText }}
    </div>
  </div>
  <div    
    v-else class="quiz-card answer bg-green flex justify-center items-center">
    <div class="quiz-card-text answer text-center text-black md:px-16 px-8">
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
export default {
  name: 'QuizCard',
  props: ['quizCard'],
}
</script>

<style>
.quiz-card-text.answer {
  white-space: pre-wrap; 
}
</style>