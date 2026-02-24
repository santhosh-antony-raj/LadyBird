/* Event listner */ 

/* .addEventListener(event,function,usecapture){} */

/* ready state change actual document loading final stage scenario */

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        console.log("Auto Completed"); 
        initApp();
    }
    
},false)
const initApp = ()=>{
const view1 = document.querySelector("#view1");
const view2 = document.querySelector("#view2");

/* Dom Manipulation to get intialize screen view */
view1.style.display="none";
view2.style.display="flex";
const div = document.createElement("div");
view2.append(div);
view2.style.justifyContent="center";
view2.style.alignItems="center";
div.innerHTML=`<h6> Subscribe</h6>`;
const h6 = div.querySelector("h6");
/* Event listener intro 

const doSomething = ()=>{
    alert("Do Something");
}

div.addEventListener("click",()=>{
    doSomething();
},false);
*/


/* bubbling up example *
//control through stoppropagation();
//or control use setTimout () for delay occurenece
view2.addEventListener("click",(event)=>{
    view2.style.backgroundColor = "purple";
});
div.addEventListener("click",(event)=>{
    div.style.backgroundColor = "blue";
});
h6.addEventListener("click",(event)=>{
    event.stopPropagation();
    event.target.textContent = "Subscribed";
});*/




/* Bubbling down when usercapture true *
view2.addEventListener("click",(event)=>{
    event.stopPropagation();//helps to control the transition from that listener itself not let pass it to another
    view2.style.backgroundColor = "purple";
},true);
div.addEventListener("click",(event)=>{
    
    div.style.backgroundColor = "blue";
},true);
h6.addEventListener("click",(event)=>{
    
    event.target.textContent = "Subscribed";
},true);
*/


/* Bubbling up but with event targeting *
view2.addEventListener("click",(event)=>{
    event.target.style.backgroundColor = "purple";
});
div.addEventListener("click",(event)=>{
    event.target.style.backgroundColor = "blue";
});
h6.addEventListener("click",(event)=>{
    //event.stopPropagation();
    event.target.textContent = "Subscribed";
});*/

/* Bubbling Down but with event targeting */
/* view2.addEventListener("click",(event)=>{
    event.target.style.backgroundColor = "purple";
},true);
div.addEventListener("click",(event)=>{
    
    event.target.style.backgroundColor = "blue";
},true);
h6.addEventListener("click",(event)=>{
    
    event.target.textContent = "Subscribed";
},true); */

/* To act or get exact event use event.currentTarget */

/* use Class List for add or Remove class style in particular event */

/* for form use event.preventdefault() to mainatain the event until it done */


view2.addEventListener("click",(event)=>{
     
    view2.classList.toggle("purple");

});
div.addEventListener("click",(event)=>{
   
    div.classList.toggle("green");
   
});
h6.addEventListener("click",(event)=>{
    const myText =event.target.textContent;
    myText=== "subscribe" ? (event.target.textContent="subscribed"):(event.target.textContent="subscribe");
});
}



