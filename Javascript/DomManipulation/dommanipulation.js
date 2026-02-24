//DOM Document Object Model

const view1 = document.getElementById("view1");
console.log(view1); //log it to verify

/* queryselector mentioning #,., are manditory so therby it knows it's id or class */

const view2 = document.querySelector("#view2");
console.log(view2);


/* DOM Manipulation */
view1.style.display="flex";
view2.style.display="none";

/* selecting as a multiple class returns Collections */

const views = document.getElementsByClassName("view");
console.log(views);//returns HTML Collection

const newViews = document.querySelectorAll(".view");
console.log(newViews);//returns NOde List

/* Dom Manipulation each and single collection or node of the list */

const divs = view1.getElementsByTagName("div");
console.log(divs);

const newDivs = view1.querySelectorAll("div");
console.log(newDivs);

const evenDiv = view1.querySelectorAll("div:nth-of-type(2n)")
console.log(evenDiv);

/* select particular index in collection */
evenDiv[4].style.backgroundColor="purple";

for(i=0; i<evenDiv.length; i++){
    evenDiv[i].style.backgroundColor ="Green";
    evenDiv[i].style.width = "150px"; 
}

/* Text selection/ inner HTML selection */
const h1  = document.querySelector("header");
console.log(h1);
//h1.textContent = "Dummy";//just cange text content
h1.innerHTML =`<h4> DOM </h4>
<p> Sub click Bell </p>`//change inner html also
//control through 
h1.style.display="flex";
h1.style.justifyContent="space-around";
h1.style.alignItems="center";
h1.style.paddingTop="5px";
h1.style.backgroundColor="black";
h1.style.color="white";
h1.style.margin=0;

/* DOM Navigation */
console.log(evenDiv);

console.log(evenDiv[0].parentElement);//finding parent element
console.log(evenDiv[0].parentElement.children);//findall child collection
console.log(evenDiv[0].parentElement.childNodes);//it gives all nodes include text space.
console.log(evenDiv[0].parentElement.hasChildNodes());//return T or F
console.log(evenDiv[0].parentElement.firstChild);// give text cause every text , space, element cpnsider as nodes.
console.log(evenDiv[0].parentElement.firstElementChild);//gives first child;
console.log(evenDiv[0].parentElement.lastChild);//same text
console.log(evenDiv[0].parentElement.lastElementChild);//element
console.log(evenDiv[0].parentElement.nextSibling);//text
console.log(evenDiv[0].parentElement.nextElementSibling);//element section
console.log(evenDiv[0].parentElement.nextElementSibling.nextElementSibling);//element section
console.log(evenDiv[0].parentElement.previousSibling);//text
console.log(evenDiv[0].parentElement.previousElementSibling);//element

/* Now finding next sibling node and element */
console.log(evenDiv[0].nextElementSibling.nextElementSibling);

console.log(evenDiv[0].nextSibling);// text b

/* display view1 none */
view1.style.display="none";
view2.style.display="flex";

view2.innerHTML=`<h1> My 2nd View </h1>`;
view2.style.justifyContent ="center";
view2.style.alignItems="center";
/*Remove element  */
while(view2.lastElementChild){
    view2.lastElementChild.remove();
}

/* Create Element */
const createCustomDiv = (parent,iter)=>{
const createDiv = document.createElement("div");
createDiv.innerHTML=`<h6>${iter}</h6>`;
createDiv.style.color="white";
view2.append(createDiv);
createDiv.parentElement.style.display="flex";
createDiv.parentElement.style.flexWrap="wrap";

}

for (let i = 0; i <9; i++) {
        createCustomDiv(view2,i);
      
}




















