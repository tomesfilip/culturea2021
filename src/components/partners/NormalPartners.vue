<template>
  <h3 class="uppercase text-4xl sm:mb-16 mb-12 text-center font-heading">Partneři</h3>
  <Container class="lg:px-16 px-4">
    <div class="logos flex flex-wrap  items-center justify-around">
      <img v-for="(logo, logoName) in logos" :key="logoName" :src="logo.logoImg" :alt="logo.logoName" class="logo lg:w-1/4 md:w-1/3 mobile:w-1/2 px-2 md:my-0 my-4">
    </div>
  </Container>
</template>

<script>
import Container from '../Container.vue'

import totalOutdoorImg from '../../assets/img/partners/normal-partners/total_outdoor.png'
import hexxaImg from '../../assets/img/partners/normal-partners/hexxa.png'
import zlinImg from '../../assets/img/partners/normal-partners/zlin_cz.png'
import mkmImg from '../../assets/img/partners/normal-partners/mkm.png'
import prabosBeReadyImg from '../../assets/img/partners/normal-partners/prabos_be_ready.png'
import wineWordsImg from '../../assets/img/partners/normal-partners/wine_words.png'

export default {
  components: { Container },
  data() {
    return {
      logos: [
        {
          logoName: 'total outdoor',
          logoImg: totalOutdoorImg
        },
        {
          logoName: 'Hexxa',
          logoImg: hexxaImg
        },
        {
          logoName: 'Zlín cz',
          logoImg: zlinImg
        },
        {
          logoName: 'Zlín cz',
          logoImg: mkmImg
        },
        {
          logoName: 'Prabos be ready',
          logoImg: prabosBeReadyImg
        },
        {
          logoName: 'Winewords',
          logoImg: wineWordsImg
        }
      ]
    }
  }
}
</script>