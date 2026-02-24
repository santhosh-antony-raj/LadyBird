/* objects  */
/* js is a prototype language after integraed with ECMA script its become object oriented language */

const obj ={
    id : 1,
    user: "sam",
    email: "sam@gmail.com",
    contact: 6385480659,
    isSubscribed:{
        subValue:true,
        subType:"Monthly",
        isAutoPay:false,
        favirotes:["VijaySong","TamilSong","Melody","englishSong","VijayAtony","Anirudh","Arr"]
    }

}
/* helps to log entire obj/prototype */
console.log(obj);

/* access particular obj eg obj(inside array) */
console.log(obj.isSubscribed.favirotes);

/* manipulate obj */
const man1 = obj.isSubscribed.favirotes.splice(3,1,"HiphopSong");
console.log(man1);//save replaced content
console.log(obj);

/* same thing do it in different way */

/* destructuring object Modern way  */

/* destructuring — super useful JavaScript feature. It lets you pull values out of objects (or arrays) into variables in one clean step. */


const {contact} = obj;
console.log(contact);

/* nested obj destructuring  with alias name*/

const{
    isSubscribed : {subType: hello}
}= obj;
console.log(hello);


/* Destructuring in function and parameters*/

function myFunction({contact, hello}){
    console.log(`User Contact ${contact} and Type is ${hello}`);
    
}
myFunction(obj);


/* Objects*
– Working with Objects
– Object values() Method
– Object keys() Method
– Object entries() Method
– Object freeze() Method
– Object seal() Method */

const myObj = {
    username : "Aegon",
    age : 20,
    nums:[10,20,30]
}
console.log(Object.values(myObj));
console.log(Object.keys(myObj));
console.log(Object.entries(myObj));
Object.freeze(myObj);//freeze so top level properties not delete add or modify
Object.freeze(myObj.nums);//for inner level mention thos like this
myObj.username="Aerion";
delete myObj.nums[0];
console.log(myObj);

const myArr = [1,2,3,4,5];
Object.seal(myArr);// modify but cant delete
myArr[2]=99;
delete myArr[2];
console.log(myArr);








