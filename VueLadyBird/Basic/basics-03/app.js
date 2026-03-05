const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname:''
    };
  },
  watch:{
     counter(num){
        if(num>50){
          const that = this;
          setTimeout(function(){
            that.counter=0;
          },2000)
        }
     }
  },
computed:{
  fullName(){//running  only used value changes
    console.log("running");
    
    if(this.name === ''){
      this.name=''
    }
    return this.name + ''+ this.lastname;
  }
},

  methods: {
    /* outfullName(){//running revaluated all the time
      console.log("Running");
      
      if(this.name===""){
        return '';
      }
      return this.name+ ''+ 'Smith';
    }, */
    
    setName(event) {
      console.log("running");
      this.name = event.target.value
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
