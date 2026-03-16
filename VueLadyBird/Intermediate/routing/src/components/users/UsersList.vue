<template>
<button  @click="programmaticNav">Confirm</button>
<button @click="saveChanges">SaveChanges</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return{
      issaved:false,
    }
  },

methods:{
  programmaticNav(){
    this.$router.push('/teams');
  },
  saveChanges(){
    this.issaved=true;
  },

},
beforeRouteEnter(to,from,next){
  console.log("beforeRouteEnter Compound inside");
  
  console.log(to,from,next);
  console.log(to,from);
  next();
},
  beforeRouteLeave(to,from,next){
    if(this.issaved){
      next();
    }else{
      const savebool = confirm('are You Ready Leave Without Save Changes');
      next(savebool);
    }
  }
  

};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>