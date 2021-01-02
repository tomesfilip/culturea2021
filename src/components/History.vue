<template>
<div class="container mx-auto lg:px-28 md:px-20 text-center">
  <h2 class="uppercase text-4xl mb-8">Historie</h2>
  <div class="gg-border-style-dashed"></div>
  <div class="history-items md:text-left text-center">
    <History-item 
      v-for="(historyItem, index) in historyItems" 
      :historyItem="historyItem" 
      :key="index" 
    />
  </div>
  <button class="text-center mt-8 font-bold inline-flex items-center text-red text-lg focus:outline-none">
    Další
    <span>
      <img src="../assets/img/arrow.png" alt="šípka" class="w-6 mt-1.5 ml-2">
    </span>
  </button>
</div>
</template>

<script>
import HistoryItem from './HistoryItem.vue'

export default {
  components: { HistoryItem },
  data() {
    return {
      historyItems: [
        {
          year: "2013",
          title: "Itálie a Japonsko",
          open: false
        },
        {
          year: "2014",
          title: "Indie a Velká Británie",
          open: false
        },
        {
          year: "2015",
          title: "Francie a Brazílie",
          open: false
        },
      ]
    }
  }
}
</script>

<style>
</style>