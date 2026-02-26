//Functions
/* Functions in JavaScript
– Closure Explained
– Arrow Functions & Lexical this
– Default & Rest Parameters
– Callback Hell & How to Avoid */

//function

function HelloWorld(){
    console.log("Hello World");
    
}
HelloWorld();

//closure Explained
//inner function remembers outer one

const outer = function(){
     count =0;
    const inner = function(){
        count++;
        console.log(count);
        return inner;

    }
    inner();
    
}
outer();

//Arrow function & lexical this.

/* normally func have this keyword so inside func it returns it won value. */

//so use arrow func it not have its own this keyword

const box = {
    apple:100,
    orange:25,
    myFun :function(){
        this.apple=200;//this keywork act as this obj function keyworf it behave dyynamically
    },
    hello:()=>{
        this.apple=250;//arrow always refers to this means global level it makes window.apple=250 not box.apple use strict throw error
    }
}
box.hello();
console.log(`apple myFunc ${box.apple}`);//100 only beacuse it 

//default parameter and rest parameter

//default parameter
const def = function(uname='unknown',age=0){
 console.log(uname, age);
 
}
def('santhosh',24);

//rest parameter
const sumvalue = function(...numbers){
   let val= numbers.filter( numbers=>{
     return numbers>1
   }
   )
   console.log(val);
   
}
sumvalue(1,2,3,4);

/* funtion are helps to avoid code duplication and call when actually its needs maintain clean code */

//naming function
const hello = function(){
    console.log("Hello World");
    return "Hello World";
    
}
hello();

//custom function
const MyName = "santhosh";
const toProperCase = ()=>{
    return MyName.slice(0,1).toUpperCase() + MyName.slice(1).toLowerCase();       
}
const finalMyName = toProperCase();
console.log(finalMyName);


