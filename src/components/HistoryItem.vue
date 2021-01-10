<template>
  <div class="history-item">
    <div class="flex items-center lg:justify-between justify-around">
      <div class="text w-3/4 text-left">
        <div class="year md:text-2xl text-xl pt-2">{{ historyItem.year }}</div>
        <div class="title md:text-2xl text-xl pb-2">{{ historyItem.title }}</div>  
      </div>      
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