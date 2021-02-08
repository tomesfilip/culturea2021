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
      :dragging-distance="100"
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
              <img v-if=teamMember.photo :src="teamMember.photo" :alt="teamMember.name" class="w-full h-full object-cover">
            </div>
            <figcaption class="member-name h-1/3 bg-green w-full px-2 flex flex-col items-center justify-center text-yellow">
              <p class="font-bold mobile:text-lg mb-2">{{ teamMember.name }}</p>
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
import TeamMember from './TeamMember.vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import AK from '../assets/img/team/AK.jpg'
import AM from '../assets/img/team/AM.jpg'
import AT from '../assets/img/team/AT.jpg'
import AV from '../assets/img/team/AV.jpg'
import BB from '../assets/img/team/BB.jpg'
import BF from '../assets/img/team/BF.jpg'
import BN from '../assets/img/team/BN.jpg'
import DK from '../assets/img/team/DK.jpg'
import FT from '../assets/img/team/FT.jpg'
import KM from '../assets/img/team/KM.jpg'
import KT from '../assets/img/team/KT.jpg'
import LB from '../assets/img/team/LB.jpg'
import LMo from '../assets/img/team/LMo.jpg'
import LN from '../assets/img/team/LN.jpg'
import ME from '../assets/img/team/ME.jpg'
import MT from '../assets/img/team/MT.jpg'
import RS from '../assets/img/team/RS.jpg'
import RV from '../assets/img/team/RV.jpg'
import SH from '../assets/img/team/SH.jpg'
import TB from '../assets/img/team/TB.jpg'
import ZP from '../assets/img/team/ZP.jpg'

export default {
  components: { TeamMember, Container, VueperSlides, VueperSlide },
  data() {
    return {
      teamMembers: [
        {
          photo: ME,
          name: 'Michaela Eliášová',
          position: 'project manager'
        },
        {
          photo: LN,
          name: 'Lucia Novotná',
          position: 'project manager'
        },
        {
          photo: LB,
          name: 'Lukáš Bouška',
          position: 'production manager'
        },         
        {
          photo: AT,
          name: 'Aneta Tomanová',
          position: 'production'
        },
        {
          photo: LMo,
          name: 'Lucie Monsportová',
          position: 'production'
        },
        {
          photo: AV,
          name: 'Anna Vrbková',
          position: 'production'
        },
        {
          photo: BF,
          name: 'Bára Fotrová',
          position: 'production'
        },
        {
          photo: LN,
          name: 'Lucia Novotná',
          position: 'promo manager'
        },
        {
          photo: KM,
          name: 'Bára Navrátilová',
          position: 'promo'
        },
        {
          photo: BN,
          name: 'Kristína Mlynárová',
          position: 'promo'
        },
        {
          photo: MT,
          name: 'Martin Tomiga',
          position: 'PR manager'
        },
        {
          photo: RV,
          name: 'Radka Vybíralová',
          position: 'PR'
        },
        {
          photo: AK,
          name: 'Anežka Karvanová',
          position: 'PR'
        },
        {
          photo: AM,
          name: 'Anna Marenčáková',
          position: 'PR'
        },
        {
          photo: BB,
          name: 'Barbora Březíková',
          position: 'fundraising manager'
        },
        {
          photo: '',
          name: 'Vojtěch Vaník',
          position: 'fundraising'
        },
        {
          photo: RS,
          name: 'Rastislav Škojec',
          position: 'fundraising'
        },        
        {
          photo: SH,
          name: 'Simona Hazuchová',
          position: 'fundraising'
        },
        {
          photo: '',
          name: 'Veronika Ištvánková',
          position: 'fundraising'
        },
        {
          photo: '',
          name: 'Jan Vilímek',
          position: 'fundraising'
        },
        {
          photo: TB,
          name: 'Tereza Brlicová',
          position: 'art manager'
        },
        {
          photo: '',
          name: 'Lucia Mišeková',
          position: 'art'
        },
        {
          photo: ZP,
          name: 'Zuzana Pevná',
          position: 'art'
        },
        {
          photo: KT,
          name: 'Kateřina Turková',
          position: 'art'
        },
        {
          photo: '',
          name: 'Jan Gajdoš',
          position: 'art'
        },
        {
          photo: DK,
          name: 'Daniela Kačeriaková',
          position: 'art'
        },        
        {
          photo: '',
          name: 'Polina Rodionova',
          position: 'art'
        },
        {
          photo: '',
          name: 'Anna Holasová',
          position: 'art'
        },
        {
          photo: '',
          name: 'Valéria Balážová',
          position: 'art'
        },
        {
          photo: FT,
          name: 'Filip Tomeš',
          position: 'art'
        },
        {
          photo: '',
          name: 'Branislav Kern',
          position: 'video spot manager'
        },
        {
          photo: '',
          name: 'Vendula Kopečná',
          position: 'video spot'
        },
        {
          photo: '',
          name: 'Adam Faltus',
          position: 'video spot'
        },
        {
          photo: '',
          name: 'Vincent Stránský',
          position: 'video spot'
        },
        {
          photo: '',
          name: 'Michal Kuthan',
          position: 'video spot'
        },
        {
          photo: '',
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