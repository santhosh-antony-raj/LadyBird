<template>
  <base-container title="Vuex" v-if="visual">
  <the-counter></the-counter>
  <fav-counter></fav-counter>
  <button @click="increase({value:10})">Add 1</button>
  <change-counter></change-counter>
  </base-container>
  <base-container title="Log">
  <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './TheCounter.vue';
import ChangeCounter from './ChangeCounter.vue';
import FavCounter from "./FavCounter.vue";
import {mapActions} from'vuex';
import UserAuth from "./UserAuth.vue";
export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavCounter,
    UserAuth,
    

  },
  computed:{
     visual(){
            return this.$store.getters.logRes;
        }
  },

  methods:{
   // addOne(){
    //  this.$store.state.counter= this.$store.state.counter + 10;
   // this.$store.commit('increase',{value:10}); payload
   /* this.$store.dispatch({
    type: 'increase',
    value:10,
   }) */
  ...mapActions(['increase']),
   // }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>