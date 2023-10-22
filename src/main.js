import { createApp } from 'vue'
import App from './App.vue'
import Router from './routes.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'intersection-observer';
import './assets/styles/main.css'

//font awsome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faWindowRestore, faMobile, faFileCode, faCogs } from '@fortawesome/free-solid-svg-icons';

library.add(faWindowRestore, faMobile, faFileCode, faCogs);

createApp(App)
.use(Router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')