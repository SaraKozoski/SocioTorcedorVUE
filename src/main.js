import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { aplicarTema } from './config/clubConfig'
import './styles/base.css'

aplicarTema()

createApp(App).use(createPinia()).use(router).mount('#app')
