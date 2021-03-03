<template>
  <h3 class="uppercase text-4xl mb-8 text-center font-heading">Generální Partneři</h3>
  <Container class="lg:px-16 px-4">
    <div class="logos flex flex-wrap items-center justify-center">
      <img v-for="(logo, logoName) in logos" :key="logoName" :src="logo.logoImg" :alt="logo.logoName" class="logo lg:w-2/5 mobile:w-2/3">
    </div>
  </Container>
</template>

<script>
import Container from '../Container.vue'

import priaImg from '../../assets/img/partners/general-partners/pria.png'
// import velvyslanectvoPLImg from '../assets/img/general-partners/stamgast_gurman.png'

export default {
  components: { Container },
  data() {
    return {
      logos: [
        {
          logoName: 'Pria',
          logoImg: priaImg
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