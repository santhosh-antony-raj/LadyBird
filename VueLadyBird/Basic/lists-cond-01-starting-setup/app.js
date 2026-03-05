const app = Vue.createApp({
  data() {
    return {
       goals: [],
       objtest:{
                name:'John',
                Age:21
       },
       enterGoalValue:'',
      
      };
  },
  methods:{
      addGoals(){
        this.goals.push(this.enterGoalValue);
        this.enterGoalValue=''

      },
      removeGoals(idx){
        this.goals.splice(idx,1);
      }
  }
});

app.mount('#user-goals');
