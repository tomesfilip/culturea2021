<template>
  <vueper-slides 
    fade
    slide-image-inside
    :touchable="false" 
    autoplay 
    :slide-ratio="700 / 1200" 
    :arrows="false" 
    :bullets="false" 
    :duration="4000"
    class="no-shadow">
    <vueper-slide 
      v-for="(slide, index) in slides" 
      :key="index" 
      :image="slide.image"
    />
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'


export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      slides: [
        {
          image: require('../assets/img/iran2.png')
        },
        {
          image: require('../assets/img/poland2.png')
        }
      ]
    }
  }
}
</script>

<style>
  .vueperslide__image {
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>