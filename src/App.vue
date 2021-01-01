<template>
  <Nav>
    <NavItem href="https://www.facebook.com/Culturea/">FB</NavItem>
  </Nav>
  <section id="contact" class="lg:flex mx-auto lg:px-16 lg:px-8 px-4 pb-6 pt-20">
    <Contact />   
    <Form /> 
  </section>
  <Footer />
</template>

<script>
import Nav from './components/Nav.vue'
import NavItem from './components/NavItem.vue'
import Contact from './components/Contact.vue'
import Form from './components/Form.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Nav,
    NavItem,
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
#contact {
    background: #C42729;
}
</style>
