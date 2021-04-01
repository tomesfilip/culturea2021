<template>
  <form @submit.prevent="handleSubmit" method="POST" class="flex-1 justify-center"> 
    <h2 class="uppercase text-4xl mb-2 font-heading text-center">Máte dotaz?</h2>
    <h2 class="uppercase text-4xl mb-6 font-heading text-center">Kontaktujte nás!</h2>    
    <div class="main-form transition-all duration-100">
        <div class="username-input h-20 my-2">
          <input 
            type="text" 
            id="name" 
            placeholder="Jméno" 
            required
            v-model.trim="formData.userName"
            class="w-full px-4 py-2 border-b-4 border-black placeholder-black focus:outline-none">
          <div v-if="userNameError" class="error text-red">{{ userNameError }}</div>
        </div>    
        <div class="email-input h-20 mt-2 mb-6">
          <input 
            type="text" 
            id="email" 
            placeholder="Email"
            required
            v-model.trim="formData.email"
            class="w-full px-4 py-2 border-b-4 border-black placeholder-black focus:outline-none">
          <div v-if="emailError" class="error text-red">{{ emailError }}</div>
        </div>
        <div class="message my-4">
          <textarea 
            name="" 
            id="" 
            cols="20"
            rows="10"
            required
            v-model.trim="formData.msg"
            placeholder="Vaše zpráva" 
            class="w-full p-4 max-h-48 placeholder-black focus:outline-none resize-none bg-darkGreen">
          </textarea>
          <div v-if="msgError" class="error text-red">{{ msgError }}</div>
        </div>
        <button class="font-bold w-full py-4 text-xl bg-darkGreen">Poslat</button>
    </div>
    <transition name="fade">
      <AlertToast :alert="alert" />
    </transition>     
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
import AlertToast from './AlertToast.vue'

export default {
  components: { AlertToast },
  data() {
    return {
      formData: {
        userName: '',
        email: '',
        msg: '',
      },
      
      userNameError: '',
      emailError: '',
      msgError: '',
      alert: null,
    }
  },
  methods: {
    handleSubmit() {
      this.userNameError = this.formData.userName.length > 1 ? '' : 'Jméno musí mít alespoň dva znaky'
      const regEx = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i
      this.emailError = regEx.test(this.formData.email) ? '' : 'Email musí být v platném tvaru'
      this.msgError = this.formData.msg.length === 0 ? '' : 'Zpráva nemůže být prázdná'
      this.msgError = this.formData.msg.length > 920 ? 'Zpráva nemůže obsahovat více jak 920 písmen' : '' 

      if(this.userNameError.length < 1 && this.emailError.length < 1 && this.msgError.length < 1){
        axios.post('sendMail.php', this.formData)
        .then(res => {
          this.showAlertMessage(res.data)
        }).catch(err => {
          console.log(err)
        })
        this.resetFormData()
      }
    },
    showAlertMessage(data) {
      this.alert = data
    },
    hideAlertMessage() {
      setTimeout(() => {
        this.alert = null
      }, 3000)
    },
    resetFormData() {
      this.formData.userName = ''
      this.formData.email = ''
      this.formData.msg = ''
      this.hideAlertMessage()
    }
  }
}
</script>
<style>
  .fade-enter-active {
    transition: all 0.4s ease;
  }

  .fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .fade-enter-from, .fade-leave-to {
    transform: translateX(80px);
    opacity: 0;
  }
</style>