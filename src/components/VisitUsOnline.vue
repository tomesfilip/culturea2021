<template>
  <Container class="lg:px-80 px-4 text-center">
    <p class="uppercase text-lososPink">tento rok nás navštivte online</p>
    <h2 class="uppercase text-4xl my-6 font-heading">Navštivte nás online</h2>
    <p class="text-center mb-8">Tento ročník je ještě více jedinečný než ty předchozí. Rozhodli jsme se dát kultuře větší prostor - tak veliký, že se nevejde do žádné budovy. Na jaře 2021 budete moci cítit kulturu Polska a Íránu přímo v ulicích Zlína. Kromě toho, že si ho takto můžete vychutnat hned tři dny místo jednoho, nemusíte platit ani žádné vstupné. Na druhou stranu, pokud se vám u nás bude líbit, budeme rádi pokud nás podpoříte. O svou radost se podělíme i s místními charitami, kam poputuje část dobrovolného vstupného.</p>
    <SupportBtn />
  </Container>  
</template>

<script>
import Container from './Container.vue'
import SupportBtn from './SupportBtn.vue'

export default {
  components: { SupportBtn, Container }
}
</script>

<style>

</style>
