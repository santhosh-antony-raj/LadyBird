const app = Vue.createApp({

    data(){
        return{
             BoxASelected :false,
             boxBSelected : false,
             boxCSelected : false

        }
    },
    computed:{
        //each time the page render when click everyting re evaluated all the time so, use computed by this render only used value changes
        //put computed  logic here
        BoxCClasses(){
            return {active: this.boxCSelected};
        },

    },
    methods:{
       boxSelected(box){
        if(box==='A'){
            this.BoxASelected = !this.BoxASelected;
        }else if(box==='B'){
            this.boxBSelected = !this.boxBSelected;
        }else if(box==='C'){
            this.boxCSelected = !this.boxCSelected;// instead of truthy use ! for toggle
        }else{
            console.log("Invalid data");
            
        }
       }
    }

})

app.mount('#styling')