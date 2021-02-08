<template>
  <Container class="lg:px-28 md:px-4 text-center">
    <h2 class="uppercase text-4xl font-heading">Náš team</h2>
    <vueper-slides
      class="no-shadow md:pt-16 pt-12 px-4"
      :visible-slides="4"
      slide-multiple
      :gap="5"
      :slide-ratio="1 / 4"
      :dragging-distance="100"
      :breakpoints="{ 820: { visibleSlides: 2, slideMultiple: 2, arrows: false, slideRatio: 0.6, bullets: false } }">
      <template v-slot:arrow-left>
        <i class="slider-arrow" />
      </template>
      <template v-slot:arrow-right>
        <i class="slider-arrow transform rotate-180" />
      </template>
      <vueper-slide 
        v-for="(teamMember, name, photo) in teamMembers" 
        :key="name" 
        class="member flex bg-darkGrey">
        <template v-slot:content>
          <div class="vueperslide__content-wrapper justify-end bg-darkGrey flex">
            <div class="member-photo h-2/3">
              <img v-if=teamMember.photo :src="teamMember.photo" :alt="teamMember.name" class="w-full h-full object-cover">
            </div>
            <figcaption class="member-name h-1/3 bg-green w-full px-2 flex items-center justify-center text-yellow">
              {{ teamMember.name }}
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
          name: 'Michaela Eliášová'
        },
        {
          photo: LN,
          name: 'Lucia Novotná'
        },
        {
          photo: LB,
          name: 'Lukáš Bouška'
        },         
        {
          photo: AT,
          name: 'Aneta Tomanová'
        },
        {
          photo: LMo,
          name: 'Lucie Monsportová'
        },
        {
          photo: AV,
          name: 'Anna Vrbková'
        },
        {
          photo: BF,
          name: 'Bára Fotrová'
        },
        {
          photo: BN,
          name: 'Kristína Mlynárová'
        },
        {
          photo: KM,
          name: 'Bára Navrátilová '
        },
        {
          photo: MT,
          name: 'Martin Tomiga'
        },
        {
          photo: RV,
          name: 'Radka Vybíralová'
        },
        {
          photo: AK,
          name: 'Anežka Karvanová'
        },
        {
          photo: AM,
          name: 'Anna Marenčáková'
        },
        {
          photo: BB,
          name: 'Barbora Březíková'
        },
        {
          photo: RS,
          name: 'Rastislav Škojec'
        },        
        {
          photo: SH,
          name: 'Simona Hazuchová'
        },
        {
          photo: '',
          name: 'Vojtěch Vaník'
        },        
        {
          photo: '',
          name: 'Veronika Ištvánková'
        },
        {
          photo: '',
          name: 'Jan Vilímek'
        },
        {
          photo: TB,
          name: 'Tereza Brlicová'
        },
        {
          photo: '',
          name: 'Lucia Mišeková'
        },
        {
          photo: ZP,
          name: 'Zuzana Pevná'
        },
        {
          photo: KT,
          name: 'Kateřina Turková'
        },
        {
          photo: '',
          name: 'Romana Červenková'
        },
        {
          photo: DK,
          name: 'Daniela Kačeriaková'
        },        
        {
          photo: '',
          name: 'Polina Rodionova'
        },
        {
          photo: '',
          name: 'Anna Holasová'
        },
        {
          photo: '',
          name: 'Valéria Balážová'
        },
        {
          photo: FT,
          name: 'Filip Tomeš'
        },
        {
          photo: '',
          name: 'Vendula Kopečná'
        },
        {
          photo: '',
          name: 'Adam Faltus'
        },
        {
          photo: '',
          name: 'Vincent Stránský'
        },
        {
          photo: '',
          name: 'Michal Kuthan'
        },
        {
          photo: '',
          name: 'Matěj Voch'
        }
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