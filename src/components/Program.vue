<template>
  <h2 class="uppercase text-4xl mb-12 font-heading">Program</h2>
  <div class="program-items-wrapper">
    <div v-for="(programItem, id) in programItems" :key="id" class="active-program-item">
      <div v-if="programItem.isPrepared" class="program-item mb-8 lg:mb-14 px-4 sm:px-0 sm:w-1/2 2xl:w-2/5 mx-auto">
        <p class="font-heading text-lg mb-3">{{ programItem.headline }}</p>
        <p class="mb-2">{{ programItem.text }}</p>
        <div v-if="programItem.filmList" class="film-list mb-2">
          <p class="mb-1 font-bold">Výběr filmů:</p>
          <ul>
            <li v-for="film in programItem.filmList" :key="film">
              {{ film }}
            </li>
          </ul>
        </div>
        <div class="icons w-1/2 lg:w-1/4 mx-auto flex justify-around mb-2">
          <img v-for="icon in programItem.icons" :key="icon" :src="icon" alt="zrak sluch ikona" class="w-10 h-auto">
        </div>
        <p class="font-bold mb-2">{{ programItem.date }}</p>
        <a class="font-bold mb-2" :href="programItem.placeLink">{{ programItem.place }}</a>
      </div>
    </div>
  </div>
  
  <a href="https://facebook.com/events/s/culturea-2021-cestuj-vsemi-smy/708636869810468/" class="text-green font-bold md:text-lg">Pro nejaktuálnější info navštivte náš Facebook</a>
  <div class="gg-border-style-dashed mt-12"></div>
</template>
<script>
import eyeIcon from '@/assets/img/icons/eyeIcon.svg'
import earIcon from '@/assets/img/icons/earIcon.svg'

export default {
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
          isPrepared: false
        },
        {
          id: 3,
          headline: 'Rozhovor - O vichřici na Mont Blancu a stanování na safari (Radka Březíková)',
          text: 'Vášnivý cestovatel a profesionální kameraman,  který má "na kontě" krom vzdálených krajin (jako třeba Kuba) i naše sousedy.  Více o svých dojmů z Polska vám odhalí počas rozhovoru.',
          icons: [eyeIcon, earIcon],
          date: '10. 4. (sobota) o 14:00',
          place: 'ZOOM',
          placeLink: 'https://fb.me/e/HccoJZm1',
          isPrepared: false
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
          id: 6,
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