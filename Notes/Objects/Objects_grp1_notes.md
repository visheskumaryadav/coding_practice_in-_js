# Objects - Group 1: Creating and Accessing Properties

## Q1. Create an Object and Access Properties Two Ways

**Problem:** Create a `person` object with `name`, `age`, `city`. Access each property two ways — dot notation and bracket notation.

**Solution:**

```js
const person = {
    name: "rahul",
    age: 27,
    city: "mumbai"
};

// Dot notation
person.name;    // "rahul"
person.age;     // 27
person.city;    // "mumbai"

// Bracket notation
person["name"];  // "rahul"
person["age"];   // 27
person["city"];  // "mumbai"
```

### Explanation

| Notation | Syntax | When to use |
|----------|--------|-------------|
| Dot | `obj.key` | Key is a valid identifier (no spaces, no special chars, doesn't start with a number) |
| Bracket | `obj["key"]` | Key has spaces, special chars, is dynamic, or is stored in a variable |

**Dot notation** is cleaner and preferred for simple keys. **Bracket notation** is more powerful — it can handle any string as a key.

---

## Q2. Key with a Space — Why Bracket Notation is Required

**Problem:** Create an object where one key has a space in it: `"full name"`. Access it. Why can't you use dot notation?

**Solution:**

```js
const student = {
    "full name": "rahul sharma",
    age: 14
};

student["full name"];  // "rahul sharma"

// student.full name   ← SyntaxError! JS parser reads "student.full" then chokes on "name"
```

### Explanation

Dot notation only works with **valid JavaScript identifiers** — names that follow these rules:
- Can contain letters, digits, `_`, `$`
- Cannot start with a digit
- **Cannot contain spaces**

So `"full name"`, `"my-key"`, `"123start"` all require bracket notation.

**Gotcha:** When defining the object, keys with spaces must be quoted:
```js
// This works
{ "full name": "rahul" }

// This is a SyntaxError
{ full name: "rahul" }
```

---

## Q3. Dynamic Property Access with a Variable

**Problem:** Given `const key = "age"`, access that key dynamically from a person object using bracket notation.

**Solution:**

```js
const key = "age";
person[key];  // 27
```

### Explanation: Why This is Important

This is one of the most useful patterns in JS. You **cannot** use dot notation with a variable:

```js
const key = "age";

person[key];   // 27    — looks up person["age"]
person.key;    // undefined — looks up a literal property named "key", not "age"!
```

**Common use cases for dynamic access:**
```js
// Loop through specific keys
const fields = ["name", "age", "city"];
for (const field of fields) {
    console.log(person[field]);
}

// Function that reads any property
function getProp(obj, propName) {
    return obj[propName];
}
```

**Tricky note about the original code:** `person[\`${key}\`]` works but the template literal is unnecessary — `person[key]` does the same thing since `key` is already a string.

---

## Q4. Add, Update, and Delete Properties

**Problem:** Add a new property to an existing object. Update an existing one. Delete one. Print after each operation.

**Solution:**

```js
const person = { name: "rahul", age: 27, city: "mumbai" };

// Add
person.gender = "male";
// { name: "rahul", age: 27, city: "mumbai", gender: "male" }

// Update
person.city = "Delhi";
// { name: "rahul", age: 27, city: "Delhi", gender: "male" }

// Delete
delete person.age;
// { name: "rahul", city: "Delhi", gender: "male" }
```

### Explanation

| Operation | Syntax | Notes |
|-----------|--------|-------|
| **Add** | `obj.newKey = value` | If key doesn't exist, it's created |
| **Update** | `obj.existingKey = newValue` | Same syntax as add — JS doesn't distinguish |
| **Delete** | `delete obj.key` | Completely removes the key (not just sets to `undefined`) |

**Gotcha — `const` doesn't prevent mutation:**
```js
const person = { name: "rahul" };
person.age = 27;     // works! const prevents reassignment, not mutation
person = {};         // TypeError — THIS is what const prevents
```

**`delete` vs setting to `undefined`:**
```js
delete person.age;
"age" in person;          // false — key is gone

person.age = undefined;
"age" in person;          // true — key exists, value is undefined
Object.keys(person);      // still includes "age"
```

If you want the key to truly disappear (not show up in `for...in`, `Object.keys`, etc.), use `delete`.

---

## Q5. Check if a Property Exists — `in` and `hasOwnProperty`

**Problem:** Check if a property exists on an object — two ways: `in` operator and `hasOwnProperty`. Then check for a property that doesn't exist.

**Solution:**

```js
const person = { name: "rahul", city: "Delhi", gender: "male" };

// Way 1: in operator
"name" in person;       // true
"age" in person;        // false

// Way 2: hasOwnProperty
person.hasOwnProperty("name");   // true
person.hasOwnProperty("age");    // false

// Way 3: Object.hasOwn (modern, preferred)
Object.hasOwn(person, "name");   // true
Object.hasOwn(person, "age");    // false
```

### Explanation: `in` vs `hasOwnProperty` vs `Object.hasOwn`

| Method | Checks own properties | Checks prototype chain | Recommended |
|--------|----------------------|----------------------|-------------|
| `"key" in obj` | Yes | **Yes** | When you want inherited props too |
| `obj.hasOwnProperty("key")` | Yes | No | Older code |
| `Object.hasOwn(obj, "key")` | Yes | No | Modern (ES2022+), **preferred** |

**The difference matters with prototypes:**
```js
const obj = { name: "rahul" };

"name" in obj;         // true  — own property
"toString" in obj;     // true  — inherited from Object.prototype!

obj.hasOwnProperty("name");       // true
obj.hasOwnProperty("toString");   // false — not its own
```

**Why `Object.hasOwn` over `hasOwnProperty`:**
```js
// Edge case: object created with null prototype
const obj = Object.create(null);
obj.key = "value";

obj.hasOwnProperty("key");     // TypeError! — hasOwnProperty doesn't exist on obj
Object.hasOwn(obj, "key");     // true — always works, called on Object itself
```

**Bug in the original code:** `Object.hasOwn(person, name)` passes the variable `name` (which is `undefined` since no `name` variable is declared in scope) instead of the string `"name"`. Should be `Object.hasOwn(person, "name")`.
