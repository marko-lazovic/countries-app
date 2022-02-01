import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

import TheNavbar from './components/main/TheNavbar.vue';
import BaseCard from './components/base/BaseCard.vue';
import BaseSpinner from './components/base/BaseSpinner.vue';
import BaseDialog from './components/base/BaseDialog.vue';

const app = createApp(App);

app.component('the-navbar', TheNavbar);
app.component('base-card', BaseCard);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.use(store);
app.use(router);
app.mount('#app');
