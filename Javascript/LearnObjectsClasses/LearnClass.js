class pizza{
     pizzaName;
     pizzaType;
     toppings;

    constructor(pizzaName,pizzaType,toppings){
        this.pizzaName=pizzaName;
        this.pizzaType=pizzaType;
        this.toppings=toppings;
    }
    getpizzaName(){
        console.log(this.pizzaName);
        return this.pizzaName;
        
    }
    setpizzaName(pizzaName){
        this.pizzaName=pizzaName;
    }
}
const pizza1 = new pizza("Maragritha","Medium","Sausage");
console.log(pizza1);

pizza1.getpizzaName();
pizza1.setpizzaName("Germany");
console.log(pizza1);

/* inheritence extends */

/* classic inheritence model */
class animal{
    sound;// even not mention works  js is dynamic creates in runtime by constructor
    aname;
    constructor(aname,sound){
        this.sound=sound;
        this.aname=aname;
    }
    walk(){
        console.log("my Dog "+this.aname+ " can "+this.sound);
        
    }
}

class dog extends animal{
    
}

const d1 = new dog("rocky","lol");

console.log(d1.aname +" "+
d1.sound);
d1.walk()

/* prototype model */
 const birds ={
    birdname : "birdname"
 }

 const eagle = Object.create(birds);
 eagle.birdname = "skyscraper";

 console.log(eagle.birdname);
 
