import { defineAsyncComponent } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import CoachList from './pages/coaches/CoachList.vue';
//import CoachDetail from './pages/coaches/CoachDetail.vue';
//import CoachRegister from './pages/coaches/CoachRegister.vue';
//import ContactCoach from './pages/requests/ContactCoach.vue';
//import RequestRecived from './pages/requests/RequestRecived.vue';
import NotFound from './pages/NotFound.vue';
//import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';
//using defineAsyncComponenet for lazy load
const CoachDetail = defineAsyncComponent(()=> import('./pages/coaches/CoachDetail.vue'));
const CoachRegister = defineAsyncComponent(()=> import('./pages/coaches/CoachRegister.vue'));
const ContactCoach = defineAsyncComponent(()=> import('./pages/requests/ContactCoach.vue'));
const RequestRecived = defineAsyncComponent(()=>import('./pages/requests/RequestRecived.vue'));
const UserAuth = defineAsyncComponent(()=>import('./pages/auth/UserAuth.vue'));


const router= createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', redirect:'/coaches'},
        {path:'/coaches', component:CoachList},
        {path:'/coaches/:id',component:CoachDetail, props:true ,
            children:[ {path:'contact',component:ContactCoach},
            ]},
        {path:'/register',component:CoachRegister, meta:{requiresAuth : true}},  
        {path:'/request', component:RequestRecived, meta:{requiresAuth : true}},
        {path:'/login', component:UserAuth, meta:{requiresUnauth : true}},
        {path:'/:notFound(.*)', component:NotFound}
    
    ],
   
});
 router.beforeEach(function(to,_, next){
        if(to.meta.requiresAuth && !store.getters['userAuthMod/authenticate']){
            next('/login');
        }else if(to.meta.requiresUnauth && store.getters['userAuthMod/authenticate']){
            next('/coaches');
        }else{
            next();
        }
 })



export default router;