<template>
  <Nav>
    <NavItem href="https://www.facebook.com/Culturea/">FB</NavItem>
  </Nav>
  <section id="contact">
    <Contact />
    <Footer />
  </section>
</template>

<script>
import Nav from './components/Nav.vue'
import NavItem from './components/NavItem.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Nav,
    NavItem,
    Contact,
    Footer
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#contact {
    background: #C42729;
}
</style>
