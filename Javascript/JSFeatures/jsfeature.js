/* JS features
Spread Operator & Rest Operator
– Destructuring Assignment
– Nested Destructuring
– Optional Chaining */

const n1 = [1,2,3];

const n2 = [...n1,4,5];//spread operator
console.log(n2);


const [first,...rest]= [23,45,66];//rest operator

console.log(first);
console.log(rest);

//destructuring assingment

const [l,m,n] = n1;
console.log(l);
console.log(m);
console.log(n);

//desturcting nested objects and optional chaining

const nesObj ={
    king :"John",
    Queen:"daneryes",
    Address:{
        city:"westroes"
    }
}
const{Address:{city}}=nesObj;
console.log(city);

//optional chainning
nesObj.Address?.city // optional null cloeascing helps to handle error.




























