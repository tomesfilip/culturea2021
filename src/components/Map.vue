<template>
  <h2 class="text-4xl uppercase">Mapa festivalu</h2>
  <GoogleMap
  class="g-map"
  :api-key="mapKey"
  :center="center"
  :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>

</template>


<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent ({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 49.22645, lng: 17.67065 }
    const mapKey = process.env.VUE_APP_GOOGLEMAPS_KEY
    return { center, mapKey }
  },
})
</script>

<style>
.g-map {
    margin: 5rem 0;
    height: 100vh;
    width: 100%;
  }
</style>