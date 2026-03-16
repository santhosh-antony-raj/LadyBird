import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import  Courses  from "./pages/Courses.vue";
import Goals from './pages/Goals.vue'
const app = createApp(App);

const router =  createRouter({
history: createWebHistory(),    
routes:[{path:'/', component: Courses},
    {path:'/goals', component:Goals}]
})

app.component('base-modal', BaseModal);
app.use(router);
app.mount('#app');
