/* alert box pop up with alert msg */
alert("hello");
/* confirm hellps to get whether the user confirm Boolean value */
const isUserAdult = confirm("Are You 18+");
console.log(isUserAdult);
if(isUserAdult){
    console.log("Welcome to Netflix Adult Content Enjoy!");
    
}else{
    console.log("Continue Enjoy Standard Netflix!");
    
}


/* custom Function */
const inputSharp = ()=>{
    if(UserInput){
         return UserInput.trim().toLowerCase();
    }
   
}
const userAge = ()=>{
    if(userAge){
        return parseInt(UserInput);
    }
    
    
}

/* get citizenship input*/
let UserInput = prompt("Are you Indian");
console.log(UserInput);

/* Logic for Voter Eligiblity */
if(!UserInput){
    console.log("User Cancelled the prompt");
    
}else{
    const finalUserInput = inputSharp();
    if(finalUserInput=== "yes") {
    console.log("Welcome!!! Indain Citizen Click Ok for Next Step");
    console.log(finalUserInput);

    UserInput = prompt("Enter your Age in Number");
    console.log(UserInput);
    const finalUserAge = userAge();
    console.log(finalUserAge);
    
    if(isNaN(finalUserAge)){
        console.log("Enter Valid Number");
        
    }
    else if(finalUserAge>=18){
        console.log("Eligible for Voter Card");
        
    }else{
        console.log("Next time!!");
        
    }
    
}else if(finalUserInput==="no"){
    console.log("Need To Be Indian CitiZen");
    console.log("No");  
}else{
    console.log("Invalid Data");
    
}



}
