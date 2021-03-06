import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/fonts.css'
import './assets/css/tailwind.css'
import './assets/css/custom.css'
import './assets/css/dashedBorder.css'

const app = createApp(App)
app.config.performace = true
app.use(router).mount('#app')
