import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import './assets/scss/styles.scss'
import '../node_modules/primeflex/primeflex.css'

import PrimeVue from 'primevue/config'

const app = createApp(App)


import Drawer from 'primevue/drawer'
import Button from 'primevue/button'
app.component('Drawer', Drawer)
app.component('Button', Button)

app.use(PrimeVue)
import 'primeicons/primeicons.css'
createApp(App).mount('#app')