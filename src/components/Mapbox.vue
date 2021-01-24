<template>
  <div id="map" class="basemap"></div>
</template>


<script>
import mapboxgl from 'mapbox-gl'
import "leaflet/dist/leaflet.css"
import L from "leaflet"

export default {
  name: "BaseMap",
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_KEY,
      center: [37,7749, -122,4194],
      map: null,
      titleLayer: null,
      layers: [],
    }
  },
  methods: {
    initMap() {
      this.map = L.map('map').setView([49.22645, 17.67065], 20);
      this.tileLayer = L.tileLayer(
        'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
        {
          maxZoom: 22,
          attribution: 'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
          
        }
      );
      this.tileLayer.addTo(this.map);
    },
    initLayers() {},
  },
  mounted() {
    this.initMap()
    this.initLayers()
  }
  
}

</script>

<style>
  .basemap {
    width: 100vw;
    height: 100vh;
  }
</style>