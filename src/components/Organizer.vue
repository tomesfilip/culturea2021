<template>
  <Container>
    <h3 class="uppercase text-3xl font-heading text-center">Pořadatel</h3>
    <div class="lg:w-1/3 md:w-1/2 mx-auto">
      <a href="https://fmk.utb.cz" target="_blank" rel="external noopener">
        <picture>
          <source srcset="../assets/img/fmk-logo.webp" type="image/webp">
          <img width="674" height="185" src="../assets/img/fmk-logo.png" alt="Fakulta multimediálních komunikací">
        </picture>        
      </a>
    </div>
  </Container>
</template>

<script>
import Container from './Container.vue'
export default {
  components: { Container }
}
</script>