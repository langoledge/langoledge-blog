import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import OnuUI from 'onu-ui'
import 'onu-ui/dist/style.css'

createApp(App)
  .use(router)
  .use(OnuUI)
  .mount('#app')
