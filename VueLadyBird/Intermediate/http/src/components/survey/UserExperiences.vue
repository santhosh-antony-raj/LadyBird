<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadGetDetails">Load Submitted Experiences</base-button>
      </div>
        <div  v-if="isLoading" class="spinner-border text-primary m-3" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p v-else-if="!isLoading && error">{{error}}</p>
        <p class="m-2" v-else-if="!isLoading &&(!results || results.length===0)">No Data Found. Start adding Survey Data</p>
      <ul v-else-if="!isLoading && results">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
 data(){
  return{
    results:[],
    isLoading:false,
    error:null,
  }
 },
  components: {
    SurveyResult,
  },
  methods:{
    loadGetDetails(){
      this.isLoading=true;
    fetch('https://vuedbtest007-default-rtdb.firebaseio.com/survey.json').then( response=> response.json()).then(data=>{
      this.isLoading=false;
      const results=[];
      for(const id in data){
      results.push({
        id: id,
        name: data[id].name,
        rating:data[id].rating,
      })}
      this.results = results;
    }).catch(err=>{
      this.isLoading=false;
      this.error="Failed to fetch Data from DB";
      console.log(err);
      
    })
    
        
      
    }
  },
  mounted(){
    this.loadGetDetails();
  },
  updated(){
    this.loadGetDetails();
  }

};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>