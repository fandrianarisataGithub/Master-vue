import {createApp} from 'vue'
import App from './App.vue'
const app = createApp(App)// new Vue
import CompoAge from './components/CompoAge.vue'        
app.component('compo-age', CompoAge)

app.mount('#app')
