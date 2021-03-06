<template>
  <div class="flex justify-between main-slider p-0">
    <div class="info flex flex-col justify-center relative
        xl:pl-36 xl:pr-28
        lg:pl-20 lg:pr-12
        px-8 mobile:py-12 py-4 md:w-2/5 w-4/5
        slider-anim">
        <h2
        class="button bg-black text-white font-heading uppercase lg:text-4xl sm:text-2xl text-base lg:py-4 py-2 px-4 text-center align-middle lg:w-48 sm:w-32 w-24 cursor-pointer slider-anim"
        @click="changeCountry">
        {{ imageAlt }}
      </h2>      
      <div class="info-text mt-4 sm:text-base text-sm lg:h-20 sm:h-28 mobile:h-32 h-48 slider-anim xl:text-lg">
        <p v-if="isPoland">
          Země plná nádherných zámků, skvělého jídla, ale také kulturních zvyklostí o kterých nevíš, byť jsou to naši sousedé.
        </p>
        <p v-else>
          Země, ve které hraje náboženství velkou roli. Jedna z nejstarších civilizací, která má rozhodně co nabídnout.
        </p>
      </div>
      <div class="date mt-4 xl:mt-16 slider-anim">
        <p class="font-heading 2xl:text-4xl xl:text-3xl lg:text-2xl sm:text-base text-sm">9.–11. dubna 2021</p>
      </div>
      <div class="bullets mt-4 flex slider-anim">
        <div 
          name="left-bullet-btn"
          class="rounded-full w-4 h-4 mr-2 cursor-pointer transition-all duration-500 hover:shadow-inner"
          :class="{ 'bg-green' : isPoland, 'bg-grey' : !isPoland }"
          @click="changeToPoland">
        </div>
        <div 
          name="right-bullet-btn"
          class="rounded-full w-4 h-4 cursor-pointer transition-all duration-500 hover:shadow-inner"
          :class="{ 'bg-green' : !isPoland, 'bg-grey' : isPoland }"
          @click="changeToIran">
        </div>
      </div>
      <div class="soc-icons w-20 absolute bottom-0 pb-8 md:block hidden slider-anim">
        <Socials />
      </div>   
    </div>       
    <div class="img-section slider-img md:w-3/5 w-full right-0 slider-anim">
      <picture>
        <source media="(min-width: 720px)" :srcset="actualPhotoDesktop">
        <img :src="actualPhoto" :alt="imageAlt" class="w-full">
      </picture>
    </div>
  </div>
  <div class="gg-border-style-dashed -mt-2"></div>
</template>

<script>
import polandImg from '../assets/img/slider/poland.svg'
import polandMobImg from '../assets/img/slider/poland-mob.svg'
import iranImg from '../assets/img/slider/iran.svg'
import iranMobImg from '../assets/img/slider/iran-mob.svg'
import Socials from './Socials.vue'

export default {
  components: { Socials },
  data() {
    return {
      isPoland: true,
      actualPhoto: null,
      actualPhotoDesktop: null,
      imageAlt: '',
    }
  },
  methods: {
    changeCountry() {      
      this.isPoland = !this.isPoland
      this.actualPhoto = this.isPoland ? polandMobImg : iranMobImg
      this.actualPhotoDesktop = this.isPoland ? polandImg : iranImg
      this.imageAlt = this.isPoland ? 'polsko' : 'írán'
    },
    changeToPoland() {
      this.isPoland = true
      this.actualPhoto = polandMobImg
      this.actualPhotoDesktop =  polandImg
      this.imageAlt = 'polsko'
    },
    changeToIran() {
      this.isPoland = false
      this.actualPhoto = iranMobImg
      this.actualPhotoDesktop = iranImg
      this.imageAlt = 'írán'
    },
  },
  beforeMount() {
    this.imageAlt = 'polsko'
    this.actualPhoto = polandMobImg
    this.actualPhotoDesktop = polandImg
  }
}
</script>