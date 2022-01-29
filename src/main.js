import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

import TheNavbar from './components/main/TheNavbar.vue';

const app = createApp(App);

app.component('the-navbar', TheNavbar);

app.use(store);
app.use(router);
app.mount('#app');
