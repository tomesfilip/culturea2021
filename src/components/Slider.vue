<template>
  <div class="flex justify-between main-slider">
    <div class="info flex flex-col justify-center relative
        xl:pl-36 xl:pr-28
        lg:pl-20 lg:pr-12
        px-8 mobile:py-12 py-4 md:w-2/5 w-4/5">
      <h2 
      class="button bg-black text-white font-heading uppercase lg:text-4xl sm:text-2xl text-base lg:pb-4 lg:pt-2 pb-2 pt-1 px-4 text-center align-middle lg:w-48 sm:w-32 w-24 cursor-pointer"
      @click="changeCountry">
        {{ btnText }}
      </h2>
      <div class="info-text mt-4 sm:text-base text-sm xl:h-20">
        <p>{{ countryText }}</p>
      </div>
      <div class="date">
        <p class="font-heading xl:text-4xl lg:text-2xl sm:text-base text-sm mt-4">9.–11. dubna 2021</p>
      </div>
      <div class="bullets mt-4 flex">
        <div 
          name="left-bullet-btn"
          class="rounded-full w-4 h-4 mr-2 cursor-pointer"
          :class="{ 'bg-green' : isPoland, 'bg-grey' : !isPoland }"
          @click="changeToPoland">
        </div>
        <div 
          name="right-bullet-btn"
          class="rounded-full w-4 h-4 cursor-pointer"
          :class="{ 'bg-green' : !isPoland, 'bg-grey' : isPoland }"
          @click="changeToIran">
        </div>
      </div>
      <div class="w-20 absolute bottom-0 pb-8 md:block hidden">
        <Socials />
      </div>   
    </div>       
    <div class="img-section md:w-3/5 w-full right-0">
    <img :src="actualPhoto" :alt="btnText" class="w-full">
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
      btnText: 'polsko',
      actualPhoto: null,
      iranText: 'Země, ve které hraje náboženství velkou roli. Jedna z nejstarších civilizací, která má rozhodně co nabídnout.',
      polandText: 'Země plná nádherných zámků, skvělého jídla, ale také bojů o základní lidská práva...',
      countryText: 'Země plná nádherných zámků, skvělého jídla, ale také bojů o základní lidská práva...'
    }
  },
  methods: {
    changeCountry() {
      this.isPoland = !this.isPoland
      this.btnText = this.isPoland ? 'polsko' : 'írán'
      if (!this.checkMobView()) {
        this.actualPhoto = this.isPoland ? polandImg : iranImg
      }
      else {
        this.actualPhoto = this.isPoland ? polandMobImg : iranMobImg
      }      
      
      this.countryText = this.isPoland ? this.polandText : this.iranText
    },
    changeToPoland() {
      this.isPoland = true
      this.btnText = 'polsko'
      this.actualPhoto = this.checkMobView() ? polandMobImg : polandImg
      this.countryText = this.polandText
    },
    changeToIran() {
      this.isPoland = false
      this.btnText = 'írán'
      this.actualPhoto = this.checkMobView() ? iranMobImg : iranImg
      this.countryText = this.iranText
    },
    checkMobView() {
      return window.innerWidth < 640
    }
  },
  mounted() {
    this.actualPhoto =  this.checkMobView() ? polandMobImg : polandImg
  }
}
</script>

<style>
  .main-slider {
    padding: 0;
  }
</style>