# Arrays — Group 7: Mutation vs Immutability

## The Core Rule

**Primitives** (numbers, strings, booleans) are copied by value — assigning or passing them makes a copy.  
**Arrays and objects** are copied by reference — assigning or passing them gives you the same thing in memory.

This is why mutation matters. If two variables point to the same array, changing one changes both.

---

## Q1 — Sort mutates. Protect with spread.

```js
// Wrong — sort changes the original
let original = [3, 1, 4, 1, 5];
original.sort((a, b) => a - b);
console.log(original); // [1, 1, 3, 4, 5] — original is gone

// Correct — spread first, sort the copy
let original = [3, 1, 4, 1, 5];
let sorted   = [...original].sort((a, b) => a - b);

console.log(original); // [3, 1, 4, 1, 5] — untouched
console.log(sorted);   // [1, 1, 3, 4, 5] — sorted copy
```

**Pattern:** `[...arr].sort()` — always spread before any mutating operation when you want to keep the original.

---

## Q2 — Mutating vs non-mutating addToEnd

```js
// Way 1 — mutates original
function addToEndMutating(arr, item) {
    arr.push(item); // modifies arr in place
    return arr;
}

// Way 2 — returns new array, original safe
function addToEndSafe(arr, item) {
    return [...arr, item]; // spread + add in one line
}

const original = [1, 2, 3, 4];

const r1 = addToEndMutating(original, 5);
console.log(original); // [1, 2, 3, 4, 5] — original changed!
console.log(r1 === original); // true — same reference

const original2 = [1, 2, 3, 4];
const r2 = addToEndSafe(original2, 5);
console.log(original2); // [1, 2, 3, 4] — untouched
console.log(r2);        // [1, 2, 3, 4, 5] — new array
console.log(r2 === original2); // false — different reference
```

**Key insight:** `push()` returns the new length of the array, not the array itself.  
`[...arr, item]` is cleaner than creating a temp variable and pushing into it.

---

## Q3 — reverse() mutates. Fix with spread.

```js
// Problem — reverse mutates in place
let original = [1, 2, 3];
original.reverse();
console.log(original); // [3, 2, 1] — original is now reversed

// Fix — spread first
let original = [1, 2, 3];
const reversed = [...original].reverse();

console.log(original); // [1, 2, 3] — untouched
console.log(reversed); // [3, 2, 1] — reversed copy
```

**Same pattern as sort:** `[...arr].reverse()`

---

## Q4 — Mutation categorisation

This is the most important table to memorise.

| Mutates original | Returns new array | Returns nothing |
|---|---|---|
| `push` | `map` | `forEach` |
| `pop` | `filter` | |
| `shift` | `slice` | |
| `unshift` | `concat` | |
| `splice` | `flat` | |
| `sort` | `flatMap` | |
| `reverse` | | |
| `fill` | | |

### The ones people get wrong

**`concat` does NOT mutate:**
```js
const a = [1, 2, 3];
const b = a.concat([4, 5]);
console.log(a); // [1, 2, 3] — untouched
console.log(b); // [1, 2, 3, 4, 5] — new array
```

**`flat` does NOT mutate:**
```js
const a = [[1, 2], [3, 4]];
const b = a.flat();
console.log(a); // [[1, 2], [3, 4]] — untouched
console.log(b); // [1, 2, 3, 4] — new array
```

**`slice` does NOT mutate:**
```js
const a = [1, 2, 3, 4, 5];
const b = a.slice(1, 3);
console.log(a); // [1, 2, 3, 4, 5] — untouched
console.log(b); // [2, 3] — new array
```

**`forEach` returns undefined — not a new array, not a mutation:**
```js
const result = [1, 2, 3].forEach(x => x * 2);
console.log(result); // undefined
```

### Memory trick

> Methods that sound like they are **modifying in place** → mutate (`push`, `pop`, `sort`, `reverse`, `splice`)  
> Methods that sound like they are **producing a new version** → return new array (`map`, `filter`, `concat`, `flat`, `slice`)

---

## Q5 — removeItem without mutation using slice

```js
function removeItem(arr, index) {
    if (index < 0 || index >= arr.length) {
        throw new Error("Wrong index");
    }
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

const original = [1, 2, 3, 4, 5, 6];
const result   = removeItem(original, 2);

console.log(original); // [1, 2, 3, 4, 5, 6] — untouched
console.log(result);   // [1, 2, 4, 5, 6] — element at index 2 removed
```

**How it works:**
```
arr       = [1, 2, 3, 4, 5, 6]
index     = 2

slice(0, 2)  = [1, 2]         ← everything before index
slice(3)     = [4, 5, 6]      ← everything after index

spread both  = [1, 2, 4, 5, 6] ← element 3 is gone
```

**Notes:**
- `arr.slice(index + 1)` — second argument is optional, goes to end automatically
- Guard clause pattern: check the invalid case first, throw early, happy path stays flat
- `return` after `throw` is unreachable — remove it

---

## The safe versions of all mutating methods

| Mutating (avoid) | Safe alternative |
|---|---|
| `arr.sort(fn)` | `[...arr].sort(fn)` |
| `arr.reverse()` | `[...arr].reverse()` |
| `arr.push(x)` | `[...arr, x]` |
| `arr.pop()` | `arr.slice(0, -1)` |
| `arr.shift()` | `arr.slice(1)` |
| `arr.unshift(x)` | `[x, ...arr]` |
| `arr.splice(i, 1)` | `[...arr.slice(0,i), ...arr.slice(i+1)]` |
| `arr.fill(v)` | `Array.from({length: arr.length}, () => v)` |

ES2023 also added official non-mutating versions:
```js
arr.toSorted(fn)      // safe version of sort
arr.toReversed()      // safe version of reverse
arr.toSpliced(i, 1)   // safe version of splice
```

---

## Why this matters in real code

**Passing arrays to functions:**
```js
function process(arr) {
    arr.sort(); // mutates the caller's array — silent bug
}

const data = [3, 1, 2];
process(data);
console.log(data); // [1, 2, 3] — changed without warning
```

**The safe approach:**
```js
function process(arr) {
    const copy = [...arr]; // protect immediately
    copy.sort();
    return copy;
}

const data = [3, 1, 2];
const result = process(data);
console.log(data);   // [3, 1, 2] — original safe
console.log(result); // [1, 2, 3] — sorted copy
```

**Rule:** If you receive an array as a function parameter and need to mutate it, always copy it first with `[...arr]` unless mutation is explicitly the purpose of the function.