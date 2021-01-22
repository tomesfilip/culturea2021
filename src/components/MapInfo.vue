<template>
  <Container class="px-20">
    <div class="info">
      <h2 class="text-4xl uppercase mb-2">Mapa<br>festivalu</h2>
      <p class="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugit dolorem quibusdam aperiam adipisci quisquam quia molestiae esse iste, blanditiis distinctio ipsum eaque laudantium consectetur molestias delectus quam inventore suscipit, unde non. Expedita nam ipsa nesciunt ratione cumque eligendi quisquam?</p>
      <router-link :to="{ name: 'Map' }" class="text-2xl uppercase inline-flex items-center text-green font-bold">
        K mape
        <span><img src="../assets/img/arrow.png" alt="zelená šipka" class="ml-2 mt-2"></span>
      </router-link>
    </div>
    <div class="image-part">

    </div>
  </Container>
    
</template>

<script>
import Container from './Container.vue'


export default {
  components: { Container }
}
</script>

<style>

</style>