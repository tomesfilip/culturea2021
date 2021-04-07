<template>
  <h3 class="uppercase text-4xl mb-8 text-center font-heading">Partneři jarního kina</h3>
  <Container class="lg:px-16 px-4">
    <div class="logos flex flex-wrap items-center justify-center">
      <img v-for="(logo, logoName) in logos" :key="logoName" class="logo flex-initial px-4 mb-12" :src="logo.logoImg" :alt="logo.logoName">
    </div>
  </Container>
</template>

<script>
import Container from '../Container.vue'

import polskyInstitutImg from '@/assets/img/partners/spring-cinema-partners/pi_praha.png'
import plAmbasadaImg from '@/assets/img/partners/spring-cinema-partners/PL_ambasada.png'
import plSchoolLodzImg from '@/assets/img/partners/spring-cinema-partners/PL_school_Lodz.png'

export default {
  components: { Container },
  data() {
    return {
      logos: [
        {
          logoName: 'Polský Institut Praha',
          logoImg: polskyInstitutImg,
        },
        {
          logoName: 'Polská ambasáda',
          logoImg: plAmbasadaImg,
        },
        {
          logoName: 'Polská filmová škola Lodz',
          logoImg: plSchoolLodzImg,
        },
      ]
    }
  }
}
</script>