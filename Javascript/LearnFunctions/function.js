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


