<template>
  <h2 class="uppercase text-4xl mb-16 text-center font-heading">Partneři</h2>
  <Container class="lg:px-16 px-4">
    <div class="logos grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
      <div class="bg-gray-300"></div>
      <div class="bg-gray-300"></div>
      <div class="bg-gray-300"></div>
      <div class="bg-gray-300"></div>
      <div class="bg-gray-300"></div>
      <div class="bg-gray-300"></div>
      <div class="bg-gray-300"></div>
      <div class="bg-gray-300"></div>
      <div class="bg-gray-300"></div>
      <div class="bg-gray-300"></div>
    </div>
  </Container>
  
</template>

<script>
import Container from './Container.vue'
export default {
  components: { Container },
  data() {
    return {
    }
  }
}
</script>

<style>
  .logos div {
    height: 14rem;
  }
</style>