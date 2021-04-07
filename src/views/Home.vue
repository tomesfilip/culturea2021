<template>
  <div class="home">
    <section id="slider" class="mb:pb-32 pb-0">
      <Slider />
    </section>
    <section id="program" class="mobile:pt-12 py-16 mobile:mt-8 mobile:pb-24 text-center">
      <Program />
    </section>
    <section id="map-info" class="mobile:pb-24 py-16 mobile:mt-8">
      <MapInfo />
    </section>
    <section id="about" class="py-12">
      <About />
    </section>
    <section id="visit-us-online" class="pt-12 mobile:pb-40 pb-20">
      <VisitUsOnline />
    </section>
    <section id="our-team" class="py-12 bg-grey">
      <Team />
    </section>
    <section id="partners" class="py-12">
      <Partners />
    </section>
    <section id="history" class="py-12">
      <History />
    </section>
  </div>
</template>

<script>
import Slider from '../components/Slider.vue'
import About from '../components/About.vue'
import VisitUsOnline from '../components/VisitUsOnline.vue'
import Program from '../components/Program.vue'
import MapInfo from '../components/MapInfo.vue'
import Team from '../components/Team.vue'
import Partners from '../components/Partners.vue'
import History from '../components/History.vue'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


export default {
  name: 'Home',
  components: {
    Slider,
    About,
    VisitUsOnline,
    Program,
    MapInfo,
    Team,
    Partners,
    History
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)

    let sliderTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#slider'
      }
    })

    // let aboutTl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '#about'
    //   }
    // })

    sliderTl
      .from(".slider-img", { x: 200, opacity: 0, duration: 1 })
      .from(".info h2", { x: -200, opacity: 0, duration: 1 })
      .from(".info .info-text", { x: -100, opacity: 0, duration: 1 })
      .from(".info .date", { x: -100, opacity: 0, duration: 1 })
      .from(".info .bullets", { opacity: 0, duration: 1 })
      .from(".info .soc-icons", { opacity: 0, duration: 1 })

    // aboutTl
    //   .from("#about h2", { y: 400, opacity: 0, duration: 1.5 })
    //   .from("#about article", { opacity: 0, duration: 1.4 })
  }
}
</script>

<style>
@media only screen and (min-width: 1024px) {
  #visit-us-online {
    background-size: 10rem;
  }
}

#visit-us-online {
  background: url('../assets/img/apple-pattern.svg') no-repeat bottom;
  background-size: contain;
}
</style>