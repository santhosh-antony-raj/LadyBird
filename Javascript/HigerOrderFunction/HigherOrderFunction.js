/* Arrays*
– Arrays in JavaScript
– Array forEach Method
– Array map Method
– Array filter Method
– Array find Method
– Array some Method
– Array reduce Method
– Advanced Array Methods: flat, flatMap, findIndex, every, includes
– Array Sorting & Reversing */


const nums = [1,2,3,4,5];

//for loops

for(let h of nums){
    console.log(h);  
}
nums.forEach(function(num){
    console.log(num);
    
})

//map -> helps to transpose the element.
const str =["john","smith"];

str.map((str)=>{
  let val= str.split("");
  console.log(val);
  
})
//flatmap ->map + flat
const doubled = nums.flatMap(n=>[n*2]);
console.log(doubled);
//flat
const nums2 = [1,2,[3,[6,7]],[4,5]];
const newnum2 =nums2.flat(2);//2 is depth how far flat the array
console.log(newnum2);

//filter → returns elements that pass a condition
const greaterThan2 = nums.filter(n=> n>2);
console.log(greaterThan2);

//find → returns FIRST element that matches
const firstEven = nums.find(n=>(n%2===0));
console.log(firstEven);

//some → checks if ANY element matches (true/false)
const hasBigNum = nums.some(n=>n>3);
console.log(hasBigNum);

//reduce -> reduces array to single value
const total = nums.reduce((acc,num)=>{acc+num},0);
console.log(total);

//findIndex → index of first match
const index = nums.findIndex(n => n > 3);
console.log(index); // 3
//🔹 every → checks if ALL elements match T or F
const allPositive = nums.every(n=> n>0);
console.log(allPositive); // true
//🔹 includes → checks if value exists T or F
console.log(nums.includes(3)); // true
console.log(nums.includes(10)); // false
//🔹 sort → sorts array

//👉 ascending order

const sorted = [...nums].sort((a, b) => a - b);
console.log(sorted); // [1, 2, 3, 4, 5]

//👉 descending order

const desc = [...nums].sort((a,b)=> a-b);
console.log(desc); // [5, 4, 3, 2, 1]

//🔹 reverse → reverses array
const reversed = [...nums].reverse();
console.log(reversed); // [5, 4, 3, 2, 1]



