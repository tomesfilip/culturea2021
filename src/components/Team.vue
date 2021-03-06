<template>
  <Container class="lg:px-28 md:px-4 text-center">
    <h2 class="uppercase text-4xl font-heading">Náš team</h2>
    <vueper-slides
      class="no-shadow md:pt-16 pt-12 px-4"
      :visible-slides="4"
      slide-multiple
      :gap="5"
      :slide-ratio="1 / 4"
      :touchable=false
      :dragging-distance="60"
      :breakpoints="{ 
        820: { visibleSlides: 2, slideMultiple: 2, arrows: false, slideRatio: 0.65, bullets: false, touchable:true },
        1280: { visibleSlides: 3, slideMultiple: 3, arrows: true, slideRatio: 0.4, bullets: true }
      }">
      <template v-slot:arrow-left>
        <i class="slider-arrow" />
      </template>
      <template v-slot:arrow-right>
        <i class="slider-arrow transform rotate-180" />
      </template>
      <vueper-slide 
        v-for="(teamMember, name) in teamMembers" 
        :key="name" 
        class="member flex bg-darkGrey">
        <template v-slot:content>
          <div class="vueperslide__content-wrapper justify-end bg-darkGrey flex">
            <div class="member-photo h-2/3">
              <picture class="w-full h-full object-cover">
                <source v-if=teamMember.webpPhoto :srcset="teamMember.webpPhoto" type="image/webp">
                <img v-if=teamMember.jpgPhoto width="400" height="400" :src="teamMember.jpgPhoto" :alt="teamMember.name">
              </picture>
            </div>
            <figcaption class="member-name h-1/3 bg-green w-full px-2 flex flex-col items-center justify-center text-yellow">
              <p class="font-bold mobile:text-lg mobile:mb-2">{{ teamMember.name }}</p>
              <p class="uppercase mobile:block hidden text-sm 2xl:text-base">{{ teamMember.position }}</p>
            </figcaption>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>  
  </Container>
</template>

<script>
import Container from './Container.vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import AK from '@/assets/img/team/AK.webp'
import AM from '@/assets/img/team/AM.webp'
import AT from '@/assets/img/team/AT.webp'
import AV from '@/assets/img/team/AV.webp'
import BB from '@/assets/img/team/BB.webp'
import BF from '@/assets/img/team/BF.webp'
import BN from '@/assets/img/team/BN.webp'
import DK from '@/assets/img/team/DK.webp'
import FT from '@/assets/img/team/FT.webp'
import KM from '@/assets/img/team/KM.webp'
import KT from '@/assets/img/team/KT.webp'
import LB from '@/assets/img/team/LB.webp'
import LMo from '@/assets/img/team/LMo.webp'
import LN from '@/assets/img/team/LN.webp'
import ME from '@/assets/img/team/ME.webp'
import MK from '@/assets/img/team/MK.webp'
import MT from '@/assets/img/team/MT.webp'
import PR from '@/assets/img/team/PR.webp'
import RS from '@/assets/img/team/RS.webp'
import RV from '@/assets/img/team/RV.webp'
import SH from '@/assets/img/team/SH.webp'
import TB from '@/assets/img/team/TB.webp'
import ZP from '@/assets/img/team/ZP.webp'

import AKjpg from '@/assets/img/team/AK.jpg'
import AMjpg from '@/assets/img/team/AM.jpg'
import ATjpg from '@/assets/img/team/AT.jpg'
import AVjpg from '@/assets/img/team/AV.jpg'
import BBjpg from '@/assets/img/team/BB.jpg'
import BFjpg from '@/assets/img/team/BF.jpg'
import BNjpg from '@/assets/img/team/BN.jpg'
import DKjpg from '@/assets/img/team/DK.jpg'
import FTjpg from '@/assets/img/team/FT.jpg'
import KMjpg from '@/assets/img/team/KM.jpg'
import KTjpg from '@/assets/img/team/KT.jpg'
import LBjpg from '@/assets/img/team/LB.jpg'
import LMojpg from '@/assets/img/team/LMo.jpg'
import LNjpg from '@/assets/img/team/LN.jpg'
import MEjpg from '@/assets/img/team/ME.jpg'
import MKjpg from '@/assets/img/team/MK.jpg'
import MTjpg from '@/assets/img/team/MT.jpg'
import PRjpg from '@/assets/img/team/PR.jpg'
import RSjpg from '@/assets/img/team/RS.jpg'
import RVjpg from '@/assets/img/team/RV.jpg'
import SHjpg from '@/assets/img/team/SH.jpg'
import TBjpg from '@/assets/img/team/TB.jpg'
import ZPjpg from '@/assets/img/team/ZP.jpg'

export default {
  components: { Container, VueperSlides, VueperSlide },
  data() {
    return {
      teamMembers: [
        {
          webpPhoto: ME,
          jpgPhoto: MEjpg,
          name: 'Michaela Eliášová',
          position: 'project manager'
        },
        {
          webpPhoto: LN,
          jpgPhoto: LNjpg,
          name: 'Lucia Novotná',
          position: 'project manager'
        },
        {
          webpPhoto: LB,
          jpgPhoto: LBjpg,
          name: 'Lukáš Bouška',
          position: 'production manager'
        },         
        {
          webpPhoto: AT,
          jpgPhoto: ATjpg,
          name: 'Aneta Tomanová',
          position: 'production'
        },
        {
          webpPhoto: LMo,
          jpgPhoto: LMojpg,
          name: 'Lucie Monsportová',
          position: 'production'
        },
        {
          webpPhoto: AV,
          jpgPhoto: AVjpg,
          name: 'Anna Vrbková',
          position: 'production'
        },
        {
          webpPhoto: BF,
          jpgPhoto: BFjpg,
          name: 'Bára Fotrová',
          position: 'production'
        },
        {
          webpPhoto: LN,
          jpgPhoto: LNjpg,
          name: 'Lucia Novotná',
          position: 'promo manager'
        },
        {
          webpPhoto: BN,
          jpgPhoto: BNjpg,
          name: 'Bára Navrátilová',
          position: 'promo'
        },
        {
          webpPhoto: KM,
          jpgPhoto: KMjpg,
          name: 'Kristína Mlynárová',
          position: 'promo'
        },
        {
          webpPhoto: MT,
          jpgPhoto: MTjpg,
          name: 'Martin Tomiga',
          position: 'PR manager'
        },
        {
          webpPhoto: RV,
          jpgPhoto: RVjpg,
          name: 'Radka Vybíralová',
          position: 'PR'
        },
        {
          webpPhoto: AK,
          jpgPhoto: AKjpg,
          name: 'Anežka Karvanová',
          position: 'PR'
        },
        {
          webpPhoto: AM,
          jpgPhoto: AMjpg,
          name: 'Anna Marenčáková',
          position: 'PR'
        },
        {
          webpPhoto: BB,
          jpgPhoto: BBjpg,
          name: 'Barbora Březíková',
          position: 'fundraising manager'
        },
        {
          webpPhoto: '',
          jpgPhoto: '',
          name: 'Vojtěch Vaník',
          position: 'fundraising'
        },
        {
          webpPhoto: RS,
          jpgPhoto: RSjpg,
          name: 'Rastislav Škojec',
          position: 'fundraising'
        },        
        {
          webpPhoto: SH,
          jpgPhoto: SHjpg,
          name: 'Simona Hazuchová',
          position: 'fundraising'
        },
        {
          webpPhoto: '',
          jpgPhoto: '',
          name: 'Veronika Ištvánková',
          position: 'fundraising'
        },
        {
          webpPhoto: '',
          jpgPhoto: '',
          name: 'Jan Vilímek',
          position: 'fundraising'
        },
        {
          webpPhoto: TB,
          jpgPhoto: TBjpg,
          name: 'Tereza Brlicová',
          position: 'art manager'
        },
        {
          webpPhoto: '',
          jpgPhoto: '',
          name: 'Lucia Mišeková',
          position: 'art'
        },
        {
          webpPhoto: ZP,
          jpgPhoto: ZPjpg,
          name: 'Zuzana Pevná',
          position: 'art'
        },
        {
          webpPhoto: KT,
          jpgPhoto: KTjpg,
          name: 'Kateřina Turková',
          position: 'art'
        },
        {
          webpPhoto: '',
          jpgPhoto: '',
          name: 'Jan Gajdoš',
          position: 'art'
        },
        {
          webpPhoto: DK,
          jpgPhoto: DKjpg,
          name: 'Daniela Kačeriaková',
          position: 'art'
        },        
        {
          webpPhoto: PR,
          jpgPhoto: PRjpg,
          name: 'Polina Rodionova',
          position: 'art'
        },
        {
          webpPhoto: '',
          jpgPhoto: '',
          name: 'Anna Holasová',
          position: 'art'
        },
        {
          webpPhoto: '',
          jpgPhoto: '',
          name: 'Valéria Balážová',
          position: 'art'
        },
        {
          webpPhoto: FT,
          jpgPhoto: FTjpg,
          name: 'Filip Tomeš',
          position: 'art'
        },
        {
          webpPhoto: '',
          jpgPhoto: '',
          name: 'Branislav Kern',
          position: 'video spot manager'
        },
        {
          webpPhoto: '',
          jpgPhoto: '',
          name: 'Vendula Kopečná',
          position: 'video spot'
        },
        {
          webpPhoto: '',
          jpgPhoto: '',
          name: 'Adam Faltus',
          position: 'video spot'
        },
        {
          webpPhoto: '',
          jpgPhoto: '',
          name: 'Vincent Stránský',
          position: 'video spot'
        },
        {
          webpPhoto: MK,
          jpgPhoto: MKjpg,
          name: 'Michal Kuthan',
          position: 'video spot'
        },
        {
          webpPhoto: '',
          jpgPhoto: '',
          name: 'Matěj Voch',
          position: 'video spot'
        },
      ]
    }
  }
}
</script>

<style>
  .vueperslides__bullet .default {
  background-color: #4B4B4B;
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
}

.vueperslides__bullet--active .default {
  background-color: #1BB36C;
  }

.vueperslides__bullet span {
  display: block;
  color: #fff;
  font-size: 10px;
  opacity: 0.8;
}

.vueperslide__content-wrapper:not(.vueperslide__content-wrapper--outside-top):not(.vueperslide__content-wrapper--outside-bottom) {
  justify-content: flex-end;
}

.vueperslides__arrow {
  color: #1BB36C;
}

.slider-arrow {
  display: block;
  width: 32px;
  height: 60px;
  background: url('../assets/img/sliderArrow.svg') no-repeat content-box;
}
</style>