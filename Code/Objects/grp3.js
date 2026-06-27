// 1.  Destructure name and age into variables. Then destructure city but rename it to location.
const user = { name: "Vishesh", age: 22, city: "Delhi" };
let {name,age}=user;
let {city: location}=user;
console.log(`${name} is ${age} years old`);
console.log(`city: ${location}`);

// 2. Destructure nested objects:
const person = {
    name: "Vishesh",
    address: { city: "Delhi", pin: 110001 }
};
// get city and pin as standalone variables

let { address: { city, pin } } = person;
console.log(pin);

// 3. Use spread to copy an object. Modify the copy. Verify the original is unchanged. Then try a nested object — is the copy truly safe?

const point1={x:90,y:70};
let point1Copy={...point1};
console.log(point1);
point1Copy.x=100;
console.log(point1Copy);
console.log(point1);

const person3 = {
    name: "Vishesh",
    address: { city: "Delhi", pin: 110001 }
};

let person3Copy={...person3}
console.log(person3Copy);
person3Copy.name="rahul";
console.log(person3Copy);
console.log(person3);

// 4. Use spread to merge two objects:
const defaults = { theme: "light", language: "en", fontSize: 14 };
const userPrefs = { theme: "dark", fontSize: 16 };
// result: { theme: "dark", language: "en", fontSize: 16 }

let result4={...defaults,...userPrefs};
console.log(result4);

// 5. Destructure with a default value:
let user1={name:"rahul",country:'USA'};
let user2={name:"rahul"}
let  { name:uname, country:ucountry = "India" } = user1;
console.log(`name: ${uname} :: country: ${ucountry}`);
let { name:sname, country:scountry = "India" } = user2;
console.log(`name: ${uname} :: country: ${scountry}`);
