<template>
  <div class="download-item px-8 mb-8">
    <a :href="downloadItem.link" target="_blank" rel="noopener" class="flex items-center flex-col sm:flex-row">
      <img :src="require('@/assets/img/' + downloadItem.img)" class="sm:pr-4" :alt="downloadItem.alt">
      <p class="mt-4 px-8 sm:px-0 sm:mt-0">{{ downloadItem.text }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'DownloadItem',
  props: ['downloadItem'],
}
</script>