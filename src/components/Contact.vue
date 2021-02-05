<template>
<div class="flex lg:flex-row flex-col mx-auto lg:px-16 px-4 pb-6 pt-20 bg-lightGreen">
  <div class="flex-1 lg:order-1 order-2 md:text-left text-center md:mb-0 mt-12">
    <div class="black-icon md:block hidden mb-12">
      <img src="../assets/img/icon-black.png" alt="culturea čierne logo">
    </div>
    <div class="contacts mb-12 grid md:grid-cols-2 grid-cols-1 gap-y-6">
      <div class="contact">
        <p class="font-bold">Všeobecné</p>
        <p>ahoj@culturea.cz</p>
      </div>
      <div class="contact">
        <p class="font-bold">PR</p>
        <p>pr@culturea.cz</p>
      </div>
      <div class="contact">
        <p class="font-bold">Sales</p>
        <p>fundraising@culturea.cz</p>
      </div>
      <div class="contact">
        <p class="font-bold">Produkce</p>
        <p>produkce@culturea.cz</p>
      </div>
      <div class="contact">
        <p class="font-bold">Promo</p>
        <p>promo@culturea.cz</p>
      </div>
      <div class="contact">
        <p class="font-bold">Art</p>
        <p>art@culturea.cz</p>
      </div>
    </div>
    <div class="inline-flex m:w-40 space-x-4 mb-2">
      <a href="https://www.instagram.com/culturea/" target="_blank" rel="noopener">
        <img src="../assets/img/socials/ig.svg" alt="instagram">
      </a>
      <a href="https://www.facebook.com/Culturea" target="_blank" rel="noopener">
        <img src="../assets/img/socials/fb.svg" alt="facebook">
      </a>
    </div>
    <h4 class="font-bold">#letenkunepotrebuješ</h4>
  </div>  
  <Form class="lg:order-2 order-1" />
</div>
  
</template>

<script>
import Form from './Form.vue'

export default {
  components: { Form }
}
</script>

<style>  
</style>