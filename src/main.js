import '@/assets/tailwind.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router.js'

import VueClickAway from "vue3-click-away";

createApp(App)
    .use(router)
    .use(VueClickAway)
    .mount('#app')