// 1. Given a student object, use Object.keys(), Object.values(), Object.entries() on it. 
// Print each and understand the shape of what each returns.
let user = { name: "Vishesh", age: 22, city: "Delhi" };
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

let result=Object.entries(user).reduce((initialValue,curentValue,index)=>{
        return `${initialValue} ${curentValue[0]}: ${curentValue[1]}\n`
},"");

console.log(result);

// 2. Use Object.entries() to loop over an object and print each key-value pair as "name: Vishesh". Do not use for...in.
user = { name: "Vishesh", age: 22, city: "Delhi" }
for (let [key, value] of Object.entries(user)){
    console.log(`${key}---> ${value}\n`);
    
}

// 3. Given:
const scores = { maths: 90, science: 85, english: 100 };
// Use Object.entries() and reduce to find the subject with the highest score.

let result3=Object.entries(scores).reduce((initialValue,currentValue,index,arr)=>{
    console.log(` Before :: ${typeof currentValue[1]} ---> ${currentValue[1]} ---> initialValue: ${initialValue} `);
    
    if(currentValue[1]>initialValue[1]){
        initialValue[1]=currentValue[1];
        initialValue[0]=currentValue[0];
    }
    console.log(`After :: ${typeof currentValue[1]} ---> ${currentValue[1]} ---> initialValue: ${initialValue} `);

    return initialValue;
},["",0])

console.log(result3[0]);

// 4. Use Object.assign to merge two objects into a new one. Then do the same with spread. What is the difference?

let p1={x:100,y:50};
console.log(p1);
let p2={z:66,k:55};
console.log(p2);
let p1_p2=Object.assign({},p1,p2);
console.log(p1_p2);
console.log(p1);
console.log(p2);
let p2_p1={...p1,...p2};
console.log(p2_p1);

// 5. Use Object.freeze on an object and try to modify a property. 
// What happens in strict mode vs normal mode? What does freeze NOT protect against?

const environment=Object.freeze({env:'qa'});

environment.env='dev';
console.log(environment);
