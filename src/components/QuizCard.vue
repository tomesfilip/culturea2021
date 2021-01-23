<template>
  <div v-if="!quizCard.isAnswer" class="quiz-card h-80 md:h-96 flex flex-col">
    <div class="quiz-img">
      <img :src="quizCard.img"  :alt="quizCard.alt" class="w-full">
    </div>
    <div class="quiz-card-text text-center h-full flex items-center justify-center bg-black text-white 3xl:px-20 xl:px-12">
      {{ quizCard.cardText }}
    </div>
  </div>
  <div    
    v-else class="quiz-card answer bg-green flex justify-center items-center h-80 md:h-96">
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