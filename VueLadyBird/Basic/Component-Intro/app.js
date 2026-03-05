const app = Vue.createApp({
    data(){
        return{
            
            friends:[{
                id:101,
                name:'Manuel Lorenz',
                phone:'6385480659',
                email: 'manuel@localhost.com',
            },{
                id:102,
                name:'Julie Jones',
                phone:'6385480650',
                email: 'Julie@localhost.com',
            },]
        }
    },
    methods:{
        
    }
})


app.component('first-contact',{
    template:`
    <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails()" >{{detailsAreVisible? 'Hide':'Show'}} Details</button>
    <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong> {{friend.phone}}</li>
    <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
    </li>
    `,
    data(){
        return{
            detailsAreVisible:false,
            friend:{
                id:101,
                name:'Manuel Lorenz',
                phone:'6385480659',
                email: 'manuel@localhost.com'
            }
        }
        
    },
    methods:{
        toggleDetails(){
            console.log("click");
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }

})
app.mount("#app");