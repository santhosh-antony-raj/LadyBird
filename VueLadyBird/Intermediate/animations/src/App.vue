<template>

<router-view v-slot="slotProps">
  <transition name="detail" mode="out-in">
    <component :is="slotProps.Component"></component>
  </transition>
</router-view>
  

</template>  

 <script>
//import UserList from './userList.vue';
export default {
 /*  components:{
    UserList
  }, */
  data() {
    return { dialogIsVisible: false, BoxMove:false, isPara: false, isDetailVisible: false ,entercan:null,leavecan:null};
  },
  methods: {
    enterCancelled(el){
      console.log(el);
     console.log(
      this.entercan);
      
    },
    leaveCancelled(el){
      console.log(el);
      console.log(this.leavecan);
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBoxMove(){
      this.BoxMove =true;
    },
    paraAva(){
      this.isPara = !this.isPara;
    },
    showDetail(){
      this.isDetailVisible=true;
    },
    hideDetail(){
      this.isDetailVisible=false;
    },
    beforeEnter(el){
      console.log("beforeEnter");
      console.log(el);
      el.style.opacity=0;
      
    },
    enterActive(el,done){
      console.log("enterActive");
      console.log(el);
      let round =1;
    this.entercan = setInterval(()=> {
        el.style.opacity = round *0.1
        round++;
        if(round>10){
          clearInterval(this.entercan);
          done();
        }
      },20)
    },
    afterEnter(el){
      console.log("afterEnter");
      console.log(el); 
    },
    beforeLeave(el){
      console.log("beforeLeave");
      console.log(el);
      el.style.opacity=1;
      
    },
    leaveActive(el,done){
      console.log("leaverActive");
      console.log(el);
       let round =1;
     this.leavecan= setInterval(()=> {
        el.style.opacity =1 - round *0.1
        round++;
        if(round>10){
          clearInterval(this.leavecan);
          done();
        }
      },20)
    },
    afterLeave(el){
      console.log("afterLeave");
      console.log(el); 
    },


  },
};
</script> 

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animateBoxMoveStyle{
  /* transform: translateX(150px); */
  animation: slide-fade 0.3s ease-out forwards;
}
/* .v-enter-from{
  opacity:0;
  transform: translateY(-30px)  ;
}
.v-enter-active{
  transition: all 3s;
}
.v-enter-to{
  opacity:1;
  transform: translateY(0);
} */
@keyframes slide-fade {
  0%{
    transform: translateX(0px) scale(0);
  }
  70%{
    transform: translateX(-120px) scale(1.2)
  }
  100%{
    transform: translate(-150px) scale(1)
  }
  
}
.detail-enter-from,
.detail-leave-to{
opacity: 0;
}
.detail-enter-active{
transition: opacity 0.3s ease-out;
}
.detal-leave-active{
  transition: opacity 0.3s ease-in;;
}
.detail-enter-to,
.detail-leave-from{
opacity: 1;
}

</style>