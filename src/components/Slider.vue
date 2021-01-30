<template>
  <div class="flex justify-between">
    <div class="info flex flex-col justify-center relative
        xl:pl-36 xl:pr-28 w-2/5
        lg:pl-20 lg:pr-12
        px-8 ">
      <h2 
      class="button bg-black text-white font-heading uppercase lg:text-4xl text-2xl lg:pb-4 lg:pt-2 pb-2 pt-1 px-4 text-center align-middle lg:w-48 w-32">
        {{ btnText }}
      </h2>
      <div class="info-text my-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid, odit velit nostrum numquam rerum esse animi deserunt! Dignissimos ex ratione dolore optio eligendi sunt sed.</p>
      </div>
      <div class="date">
        <p class="font-heading xl:text-4xl lg:text-2xl text-xl">9.–11. dubna 2021</p>
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
      <div class="w-20 absolute bottom-0 pb-8">
        <Socials />
      </div>   
    </div>       
    <div class="img-section">
      <img :src="actualPhoto" :alt="btnText">
    </div>
  </div>
  <div class="gg-border-style-dashed -mt-2"></div>
</template>

<script>
import polandImg from '../assets/img/poland.svg'
import iranImg from '../assets/img/iran.svg'
import Socials from './Socials.vue'

export default {
  components: { Socials },
  data() {
    return {
      isPoland: true,
      btnText: 'polsko',
      actualPhoto: polandImg,
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
      this.actualPhoto = polandImg
    },
    changeToIran() {
      this.isPoland = false
      this.btnText = 'írán'
      this.actualPhoto = iranImg
    }
  }  
}
</script>

<style>
  .main-slider {
    /* height: 100vh; */
    padding: 0;
  }

</style>