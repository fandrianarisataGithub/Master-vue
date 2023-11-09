import {createApp} from 'vue'
import App from './App.vue'
import ComponentA from './components/ComponentA.vue'
const app = createApp(App)// new Vue
app.component('ComponentA', ComponentA)
app.mount('#app')
