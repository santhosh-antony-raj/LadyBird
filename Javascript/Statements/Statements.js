//string based statements
const viewer = "";
const reply = "Excited to meet you";
const isSubscribed = false;
const msg = "Enjoy Premium contents";

if(viewer){
    console.log(reply);
    if(isSubscribed){
        console.log(msg);
        
    }else{
        console.log("Enjoy as a standard user");
        
    }    
}else{
    console.log("processing");
    
    }

// Grade
const mark = 80;
const collegeStudent = true;
if(mark>=90){
    console.log("Grade A+");
    
}else if(mark>=80){
    console.log("Grade A");
    
}else if(mark>=70){
    console.log("Grade B");
    
}else if(mark>=50){
    console.log("Grade C");
    
}else{
    if(collegeStudent){
        console.log("RA");
        
    }else{
        console.log("F");
    }
    
    
}
