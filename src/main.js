import './assets/scss/style.scss';

import { createApp } from 'vue'; // instance du Vue

import App from './App.vue'; // fichier
import router from './router';

const app = createApp(App)// new Vue // instance app
app.use(router);
app.mount('#app') // mametaka an'ilay objet instance ao amle DOM
