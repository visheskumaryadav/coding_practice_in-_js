// Group 1 — Creating and Accessing Properties

// 1. Create a person object with name, age, city. Access each property two ways — dot notation and bracket notation.

const person={
    name:"rahul",
    age:27,
    city:"mumbai"
}

console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log("-".repeat(60));

// 2. Create an object where one key has a space in it: "full name". Access it. Why can't you use dot notation here?

const student={
    "full name":'rahul sharma',
    age:14
}
console.log("-".repeat(60));
console.log(student["full name"]);

// 3. Given const key = "age", access that key dynamically from a person object using bracket notation.
const key = "age";
console.log(person[`${key}`]);
console.log("-".repeat(60));

// 4. Add a new property to an existing object after creation. 
// Update an existing one. Delete one. Print the object after each operation.
console.log(person);
person.gender='male';
console.log(person);
person.city="Delhi";
console.log(person);
delete person.age;
console.log(person);
console.log("-".repeat(60));

//5. Check if a property exists on an object — two ways: in operator and hasOwnProperty.
//  Then check for a property that doesn't exist.

console.log(Object.hasOwn(person, name));
console.log("-".repeat(60));


