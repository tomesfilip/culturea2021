<template>
  <h2 class="uppercase text-4xl sm:mb-16 mb-12 text-center font-heading">Partneři</h2>
  <Container class="lg:px-16 px-4">
    <div class="logos grid xl:grid-cols-4 md:grid-cols-3 mobile:grid-cols-2 grid-cols-1 gap-4 items-center justify-items-center">
      <img v-for="(logo, logoName) in logos" :key="logoName" :src="logo.logoImg" :alt="logo.logoName" class="sm:w-full w-1/2">
    </div>
  </Container>
</template>

<script>
import Container from './Container.vue'

import prasadImg from '../assets/img/partners/prasad.png'
import mkmImg from '../assets/img/partners/mkm.png'
import totalOutdoorImg from '../assets/img/partners/total_outdoor.png'
import zlinImg from '../assets/img/partners/zlin_cz.png'
import winewordsImg from '../assets/img/partners/wine_words.png'

export default {
  components: { Container },
  data() {
    return {
      logos: [
        {
          logoName: 'Prašád',
          logoImg: prasadImg
        },
        {
          logoName: 'MKM jazyková škola, překladatelská agentura',
          logoImg: mkmImg
        },
        {
          logoName: 'Total Outdoor',
          logoImg: totalOutdoorImg
        },
        {
          logoName: 'Zlín cz',
          logoImg: zlinImg
        },
        {
          logoName: 'Wine words',
          logoImg: winewordsImg
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