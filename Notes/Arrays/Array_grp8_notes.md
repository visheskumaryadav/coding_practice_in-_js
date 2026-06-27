# Arrays — Group 8: Destructuring and Spread

## Q1 — Basic array destructuring

```js
const arr = [10, 20, 30, 40, 50];

const [a, b] = arr;

console.log(a); // 10
console.log(b); // 20
```

**How it works:** Destructuring unpacks elements by position. `a` gets index 0, `b` gets index 1. The rest of the array is ignored.

**Java comparison:**
```java
// Java — no destructuring, you access by index
int a = arr[0];
int b = arr[1];
```

```js
// JS — one line, named variables
const [a, b] = arr;
```

---

## Q2 — Skip elements and collect the rest

```js
const arr = [10, 20, 30, 40, 50];

const [, second, ...remaining] = arr;

console.log(second);    // 20
console.log(remaining); // [30, 40, 50]
```

**How skipping works:** An empty comma `,` skips that position. `[, second]` skips index 0 and assigns index 1 to `second`.

**Rest element `...remaining`** collects everything after the last explicitly named element into a new array.

**Rules for rest:**
- Must always be the **last** element in the destructuring pattern
- `const [a, ...rest, b]` is a SyntaxError
- Rest always produces an array, even if empty

```js
const [first, ...rest] = [1];
console.log(first); // 1
console.log(rest);  // [] — empty array, not undefined
```

---

## Q3 — Destructuring in function parameters

Two valid approaches — both produce the same result:

```js
// Way 1 — destructure inside the function body
function getFirstAndRest1(arr) {
    const [first, ...rest] = arr;
    return [first, rest];
}

// Way 2 — destructure directly in the parameter
function getFirstAndRest2([first, ...rest]) {
    return [first, rest];
}

getFirstAndRest1([1, 2, 3, 4, 5]); // [1, [2, 3, 4, 5]]
getFirstAndRest2([1, 2, 3, 4, 5]); // [1, [2, 3, 4, 5]]
```

**Way 2 is more idiomatic JS.** Destructuring in the parameter list makes the function signature self-documenting — you can see immediately that it expects an array and what it extracts from it.

**When to use which:**
- Way 1 — when you also need the original full array inside the function
- Way 2 — when you only need the destructured parts

---

## Q4 — Spread to merge and insert

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Merge
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]

// Insert in the middle
const withMiddle = [...arr1, 99, ...arr2];
console.log(withMiddle); // [1, 2, 99, 3, 4, 5, 6]
```

**Spread is flexible — you can put values anywhere between spreads:**

```js
[...arr1, ...arr2]              // merge end to end
[...arr1, 99, ...arr2]          // insert in middle
[0, ...arr1, ...arr2, 100]      // wrap with values
[...arr2, ...arr1]              // reversed order
```

**Spread vs concat:**
```js
// concat — only merges, cannot insert in middle
arr1.concat(arr2);              // [1, 2, 3, 4, 5, 6]

// spread — more flexible, works anywhere in a literal
[...arr1, 99, ...arr2];         // [1, 2, 99, 3, 4, 5, 6]
```

Neither mutates the originals. Both return new arrays.

---

## Q5 — Spread copy vs reference — the most important one

```js
const original = [1, 2, 3];

// Spread copy — new array, independent
const copy = [...original];
copy.pop();

console.log(copy);     // [1, 2] — modified
console.log(original); // [1, 2, 3] — untouched

// Reference — same array, NOT a copy
const ref = original;
ref.pop();

console.log(original); // [1, 2] — changed! ref and original are the same thing
```

**What actually happens in memory:**

```
After: const copy = [...original]

original ──→ [1, 2, 3]   (one array in memory)
copy     ──→ [1, 2, 3]   (different array, same values)

After: copy.pop()

original ──→ [1, 2, 3]   (untouched)
copy     ──→ [1, 2]      (only copy changed)
```

```
After: const ref = original

original ──→ [1, 2, 3]
ref      ──┘            (both point to the SAME array)

After: ref.pop()

original ──→ [1, 2]     (both changed because they're the same)
ref      ──┘
```

**`const` does not protect array contents:**
```js
const original = [1, 2, 3];
original.pop(); // works fine — const only prevents reassignment
original = [];  // TypeError — this is what const prevents
```

---

## Destructuring cheat sheet

```js
// Basic
const [a, b, c] = [1, 2, 3];

// Skip elements
const [, second] = [1, 2, 3];       // second = 2
const [,, third] = [1, 2, 3];       // third  = 3

// Rest — must be last
const [first, ...rest] = [1, 2, 3]; // first=1, rest=[2,3]

// Default values
const [x = 10, y = 20] = [5];       // x=5, y=20 (undefined triggers default)

// Swap variables — no temp needed
let p = 1, q = 2;
[p, q] = [q, p];                    // p=2, q=1

// Nested arrays
const [[a, b], [c, d]] = [[1, 2], [3, 4]]; // a=1 b=2 c=3 d=4

// In function parameters
function head([first]) { return first; }
function tail([, ...rest]) { return rest; }
```

---

## Spread cheat sheet

```js
// Copy
const copy = [...arr];

// Merge
const merged = [...arr1, ...arr2];

// Insert anywhere
const result = [...arr.slice(0, i), newItem, ...arr.slice(i)];

// Convert to array
const chars  = [..."hello"];          // ['h','e','l','l','o']
const unique = [...new Set([1,2,2])]; // [1, 2]
const args   = [...arguments];        // real array from arguments object

// Pass array as function arguments
Math.max(...[1, 5, 3]); // same as Math.max(1, 5, 3)
```

---

## Key rules

1. **Destructuring is positional** — order in the pattern matches order in the array
2. **Rest must be last** — `[a, ...rest, b]` is a SyntaxError
3. **Spread is shallow** — nested arrays/objects are still shared references
4. **`const ref = arr` is NOT a copy** — it's just another name for the same array
5. **`const` only prevents reassignment** — it does not make arrays immutable
6. **Spread creates a new array** — `[...arr]` always gives you a fresh array at the top level