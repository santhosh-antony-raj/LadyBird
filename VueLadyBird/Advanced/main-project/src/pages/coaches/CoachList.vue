<template>
    <section>
        Filters
    </section>
    <section>
        <div class="controls">
            <button>Refresh</button>
            <router-link to="/register">Register </router-link>
        </div>
        <ul >
            <li v-for="coach in filterCoaches" :key="coach.id">{{ coach.firstName }}</li>
        </ul>
       
    </section>
</template>

<script>
export default {
    computed:{
        filterCoaches(){
        return this.$store.getters['coachMod/coaches'];
        }
    }
}
</script>