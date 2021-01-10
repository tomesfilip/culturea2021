<template>
  <Container class="lg:w-1/2 text-center px-4">
    <h3 class="uppercase text-3xl mb-16 ml-4">KE STAŽENÍ</h3>
    <div class="download-items flex flex-wrap justify-center text-red font-bold">
      <DownloadItem v-for="downloadItem in downloadItems" :key="downloadItem" :downloadItem="downloadItem" />
    </div>
  </Container>
</template>

<script>
import Container from '../Container.vue'
import DownloadItem from './DownloadItem.vue'
export default {
  components: { Container, DownloadItem },
  data() {
    return {
      downloadItems: [
        {
          img: '../../assets/img/media/file.svg',
          text: 'Tiskové zprávy'
        },
        {
          img: '../../assets/img/media/picture.svg',
          text: 'Fotografie ke stažení'
        },
        {
          img: '../../assets/img/media/visual.svg',
          text: 'Vizuál 2021'
        }
      ]
    }
  }
}
</script>

<style>

</style>