

//nullish colesing operator - helps to handle null, undefined instead of this .  we throw  some other values. 
let obj = {
    name: "raj",
    age: 26,
    address :{   
        num: null
    }
}

console.log(obj.address.num??'Nothing');
