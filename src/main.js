import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import Vue from 'vue'
import Directives from './directives'
// Vue.use(Directives)

const app = createApp(App)
app.use(Directives)
app.use(createPinia())
app.use(router)

app.mount('#app')
