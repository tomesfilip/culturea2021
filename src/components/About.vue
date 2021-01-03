<template>
<Container class="text-center lg:w-1/3 md:w-1/2 md:px-0 px-4">
  <div class="inline-flex justify-center w-full items-center mb-8">
    <img src="../assets/img/about/donut.svg" alt="donut" class="w-auto h-12">
    <h2 class="uppercase text-4xl mb-4 ml-4">festivalu</h2>
  </div>
  <article>
    <p class="mb-4">Culturea je cestovatelský projekt, který každoročně pořádají studenti Fakulty multimediálních komunikací<br>Univerzity Tomáše Bati ve Zlíně.</p>
    <p class="mb-2">Culturea je festival o dvou zemích, kde se představí to nejlepší z nich. Místní delikatesy, národní tradice, zvyky - zkrátka vše, čím je země výjimečná.</p>
  </article>
  <button 
    class="mt-4 font-bold inline-flex items-center text-red text-lg focus:outline-none"
    @click="scroll"  
  >
    Minulé ročníky
    <span>
      <img src="../assets/img/arrow.png" alt="šipka" class="w-6 mt-1.5 ml-2">
    </span>
  </button>
</Container>

</template>

<script>
import Container from './Container.vue'
export default {
  components: { Container },
  methods: {
    scroll() {
      const section = document.getElementById('history')
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style>

</style>