<template>
  <h2 class="uppercase text-4xl mb-12 font-heading">Program</h2>
  <div class="program-items-wrapper mb-14">
    <ProgramItem v-for="(programItem, id) in programItems" :key="id" :programItem="programItem" />
  </div>
  <h3 class="text-3xl font-heading mb-8">Výstavy</h3>
    <div class="expo-items-wrapper">
      <ExpoItem v-for="(expoItem, id) in expoItems" :key="id" :expoItem="expoItem" />
    </div>  
  <a href="https://facebook.com/events/s/culturea-2021-cestuj-vsemi-smy/708636869810468/" class="text-green font-bold md:text-lg">Pro nejaktuálnější info navštivte náš Facebook</a>
  <div class="gg-border-style-dashed mt-12"></div>
</template>
<script>
import ProgramItem from './ProgramItem.vue'
import ExpoItem from './ExpoItem.vue'

import eyeIcon from '@/assets/img/icons/eyeIcon.svg'
import earIcon from '@/assets/img/icons/earIcon.svg'
import handIcon from '@/assets/img/icons/handIcon.svg'

export default {
  components: { ProgramItem, ExpoItem },
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
      ],
      expoItems: [
        {
          id: 1,
          headline: 'Culturea menu v Prašade',
          text: 'Navařit si íránské jídlo je bez potřebných surovin celkem výzva.  Šafrán nebo bryndza  pravděpodobně není běžnou součástí vaší spíže.  Naštěstí vám to s láskou připraví v Prašádu a vaše kuchyň tak zůstane čistá.  Rovněž si můžete objednat i polské speciality! Všechny verze jídel jsou vegetariánské. Jídla budou v nabídce pouze během festivalu.',
          icons: [eyeIcon, earIcon, handIcon],
          date: '9. - 11. 4. (pátek, sobota, neděle)',
          place: 'Restaurace Prašád',
          placeLink: 'https://goo.gl/maps/ktUk7uDhVKjV5SiB8',
          isPrepared: true
        },
        {
          id: 2,
          headline: 'Výstava za okny - polský grafický dizajnér',
          text: '',
          icons: [eyeIcon],
          date: '9. - 11. 4. (pátek, sobota, neděle)',
          place: 'Kongresové centrum',
          placeLink: 'https://goo.gl/maps/pgJAeFvJnSwVa8Pe9',
          isPrepared: false
        },
        {
          id: 3,
          headline: 'Instalace uměleckých děl - íránský sochár',
          text: '',
          icons: [eyeIcon],
          date: '9. - 11. 4. (pátek, sobota, neděle)',
          place: 'Klub 204',
          placeLink: 'https://goo.gl/maps/hKgwewMySFENDzVX7',
          isPrepared: false
        },
        {
          id: 4,
          headline: 'Výloha kultury zemí Polska a Íránu - AR realita',
          text: 'Na první pohled plakát, na pohled přes aplikaci Artivive je to okno do jiné kultury. Které se vám líbí víc - Polsko či Írán?',
          icons: [eyeIcon],
          date: '9. - 11. 4. (pátek, sobota, neděle)',
          place: 'Pekařství Javor na Školní',
          placeLink: 'https://goo.gl/maps/3hbNzRCCoqLXMCW77',
          isPrepared: true
        },
        {
          id: 5,
          headline: 'Íránská vitráž',
          text: 'Během pití kvalitní kávy si vychutnáte i pohled na smyslovou instalaci z dílny studentů FMK, Univerzity Tomáše Bati. Navíc máte možnost vyhrát lístky od Flixbusu do Polska a zpátky v hodnotě 2 000 CZK. Stačí se vyfotit u této instalace, fotku přidat do příběhu na Instagram a označit nás tam.',
          icons: [eyeIcon],
          date: '9. - 11. 4. (pátek, sobota, neděle)',
          place: 'Kafec Zlínský',
          placeLink: 'https://goo.gl/maps/M14AveaDBYDkLHJ99',
          isPrepared: true
        },
        {
          id: 6,
          headline: 'Hra se slovy',
          text: '',
          icons: [eyeIcon],
          date: '9. - 11. 4. (pátek, sobota, neděle)',
          place: 'Jedním tahem',
          placeLink: 'https://goo.gl/maps/KmPyDUsKCDGbg9797',
          isPrepared: false
        },
      ]
    }
  }
}
</script>