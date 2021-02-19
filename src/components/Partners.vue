<template>
  <section id="general-partners" class="py-12 px-4">
    <GeneralPartners />
  </section>
  <section id="main-partners" class="py-12 px-4">
    <MainPartners />
  </section>
  <section id="normal-partners" class="py-12 px-4">
    <NormalPartners />
  </section>
  <section id="medial-partners" class="py-12 px-4">
    <MedialPartners />
  </section>
</template>

<script>
import Container from './Container.vue'
import GeneralPartners from './partners/GeneralPartners.vue'
import MainPartners from './partners/MainPartners.vue'
import NormalPartners from './partners/NormalPartners.vue'
import MedialPartners from './partners/MedialPartners.vue'

// import prasadImg from '../assets/img/partners/prasad.png'
// import mkmImg from '../assets/img/partners/mkm.png'
// import totalOutdoorImg from '../assets/img/partners/total_outdoor.png'
// import zlinImg from '../assets/img/partners/zlin_cz.png'
// import winewordsImg from '../assets/img/partners/wine_words.png'

export default {
  components: { Container, GeneralPartners, MainPartners, NormalPartners, MedialPartners },
  data() {
    return {
      logos: [
        // {
        //   logoName: 'Prašád',
        //   logoImg: prasadImg
        // },
        // {
        //   logoName: 'MKM jazyková škola, překladatelská agentura',
        //   logoImg: mkmImg
        // },
        // {
        //   logoName: 'Total Outdoor',
        //   logoImg: totalOutdoorImg
        // },
        // {
        //   logoName: 'Zlín cz',
        //   logoImg: zlinImg
        // },
        // {
        //   logoName: 'Wine words',
        //   logoImg: winewordsImg
        // }
      ]
    }
  }
}
</script>

<style>
</style>