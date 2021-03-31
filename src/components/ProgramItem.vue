<template>
  <div class="active-program-item">
    <div v-if="programItem.isPrepared" class="program-item mb-8 lg:mb-14 px-4 sm:px-0 sm:w-1/2 2xl:w-2/5 mx-auto">
      <p class="font-heading text-lg mb-3">{{ programItem.headline }}</p>
      <p class="mb-2">{{ programItem.text }}</p>
      <div v-if="programItem.filmList" class="film-list mb-2">
        <p class="mb-1 font-bold">Výběr filmů:</p>
        <ul>
          <li v-for="film in programItem.filmList" :key="film">
            {{ film }}
          </li>
        </ul>
      </div>
      <div class="icons w-1/2 lg:w-1/4 mx-auto flex justify-center space-x-6 mt-6 mb-4">
        <img v-for="icon in programItem.icons" :key="icon" :src="icon" alt="zrak sluch ikona" class="w-10 h-auto">
      </div>
      <p class="font-bold mb-2">{{ programItem.date }}</p>
      <a class="font-bold mb-2" :href="programItem.placeLink">{{ programItem.place }}</a>
    </div>
  </div>
</template>
<script>
export default {
  props: ['programItem']
}
</script>