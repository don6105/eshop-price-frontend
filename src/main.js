import '@/assets/tailwind.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router.js'

import VueClickAway from "vue3-click-away";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEye, faEyeSlash)

createApp(App)
    .use(router)
    .use(VueClickAway)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')