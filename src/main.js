import { createApp } from 'vue'
import DefaultLayout from './layouts/DefaultLayout.vue'
import router from "./routes/index.js"
createApp(DefaultLayout).use(router).mount('#app')