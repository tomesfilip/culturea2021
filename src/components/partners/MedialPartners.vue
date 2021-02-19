<template>
  <h3 class="uppercase text-4xl sm:mb-16 mb-12 text-center font-heading">Mediální Partneři</h3>
  <Container class="lg:px-16 px-4">
    <div class="logos flex flex-wrap  items-center justify-around">
      <img v-for="(logo, logoName) in logos" :key="logoName" :src="logo.logoImg" :alt="logo.logoName" class="logo lg:w-1/4 md:w-1/3 mobile:w-1/2 px-2 md:my-0 my-4">
    </div>
  </Container>
</template>

<script>
import Container from '../Container.vue'

import dachmediaImg from '../../assets/img/partners/medial-partners/dachmedia.png'
import stamgastImg from '../../assets/img/partners/medial-partners/stamgast_gurman.png'
import vychytaneImg from '../../assets/img/partners/medial-partners/vychytane_cz.png'

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
        }
      ]
    }
  }
}
</script>

<style>
</style>