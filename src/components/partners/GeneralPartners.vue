<template>
  <h3 class="uppercase text-4xl mb-8 text-center font-heading">Generální Partner</h3>
  <Container class="lg:px-16 px-4">
    <div class="logos flex flex-wrap items-center justify-center">
      <img v-for="(logo, logoName) in logos" :key="logoName" class="logo flex-initial" :src="logo.logoImg" :alt="logo.logoName">
    </div>
  </Container>
</template>

<script>
import Container from '../Container.vue'

import priaImg from '@/assets/img/partners/general-partners/pria.png'

export default {
  components: { Container },
  data() {
    return {
      logos: [
        {
          logoName: 'Pria',
          logoImg: priaImg,
        }
      ]
    }
  }
}
</script>