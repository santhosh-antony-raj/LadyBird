Vue.createApp({

    data(){
        return{
            paradesc: 'Hello Vue JS',
            courselink: 'https://vuejs.org/',
            deep:'<p>content with html syntax</P>',
            str1:"Hello Vue",
            str2:"Hello js"
        }
    },
    methods:{
        outRandomNum(){
            return Math.random();  
        },
        outRandomString(){
            const randomNumber = Math.random();
                 if(randomNumber>0.5){
                return "Hello Vue";
            }else{
                return "Hello jS";
            }
        },
        outRandomStrData(){
            const randomNumber = Math.random();
                 if(randomNumber>0.5){
                return this.str1 ;
            }else{
                return this.str2;
            }
        }

    }
}).mount('#user-goal')