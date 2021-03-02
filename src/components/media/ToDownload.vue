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
          link: 'https://drive.google.com/drive/folders/1CsFMpzzpZ67iciQKq_SUgXK8Dkr4B2-Y?fbclid=IwAR1Oj4UYKH0inIgxqjQAN6waunD13pjeADVLF2fK0lu01YbzmWAAlCpSZJg',
          text: 'Tiskové zprávy'
        },
        {
          img: 'media/picture.svg',
          alt: 'obrázek',
          link: 'https://drive.google.com/drive/folders/17JeguuaSoIMk3G9GbTVa86skFvoA2fVj?fbclid=IwAR0Ka47RiaZD-7ExnYLBinY-U3J_YuIFCuBPVwdvm5aDRSnn_yMC2Uajcis',
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