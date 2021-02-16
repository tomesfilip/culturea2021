<template>
  <h2 class="uppercase text-4xl sm:mb-16 mb-12 text-center font-heading">Mediální Partneři</h2>
  <Container class="lg:px-16 px-4">
    <div class="logos grid xl:grid-cols-4 md:grid-cols-3 mobile:grid-cols-2 grid-cols-1 gap-4 items-center justify-items-center">
      <img v-for="(logo, logoName) in logos" :key="logoName" :src="logo.logoImg" :alt="logo.logoName" class="sm:w-full w-1/2">
    </div>
  </Container>
</template>

<script>
import Container from './Container.vue'

import dachmediaImg from '../assets/img/medial-partners/dachmedia.png'
import stamgastImg from '../assets/img/medial-partners/stamgast_gurman.png'
import vychytaneImg from '../assets/img/medial-partners/vychytane_cz.png'
import zlinImg from '../assets/img/medial-partners/zlin_cz.png'

export default {
  components: { Container },
  data() {
    return {
      logos: [
        {
          logoName: 'dachmedia',
          logoImg: dachmediaImg
        },
        {
          logoName: 'Štamgast & Gurmán',
          logoImg: stamgastImg
        },
        {
          logoName: 'Vychytané',
          logoImg: vychytaneImg
        },
        {
          logoName: 'Zlín cz',
          logoImg: zlinImg
        }
      ]
    }
  }
}
</script>

<style>
  .logos div {
    height: 14rem;
  }
</style>