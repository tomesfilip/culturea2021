<template>
  <Container class="xl:px-32 lg:px-12 px-8 flex items-center lg:justify-around lg:flex-row flex-col">
    <div class="info sm:w-1/2 w-3/4 mb-8 lg:text-left text-center">
      <h2 class="text-4xl uppercase font-heading mb-4">Mapa<br>festivalu</h2>
      <p class="mb-6 lg:w-3/4">Přehled všech bodů, kde na Vás čekají smyslové instalace. Také nezapomeňte navštívit zahraniční kuchyni přímo ve Zlíně.</p>
      <router-link :to="{ name: 'MainMap' }" 
        class="lg:inline-flex hidden text-2xl uppercase items-center text-green font-heading"
        @mouseover="arrowHovered = true" @mouseleave="arrowHovered = false">
        K mape
        <span>
          <img src="../assets/img/arrow.png" alt="zelená šipka" 
              class="ml-2 mt-2 w-3/5 h-auto transition-transform"
              :class="{ 'transform translate-x-1.5': arrowHovered }">
        </span>
      </router-link>
    </div>
    <div class="image-part lg:w-3/4 w-3/4">
      <img src="../assets/img/map-info-img.png" alt="mapa festivalu">
    </div>
    <router-link :to="{ name: 'MainMap' }"
      class="lg:hidden text-2xl uppercase items-center text-green font-heading mt-8">
      <div>
        <p class="pb-4">K mape</p>
        <img src="../assets/img/arrow-down.svg" alt="zelená šipka" 
          class="w-8 mx-auto h-auto animate-bounce">
      </div>        
      </router-link>
  </Container>
    
</template>

<script>
import Container from './Container.vue'


export default {
  components: { Container },
  data() {
    return{
      arrowHovered: false
    }
  }
}
</script>

<style>
</style>