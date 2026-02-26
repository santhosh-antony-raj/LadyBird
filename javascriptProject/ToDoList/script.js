
const inputBox = document.getElementById("input");
const button = document.getElementById("button");
const ul = document.getElementById("ul");
//btn click
button.addEventListener('click',()=>{
        if (inputBox.value==='') {
            alert("write Something");   
        }else{
             let li = document.createElement("li");
        li.textContent = inputBox.value;
        ul.style.listStyle="none";
        ul.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
        li.style.display="flex";
        li.style.justifyContent="space-between"
        span.style.borderRadius ="50%";
        span.style.backgroundColor="grey";
        span.style.color="whitesmoke";
        span.style.cursor ="pointer";
        span.style.width="25px";
        span.style.height="25px";
        span.style.textAlign="center";
        span.style.marginRight="25px"
        span.style.marginTop="3px"
        saveData();
        }

        inputBox.value="";
       
})

ul.addEventListener('click',(e)=>{
        if (e.target.tagName==='SPAN') {
            e.target.parentElement.remove();
            saveData();
        }
})

function saveData(){
    localStorage.setItem('data', ul.innerHTML);
}

function getData() {
  ul.innerHTML =  localStorage.getItem('data');
    
}
getData();


/* 
Java Script
×
Read Atomic Habits For 5 Minutes
×
Cook Food for 2 times
×
Call Anil Ambani
×
Charge U drink Coconut Water
*/