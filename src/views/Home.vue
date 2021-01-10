<template>
  <div class="home">
    <section id="slider" class="pt-12 mb:pb-32 pb-0">
      <Slider />
    </section>
    <section id="about" class="py-12">
      <About />
    </section>
    <section id="visit-us-online" class="py-12">
      <VisitUsOnline />
    </section>
    <section id="program" class="py-12">
      <Program />
    </section>
    <section id="map" class="py-12">
      <Map />
    </section>
    <section id="our-team" class="py-12">
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
import Map from '../components/Map.vue'
import Team from '../components/Team.vue'
import Partners from '../components/Partners.vue'
import History from '../components/History.vue'

export default {
  name: 'Home',
  components: {
    Slider,
    About,
    VisitUsOnline,
    Program,
    Map,
    Team,
    Partners,
    History
  }
}
</script>
