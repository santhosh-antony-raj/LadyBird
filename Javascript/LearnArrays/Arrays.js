/* Learn Array's js Arrays are hetrogenus can grow and shrink */

/* array declaration */
const myArr = [];

/* inserting or adding data inside arrays */
myArr[0]=1;
myArr[1]= "Two";
myArr[2]= true;
myArr[3]= 23.5678;

/* logging */
console.log(myArr);
console.log(myArr[3]);

/* adding data front(unsift) and back(push) */
const pushReturnIndex=myArr.push(false);
const unshiftReturnIndex= myArr.unshift("welcome");
console.log(pushReturnIndex);
console.log(unshiftReturnIndex);//but both shows only total idex range not exact inset location 
console.log(myArr);

/* removing data front(sift) and back(pop) */
const poppedItem= myArr.pop()//gives popped item itself
const shiftedItem= myArr.shift()//give shifted item
console.log(poppedItem);
console.log(shiftedItem);
console.log(myArr);

/* modification and manipulation */
const spliceReturnRemovedItem = myArr.splice(1,1,"replaced");//three parameter
console.log(spliceReturnRemovedItem);
console.log(myArr);

/* create new array by part of array */
const myArray2 = myArr.slice(2);
console.log(myArray2);

/* internal arrays 2d, 3d */
const myArray3 = [myArr,myArray2]; //it returns array inside an array not a single array
console.log(myArray3);
console.log(myArray3[0][3]);

/* merge to array as a single array   */
/* use Spread Operator */
const myArray4 =[...myArr,...myArray2];
console.log(myArray4)
console.log(myArray4[4]);
;










