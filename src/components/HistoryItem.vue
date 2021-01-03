<template>
  <div class="history-item">
    <div class="flex items-center lg:justify-between justify-around">
      <div class="text w-3/4 text-left">
        <div class="year md:text-2xl text-xl pt-2">{{ historyItem.year }}</div>
        <div class="title md:text-2xl text-xl pb-2">{{ historyItem.title }}</div>  
      </div>
      <div v-if="!historyItem.open" class="plus-sign">
        <button class="focus:outline-none" @click="toggleOpenItem">
          <img src="../assets/img/plus.svg" alt="plus" class="w-auto h-6 md:mr-8">
        </button>
      </div>   
      <div v-else class="minus-sign">
        <button class="focus:outline-none" @click="toggleOpenItem">
          <img src="../assets/img/minus.svg" alt="minus" class="w-auto h-1.5 md:mr-8">
        </button>
      </div>
    </div>
    <div class="info-text" :class="{ 'opened': historyItem.open }">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magnam natus temporibus ipsam nam impedit adipisci, cupiditate reprehenderit accusantium ea doloribus dicta aliquid ullam cumque vitae iusto neque perspiciatis, officiis veritatis. Placeat optio, quaerat dicta nulla quos incidunt praesentium unde laboriosam minima voluptates, repellat dolorem ad voluptas quisquam aspernatur eum!</p>
    </div>    
    <div class="gg-border-style-dashed"></div>
  </div>
</template>

<script>
export default {
  name: 'HistoryItem',
  props: ['historyItem', 'index'],
  methods: {
    toggleOpenItem() {
      this.historyItem.open = !this.historyItem.open
    }
  }
}

</script>

<style>
  .year, .title {
    font-family: GalanoGrotesqueBold;
  }

  .history-item .info-text {
    position: relative;
    max-height: 0;
    font-style: italic;
    overflow: hidden;
    transition: all .6s ease-in-out;
  }

  .history-item .info-text.opened {
    max-height: 1000px;
  }

</style>