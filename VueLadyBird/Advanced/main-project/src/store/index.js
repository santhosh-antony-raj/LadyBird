import {createStore} from 'vuex';
import CoachModule from './modules/coaches/index.js'
import ContactModule from './modules/request/index.js';
import UserAuthModule from './modules/auth/index.js';
const store = createStore({
    modules:{
        coachMod : CoachModule,
        contactMod:ContactModule,
        userAuthMod:UserAuthModule,
    },
   
   /* state(){
    return{
        userId:null,
    }  
   },
   getters:{
     userId(state){
        return state.userId;
}
   } */

})    



export default store;