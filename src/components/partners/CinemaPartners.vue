<template>
  <h3 class="uppercase text-4xl mb-8 text-center font-heading">Partneři jarního kina</h3>
  <Container class="lg:px-16 px-4">
    <div class="logos flex flex-wrap items-center justify-center">
      <picture v-for="(logo, logoName) in logos" :key="logoName" class="logo lg:w-2/5 mobile:w-2/3">
        <source :srcset="logo.logoImg" media="(min-width: 768px)">
        <img :key="logoName" :src="logo.logoImgMob" :alt="logo.logoName">
      </picture>
    </div>
  </Container>
</template>

<script>
import Container from '../Container.vue'

import polskyInstitut from '@/assets/img/partners/spring-cinema-partners/pi_praha.png'
import polskyInstitutImg from '@/assets/img/partners/spring-cinema-partners/pi_prahaMob.png'
import plAmbasadaImg from '@/assets/img/partners/spring-cinema-partners/PL_ambasada.png'
import plAmbasadaImgMob from '@/assets/img/partners/spring-cinema-partners/PL_ambasadaMob.png'

export default {
  components: { Container },
  data() {
    return {
      logos: [
        {
          logoName: 'Polský Institut Praha',
          logoImg: polskyInstitut,
          logoImgMob: polskyInstitutImg
        },
        {
          logoName: 'Polská ambasáda',
          logoImg: plAmbasadaImg,
          logoImgMob: plAmbasadaImgMob
        },
      ]
    }
  }
}
</script>