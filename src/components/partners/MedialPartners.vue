<template>
  <h3 class="uppercase text-4xl sm:mb-16 mb-12 text-center font-heading">Mediální Partneři</h3>
  <Container class="lg:px-16 px-4">
    <div class="logos flex flex-wrap  items-center justify-around">
      <picture v-for="(logo, logoName) in logos" :key="logoName" class="logo lg:w-1/4 md:w-1/3 mobile:w-1/2 px-2 md:my-0 my-4">
        <source :srcset="logo.logoImg" media="(min-width: 768px)">
        <img :src="logo.logoImgMob" :alt="logo.logoName">
      </picture>
    </div>
  </Container>
</template>

<script>
import Container from '../Container.vue'

import dachmediaImg from '@/assets/img/partners/medial-partners/dachmedia.png'
import stamgastImg from '@/assets/img/partners/medial-partners/stamgast_gurman.png'
import vychytaneImg from '@/assets/img/partners/medial-partners/vychytane_cz.png'
import dachmediaImgMob from '@/assets/img/partners/medial-partners/dachmediaMob.png'
import stamgastImgMob from '@/assets/img/partners/medial-partners/stamgast_gurmanMob.png'
import vychytaneImgMob from '@/assets/img/partners/medial-partners/vychytane_czMob.png'
import hsImg from '@/assets/img/partners/medial-partners/hs.png'
import hsImgMob from '@/assets/img/partners/medial-partners/hsMob.png'


export default {
  components: { Container },
  data() {
    return {
      logos: [
        {
          logoName: 'dachmedia',
          logoImg: dachmediaImg,
          logoImgMob: dachmediaImgMob
        },
        {
          logoName: 'Štamgast & Gurmán',
          logoImg: stamgastImg,
          logoImgMob: stamgastImgMob
        },
        {
          logoName: 'Vychytané',
          logoImg: vychytaneImg,
          logoImgMob: vychytaneImgMob
        },
        {
          logoName: 'Hedvábná Stezka',
          logoImg: hsImg,
          logoImgMob: hsImgMob
        }
      ]
    }
  }
}
</script>