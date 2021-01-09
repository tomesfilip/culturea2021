<template>
  <Splide :options="options" class="main-slider">
    <Splide-slide 
      v-for="(slide, index) in slides" 
      :key="index">
      <img class="w-auto object-cover lg:w-full lg:h-auto lg:object-contain" :src="slide.image">
    </Splide-slide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
        options: {
          type: 'fade',
          arrows: false,
          pagination: false,
          drag: false,
          autoplay: true,
          interval: 8000,
          easing: 'cubic-bezier(0,.39,.83,.67)'
        },
        slides: [
        {
          image: require('../assets/img/iran.svg')
        },
        {
          image: require('../assets/img/poland.svg')
        }
      ]
    }
  },  
}
</script>

<style>
  .main-slider {
    /* height: 100vh; */
    padding: 0;
  }

  @media only screen and (max-width: 678px) {
    .splide__slide img {
      height: 56vh;
    }
  }

  @media only screen and (max-width: 568px) {
    .splide__slide img {
      height: 46vh;
    }
  }

  .splide__slide {
    max-height: 126vh;
  }

</style>