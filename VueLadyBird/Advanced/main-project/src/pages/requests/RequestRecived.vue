<template>
  <div>
  <base-dialog :show="!!error" title="An Unexpected Error Occured" @close="errorHandler">
{{ error }}
  </base-dialog>
   <section>
    <base-card>
      <header>
        <h3>Request Recieved</h3>
      </header>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
       <ul v-else-if="!isLoading && hasContacts">
        <contact-item v-for="contact in contacts" :key="contact"
        :msg="contact.msg"
        :email="contact.email"
        :id="contact.id"></contact-item>
    </ul>
      
    <h1 v-else>You haven't recieved any request Yet</h1>
    </base-card>
   </section>
   </div>
</template>

<script>
import ContactItem from '../../Components/contact/ContactItem.vue'
export default {
  components: { ContactItem },
  data(){
    return{
      isLoading:false,
      error:null,
    }
    
  },
    computed:{
        contacts(){
          return  this.$store.getters['contactMod/contacts']
        },
    
      hasContacts(){
        return !this.isLoading && this.$store.getters['contactMod/contacts'];
      }
    
},
methods:{
  async loadRequest(){
    this.isLoading=true;
    try{
     await this.$store.dispatch('contactMod/loadRequest')
    }catch(err){
       this.error= err.msg || "error in dispatch render request recieved";
    }
    this.isLoading=false;
  },
  errorHandler(){
    this.error = null;
  }
},
created(){
  this.loadRequest();
}
}
</script>


<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>