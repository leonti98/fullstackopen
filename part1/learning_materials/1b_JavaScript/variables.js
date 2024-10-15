let a;
let name = 'Simon';

// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here

const Pi = 3.14; // Declare variable Pi
console.log(Pi); // 3.14

// Pi = 1; // will throw an error because you cannot change a constant variable.

//const declarations only prevent reassignments — they don't prevent mutations of the variable's value, if it's an object.
const obj = {};
obj.a = 1; // no error
console.log(obj); // { a: 1 }

// Cannot access 'x' before initialization
function foo(x, condition) {
  if (condition) {
    console.log(x);
    const x = 2;
    console.log(x);
  }
}

foo(1, true);

//
let b = 1;
b = 'foo';
