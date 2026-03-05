 Vue.createApp({
  data() {
    return {
      counter: 10,
      name:'',
      coname: '',
     
    };
  },
  methods:{
    confirmInput(){
      this.coname = this.name;
    },
    add(){
      this.counter = this.counter+1; 
    },
    reduce(){
      this.counter = this.counter-1;
    },
    add2(num){
      this.counter = this.counter+num; 
    },
    reduce2(num){
      this.counter = this.counter-num;
    },
    setName(event, lastName){
      this.name = event.target.value + lastName;
    },
    submitForm(){
      alert("Successfully");

    }

  }
}).mount('#events');
