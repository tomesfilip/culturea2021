<template>
  <section id="general-partners" class="py-12 px-4">
    <GeneralPartners />
  </section>
  <section id="main-partners" class="py-12 px-4">
    <MainPartners />
  </section>
  <section id="normal-partners" class="py-12 px-4">
    <NormalPartners />
  </section>
  <section id="medial-partners" class="py-12 px-4">
    <MedialPartners />
  </section>
</template>

<script>
import Container from './Container.vue'
import GeneralPartners from './partners/GeneralPartners.vue'
import MainPartners from './partners/MainPartners.vue'
import NormalPartners from './partners/NormalPartners.vue'
import MedialPartners from './partners/MedialPartners.vue'

export default {
  components: { Container, GeneralPartners, MainPartners, NormalPartners, MedialPartners },
}
</script>