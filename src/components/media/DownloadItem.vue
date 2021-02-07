<template>
  <div class="download-item flex items-center flex-col sm:flex-row px-8 mb-8">
    <a :href="downloadItem.link" target="_blank" rel="noopener">
      <img :src="require('@/assets/img/' + downloadItem.img)" class="sm:pr-4" :alt="downloadItem.alt">
    </a>
    <p class="mt-4 px-8 sm:px-0 sm:mt-0">{{ downloadItem.text }}</p>
  </div>
</template>

<script>
export default {
  name: 'DownloadItem',
  props: ['downloadItem'],
}
</script>

<style>

</style>