<template>
  <div class="download-item flex items-center px-8 mb-8">
    <img src="../../assets/img/media/file.svg" class="pr-4" alt="">
    <p>{{ downloadItem.text }}</p>
  </div>
</template>

<script>
export default {
  name: 'DownloadItem',
  props: ['downloadItem'],
  computed: {
  }
}
</script>

<style>

</style>