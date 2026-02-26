//Employee Constructor Function
function Employee(id,name,age,salary,dept){
        this.id =id;
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.dept =dept;
}

//Creation simple Employee DB {object}
const EmployeeDB={}

//function to add emp data to db
function addEmployee(id,name,age,salary,dept){
    const emp = new Employee(id,name,age,salary,dept);
    EmployeeDB[id] = emp;
    console.log("Added employee ID "+id+" to DB");
}



//function to get all values

function getEmployee(){
   let emp = Object.values(EmployeeDB);
   console.log("List of Employees");
   emp.forEach((e)=>{console.log(`Name: ${e.name}, Dept: ${e.dept}, salary: ${e.salary}`);
   })
   
}


//function to get employe by id

function getEmployeeById(id){
    if (EmployeeDB[id]) {
        return EmployeeDB[id];
    }
    return `No Employee found in the ${id}`;
}


//update employee

function updateEmployeeById(id,updatedetails){
    if (EmployeeDB[id]) {
        Object.assign(EmployeeDB[id],updatedetails)
    }
    else{
        console.log(`No Employee found in the ${id}`);
        
    }
}


//freeze to make emp detail immutable
function makefreeze(id){
    if(EmployeeDB[id]){
        Object.freeze(EmployeeDB[id])
    }else{
     console.log(`No Employee found in the ${id}`);
    }
}
//seal u can modify but u van't delete and change structure
function makeseal(id){
    if(EmployeeDB[id]){
        Object.seal(EmployeeDB[id]);
    }else{
     console.log(`No Employee found in the ${id}`);
    }
}

//add employee;
addEmployee(101,'Admin',24,75000,'IT');
addEmployee(102, 'Alice', 28, 68000, 'HR');
addEmployee(103, 'Bob', 35, 82000, 'Finance');
addEmployee(104, 'Charlie', 30, 72000, 'IT');
addEmployee(105, 'Diana', 26, 64000, 'Marketing');
addEmployee(106, 'Ethan', 40, 90000, 'Operations');
addEmployee(107, 'Fiona', 32, 77000, 'IT');
addEmployee(108, 'George', 29, 61000, 'Sales');
addEmployee(109, 'Hannah', 34, 85000, 'Finance');
addEmployee(110, 'Ivan', 31, 70000, 'Support');
addEmployee(111, 'Julia', 27, 66000, 'HR');

//get employee
console.log(" Get All Employee");

getEmployee();


//get employeBY Id
console.log(" Get Employee BY ID");
const emp = getEmployeeById(101);
console.log(emp);


//update employee by id
console.log(" Update Employee By Id");

updateEmployeeById(101,{salary:7000});
console.log(emp);




//seal employe by id
console.log(" sealing so these detail cant deleteable *******");

makeseal(103);
updateEmployeeById(103,{salary:0})
getEmployee();
console.log("another Seal ********");

makeseal(101);
EmployeeDB[101].salary =0;
getEmployee();
//freeze employee by id
console.log(" Freeze so these detail immutable");

makefreeze(102);
EmployeeDB[102].salary=10;//wont work
//updateEmployeeById(102,{salary:0}) throw Cannot assign to read only property 'salary' of object '#<Employee>'
getEmployee();










