<template>
  <h3 class="uppercase text-4xl mb-8 text-center font-heading">Generální Partneři</h3>
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

import priaImg from '../../assets/img/partners/general-partners/pria.png'
import priaImgMob from '../../assets/img/partners/general-partners/priaMob.png'
// import velvyslanectvoPLImg from '../assets/img/general-partners/stamgast_gurman.png'

export default {
  components: { Container },
  data() {
    return {
      logos: [
        {
          logoName: 'Pria',
          logoImg: priaImg,
          logoImgMob: priaImgMob
        },
        // {
        //   logoName: 'Velvyslanectvo PL',
        //   logoImg: velvyslanectvoPLImg
        // }
      ]
    }
  }
}
</script>