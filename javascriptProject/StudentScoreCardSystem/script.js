
console.log("hello world");

let studentDB =[];

//function for get input 
function AddStudent(stdname, score){
    score = Number(score);
    score = score??0;
    stdname = stdname.trim().toUpperCase();
    studentDB.push({stdname,score});
}

//function grade
function getGrade(){
    let grade ='F';
    return studentDB.map((student)=>{
        if(student.score>=90) grade='A+';
        else if(student.score>=80) grade='A';
        else if(student.score>=70) grade='B+';
        else if(student.score>=60) grade='B';
        else if(student.score>=50) grade ='C';
        else grade='F';
        return{...student,grade};
    })
}

//top score by filter
function topScore(){
    studentDB.filter((student)=>{
        if(student.score>=90)console.log(student);
        
    })
}
//filtering failures
function failurelist(){
   let grade ='F' 
   let graded = getGrade();
    graded.filter((std)=>{
        if(std.grade.toLowerCase()===grade.toLowerCase()){
            console.log(`Stdname | Score | Grade`);
            console.log(`${std.stdname} | ${std.score} | ${std.grade}`)
        }
        
    })
}
//function for search by find
function searchstd(stdname){
  const result= studentDB.find((std)=>std.stdname.toLowerCase() === stdname.toLowerCase())
  return result??`no one found as ${stdname}`;
  
}
//function for failure by some
function forFailures(){
   return studentDB.some((student)=>{
        if(student.score<50) return student;
        
    })
}

//function for display data 
function displayAll(){
  let  graded = getGrade();
    graded.map((stddetails)=>{
        console.log(`Stdname | Score | Grade`);
        console.log(`${stddetails.stdname} | ${stddetails.score} | ${stddetails.grade}`)
    })
}

//adding data
AddStudent("Stark",`99`);
AddStudent("Eva","74");
AddStudent("Rahen","52");
AddStudent("Dsouza","35");
AddStudent("Lisa","69");
AddStudent("Del Ray","81");
//calling all the function

//display;
console.log(" Displaying all the students Score Cards");
displayAll();

//top score
console.log(" Top Scores");
topScore()

//search
console.log(" searching By name");
const search =searchstd("Eva");
console.log(search);


//failures
console.log(" searching for failures");

let allpass = forFailures()?"Yes There is Some Failures":"All Pass";
console.log(allpass);

//list of failures
console.log("Failures");
failurelist();











