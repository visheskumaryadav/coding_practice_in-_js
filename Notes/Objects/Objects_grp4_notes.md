# Objects - Group 4: Object.keys/values/entries, assign, freeze

## Q1. Object.keys(), Object.values(), Object.entries()

**Problem:** Use all three on a student object. Understand the shape each returns.

**Solution:**

```js
let user = { name: "Vishesh", age: 22, city: "Delhi" };

Object.keys(user);     // ["name", "age", "city"]
Object.values(user);   // ["Vishesh", 22, "Delhi"]
Object.entries(user);  // [["name","Vishesh"], ["age",22], ["city","Delhi"]]
```

### Explanation

| Method | Returns | Shape |
|---|---|---|
| `Object.keys(obj)` | Array of key strings | `["key1", "key2"]` |
| `Object.values(obj)` | Array of values | `[val1, val2]` |
| `Object.entries(obj)` | Array of `[key, value]` pairs | `[["key1", val1], ["key2", val2]]` |

All three return **arrays**, which means you can use `map`, `filter`, `reduce`, `forEach` on the results — this is how you apply array methods to objects.

```js
// Reduce over entries to build a formatted string
Object.entries(user).reduce((acc, [key, value]) => {
    return `${acc} ${key}: ${value}\n`;
}, "");
```

**Note:** The `[key, value]` in the reduce callback is array destructuring of each entry pair.

---

## Q2. Looping Over Objects with entries()

**Problem:** Use `Object.entries()` to loop and print each key-value pair. No `for...in`.

**Solution:**

```js
for (let [key, value] of Object.entries(user)) {
    console.log(`${key} ---> ${value}`);
}
```

### Explanation: `for...of` + entries vs `for...in`

| Approach | Iterates over | Includes inherited? | Destructuring? |
|---|---|---|---|
| `for...in` | Keys (as strings) | **Yes** — includes prototype chain | No |
| `for...of` + `Object.entries()` | `[key, value]` pairs | **No** — own properties only | Yes |

**Why `for...of` + entries is preferred:**
1. Gives you both key AND value (no separate `obj[key]` lookup)
2. Only own properties — no surprises from prototype
3. Destructuring makes code cleaner

**Gotcha with `for...in`:**

```js
Object.prototype.custom = "oops";
const obj = { a: 1 };

for (let key in obj) console.log(key);
// "a"
// "custom"  ← inherited from prototype!

for (let [key] of Object.entries(obj)) console.log(key);
// "a"       ← only own properties
```

---

## Q3. Find Highest Score Using entries() + reduce

**Problem:** Given `{ maths: 90, science: 85, english: 100 }`, find the subject with the highest score.

**Solution:**

```js
const scores = { maths: 90, science: 85, english: 100 };

let result = Object.entries(scores).reduce((best, current) => {
    return current[1] > best[1] ? current : best;
}, ["", 0]);

console.log(result[0]);  // "english"
```

### Explanation

`Object.entries(scores)` gives:
```
[["maths", 90], ["science", 85], ["english", 100]]
```

The reduce walks through each `[subject, score]` pair, keeping whichever has the higher score:

| Step | `best` | `current` | Winner |
|---|---|---|---|
| 1 | `["", 0]` | `["maths", 90]` | `["maths", 90]` |
| 2 | `["maths", 90]` | `["science", 85]` | `["maths", 90]` |
| 3 | `["maths", 90]` | `["english", 100]` | `["english", 100]` |

**Cleaner version with destructuring:**

```js
const [subject] = Object.entries(scores).reduce(
    ([bestKey, bestVal], [key, val]) => val > bestVal ? [key, val] : [bestKey, bestVal],
    ["", 0]
);
```

---

## Q4. Object.assign vs Spread

**Problem:** Merge two objects using `Object.assign` and spread. What's the difference?

**Solution:**

```js
let p1 = { x: 100, y: 50 };
let p2 = { z: 66, k: 55 };

// Object.assign — merges INTO the target (first arg)
let merged1 = Object.assign({}, p1, p2);

// Spread — creates a new object
let merged2 = { ...p1, ...p2 };

// Both: { x: 100, y: 50, z: 66, k: 55 }
```

### Explanation

| Feature | `Object.assign(target, ...sources)` | `{ ...a, ...b }` |
|---|---|---|
| Returns | The **target** object (mutated) | A **new** object |
| Mutates target? | **Yes** — first argument is modified | **No** |
| Can merge into existing? | Yes — `Object.assign(existing, extra)` | No — always new |
| Syntax | Verbose | Clean |

**Critical gotcha with `Object.assign`:**

```js
// DANGEROUS — mutates p1!
Object.assign(p1, p2);
console.log(p1);  // { x: 100, y: 50, z: 66, k: 55 } — p1 is changed!

// SAFE — empty object as target
Object.assign({}, p1, p2);  // p1 is untouched
```

**Rule:** Always pass `{}` as the first argument to avoid accidental mutation. Or just use spread — it's cleaner and always safe.

Both are **shallow** — nested objects are still shared references (same gotcha as spread copy).

---

## Q5. Object.freeze

**Problem:** Freeze an object and try to modify it. What happens?

**Solution:**

```js
const environment = Object.freeze({ env: 'qa' });

environment.env = 'dev';
console.log(environment);  // { env: 'qa' } — unchanged, silently failed
```

### Explanation

`Object.freeze` makes an object **immutable** — you cannot add, remove, or modify properties.

| Mode | Behavior on frozen object modification |
|---|---|
| Normal (sloppy) mode | **Silently fails** — no error, no change |
| `"use strict"` mode | **Throws TypeError** |

**What freeze protects:**
- Changing existing property values
- Adding new properties
- Deleting properties
- Changing property descriptors

**What freeze does NOT protect (shallow freeze):**

```js
const config = Object.freeze({
    db: { host: "localhost", port: 3306 }
});

config.db.host = "production-server";
console.log(config.db.host);  // "production-server" — CHANGED!
```

Nested objects are **not** frozen. Freeze is **shallow**, just like spread copy.

**Deep freeze pattern:**

```js
function deepFreeze(obj) {
    Object.freeze(obj);
    Object.values(obj).forEach(val => {
        if (typeof val === 'object' && val !== null) deepFreeze(val);
    });
    return obj;
}
```

**Related methods:**

| Method | Can modify? | Can add? | Can delete? |
|---|---|---|---|
| `Object.freeze(obj)` | No | No | No |
| `Object.seal(obj)` | **Yes** | No | No |
| `Object.preventExtensions(obj)` | **Yes** | No | **Yes** |
