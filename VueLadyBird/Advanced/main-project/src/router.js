import {createRouter, createWebHistory} from 'vue-router';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachList from './pages/coaches/CoachList.vue';
import CoachRegister from './pages/coaches/CoachRegister.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestRecived from './pages/requests/RequestRecived.vue';
import NotFound from './pages/NotFound.vue';
const router= createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', redirect:'/coaches'},
        {path:'/coaches', component:CoachList},
        {path:'/coach/:id',component:CoachDetail, 
            children:[ {path:'contact',component:ContactCoach},
            ]},
        {path:'/register',component:CoachRegister},  
        {path:'/request', component:RequestRecived},
        {path:'/:notFound(.*)', component:NotFound}
    
    ]
})



export default router;