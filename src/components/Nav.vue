<template>
  <nav id="nav" class="py-4 px-12 flex justify-between items-center flex-wrap lg:flex-nowrap">
    <div class="logo">
      <a href="./">
        <img src="../assets/img/logo-red.svg" alt="culturea červené logo">
      </a>
    </div>
    <button @click="toggleMenu" class="lg:hidden">
      <svg 
        v-if="toggled"
        class="transition-all"
        width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.4772 12.5L24.1763 4.80086C25.2746 3.70259 25.2746 1.92197 24.1763 0.823703C23.078 -0.274568 21.2975 -0.274568 20.1991 0.823703L12.5 8.52285L4.80086 0.823703C3.70259 -0.274568 1.92197 -0.274568 0.823703 0.823703C-0.274568 1.92197 -0.274568 3.70259 0.823703 4.80086L8.52284 12.5L0.823703 20.1991C-0.274568 21.2974 -0.274568 23.078 0.823703 24.1763C1.37284 24.7254 2.09254 25 2.81225 25C3.53196 25 4.25172 24.7254 4.8008 24.1763L12.5 16.4772L20.1991 24.1763C20.7483 24.7254 21.468 25 22.1877 25C22.9074 25 23.6271 24.7254 24.1762 24.1763C25.2745 23.078 25.2745 21.2974 24.1762 20.1991L16.4772 12.5Z" fill="#C42729"/>
      </svg>
      <svg
        v-else
        class="transition-all"
        width="46" height="26" viewBox="0 0 46 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="2" x2="44" y2="2" stroke="#C42729" stroke-width="4" stroke-linecap="round"/>
        <line x1="2" y1="13" x2="44" y2="13" stroke="#C42729" stroke-width="4" stroke-linecap="round"/>
        <line x1="2" y1="24" x2="44" y2="24" stroke="#C42729" stroke-width="4" stroke-linecap="round"/>
      </svg>
      
    </button>    
    <ul class="flex 2xl:space-x-24 xl:space-x-16 lg:space-x-8 items-center flex-col mx-auto mt-12 space-y-12" id="mobile-menu">
      <li><a href="./">O festivalu</a></li>
      <li><a href="./">Program</a></li>
      <li><a href="./">Historie</a></li>
      <li><a href="./">Partneři</a></li>
      <li><a href="./">Pro media</a></li>
      <li><a href="./">Kontakt</a></li>
      <li><SupportBtn /></li>
    </ul>
  </nav>
</template>

<script>
import SupportBtn from './SupportBtn.vue'

export default {
  components: { SupportBtn },
  data() {
    return {
      toggled: false,
    }
  },
  methods: {
    toggleMenu() {
      let nav = document.querySelector('#nav')
      let mobileMenu = document.querySelector('#mobile-menu')
      this.toggled = !this.toggled
      nav.classList.toggle('active')

    }
  }
}
</script>

<style>
  .active {
    height: 100vh;
    background: #EAF1D0;
  }

</style>