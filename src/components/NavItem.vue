<template>
  <li>
    <a :href="href" class="block px-4 py-2 rounded-md bg-amber-100">hoo</a>
  </li>
</template>

<script>
export default {
  props: {
    href:{
      type: String,
      required: true
    },
  }
}
</script>

<style>

</style>