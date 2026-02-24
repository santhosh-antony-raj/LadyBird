//scope var,let,const


/* for a  
variable lifetime determining called scope */

/* Global, local level(function, block level) scope */

/* global level declaration*/
var x = 1; // depricated leagcy system usage only
let y = 2;
const z = 3;
console.log("global level: "+ x);
console.log("global level: "+ y);
console.log("global level: "+ z);
/* local level visible in local level */
const myFunction = ()=>{

    /* Block level scope */
    {
        var y =4;//act as a function level scope.
       const z =6;
       console.log("Block level: "+x);
        console.log("Block level: "+y);
        console.log("Block level: "+z);


    }
     
    const z =5;
    console.log("Function level: "+x);
    console.log("Function level: "+y);//value 4 var global act as function level
    console.log("Function level: "+z)
    
   
}


myFunction();