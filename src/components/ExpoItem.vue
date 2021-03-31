<template>
  <div class="active-expo-item">
    <div v-if="expoItem.isPrepared" class="program-item mb-8 lg:mb-14 px-4 sm:px-0 sm:w-1/2 2xl:w-2/5 mx-auto">
      <p class="font-heading text-lg mb-3">{{ expoItem.headline }}</p>
      <p class="mb-2">{{ expoItem.text }}</p>
      <div class="icons w-1/2 mx-auto flex justify-center space-x-6 mt-6 mb-4">
        <img v-for="icon in expoItem.icons" :key="icon" :src="icon" alt="zrak sluch ikona" class="w-10 h-auto">
      </div>
      <p class="font-bold mb-2">{{ expoItem.date }}</p>
      <a :href="expoItem.placeLink" target="_blank"
        class="expo-place md:w-1/2 mx-auto flex items-center justify-center space-x-4 mt-6 mb-4">
        <img src="../assets/img/icons/mapPin.svg" alt="značka na mape ikona">
        <p class="font-bold">{{ expoItem.place }}</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ['expoItem']
}
</script>