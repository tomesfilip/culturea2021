<template>
  <div class="pro-media">
    <PressKit class="py-8" />
    <ToDownload class="py-8" />
    <ContactJournalist class="py-8" />
  </div>
</template>

<script>
import PressKit from '../components/media/PressKit.vue'
import ContactJournalist from '../components/media/ContactJournalist.vue'
import ToDownload from '../components/media/ToDownload.vue'
export default {
  components: { PressKit, ContactJournalist, ToDownload }
}
</script>