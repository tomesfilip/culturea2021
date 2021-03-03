<template>
  <h3 class="uppercase text-4xl sm:mb-16 mb-12 text-center font-heading">Partneři</h3>
  <Container class="lg:px-16 px-4">
    <div class="logos flex flex-wrap  items-center justify-around">
      <picture v-for="(logo, logoName) in logos" :key="logoName" class="logo lg:w-1/4 md:w-1/3 mobile:w-1/2 px-2 md:my-0 my-4">
        <source :srcset="logo.logoImg" media="(min-width: 768px)">
        <img :src="logo.logoImgMob" :alt="logo.logoName">
      </picture>
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
import hostImg from '../../assets/img/partners/normal-partners/host.png'
import totalOutdoorImgMob from '../../assets/img/partners/normal-partners/total_outdoorMob.png'
import hexxaImgMob from '../../assets/img/partners/normal-partners/hexxaMob.png'
import zlinImgMob from '../../assets/img/partners/normal-partners/zlin_czMob.png'
import mkmImgMob from '../../assets/img/partners/normal-partners/mkmMob.png'
import prabosBeReadyImgMob from '../../assets/img/partners/normal-partners/prabos_be_readyMob.png'
import wineWordsImgMob from '../../assets/img/partners/normal-partners/wine_wordsMob.png'
import hostImgMob from '../../assets/img/partners/normal-partners/hostMob.png'


export default {
  components: { Container },
  data() {
    return {
      logos: [
        {
          logoName: 'total outdoor',
          logoImg: totalOutdoorImg,
          logoImgMob: totalOutdoorImgMob
        },
        {
          logoName: 'Hexxa',
          logoImg: hexxaImg,
          logoImgMob: hexxaImgMob
        },
        {
          logoName: 'Zlín cz',
          logoImg: zlinImg,
          logoImgMob: zlinImgMob
        },
        {
          logoName: 'Prabos be ready',
          logoImg: prabosBeReadyImg,
          logoImgMob: prabosBeReadyImgMob
        },
        {
          logoName: 'MKM',
          logoImg: mkmImg,
          logoImgMob: mkmImgMob
        },        
        {
          logoName: 'Winewords',
          logoImg: wineWordsImg,
          logoImgMob: wineWordsImgMob
        },
        {
          logoName: 'Host',
          logoImg: hostImg,
          logoImgMob: hostImgMob
        }
      ]
    }
  }
}
</script>