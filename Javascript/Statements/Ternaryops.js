/* using ternary ops we can handle 3 things in single line condition if true and false like wise we can use multiple ternary  next by one ternary as a nxt condition*/
const Mark =-1;
const isCollegeStudent= false;
if(Mark>100){
    console.log("Invalid data");
    
}else{
    Mark>=90?console.log("Grade A+"):Mark>=80?console.log("Grade B+"):Mark>=70?console.log("Grade B"):Mark>=50?console.log("Grade C"):Mark<50 && isCollegeStudent?console.log("RA"):Mark<50 && !isCollegeStudent && Mark>=0?console.log("F"):console.log("Ab");   
}





