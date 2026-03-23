<template>
    <div>
    <base-dialog :show="!!error" title="An error Occurred!" @close="errorHandler">
    <p>{{ error }}</p>
</base-dialog>
    <section>
       <coach-filter @change-filter="setFilter"></coach-filter>
    </section>
    <section>
        <base-card>
        <div class="controls">
            <base-button @click="loadCoach(true)" mode="outline">Refresh</base-button>
            <base-button link to="/login?redirect=register" v-if="!isAuthenticate">Login to Register as a Coach</base-button>
            <base-button link to="/register" v-if="isAuthenticate && !isCoach && !isLoading">Register </base-button>
        </div>
        <div v-if="isLoading">
            <base-spinner ></base-spinner>
        </div>
        
        <ul v-else-if="hasCoaches" >
           <coach-item 
           v-for="coach in filterCoaches" 
           :key="coach.id"
           :id="coach.id"
           :firstName="coach.firstName"
           :lastName="coach.lastName"
           :rate="coach.hourlyRate"
           :areas="coach.areas"></coach-item>
        </ul>
        <h3 v-else>No Coaches Found</h3>
       </base-card>
    </section>
    </div>
</template>

<script>
import CoachFilter from '../../Components/coaches/CoachFilter.vue';
import CoachItem from '../../Components/coaches/CoachItem.vue'
import BaseButton from '../../ui/BaseButton.vue';

export default {
    data(){
        return{
            error:null,
           isLoading:false,
            activefilters:{
                frontend:true,
                backend:true,
                career:true,
            }
        }
    },
    components:{
        CoachItem,
        BaseButton,
        CoachFilter
    },
    created(){
            this.loadCoach();
        
    },

    computed:{
        isAuthenticate(){
            return this.$store.getters['userAuthMod/authenticate'];
        },
        filterCoaches(){
        const coaches = this.$store.getters['coachMod/coaches'];
        return coaches.filter(coach=>{
            if(this.activefilters.frontend && coach.areas?.includes('frontend')){
                return true;
            }
            if(this.activefilters.backend && coach.areas?.includes('backend')){
                return true;
            }
            if(this.activefilters.career && coach.areas?.includes('career')){
                return true;
            }
            return false;
        })
        },
        hasCoaches(){
            return !this.isLoading && this.$store.getters['coachMod/hasCoaches']
        },
        isCoach(){
            return this.$store.getters['coachMod/isCoach'];
           
        }
    },
    methods:{
        setFilter(updatedFilters){
            this.activefilters=updatedFilters;
        },
       async loadCoach(refresh =false){
           this.isLoading=true;
           try{
            await  this.$store.dispatch('coachMod/loadCoach',{forceRefresh : refresh});
           }catch(err){
            this.error= err.message || 'coachList load error facing';
           }
           this.isLoading=false;
            },
            errorHandler(){
        this.error=null;
    }
    }
    
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>