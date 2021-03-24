<template>
  <h3 class="uppercase text-4xl sm:mb-16 mb-12 text-center font-heading">Partneři</h3>
  <Container class="lg:px-16 px-4">
    <div class="logos flex flex-wrap items-center justify-evenly">
      <img v-for="(logo, logoName) in logos" :key="logoName" class="logo flex-initial px-6 mb-12" :src="logo.logoImg" :alt="logo.logoName">
    </div>
  </Container>
</template>

<script>
import Container from '../Container.vue'

import totalOutdoorImg from '@/assets/img/partners/normal-partners/total_outdoor.png'
import hexxaImg from '@/assets/img/partners/normal-partners/hexxa.png'
import zlinImg from '@/assets/img/partners/normal-partners/zlin_cz.png'
import mkmImg from '@/assets/img/partners/normal-partners/mkm.png'
import prabosBeReadyImg from '@/assets/img/partners/normal-partners/prabos_be_ready.png'
import wineWordsImg from '@/assets/img/partners/normal-partners/wine_words.png'
import hostImg from '@/assets/img/partners/normal-partners/host.png'


export default {
  components: { Container },
  data() {
    return {
      logos: [
        {
          logoName: 'total outdoor',
          logoImg: totalOutdoorImg,
        },
        {
          logoName: 'Hexxa',
          logoImg: hexxaImg,
        },
        {
          logoName: 'Zlín cz',
          logoImg: zlinImg,
        },
        {
          logoName: 'Winewords',
          logoImg: wineWordsImg,
        },
        {
          logoName: 'Host',
          logoImg: hostImg,
        },
        {
          logoName: 'MKM',
          logoImg: mkmImg,
        }, 
        {
          logoName: 'Prabos be ready',
          logoImg: prabosBeReadyImg,
        },
      ]
    }
  }
}
</script>