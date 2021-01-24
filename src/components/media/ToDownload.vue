<template>
  <Container class="xl:w-1/2 lg:w-2/3 text-center px-4">
    <h3 class="uppercase text-3xl mb-16 ml-4 font-heading">KE STAŽENÍ</h3>
    <div class="download-items flex flex-wrap justify-center flex-col sm:flex-row text-green font-bold">
      <DownloadItem v-for="downloadItem in downloadItems" :key="downloadItem" :downloadItem="downloadItem" :imgSrc="downloadItem.img" />
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
          img: 'media/file.svg',
          alt: 'soubor',
          text: 'Tiskové zprávy'
        },
        {
          img: 'media/picture.svg',
          alt: 'obrázek',
          text: 'Fotografie ke stažení'
        },
        {
          img: 'media/visual.svg',
          alt: 'deska na malování',
          text: 'Vizuál 2021'
        }
      ]
    }
  }
}
</script>

<style>

</style>