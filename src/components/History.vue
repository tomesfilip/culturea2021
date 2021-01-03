<template>
  <Container class="lg:px-28 md:px-20 text-center">
    <h2 class="uppercase text-4xl mb-8">Historie</h2>
    <div class="gg-border-style-dashed"></div>
    <div
      class="history-items md:text-left text-center"
      :class="{ showed: showedAll }"
    >
      <History-item 
        v-for="(historyItem, index) in historyItems" 
        :historyItem="historyItem" 
        :key="index" 
      />
    </div>
    <button 
      class="text-center w-24 mt-8 font-bold inline-flex items-center justify-center text-red text-lg focus:outline-none"
      @click="toggleShowedAll"  
    >
      <div class="text w-16">
        {{ nextBtnText }}
      </div>
      <span>
        <img 
          src="../assets/img/arrow.png" 
          alt="šípka" 
          class="w-6 mt-1.5 transition-transform"
          :class="{ 'transform md:rotate-180 -rotate-90': showedAll, 'transform md:rotate-0 rotate-90': !showedAll }"  
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
      showedAll: false,
      nextBtnText: "Další",
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
        {
          year: "2016",
          title: "Španělsko a Vietnam",
          open: false
        },
        {
          year: "2017",
          title: "Řecko a Egypt",
          open: false
        },
        {
          year: "2018",
          title: "Norsko a Nepál",
          open: false
        },
        {
          year: "2019",
          title: "Island a Mexiko",
          open: false
        },
        {
          year: "2020",
          title: "Ukrajina a SRÍ LANKA",
          open: false
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