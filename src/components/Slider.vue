<template>
  <div class="flex justify-between">
    <div class="info xl:pl-36 xl:pr-28 xl:w-2/5 flex flex-col justify-center relative">
      <button class="button bg-black text-white font-heading uppercase text-4xl pb-4 pt-2 px-4 text-center align-middle w-48" @click="changeCountry">
        {{ btnText }}
      </button>
      <div class="info-text my-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquid, odit velit nostrum numquam rerum esse animi deserunt! Dignissimos ex ratione dolore optio eligendi sunt sed.</p>
      </div>
      <div class="date">
        <p class="font-heading text-4xl">9.–11. dubna 2021</p>
      </div>
      <div class="bullets mt-2">
        <button class="outline-none focus:outline-none rounded-full mr-2 p-2 bg-green"></button>
        <button class="outline-none focus:outline-none rounded-full p-2 bg-grey"></button>
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