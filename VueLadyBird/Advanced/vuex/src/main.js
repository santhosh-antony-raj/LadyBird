import { createApp } from 'vue';
import{createStore} from 'vuex';
import App from './App.vue';

const app = createApp(App);
const store = createStore({
        state(){
            return{
                counter:0,
                isLogged:false,
            }
        },
        mutations:{
            increment(state){
                state.counter = state.counter+2;
            },
            increase(state, payload){
                state.counter = state.counter + payload.value;
            },
            loggedIn(state,payload){
                state.isLogged = payload.isAuth;
            }
        },
        getters:{
            finalCounter(state){
                return state.counter*2;
            },
            anotherCounter(_,getter){
                const finalCounter = getter.finalCounter;
                if(finalCounter<0){
                    return 0;
                }
                else if(finalCounter>100){
                    return 100;
                }
                return finalCounter;

            },
            logRes(state){
                return state.isLogged;
            }
        },
        actions:{
            increment(context){
                console.log(context);// must see what it contains
                
                setTimeout(function(){
                    context.commit('increment');
                },3000)
                
            },
            increase(context,payload){
                context.commit('increase',payload);
            },
            loggedIn(context,payload){
                context.commit('loggedIn',payload)
            }
        }
})
app.use(store)

app.mount('#app');
