<template>  
  <form @submit.prevent="handleSubmit" method="POST" class="flex-1 justify-center">
    <h2 class="uppercase text-4xl mb-2 font-heading text-center">Máte dotaz?</h2>
    <h2 class="uppercase text-4xl mb-6 font-heading text-center">Kontaktujte nás!</h2>
    <input 
      type="text" 
      id="name" 
      placeholder="Jméno" 
      required
      v-model="userName"
      class="w-full px-4 py-2 my-2 border-b-4 border-black placeholder-black focus:outline-none">
    <input 
      type="text" 
      id="email" 
      placeholder="Email"
      required
      v-model="email"
      class="w-full px-4 py-2 mt-2 mb-12 border-b-4 border-black placeholder-black focus:outline-none">
    <textarea 
      name="" 
      id="" 
      cols="20"
      rows="10"
      required
      v-model="text"
      placeholder="Vaše zpráva" 
      class="w-full my-4 p-4 max-h-48 placeholder-black focus:outline-none resize-none bg-darkGreen">
    </textarea>
    <button class="font-bold w-full py-4 text-xl bg-darkGreen">Poslat</button>
  </form>
</template>

<style>
  textarea {
    height: 12rem;
  }
  input {
    background: none;
  }
</style>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      userName: '',
      email: '',
      text: '',
      userNameError: '',
      emailError: '',
      textError: '',
    }
  },
  methods: {
    handleSubmit() {
      this.userNameError = this.userName.trim().length > 1 ? '' : 'Jméno musí mít alespoň dva znaky'
      const regEx = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i
      this.emailError = regEx.test(this.email) ? '' : 'Email musí být v platném tvaru'
      this.textError = this.text.trim().length > 0 ? '' : 'Správa nemúže být prázdná'

      if(this.userNameError.length < 1 && this.emailError.length < 1 && this.textError.length < 1){
        console.log('form submitted')

        const formData = {
          'name': this.userName,
          'email': this.email,
          'message': this.text
        }
      }
    }
  }
}
</script>