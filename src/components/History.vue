<template>
  <Container class="lg:px-28 md:px-20 text-center">
    <h2 class="uppercase text-4xl mb-8 font-heading">Historie</h2>
    <div class="gg-border-style-dashed"></div>
    <div
      class="history-items md:text-left text-center"
      :class="{ showed: showedAll }">
      <History-item 
        v-for="(historyItem, index) in historyItems" 
        :historyItem="historyItem" 
        :key="index" />
    </div>
    <button 
      class="text-center w-24 mt-8 font-bold inline-flex items-center justify-center text-green text-lg focus:outline-none"
      @click="toggleShowedAll"
      @mouseover="arrowHovered = true"
      @mouseleave="arrowHovered = false">
      <div class="text w-16">
        {{ nextBtnText }}
      </div>
      <span>
        <img 
          src="../assets/img/arrow.svg" 
          alt="šípka" 
          class="history-arrow w-6 transition-transform"
          :class="{
                    'transform md:rotate-180 -rotate-90': showedAll, 
                    'transform md:rotate-0 rotate-90': !showedAll ,
                    'transform translate-x-1.5': arrowHovered }"
        >          
      </span>
    </button>
  </Container>
</template>

<script>
import Container from './Container.vue'
import HistoryItem from './HistoryItem.vue'

export default {
  components: { HistoryItem, Container },
  data() {
    return {
      arrowHovered: false,
      showedAll: false,
      nextBtnText: "Další",
      historyItems: [
        {
          year: "2013",
          title: "Itálie a Japonsko",
        },
        {
          year: "2014",
          title: "Indie a Velká Británie",
        },
        {
          year: "2015",
          title: "Francie a Brazílie",
        },
        {
          year: "2016",
          title: "Španělsko a Vietnam",
        },
        {
          year: "2017",
          title: "Řecko a Egypt",
        },
        {
          year: "2018",
          title: "Norsko a Nepál",
        },
        {
          year: "2019",
          title: "Island a Mexiko",
        },
        {
          year: "2020",
          title: "Ukrajina a SRÍ LANKA",
        },
      ]
    }
  },
  methods: {
    toggleShowedAll() {
      this.showedAll = !this.showedAll
      this.nextBtnText = (this.showedAll) ? "Méně" : "Další"
    }
  }
}
</script>

<style>
  .history-items {
    max-height: 340px;
    overflow: hidden;
    transition: all .8s ease;
  }
  
  @media only screen and (max-width: 678px) {
    .history-items {
      max-height: 320px;
    }
  }

  .showed {
    max-height: 1600px;
  }
</style>