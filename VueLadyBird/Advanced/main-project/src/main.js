import { createApp } from 'vue';
import router from '../src/router.js';
import App from '../src/App.vue';
import store from './store/index.js'
const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
