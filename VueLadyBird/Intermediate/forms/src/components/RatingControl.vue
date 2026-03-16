<template>
    <ul>
        <li :class="{active: modelValue ==='Poor'}"><button type="button" @click="activeBtn('Poor')">Poor</button></li>
        <li :class="{active: modelValue ==='Average'}"><button type="button" @click="activeBtn('Average')">Average</button></li>
        <li :class="{active: modelValue ==='Good'}"><button type="button" @click="activeBtn('Good')">Good</button></li>
    </ul>
</template>

<script>
export default {
    props:['modelValue'],
    emits:['update:modelValue'],
    /* data(){
        return{
            activeOption:this.modelValue,

        }
    }, */
   /*  computed:{
        activeOption(){
           return this.modelValue
        }
    }, */
    methods:{
        activeBtn(option){
           /*  this.activeOption=option */
            this.$emit('update:modelValue',option);
        },
        
    }
}
</script>

<style scoped>
ul{
    list-style: none;
    margin: 0.5rem 0px;
    display: flex;
}
li{
    margin:0 1rem;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc
}
.active{
    border-color: purple;
    color: purple;
}
.active button{
    color: purple;
}
button{
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: none;
}
</style>