<template>  
  <form class="flex-1 justify-center">
    <h2 class="uppercase text-4xl mb-2">Máte dotaz?</h2>
    <h2 class="uppercase text-4xl mb-6">Kontaktujte nás!</h2>
    <input 
      type="text" 
      id="name" 
      placeholder="Jméno" 
      class="w-full px-4 py-2 my-2 border-b-4 border-black placeholder-black focus:outline-none">
    <input 
      type="text" 
      id="email" 
      placeholder="Email" 
      class="w-full px-4 py-2 mt-2 mb-12 border-b-4 border-black placeholder-black focus:outline-none">
    <textarea 
      name="" 
      id="" 
      cols="20"
      rows="10" 
      placeholder="Vaše zpráva" 
      class="w-full my-4 p-4 max-h-48 placeholder-black focus:outline-none resize-none bg-greyOp50">
    </textarea>
    <button class="font-bold w-full py-4 text-xl bg-yellow">Poslat</button>
  </form>
</template>

<script>
export default {

}
</script>

<style>
  textarea {
    height: 12rem;
  }
  input {
    background: none;
  }
</style>