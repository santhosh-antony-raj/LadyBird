//🧩 1. Function Declaration
function greet() {
  return "Hello";
}
//Traits

//✅ hoisted (can call before definition)
//✅ has its own this (depends on call-site)
//✅ named function

//🧩 2. Function Expression
const greet = function () {
  return "Hello";
};
Traits

/* ❌ not hoisted like declarations
✅ created at runtime
✅ can be anonymous */

//Used when you want functions stored in variables.

//🧩 3. Arrow Function (Lexical Behavior King)
const greet = () => "Hello";
//Traits

/* ❌ no own this
❌ no arguments object
❌ cannot be used with new
✅ inherits this from outer scope

Best for callbacks and closures. */

//🧩 4. Method (Function inside object)
const user = {
  name: "Sam",
  sayHi() {
    console.log(this.name);
  }
};
//Traits

/* 👉 this = object before dot
👉 used for behavior tied to data */

//🧩 5. Constructor Function
function User(name) {
  this.name = name;
}

const u = new User("Sam");
//Traits

/* ✅ used with new
✅ creates object
✅ this = new instance

Old-school OOP style. */

//🧩 6. IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("runs instantly");
})();
//Traits

/* ✅ executes immediately
✅ creates private scope
✅ no global pollution
 */
//🧩 7. Generator Function
function* counter() {
  yield 1;
  yield 2;
}
//Traits

/* ✅ pauses execution
✅ returns iterator
✅ used for lazy sequences */

//🧩 8. Async Function
async function load() {
  return "data";
}
//Traits

/* ✅ always returns Promise
✅ allows await
✅ async execution context */

/* 🧠 Conceptual Classification (Execution Context View)
Based on this

normal function → dynamic this

arrow function → lexical this

Based on creation time

declaration → creation phase

expression → execution phase

Based on invocation behavior

constructor → new

regular → direct call

method → object call */