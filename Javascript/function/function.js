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
        this.apple=200;//this keywork act as this function keyword
    },
    hello:()=>{
        this.apple=250;//since no this in arrow act as box level this keyword
    }
}
box.hello();
console.log(`apple myFunc ${apple}`);

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