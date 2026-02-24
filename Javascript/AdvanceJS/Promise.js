/* *Promises & Async*
– Understanding Promises
– Promise then() Method
– Promise catch() Method
– Why Promises Are Needed
– Async/Await Simplified
– Fetch API (GET & POST) + JSON.parse / JSON.stringify
– Async Iteration: for await...of
– setTimeout in JavaScript
– setInterval in JavaScript
– LocalStorage in JavaScript
– ES Modules (import/export) */

//promises give back three state pend,rej,fullfilled
const myPromise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{console.log("my Promise");},resolve("Completed"),4000)
});
console.log(myPromise2);
//why promises to handle async method.
/* const myPromise = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{ reject("failed")},2000);
    setTimeout(()=>{let arr=[10,20,30,40];resolve("Completed")},2000);
    
});
console.log(myPromise);

//thennable and catch for if executed do this, if error catch

myPromise.then((arr)=>{console.log("result", arr);}).catch((error)=>{
    console.log("Error Finded",error);
    
}); */

//why need promise reat time one example
/* function getUsers(){
    let users =[];
    setTimeout(()=>{
        users =[
            {username:'john',email:'john@test.com'},
            {username:'jane',email:'jane@test.com'},
        ]
    },2000);
    return users;
}

function findUser(username){
    const users = getUsers();
    const user = users.find((user)=> user.username===username);
    return user;
}
const val =findUser('john');
console.log(val); */// return undefined because setimeout is make that piece of code run ceratin time after.

//so, promise

function getUsers(){
    return new Promise((resolve,reject)=>{
        let users =[];
    setTimeout(()=>{
        users =[
            {username:'john',email:'john@test.com'},
            {username:'jane',email:'jane@test.com'},
        ]; resolve(users)
    },2000);
    return users;
    })
    
}

function findUser(username){
    getUsers().then((users)=>{
        const user = users.find((user)=> user.username===username)
        console.log(user);
        
    }
    ).catch((result)=>{
        console.log("error"+result);
        
    })
}
console.log(findUser('john'));


//to make this again sync to cureent execution time line use async and await.

function fetchData(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Data successfully fetched")
        ,2000})
    })
}
async function processData(){
    try{
        const data = await fetchData();
        console.log(data);
    }catch(err){
        console.log(err);
        
    }    
}
processData();

//fetch Api(GET & Post)

//used for network request
/* 1.fetch -> modern
2. XMLHttpRequest() 
3.axios*/

//get
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => console.log(("Get Result:", data)))
.catch(error => console.log(error));

//Post
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"POST",
    headers:{
        "content-type": "application/json"
    },
    body: JSON.stringify({
        title:"My Post",
        body: "this is new Post!",
        userId:1
    })
})
.then(response => response.json())
.then(data => console.log(("Get Result:", data)))
.catch(error => console.log(error));

//setTimeout and SetInterval
/* setTimeout for execute it particular time after async */
/* setTimeInterval for execute set of code again and again several interval after.  */


/* Finally Async iteration */
const urls =['https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];

async function fetchData(){
    for await(const url of urls){
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.title);
        
    } 
}
fetchData();





