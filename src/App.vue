<template>
  <Nav>
    <NavItem href="https://www.facebook.com/Culturea/">FB</NavItem>
  </Nav>
  <section id="slider"></section>
  <section id="about">
    <About />
  </section>
  <section id="visit-us-online" class="py-12">
    <VisitUsOnline />
  </section>
  <section id="program" class="py-12">
    <Program />
  </section>
  <section id="map"></section>
  <section id="our-team" class="py-12">
    <Team />
  </section>
  <section id="partners" class="py-12">
    <Partners />
  </section>
  <section id="history" class="py-12">
    <History />
  </section>
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
import About from './components/About.vue'
import VisitUsOnline from './components/VisitUsOnline.vue'
import Program from './components/Program.vue'
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
    About,
    VisitUsOnline,
    Program,
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
  background: url('./assets/img/bg-pattern.png') repeat-y #EAF1D0;
}
#app h2 {
  font-family: GalanoGrotesqueBold;
  text-align: center;
}
#our-team {
  background: #E9C3BA;
}
</style>
