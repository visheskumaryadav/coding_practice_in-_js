# Arrays — Group 5: HOF Chaining Notes

## The Data

```js
const orders = [
    { id: 1, product: "laptop", price: 80000, delivered: true },
    { id: 2, product: "phone",  price: 30000, delivered: false },
    { id: 3, product: "tablet", price: 25000, delivered: true },
    { id: 4, product: "watch",  price: 8000,  delivered: false },
];

const items = [
    { name: "apple",  category: "fruit"     },
    { name: "carrot", category: "vegetable" },
    { name: "mango",  category: "fruit"     },
    { name: "potato", category: "vegetable" },
    { name: "grape",  category: "fruit"     },
];
```

---

## Q1 — Filter delivered orders, map to product names

```js
const result = orders
    .filter(order => order.delivered)
    .map(order => order.product);

// ["laptop", "tablet"]
```

**Notes**
- `order.delivered === true` works but is redundant — since `delivered` is already a boolean, `order.delivered` alone is enough
- Chain reads like English: filter first, then transform what remains

---

## Q2 — Total price of undelivered orders

```js
const totalPrice = orders
    .filter(order => !order.delivered)
    .reduce((acc, curr) => acc + curr.price, 0);

// 38000  (30000 + 8000)
```

**Notes**
- `filter` first narrows the array, `reduce` then collapses it to a single value
- Initial value `0` is critical — without it, reduce uses the first element as the accumulator which would be an object, not a number

---

## Q3 — Convert valid numeric strings, ignore non-numeric

```js
const result = ["1", "2", "three", "4", "five"]
    .filter(item => !Number.isNaN(Number(item)))
    .map(item => Number(item));

// [1, 2, 4]
```

**Notes**
- `Number("three")` returns `NaN`, `Number.isNaN(NaN)` returns `true` — so `!Number.isNaN(Number(item))` keeps only valid numbers
- Why `Number.isNaN` not `isNaN`: `isNaN("hello")` coerces to number first and returns `true`, but `isNaN(undefined)` also returns `true` which can be surprising. `Number.isNaN` only returns `true` for actual `NaN` values — more precise

```js
isNaN("hello")        // true  — coerces first
Number.isNaN("hello") // false — "hello" is not NaN, it's a string
Number.isNaN(NaN)     // true  — this is actual NaN
```

---

## Q4 — Sum of squares of even numbers

```js
const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .filter(n => n % 2 === 0)   // [2, 4, 6, 8, 10]
    .map(n => n ** 2)            // [4, 16, 36, 64, 100]
    .reduce((acc, n) => acc + n, 0); // 220
```

**Common mistake** — summing the evens directly without squaring:

```js
// Wrong — sums evens: 2+4+6+8+10 = 30
.filter(n => n % 2 === 0)
.reduce((acc, curr) => acc + curr, 0)

// Correct — square first, then sum: 4+16+36+64+100 = 220
.filter(n => n % 2 === 0)
.map(n => n ** 2)
.reduce((acc, curr) => acc + curr, 0)
```

**Chain order matters:**
```
filter → map → reduce
narrow  transform  collapse
```

---

## Q5 — Group by category using reduce

```js
const result = items.reduce((acc, curr) => {
    acc[curr.category] ??= [];
    acc[curr.category].push(curr.name);
    return acc;
}, {});

// { fruit: ["apple","mango","grape"], vegetable: ["carrot","potato"] }
```

**Common mistake** — using `Array.push()` return value:

```js
// Wrong — push() returns the NEW LENGTH, not the array
initialValue['fruit'] = fruit.push(currentValue.name)
// result: { fruit: 3, vegetable: 2 }  ← lengths, not arrays!

// Correct — push mutates in place, don't capture return value
acc[curr.category].push(curr.name);
```

**Walk through:**

| Iteration | Item          | acc after                                               |
|-----------|---------------|---------------------------------------------------------|
| 1         | apple/fruit   | `{ fruit: ["apple"] }`                                  |
| 2         | carrot/veg    | `{ fruit: ["apple"], vegetable: ["carrot"] }`           |
| 3         | mango/fruit   | `{ fruit: ["apple","mango"], vegetable: ["carrot"] }`   |
| 4         | potato/veg    | `{ fruit: ["apple","mango"], vegetable: ["carrot","potato"] }` |
| 5         | grape/fruit   | `{ fruit: ["apple","mango","grape"], vegetable: ["carrot","potato"] }` |

---

## The `??=` operator explained

```js
acc[curr.category] ??= [];
```

This means: **"if this key doesn't exist yet, create it as an empty array. If it already exists, leave it alone."**

Equivalent forms — all do the same thing:

```js
// Verbose
if (acc[curr.category] === null || acc[curr.category] === undefined) {
    acc[curr.category] = [];
}

// With ??
acc[curr.category] = acc[curr.category] ?? [];

// Shortest
acc[curr.category] ??= [];
```

**Why `??=` not `||=`:**

```js
acc["count"] ||= 0;  // assigns if falsy — would overwrite 0 with 0 (bug-prone)
acc["count"] ??= 0;  // assigns only if null/undefined — safer and more precise
```

**The three assignment operators:**

| Operator | Assigns when    | Example use case               |
|----------|-----------------|--------------------------------|
| `\|\|=`  | value is falsy  | fallback for any falsy value   |
| `&&=`    | value is truthy | update only if already set     |
| `??=`    | null/undefined  | initialise missing keys/values |

---

## The groupBy pattern — memorise this shape

This is one of the most reused `reduce` patterns in real JS:

```js
arr.reduce((acc, item) => {
    acc[item.key] ??= [];
    acc[item.key].push(item.value);
    return acc;
}, {});
```

Used for: grouping orders by status, users by role, products by category, events by date, errors by type — anywhere you need to bucket items.

---

## Key rules from these 5 questions

1. `filter` then `map` then `reduce` — this order is canonical: narrow → transform → collapse
2. Always `return acc` in reduce — forgetting this makes acc `undefined` on the next iteration
3. `push()` returns length not the array — never assign its return value
4. `??=` for initialising missing keys — cleaner than an if block
5. Keep all state inside the accumulator — don't use external variables in reduce