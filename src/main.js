import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/fonts.css'
import './assets/css/tailwind.css'
import './assets/css/custom.css'
import './assets/css/dashedBorder.css'

createApp(App).use(router).mount('#app')
