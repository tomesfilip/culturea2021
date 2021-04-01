<template>
  <div v-if="alert" class="alert-box fixed bottom-8 right-8 text-center">
    <div v-if="alert.status" class="alert alert-success py-4 px-6 text-green uppercase bg-white rounded-full font-heading tracking-wide">{{ alert.message }}</div>
    <div v-else class="alert alert-danger text-red uppercase py-4 px-6 bg-white rounded-full font-heading tracking-wide">{{ alert.message }}</div>
  </div>
</template>
<script>
export default {
  props: ['alert']
}
</script>