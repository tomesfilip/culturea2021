<template>
  <h3 class="uppercase text-4xl sm:mb-16 mb-12 text-center font-heading">Hlavní Partneři</h3>
  <Container class="lg:px-16 px-4">
    <div class="logos flex flex-wrap  items-center justify-around">
      <picture v-for="(logo, logoName) in logos" :key="logoName" class="lg:w-1/3 mobile:w-1/2">
        <source :srcset="logo.logoImg" media="(min-width: 768px)">
        <img :src="logo.logoImgMob" :alt="logo.logoName">
      </picture>
    </div>
  </Container>
</template>

<script>
import Container from '../Container.vue'

import isProdukceImg from '@/assets/img/partners/main-partners/is_produkce.png'
import prasadImg from '@/assets/img/partners/main-partners/prasad.png'
import isProdukceImgMob from '@/assets/img/partners/main-partners/is_produkceMob.png'
import prasadImgMob from '@/assets/img/partners/main-partners/prasadMob.png'

export default {
  components: { Container },
  data() {
    return {
      logos: [
        {
          logoName: 'IS produkce',
          logoImg: isProdukceImg,
          logoImgMob: isProdukceImgMob
        },
        {
          logoName: 'Prašád',
          logoImg: prasadImg,
          logoImgMob: prasadImgMob
        },
      ]
    }
  }
}
</script>