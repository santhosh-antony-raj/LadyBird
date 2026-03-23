<template>
    <div>
    <base-card>
    <h1>Register As a Coach</h1>
   <coach-registration @save-data="saveCoach"></coach-registration>
   </base-card>
   </div>
</template>

<script>
import CoachRegistration from '../../Components/coaches/CoachRegistration.vue';


export default {
    components:{
        CoachRegistration
    },
    methods:{
         saveCoach(data){
        console.log('emitted');
        this.$store.dispatch('coachMod/addCoach',data);
        this.$router.replace('/')
    }
    }
   
}
</script>

<style scoped>
h1{
    text-align: center;
}
</style>