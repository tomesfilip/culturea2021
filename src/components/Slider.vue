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
      <div class="info-text my-4 sm:text-base text-sm">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid..</p>
      </div>
      <div class="date">
        <p class="font-heading xl:text-4xl lg:text-2xl sm:text-base text-sm">9.–11. dubna 2021</p>
      </div>
      <div class="bullets mt-2">
        <button 
          class="outline-none focus:outline-none rounded-full mr-2 p-2"
          :class="{ 'bg-green' : isPoland, 'bg-grey' : !isPoland }"
          @click="changeToPoland">
        </button>
        <button 
          class="outline-none focus:outline-none rounded-full mr-2 p-2"
          :class="{ 'bg-green' : !isPoland, 'bg-grey' : isPoland }"
          @click="changeToIran">
        </button>
      </div>
      <div class="w-20 absolute bottom-0 pb-8 md:block hidden">
        <Socials />
      </div>   
    </div>       
    <div class="img-section md:w-3/5 w-full right-0">
    <img :src="actualPhoto" media="(min-width:640px)" :srcset="polandImg" :alt="btnText" class="w-full">
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
      isMobView: false,
      isPoland: true,
      btnText: 'polsko',
      actualPhoto: null,
    }
  },
  methods: {
    changeCountry() {
      this.isPoland = !this.isPoland
      this.btnText = this.isPoland ? 'polsko' : 'írán'
      this.actualPhoto = this.isPoland ? polandImg : iranImg
    },
    changeToPoland() {
      this.isPoland = true
      this.btnText = 'polsko'
      this.actualPhoto = this.isMobView ? polandMobImg : polandImg
    },
    changeToIran() {
      this.isPoland = false
      this.btnText = 'írán'
      this.actualPhoto = this.isMobView ? iranMobImg : iranImg
    }
  },
  mounted() {
    window.innerWidth < 640 ? this.actualPhoto = polandMobImg : this.actualPhoto = polandImg
  },
  updated() {
    window.innerWidth < 640 ? this.isMobView = true : this.isMobView = false
  }
}
</script>

<style>
  .main-slider {
    padding: 0;
  }
  

</style>