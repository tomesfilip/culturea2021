<template>
  <h3 class="uppercase text-4xl sm:mb-16 mb-12 text-center font-heading">Mediální Partneři</h3>
  <Container class="lg:px-16 px-4">
    <div class="logos flex flex-wrap items-center justify-evenly">
      <img v-for="(logo, logoName) in logos" :key="logoName" :src="logo.logoImg" :alt="logo.logoName" class="logo flex-initial px-4 mb-12">
    </div>
  </Container>
</template>

<script>
import Container from '../Container.vue'

import dachmediaImg from '@/assets/img/partners/medial-partners/dachmedia.png'
import stamgastImg from '@/assets/img/partners/medial-partners/stamgast_gurman.png'
import vychytaneImg from '@/assets/img/partners/medial-partners/vychytane_cz.png'
import hsImg from '@/assets/img/partners/medial-partners/hs.png'
import zlinskoLuhacoviskoImg from '@/assets/img/partners/medial-partners/ZlinskoLuhacovisko.png'
import PrimaZoomImg from '@/assets/img/partners/medial-partners/PrimaZoom.png'
import vsesvetImg from '@/assets/img/partners/medial-partners/vsesvet.png'


export default {
  components: { Container },
  data() {
    return {
      logos: [
        {
          logoName: 'Zlínsko a Luhačovisko',
          logoImg: zlinskoLuhacoviskoImg
        },
        {
          logoName: 'Prima ZOOM',
          logoImg: PrimaZoomImg
        },
        {
          logoName: 'Štamgast & Gurmán',
          logoImg: stamgastImg
        },
        {
          logoName: 'dachmedia',
          logoImg: dachmediaImg
        },    
        {
          logoName: 'Hedvábná Stezka',
          logoImg: hsImg
        },    
        {
          logoName: 'Vychytané',
          logoImg: vychytaneImg
        },
        {
          logoName: 'Všesvet',
          logoImg: vsesvetImg
        }
      ]
    }
  }
}
</script>