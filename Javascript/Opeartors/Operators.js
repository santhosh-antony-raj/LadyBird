//Operators
/* 1.Logical operators 
2. equaltiy operators
3.Primitive vs Reference Types
4Truthy & Falsy Values + Short-circuit Evaluation
5.Template Literals & Multi-line Strings
6.Symbol Type*/

const score =60;
const uname = "Dunk";
//1.Logical operators  and equality operator

// && , || ,==, !=, ===, >=,<=

if(score <=100 && score >=60){
    if(uname=="Dunk"|| uname!=null)
        console.log("P");
        
}

//== ===
const x ='1';
const y = 1;
console.log((x==y));//true check only content
console.log((x===y));//true check  content and data type

//3.primitive vs refernce types
//primitive data numbers, boolean,float,double
let k=20;
let t=k;
t=25;
console.log(k);//20 
console.log(t);//25 //values only sharing not  reference address

//refernce type
//array obj
let obj ={
    user:'pop'
}
let obj2 = obj;//but in refernce type it sharing memory address only so both having same  obj one modify modify all.

console.log(obj.user);
obj2.user='top';
console.log(obj2.user);
console.log(obj.user);

//4.truth & falsy values &&(and) ||(true) based on condition

//5.symbol type
const hello = Symbol("id");
const world = Symbol("id");

console.log(hello==world);// so using symbol == equal operator also see content as different are like === eqaulity operation.
