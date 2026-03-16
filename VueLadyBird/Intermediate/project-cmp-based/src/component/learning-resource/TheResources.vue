<template>
    <base-card>
        <base-button @click="setSelectTab('stored-resources')" :mode="storedResBtnMode">Strored Resources</base-button>
        <base-button @click="setSelectTab('add-resources')" :mode="AddResBtnMode"> Add Resources</base-button>
    </base-card>
    <component :is="selectTab"></component>
</template>

<script>
//importings of 2 tabs
import StoredResources from "./StoredResources.vue";
import addResources from "./AddResources.vue";
export default {
    components:{
        StoredResources,
        addResources,
    },
    //main Data Base Dummy
    data(){
        return{
            selectTab: 'stored-resources',
            storedResources :[{
    id: 'l1',
    title: 'Vue.Js',
    description: 'The Complete Guide of VueJs Framework',
    link: 'https://vuejs.org'
},
{
    id: 'l2',
    title: 'React.Js',
    description: 'Learn React.js from basics to advanced concepts',
    link: 'https://react.dev'
},
{
    id: 'l3',
    title: 'Angular',
    description: 'Complete Angular framework guide for beginners',
    link: 'https://angular.io'
},
{
    id: 'l4',
    title: 'Node.Js',
    description: 'Backend development with Node.js and Express',
    link: 'https://nodejs.org'
}]
        }
    },

    provide(){
        return{
            resources : this.storedResources,
            addResource: this.addResource,
            delResource: this.delResource,
        }
        
    },
    computed:{
        storedResBtnMode(){
            return this.selectTab === 'stored-resources'? null :'flat';
        },
        AddResBtnMode(){
            return this.selectTab === 'add-resources'? null :'flat';
        }
        
    },
    methods:{
        setSelectTab(tab){
            this.selectTab = tab;
            console.log(tab);
            
        },
        addResource(title, desc, link){
            
            const addNewRes ={    
                id: new Date().toISOString(),
                title:title,
                description:desc,
                link:link,
            };
           this.storedResources.unshift(addNewRes);
            this.selectTab = 'stored-resources';
        },
        delResource(fdx){
            const findIndex = this.storedResources.findIndex(res=> res.id === fdx);
            this.storedResources.splice(findIndex,1);
        }
    }
}
</script>