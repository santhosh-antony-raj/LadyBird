//Math operation
let num = 4.5;
let num2 = 4.2;
console.log(Math.PI);
/* trunc helps to give only value before decimal */
console.log(Math.trunc(Math.PI));

/* round helps to round based on .5 low to high  */
console.log(Math.round(num));// 4-.5 so 5
/* ceil helps to round to higher value */
console.log(Math.ceil(num2));//4.2 still 5
/* floor always round the value low even 4.9 to 4 */
console.log(Math.floor(num));

/* Math.pow helps to give power value */
console.log(Math.pow(2,3));//8
console.log(Math.pow(2))//Nan

/* max, min,random */
console.log(Math.max(2,99,3));//99
console.log(Math.min(2,99,3));//2
console.log(Math.random());//generate random value between 0.11111 to 0.9999
/* to emphazies random  */
console.log(Math.floor(Math.random()*100)+1);


/* code challenge  */
//bring randomly any char from your name
let myName = "san";
console.log(myName.charAt(Math.floor(Math.random()*myName.length)));




