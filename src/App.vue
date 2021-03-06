<template>
    <Nav />
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
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
import Organizer from './components/Organizer.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Nav,
    Organizer,
    Contact,
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

@media only screen and (min-width: 1024px) {
  #organizer {
    background-size: 8rem;
  }
}

.route-enter-active, .route-leave-active {
  transition: all .6s ease;
}

.route-enter-active {
  transition-delay: .6s;
}

.route-enter-from, .route-leave-active {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
