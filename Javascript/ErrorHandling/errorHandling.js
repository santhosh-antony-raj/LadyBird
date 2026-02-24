//Errors and Error Handling

/* Refrence error, type error, syntax error
1. "use strict"; ->Reference error
2. type error -> try catch finally
3.syntax error -> Ide itself
*/



"use strict";

/*1. use strict  */
const variable ="Dhuddu";//js wont follow strict rules like C++ still without scope works but not recommended.
console.log(variable);



/*2.Type Error */
const makeError = () =>{
    try{
        const name= "Dhuddu";
        name = "subscribe";
    }catch(e){
        console.table(e);
        //console.log(e.stack);
        //console.error(e);
        //console.warn(e);
    }
}
makeError();

/* Custom Error msg using throw prototype func obj  */

const makeCustomError = () =>{
    try{
       
        throw new customError("this is custom error");
    }catch(e){
        console.table(e);
        //console.log(e.stack);
        //console.error(e);
        //console.warn(e);
    }
}
makeCustomError();

function customError(msg){
    this.msg = msg;
    this.name = "customError";
    this.stack = `${this.name}:${this.msg}`;
}


 /* default error js in built */
 const defaultError = () =>{
    try{
       
        throw new Error("this is custom error");
    }catch(e){
        console.table(e);
        //console.log(e.stack);
        //console.error(e);
        //console.warn(e);
    }
}

defaultError();


/* finnaly with odd number find as Error */

const finalError = ()=>{
    let i=0;
    while(i<=5){
        try{
            if(i%2!==0){
                throw new Error("Odd Number")
            }
            console.log("Even Number");
            
        }catch(e){
            console.log(e);
        }finally{
            console.log(".........finally");
            i++;
            
        }
    }
}
finalError();