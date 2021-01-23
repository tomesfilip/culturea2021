<template>
  <Container class="xl:px-32 lg:px-12 px-8 flex items-center lg:justify-around lg:flex-row flex-col">
    <div class="info sm:w-1/2 w-3/4 mb-8 lg:text-left text-center">
      <h2 class="text-4xl uppercase font-heading mb-4">Mapa<br>festivalu</h2>
      <p class="mb-6 xl:w-1/2 lg:w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugit dolorem quibusdam aperiam adipisci quisquam quia molestiae esse iste, blanditiis distinctio ipsum eaque laudantium consectetur molestias delectus quam inventore suscipit, unde non.</p>
      <router-link :to="{ name: 'Map' }" class="lg:inline-flex hidden text-2xl uppercase items-center text-green font-heading">
        K mape
        <span><img src="../assets/img/arrow.png" alt="zelená šipka" class="ml-2 mt-2 w-3/5 h-auto"></span>
      </router-link>
    </div>
    <div class="image-part lg:w-1/2 w-3/4">
      <div class="rectangle"></div>
    </div>
    <router-link :to="{ name: 'Map' }"
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
  components: { Container }
}
</script>

<style>
  .rectangle {
    width: 100%;
    height: 30vh;
    background: #E4E4E4;
    border-radius: 20px;
  }

  @media only screen and (min-width: 640px) {
    .rectangle {
      height: 50vh;
    }
  }

  @media only screen and (min-width: 1024px) {
    .rectangle {
      height: 60vh;
    }
  }
</style>