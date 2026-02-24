// variable declaration 

let myVariable = "Mathematics";
let result = myVariable.matchAll(/at/g);

//string length
console.log(myVariable.length);
console.log("Santhosh".length);

//string methods

/* charAt helps to find specific char in the string*/
console.log(myVariable.charAt(2));
/* indexOf helps to find first index of the specified char mention */
console.log(myVariable.indexOf("at"));
/* indexOf helps to Last first index of the specified char mention */
console.log(myVariable.lastIndexOf("at"));
/* includes help to find the specified char present in the string or not T or F */
console.log(myVariable.includes("at"));
/* Modern preferrable slice operator when compare to substring
help to slice particular range in the string  Spoint to Epoint
but not include end index char ,
*accept single index and between index(3,4), negative index to find reverse(-3), but not lesser value(8,1) compare to 8 */
console.log(myVariable.slice(-3));
/* split help to split the string and save as a array */
console.log(myVariable.split("e"));
/* replace will replace specfied content */
console.log(myVariable.replace("Mathe","Bio"));
console.log(myVariable.replace("a","@"));
/* replace accepts 2 arguments 1 is regex /a/g(global means gives all like this), 2 is replace char */
console.log(myVariable.replace(/a/g,"@"));
/* uppercase the string */
console.log(myVariable.toUpperCase());
/* Lowercase the string */
console.log(myVariable.toLowerCase());
/* concat with give string */
console.log(myVariable.concat(" Genius"));
/* check T or F  */
console.log(myVariable.endsWith("s"));
/* check T or F */
console.log(myVariable.startsWith("M"));
/* older legacy method helps to get sub string of given string 
** negative numbers not accept, simliar to slice, but greate smaller(8,1) swap it and give relevant substring ** */
console.log(myVariable.substring(2,0));

/* Match using regex return matching chars as array for g(global) and index ,inputs in signle value not global */
console.log(myVariable.match(/a/g));
console.log(myVariable.match(/Mat/));

/* MAtch all return all matched chars index, inputs by regex */
for (let match of result){
    console.log(match);
    
}








