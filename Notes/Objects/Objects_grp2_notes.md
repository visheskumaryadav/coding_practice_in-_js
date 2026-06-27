# Objects - Group 2: Shorthand, Computed Keys, Methods, `this`

## Q1. Shorthand Property Syntax

**Problem:** Create a user object the verbose way, then rewrite using shorthand.

**Solution:**

```js
const name = "Vishesh";
const age = 22;

// Verbose
const user = { name: name, age: age };

// Shorthand — when variable name matches key name
const user = { name, age };
```

### Explanation

When the variable name is the same as the key you want, JS lets you skip the `: value` part. This is purely syntactic sugar — the result is identical.

```js
// These are exactly the same object:
{ name: name, age: age }
{ name, age }
```

---

## Q2. Computed Property Names

**Problem:** Create an object where the key is dynamic — computed from a variable.

**Solution:**

```js
const field = "score";
console.log({ [field]: 100 });  // { score: 100 }
```

### Explanation

Square brackets `[]` around a key in an object literal evaluate the expression inside to produce the key name.

```js
const prefix = "user";
const obj = {
    [prefix + "Name"]: "Vishesh",   // { userName: "Vishesh" }
    [prefix + "Age"]: 22            // { userAge: 22 }
};
```

**When to use:**
- Building objects from dynamic data (API responses, form fields)
- Using constants or enums as keys
- Creating objects inside loops where the key changes each iteration

---

## Q3. Object Methods and `this`

**Problem:** Add a `greet()` method to an object. Then rewrite using shorthand method syntax.

**Solution:**

```js
// Way 1 — assign function expression
let obj = { name: "Vishesh" };
obj.greet = function() { return `Hello, I am ${this.name}` };

// Way 2 — shorthand method syntax (preferred)
const intro = {
    name: "Vishesh",
    greet() { return `Hello, I am ${this.name}` }
};
```

### Explanation: `this` in Object Methods

`this` inside a method refers to the object the method is called on.

```js
const intro = { eName: "rahul", greet() { return `Hello, I am ${this.eName}` } };
intro.greet();  // "Hello, I am rahul" — `this` is `intro`
```

### Tricky: Arrow Functions DON'T Have Their Own `this`

```js
const obj = {
    name: "Vishesh",
    greet: () => `Hello, I am ${this.name}`  // BUG!
};
obj.greet();  // "Hello, I am undefined"
```

**Why?** Arrow functions inherit `this` from the surrounding scope (lexical `this`), not from the object they're called on. In this case, `this` refers to the global/module scope, not `obj`.

**Rule:** Use regular functions (or shorthand methods) for object methods that need `this`. Use arrow functions for callbacks inside those methods.

```js
const obj = {
    items: [1, 2, 3],
    double() {
        return this.items.map(n => n * 2);  // arrow is fine HERE — `this` comes from double()
    }
};
```

---

## Q4. Calculator Object

**Problem:** Create a calculator object with `add`, `subtract`, `multiply`, `divide` methods.

**Solution:**

```js
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

calculator.add(200, 100);       // 300
calculator.subtract(200, 100);  // 100
calculator.multiply(200, 100);  // 20000
calculator.divide(200, 100);    // 2
```

**Note:** Arrow functions work here because these methods don't use `this`. If they needed to reference `this.someProperty`, you'd need regular functions.

---

## Q5. Using `this` to Access Own Properties

**Problem:** Write a method that uses `this` to access another property.

**Solution:**

```js
const student = {
    name: "Vishesh",
    marks: 85,
    grade() {
        if (this.marks >= 70) return 'A';
        if (this.marks >= 50) return 'B';
        return 'C';
    }
};

student.grade();  // 'A'
```

### Explanation

`this.marks` refers to `student.marks` because `grade()` is called as `student.grade()` — the object before the dot becomes `this`.

**Tricky: `this` depends on HOW the function is called, not WHERE it's defined:**

```js
const student = { marks: 85, grade() { return this.marks >= 70 ? 'A' : 'B' } };

student.grade();          // 'A' — this = student

const fn = student.grade;
fn();                     // TypeError — this = undefined (strict mode)
```

Extracting a method from its object loses the `this` binding. This is a very common source of bugs.
