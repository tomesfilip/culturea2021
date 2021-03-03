<template>
  <h3 class="uppercase text-4xl sm:mb-16 mb-12 text-center font-heading">Hlavní Partneři</h3>
  <Container class="lg:px-16 px-4">
    <div class="logos flex flex-wrap  items-center justify-around">
      <img v-for="(logo, logoName) in logos" :key="logoName" :src="logo.logoImg" :alt="logo.logoName" class="lg:w-1/3 mobile:w-1/2">
    </div>
  </Container>
</template>

<script>
import Container from '../Container.vue'

import isProdukceImg from '../../assets/img/partners/main-partners/is_produkce.png'
import prasadImg from '../../assets/img/partners/main-partners/prasad.png'

export default {
  components: { Container },
  data() {
    return {
      logos: [
        {
          logoName: 'IS produkce',
          logoImg: isProdukceImg
        },
        {
          logoName: 'Prašád',
          logoImg: prasadImg
        },
      ]
    }
  }
}
</script>