
// 1. Create a user object the verbose way first, 
// then rewrite using shorthand property syntax:
const name = "Vishesh";
const age = 22;
const user = { name: name, age: age }; // verbose
// rewrite with shorthan

const shorthandUser={name,age};
console.log(shorthandUser);

// 2. Create an object where the key is dynamic — computed from a variable:
const field = "score";
// result should be { score: 100 }

console.log({[field]:100});

// 3. Add a method greet() to an object that returns "Hello, I am Vishesh". Call it. 
// Then rewrite using shorthand method syntax.

let selfIntroduction={
    name: "Vishesh"
}
selfIntroduction.greet = function () { return `Hello, I am ${this.name}`}

console.log(selfIntroduction);
console.log(selfIntroduction.greet());

let eName="rahul";
let greet = function () { return `Hello, I am ${this.eName}` };
const intro = { eName,greet};
console.log(intro);
console.log(intro.greet());

// 4. Create a calculator object with methods add(a,b), subtract(a,b), multiply(a,b), divide(a,b). Call each.
const calculator={
    add:(a,b)=>a+b,
    subtract:(a,b)=>a-b,
    multiply:(a,b)=>a*b,
    divide:(a,b)=>a/b
}

console.log(calculator.add(200,100));
console.log(calculator.subtract(200, 100));
console.log(calculator.multiply(200, 100));
console.log(calculator.divide(200, 100));

// 5. Write a method inside an object that uses this to access another property on the same object:
const student = {
    name: "Vishesh",
    marks: 85,
    grade() { 
        /* return grade based on this.marks */ 
         if(this.marks<=100 && this.marks>=70){
            return 'A';
         } else if (this.marks <70 && this.marks >= 50){
            return 'B';
         }else{
            return 'C';
         }
    }
};

console.log(student.grade());
