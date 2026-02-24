/* switch is used to switch  based on given requiremnets meet to the given case */
const Mark = 91;
const isCollegeStudent =false;
switch(true){
case Mark>=90:
    console.log("Grade A+");
    break;
case Mark>=80:
    console.log("Grade A");
    break;
case Mark>=70:
    console.log("Grade B");
    break;
case Mark>=50:
    console.log("Grade C");
    break;
case Mark<50:
    if(isCollegeStudent){
        console.log("RA");
        break;
    } 
    else{
        console.log("F");
        break;
    }
default:
    console.log("Absent");
    break;
          
}


