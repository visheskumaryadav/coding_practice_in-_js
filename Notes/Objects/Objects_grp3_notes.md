# Objects - Group 3: Destructuring, Spread, Merge

## Q1. Basic Object Destructuring

**Problem:** Destructure `name` and `age` into variables. Then destructure `city` but rename it to `location`.

**Solution:**

```js
const user = { name: "Vishesh", age: 22, city: "Delhi" };

let { name, age } = user;
let { city: location } = user;

console.log(location);  // "Delhi"
```

### Explanation

Object destructuring extracts properties by **name** (unlike arrays which use position).

**Renaming syntax:** `{ originalKey: newName }`

```js
const { city: location } = user;
// Reads as: "take the city property, call it location"
// city is NOT created as a variable — only location is
```

**Common mistake:**

```js
const { city: location } = user;
console.log(city);      // ReferenceError! city is not defined
console.log(location);  // "Delhi" — this is the variable
```

---

## Q2. Nested Destructuring

**Problem:** Destructure nested objects to get `city` and `pin` as standalone variables.

**Solution:**

```js
const person = {
    name: "Vishesh",
    address: { city: "Delhi", pin: 110001 }
};

let { address: { city, pin } } = person;
console.log(city);  // "Delhi"
console.log(pin);   // 110001
```

### Explanation

The pattern mirrors the object shape:

```js
// Object shape:       { address: { city: "Delhi", pin: 110001 } }
// Destructure pattern: { address: { city, pin } }
```

**Gotcha:** `address` is NOT created as a variable — it's just a path to reach `city` and `pin`.

```js
console.log(address);  // ReferenceError!
```

If you need `address` AND its inner properties:

```js
const { address, address: { city, pin } } = person;
// Now address, city, and pin are all available
```

---

## Q3. Spread Copy — Shallow vs Deep

**Problem:** Use spread to copy an object. Modify the copy. Then try with a nested object — is the copy truly safe?

**Solution:**

```js
// Flat object — spread copy is safe
const point1 = { x: 90, y: 70 };
let copy = { ...point1 };
copy.x = 100;
console.log(point1.x);  // 90 — original untouched

// Nested object — spread copy is NOT safe
const person = { name: "Vishesh", address: { city: "Delhi" } };
let personCopy = { ...person };
personCopy.name = "Rahul";          // safe — primitive
personCopy.address.city = "Mumbai"; // DANGER — mutates original!
console.log(person.address.city);   // "Mumbai" — original changed!
```

### Explanation: Shallow Copy vs Deep Copy

This is one of the most important gotchas in JavaScript.

```
Spread copy ({ ...obj }):

person       ──→ { name: "Vishesh", address: ─→ { city: "Delhi" } }
personCopy   ──→ { name: "Rahul",  address: ─┘                    }
                                        ↑
                              SAME reference! Both point to the same nested object
```

| Property type | Spread copy safe? | Why |
|---|---|---|
| Primitives (string, number, boolean) | Yes | Copied by value |
| Objects / Arrays (nested) | **No** | Copied by reference — same object in memory |

**How to deep copy:**

```js
// Way 1: structuredClone (modern, recommended)
const deep = structuredClone(person);

// Way 2: JSON trick (works for plain data, breaks on functions/Date/undefined)
const deep = JSON.parse(JSON.stringify(person));
```

---

## Q4. Merging Objects with Spread

**Problem:** Merge `defaults` and `userPrefs` — user preferences should override defaults.

**Solution:**

```js
const defaults  = { theme: "light", language: "en", fontSize: 14 };
const userPrefs = { theme: "dark", fontSize: 16 };

let result = { ...defaults, ...userPrefs };
// { theme: "dark", language: "en", fontSize: 16 }
```

### Explanation

When spreading multiple objects, **later values overwrite earlier ones** for the same key.

```js
{ ...defaults, ...userPrefs }
//  theme: "light" gets overwritten by theme: "dark"
//  language: "en" stays (not in userPrefs)
//  fontSize: 14 gets overwritten by fontSize: 16
```

**Order matters:**

```js
{ ...userPrefs, ...defaults }  // defaults would overwrite user's choices — wrong!
```

This is the standard **"defaults + overrides"** pattern used everywhere in JS configuration.

---

## Q5. Destructuring with Default Values

**Problem:** Destructure with a default value that kicks in when the property is missing.

**Solution:**

```js
let user1 = { name: "Rahul", country: "USA" };
let user2 = { name: "Rahul" };

let { name, country = "India" } = user1;
console.log(country);  // "USA" — property exists, default ignored

let { name: n2, country: c2 = "India" } = user2;
console.log(c2);  // "India" — property missing, default used
```

### Explanation

Default values only apply when the property is `undefined` (missing or explicitly `undefined`).

```js
const { x = 10 } = { x: undefined };  // x = 10 (default applied)
const { x = 10 } = { x: null };       // x = null (null is NOT undefined)
const { x = 10 } = { x: 0 };          // x = 0 (0 is NOT undefined)
const { x = 10 } = { x: "" };         // x = "" (empty string is NOT undefined)
```

**Gotcha:** Only `undefined` triggers the default — `null`, `0`, `""`, `false` do NOT.

**Combined rename + default:**

```js
const { country: location = "India" } = {};
// Reads as: "take country, call it location, default to India if missing"
```
