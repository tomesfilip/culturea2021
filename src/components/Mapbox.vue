<template>
  <div id="mapContainer" class="basemap"></div>
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
    // initMap() {
    //   this.map = L.map('map').setView([49.22645, 17.67065], 20);
    //   this.tileLayer = L.tileLayer(
    //     'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
    //     {
    //       maxZoom: 22,
    //       attribution: 'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',

    //     }
    //   );
    //   this.tileLayer.addTo(this.map);
    // },
    // initLayers() {},
    initMap() {
      mapboxgl.accessToken = this.accessToken

      this.map = new mapboxgl.Map({
        container: "mapContainer",
        style: "mapbox://styles/f-tomes/ckkb87n7u0nq917nyabyybt4l",
        center: [17.674, 49.225],
        zoom: 13,
        minZoom: 13,
        maxZoom: 18,
        maxBounds: [
          [17.3, 49.0],
          [17.9, 49.3],
        ],
      })
    }
  },
  mounted() {
    this.initMap()

    const nav = new mapboxgl.NavigationControl();
    this.map.addControl(nav, "top-right");
  }
  
}

</script>

<style>
  .basemap {
    width: 100%;
    height: 100vh;
  }
</style>