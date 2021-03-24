<template>
  <nav id="nav" 
    class="lg:py-4 py-6 lg:px-12 flex justify-between items-center flex-wrap lg:flex-nowrap overflow-hidden border-b-2"
    :class="{ active: isActive }">
    <div class="top-menu px-12 lg:px-0 w-full lg:w-auto items-center flex justify-between z-10">
      <div class="logo">
        <router-link :to="{ name: 'Home' }">
          <img src="../assets/img/logo-green.svg" alt="culturea zelené logo" class="w-auto lg:h-10 h-8">
        </router-link>
      </div>
      <div 
        @click="isActive = !isActive" 
        class="menu-toggle lg:hidden relative flex flex-col justify-center items-center cursor-pointer">
          <div class="hamburger bg-green"></div>
      </div>    
    </div>
    
    <ul 
      class="
        flex 
        flex-col lg:flex-row
        lg:relative absolute
        transform
        lg:-translate-y-0 -translate-y-full
        lg:space-x-8 semi-lg:space-x-10 xl:space-x-12 1.5xl:space-x-16 2xl:space-x-20 3xl:space-x-32 
        items-center"
        :class="{ active: isActive }"
        id="menu">
      <li v-for="(menuItem, title) in menuItems" :key="title" class="flex items-center text-center">
        <router-link 
          v-if="menuItem.isRouterLink" 
          :to="{ name: menuItem.url }"
          class="2xl:text-lg font-bold align-middle lg:p-0 p-4">
          {{ menuItem.title }}
        </router-link>
        <a v-else class="2xl:text-lg font-bold align-middle lg:p-0 p-4" :href="menuItem.url">{{ menuItem.title }}</a>
      </li>
      <SupportBtn class="xl:px-6 lg:px-2 3xl:text-lg" />
    </ul>
  </nav>
</template>

<script>
import SupportBtn from './SupportBtn.vue'

export default {
  components: { SupportBtn },
  data() {
    return {
      isActive: false,
      menuItems: [
        {
          url: './#about',
          title: 'O festivalu'
        },
        {
          url: './#program',
          title: 'Program'
        },
        {
          url: './#history',
          title: 'Historie'
        },
        {
          url: './#partners',
          title: 'Partneři'
        },
        {
          url: 'ProMedia',
          title: 'Pro media',
          isRouterLink: true
        },
        {
          url: './#contact',
          title: 'Kontakt'
        }
      ],
    }
  }
}
</script>

<style>
@media only screen and (max-width: 1024px) {
  .menu-toggle {
    width: 46px;
    height: 34px;  
    transition: all .4s ease-in-out;
  }

  .hamburger {
    width: 100%;
    height: 4px;
    border-radius: 1rem;
    transition: all .4s ease-in-out;
  }

  .hamburger::before,.hamburger::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background: #1BB36C;
    border-radius: 1rem;
    transition: all .4s ease-in-out;
  }

  .hamburger::before {
    transform: translateY(-11px);
  }

  .hamburger::after {
    transform: translateY(11px);
  }

  #nav.active .hamburger {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
  }

  #nav.active .hamburger::before {
    transform: rotate(45deg) translate(35px, -35px);
  }

  #nav.active .hamburger::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }

  #nav.active {
    height: 100vh;
    justify-content: center;
    align-items: flex-start;
  }

  #menu {
    width: 100%;
    top: 16vh;
    height: 80vh;
    visibility: hidden;
    justify-content: space-around;
    z-index: -3;
    transition: all .6s;
  }

  #menu.active {
    visibility: visible;
    z-index: 2;
    transform: translateY(-40px);
  }
}

  #menu.active li {
    font-size: 1.2rem;
  }

</style>