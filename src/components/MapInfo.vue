<template>
  <Container class="xl:px-32 lg:px-12 px-8 flex items-center lg:justify-around lg:flex-row flex-col">
    <div class="info sm:w-1/2 w-3/4 mb-8 lg:text-left text-center">
      <h2 class="text-4xl uppercase font-heading mb-4">Mapa<br>festivalu</h2>
      <p class="mb-6 lg:w-3/4">Přehled všech bodů, kde na Vás čekají smyslové instalace. Také nezapomeňte navštívit zahraniční kuchyni přímo ve Zlíně.</p>
      <a href="https://culturea.cz/2021/map/" 
        class="lg:inline-flex hidden text-2xl uppercase items-center text-green font-heading"
        @mouseover="arrowHovered = true" @mouseleave="arrowHovered = false">
        K mapě
        <span>
          <img src="../assets/img/arrow.png" alt="zelená šipka" 
              class="ml-2 w-3/5 h-auto transition-transform"
              :class="{ 'transform translate-x-1.5': arrowHovered }">
        </span>
      </a>
    </div>
    <div class="image-part lg:w-3/4 w-3/4">
      <picture>
        <source srcset="../assets/img/map-info-img-desktop.webp" media="(min-width: 768px)" type="image/webp">
        <source srcset="../assets/img/map-info-img-desktop.png" media="(min-width: 768px)" type="png">
        <source srcset="../assets/img/map-info-img-mob.webp" type="image/webp">
        <img src="../assets/img/map-info-img-mob.png" width="1174" height="783" alt="mapa festivalu">
      </picture>
    </div>
    <a href="https://culturea.cz/2021/map/" class="lg:hidden text-2xl uppercase items-center text-green font-heading mt-8">
      <div>
        <p class="pb-4">K mapě</p>
        <img src="../assets/img/arrow-down.svg" alt="zelená šipka" 
          class="w-8 mx-auto h-auto animate-bounce">
      </div>        
    </a>
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