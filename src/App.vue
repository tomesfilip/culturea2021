<template>
  <Nav />
  <router-view />
  <section id="organizer" class="py-12">
    <Organizer />
  </section>
  <section id="contact">
    <Contact />   
  </section>
  <Footer />
</template>

<script>
import Nav from './components/Nav.vue'
import NavItem from './components/NavItem.vue'
import Slider from './components/Slider.vue'
import About from './components/About.vue'
import VisitUsOnline from './components/VisitUsOnline.vue'
import Program from './components/Program.vue'
import Map from './components/Map.vue'
import Team from './components/Team.vue'
import Partners from './components/Partners.vue'
import History from './components/History.vue'
import Organizer from './components/Organizer.vue'
import Contact from './components/Contact.vue'
import Form from './components/Form.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Nav,
    NavItem,
    Slider,
    About,
    VisitUsOnline,
    Program,
    Map,
    Team,
    Partners,
    History,
    Organizer,
    Contact,
    Form,
    Footer
  }
}
</script>


<style>
#app {
  font-family: GalanoGrotesqueMedium;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* @media only screen and (min-width: 768px) {
  #organizer {
    background: no-repeat left url('./assets/img/organizer/leave-branch.svg'), no-repeat right url('./assets/img/organizer/branch.svg');
    background-size: 6.5rem;
  }
} */
@media only screen and (min-width: 1024px) {
  #organizer {
    background-size: 8rem;
  }
}
</style>
