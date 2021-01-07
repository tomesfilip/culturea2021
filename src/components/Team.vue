<template>
  <Container class="lg:px-28 md:px-20 text-center">
    <h2 class="uppercase text-4xl">Náš team</h2>
    <vueper-slides
      class="no-shadow md:pt-16 pt-12 px-4"
      :visible-slides="4"
      slide-multiple
      :gap="5"
      :slide-ratio="1 / 4"
      :dragging-distance="100"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2, arrows: false, slideRatio: 0.6 } }">
      <template v-slot:arrow-left>
        <i class="slider-arrow" />
      </template>

      <template v-slot:arrow-right>
        <i class="slider-arrow transform rotate-180" />
      </template>
      <vueper-slide 
        v-for="(teamMember, name) in teamMembers" 
        :key="name" 
        class="member flex bg-yellow"
      >
        <template v-slot:content>
          <div class="vueperslide__content-wrapper justify-end bg-yellow">
            <div class="member-photo w-full">

            </div>
            <figcaption class="member-name md:h-20 h-14 bg-red w-full px-2 flex items-center justify-center text-yellow">
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

export default {
  components: { TeamMember, Container, VueperSlides, VueperSlide },
  data() {
    return {
      teamMembers: [
        {
          photo: '',
          name: 'Lucia Novotná'
        },
        {
          photo: '',
          name: 'Michaela Eliášová'
        },
        {
          photo: '',
          name: 'Polina Rodionova'
        },
        {
          photo: '',
          name: 'Tereza Brlicová'
        },
        {
          photo: '',
          name: 'Filip Tomeš'
        },
        {
          photo: '',
          name: 'Rastislav Škojec'
        },
        {
          photo: '',
          name: 'Simona Hazuchová'
        },
        {
          photo: '',
          name: 'Lukáš Bouška'
        },
        {
          photo: '',
          name: 'Daniela Kačeriaková'
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
          name: 'Anna Marenčáková'
        }
      ]
    }
  }
}
</script>

<style>
  .vueperslides__bullet .default {
  background-color: #EAF1D0;
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
}

.vueperslides__bullet--active .default {
  background-color: #C42729;
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
  color: #C42729;
}

.slider-arrow {
  display: block;
  width: 32px;
  height: 60px;
  background: url('../assets/img/sliderArrow.png') no-repeat content-box;
}


</style>