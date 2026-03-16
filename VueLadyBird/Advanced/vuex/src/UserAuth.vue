<template>
    <div>
     <button @click="logIn" v-if="!visual">Login</button>
    <button @click="logOut" v-if="visual">Logout</button>
    <h3>{{visual}}</h3>
    </div>
    
</template>

<script>
export default {
    computed:{
        visual(){
            return this.$store.getters.logRes;
        }
    },
    methods:{
        logIn(){
           this. $store.dispatch({
            type:'loggedIn',
            isAuth:true,
           });
        },
        logOut(){
            this. $store.dispatch({
            type:'loggedIn',
            isAuth:false,
           });
        }
    }
}
</script>