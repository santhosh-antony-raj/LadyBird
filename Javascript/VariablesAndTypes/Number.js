/* Important Strings include char,numbers display white or black color.
 numbers present in blue colors
*/
//numbers
let number = 42;
let num = "42";
let str="dhuddu";
let numstr = "43.0843sss"
let numberfloat = 42.08;

// basics of numbers
console.log(number);
console.log(numberfloat);

/* toString() will convert num to string value  */
console.log(number.toString());

/* to check type use typeof */
console.log(typeof number.toString());

/* Learn basic things about NaN undefined */
console.log(number + 3);
console.log(num + 3);//423
console.log(Number(number)+3);//convert num 42+3 =45
console.log(Number(str));//NaN
console.log(Number.isNaN(NaN));// true it checks output itself NaN are not
console.log(isNaN(str));//dhuddu is nan so, True
console.log(isNaN(numstr));//43.08ss mix of num and char So, True

/* parseFloat and ParseInt */
 console.log(parseFloat(numstr));//even though char present 43.08sss it parse it as 43.08
 console.log(parseInt(numstr));// same like parseFloat gives only Int value

 console.log(parseFloat(numstr).toFixed(2));
 
 





