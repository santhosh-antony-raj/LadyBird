//Json JavaScript Object Notataion
//text format
//to send and receive data in many programming languages
const myObj = {
    userId : 101,
    userName : "Santhosh",
    content :["food", "tech","History"],
    sub: function(){
        console.log("Thank u for Sub!!");
        
    }
}

console.log(myObj);
console.log(myObj.userName);
//convert obj -> Json format 
const sendJson = JSON.stringify(myObj);
console.log(sendJson);
console.log(typeof sendJson);//string
console.log(sendJson.userName); 
//convert Json -> obj format
const receiveJson = JSON.parse(sendJson);
console.log( typeof receiveJson);//obj


