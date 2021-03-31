<template>
  <h2 class="uppercase text-4xl mb-12 font-heading">Program</h2>
  <div class="program-items-wrapper">
    <ProgramItem v-for="(programItem, id) in programItems" :key="id" :programItem="programItem" />
  </div>  
  <a href="https://facebook.com/events/s/culturea-2021-cestuj-vsemi-smy/708636869810468/" class="text-green font-bold md:text-lg">Pro nejaktuálnější info navštivte náš Facebook</a>
  <div class="gg-border-style-dashed mt-12"></div>
</template>
<script>
import ProgramItem from './ProgramItem.vue'

import eyeIcon from '@/assets/img/icons/eyeIcon.svg'
import earIcon from '@/assets/img/icons/earIcon.svg'

export default {
  components: { ProgramItem },
  data() {
    return {
      programItems: [
        {
          id: 1,
          headline: 'Přednáška - Írán není arabská země (Vladimír Váchal)',
          text: 'O tom, jak to skutečně je se však dozvíte až na přednášce. Připravte se ale na bohatou historii, dechberoucí architekturu, a pohled do pravého Orientu, jak ho známe jen z vyprávění cestovatelů!',
          icons: [eyeIcon, earIcon],
          date: '9. 4. (pátek) o 17:00',
          place: 'ZOOM',
          placeLink: 'https://fb.me/e/HccoJZm1',
          isPrepared: true
        },
        {
          id: 2,
          headline: 'Rozhovor - Polsko jako turistická destinace - má co nabídnout (Zdeněk Trojan)',
          text: 'Vášnivý cestovatel a profesionální kameraman,  který má "na kontě" krom vzdálených krajin (jako třeba Kuba) i naše sousedy.  Více o svých dojmů z Polska vám odhalí počas rozhovoru.',
          icons: [eyeIcon, earIcon],
          date: '9. 4. (pátek) o 19:00',
          place: 'ZOOM',
          placeLink: 'https://fb.me/e/HccoJZm1',
          isPrepared: true
        },
        {
          id: 3,
          headline: 'Rozhovor - O vichřici na Mont Blancu a stanování na safari (Radka Březíková)',
          text: 'Vášnivý cestovatel a profesionální kameraman,  který má "na kontě" krom vzdálených krajin (jako třeba Kuba) i naše sousedy.  Více o svých dojmů z Polska vám odhalí počas rozhovoru.',
          icons: [eyeIcon, earIcon],
          date: '10. 4. (sobota) o 14:00',
          place: 'ZOOM',
          placeLink: 'https://fb.me/e/HccoJZm1',
          isPrepared: true
        },
        {
          id: 4,
          headline: 'Přednáška - Íránský Kurdistán (a nejen ten!) (Lenka Hrabalová)',
          text: 'O stopě sólo ženy napříč krajinou Kurdů, která (ač ve skutečnosti neexistuje) se rozprostírá i na území Íránu. Na první pohled nebezpečný nápad byl ve skutečnosti velmi příjemný zážitek. Více o tom popovídá arabistka a íránistka Lenka Hrabalová.',
          icons: [eyeIcon, earIcon],
          date: '10. 4. (sobota) o 15:30',
          place: 'ZOOM',
          placeLink: 'https://fb.me/e/HccoJZm1',
          isPrepared: true
        },
        {
          id: 5,
          headline: 'Rozhovor - Jak vidí naše sousedy polonista Pavel Trojan',
          text: 'Odborník na Polsko.  Od historie přes jazyk až po jídlo... Prostě na kulturu. I když se může zdát, že vedle našich hranic není co objevovat, sám Pavel o Polsku mluví jako o "zcela odlišném národě jako je ten náš".',
          icons: [eyeIcon, earIcon],
          date: '10. 4. (sobota) o 17:00',
          place: 'ZOOM',
          placeLink: 'https://fb.me/e/HccoJZm1',
          isPrepared: true
        },
        {
          id: 6,
          headline: 'Jarní online kino',
          text: 'Filmy z prostředí Íránu a Polska, tvořené profesionály i talentovanými studentmi. Objednejte si tradiční jídlo z Prašadu, připravte domácí kino a přeneste se s námi za hranice.',
          filmList: [
            'None of your business (Írán)',
            'Tatra kolem sveta 2 (Írán)',
            'Nauka (Polsko)',
            'How to swim and not to drown (Polsko)',
            'Strawberry boys (Polsko)',
            'It would be beautiful (Polsko)'
            ],
          icons: [eyeIcon, earIcon],
          date: '10. - 11. 4. (sobota, neděle)',
          place: 'screeningroom.org',
          placeLink: 'https://fb.me/e/HccoJZm1',
          isPrepared: true
        },
        {
          id: 7,
          headline: 'Virtuálna 3D výstava',
          text: 'Virtuální výstava v níž se dá chodit? Přesně tak. Ve vašem počítači se projdete mezi sochami od íránského umělce Majid Haghighi a grafickými díly od poláka Sebastiána Kubicu.',
          icons: [eyeIcon],
          date: '9. - 11. 4. (pátek, sobota, neděle)',
          place: 'ArtSteps',
          placeLink: 'https://fb.me/e/HccoJZm1',
          isPrepared: false
        },
        
      ]
    }
  }
}
</script>