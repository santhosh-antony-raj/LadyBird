import { createRouter,  createWebHistory } from 'vue-router';

//router imports
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NavNotFound from './components/nav/NavNotFound.vue';
import UserFooter from './components/users/UserFooter.vue';
import TeamFooter from './components/teams/TeamFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', redirect: '/teams'}, //redirect home set  alias:'/'
        { path: '/teams', components: {default:TeamsList, footerDisRoute: TeamFooter}, meta:{needAuth:false},children:[{
            name:'team-members', path: ':teamId', component:TeamMembers, props:true,
        }]},// our-domain.com/teams =>... alias or if this also 

        { name: 'Users' ,path: '/users', components: {default:UsersList, footerDisRoute:UserFooter}, beforeEnter(to,from,next){
            console.log('uses Before Enter path level');
            
            console.log(to,from);
            next();
            
        }},
        {path:'/:notfound(.*)', component:NavNotFound}//catch all unnecssary always in last cause priority wise executes routes
    ],
    linkActiveClass: 'active',
    scrollBehavior(_,_2,savepoints){
       // console.log(to,from,savepoints);
        if(savepoints){
            return savepoints;
        }
        return {left:0 ,top:0}    
        
    },
    
    
});

router.beforeEach( function(to, from, nxt){
    if(to.meta.needAuth){
        console.log("need Auth");//meta data can use  for give some extra info about the route
        nxt();
    }
   /*  if(to.name==="team-members"){
        nxt();
    }else{
        nxt({name:'team-members', params:{teamId:'t3'}});
    }
     */
    console.log('Global Level');
    nxt();
})

router.afterEach(function(to,from){
    console.log(to,from);
    
})

export default router;