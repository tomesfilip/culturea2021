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
          link: 'https://drive.google.com/drive/folders/1_Mu4mJAp8HWMeNE2erVig-sBewiM7_6d?usp=sharing',
          text: 'Tiskové zprávy'
        },
        {
          img: 'media/picture.svg',
          alt: 'obrázek',
          link: 'https://wetransfer.com/downloads/b5bb8ddb680358938b6af4212ac766ad20210205212759/97c8e7',
          text: 'Fotografie ke stažení'
        },
        {
          img: 'media/visual.svg',
          alt: 'deska na malování',
          link: 'https://drive.google.com/file/d/147NbZeZBTAtlQJ75JdLLBOfsIjSYSBHE/view?usp=sharing',
          text: 'Vizuál 2021'
        }
      ]
    }
  }
}
</script>

<style>

</style>