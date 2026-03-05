const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
  //life cycle
  beforeCreate(){
    debugger;
    console.log("before Create");
  },
  created(){
    console.log("created");
    
  },
  beforeMount(){
    console.log("beforeMount");
    
  },
  mounted(){
    console.log("Mounted");    
  },
  beforeUpdate(){
    console.log("beforupdate");
    
  },
  updated(){
    console.log("updated");
    
  },
/*   beforeUnmount(){
    console.log("beforUnmount");
  },
  unmounted(){
    console.log("unmounted");

  } */
});

app.mount('#app');
/*
setTimeout(()=>{
  app.unmount();
},3000) */
//******************************************************************************************************************** */
//reactivity example
let msg = "hello";
let longmsg = msg + "world";
console.log(longmsg);//hello world

msg="Heloo!!!!";
//longmsg = msg + "world"; recompute the value and can we solve through this.
console.log(longmsg);//once decalred no relation btw them
//print hello world

//************************************************************************************************** */
//overcome through proxy/observers/or calling through function

let msg2 = {
  greet:"Bonjour",
}

let longmsg2 = ()=>msg2.greet + "World";
console.log(longmsg2());

msg2.greet="Bonjour!!!!!!!!!";

console.log(longmsg2()); // this act as reactivity cause call through function each time go & derived the  latest value

//***************************************************************************************************************************** */
//through proxy
const data ={
  msg3 :"vana",
  longmsg3: "world",
}
const handler={
  set(target,key,value){
    if(key==='msg3'){
      target.longmsg3 = value + 'World!!'
    }
    target.msg3 = value;
  }
}
const proxy = new Proxy(data,handler);
proxy.msg3="vanakkam!!!";

console.log(proxy.longmsg3);


