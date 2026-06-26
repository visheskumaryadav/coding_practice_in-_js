# Arrays - Group 3: Sorting, Finding, Every/Some

## Q1. Sort Ascending and Descending

**Problem:** Given `[5, 3, 8, 1, 9, 2]`, sort it in ascending order. Then sort in descending order.

**Solution:**

```js
// Ascending
[5, 3, 8, 1, 9, 2].sort((a, b) => a - b);  // [1, 2, 3, 5, 8, 9]

// Descending
[5, 3, 8, 1, 9, 2].sort((a, b) => b - a);  // [9, 8, 5, 3, 2, 1]
```

### Explanation: MAJOR GOTCHA with `sort()`

The original code uses `.sort()` **without a comparator** — this is a very common bug!

```js
[5, 3, 8, 1, 9, 2].sort();  // [1, 2, 3, 5, 8, 9] — looks correct BUT...

[10, 5, 40, 25, 100, 1].sort();  // [1, 10, 100, 25, 40, 5] — WRONG!
```

**Why?** Without a comparator, `sort()` converts elements to **strings** and sorts them **lexicographically** (dictionary order). So `"10"` comes before `"5"` because `"1" < "5"` in character comparison.

**Rule:** ALWAYS pass a comparator function when sorting numbers:

| Sort Order | Comparator       | How it works                                          |
|------------|------------------|-------------------------------------------------------|
| Ascending  | `(a, b) => a - b` | Negative = `a` first, Positive = `b` first, 0 = equal |
| Descending | `(a, b) => b - a` | Reverses the logic                                     |

**Another gotcha:** `sort()` **mutates** the original array. If you need to keep the original, clone first: `[...arr].sort(...)`.

---

## Q2. Sort Strings Alphabetically

**Problem:** Given `["banana", "apple", "cherry", "mango"]`, sort alphabetically.

**Solution:**

```js
["banana", "apple", "cherry", "mango"].sort();  // ["apple", "banana", "cherry", "mango"]
```

### Explanation

For **strings**, `.sort()` without a comparator works correctly because it already does lexicographic (alphabetical) comparison. This is one of the few cases where omitting the comparator is fine.

**Gotcha:** Uppercase letters sort **before** lowercase letters:
```js
["banana", "Apple", "cherry"].sort();  // ["Apple", "banana", "cherry"]
```

For case-insensitive sort, use:
```js
arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
```

---

## Q3. Sort Array of Objects by Property

**Problem:** Given an array of student objects, sort by marks in descending order.

**Solution:**

```js
const students = [
  { name: "Vishesh", marks: 85 },
  { name: "Rahul", marks: 92 },
  { name: "Priya", marks: 78 }
];

students.sort((a, b) => b.marks - a.marks);
// [{ name: "Rahul", marks: 92 }, { name: "Vishesh", marks: 85 }, { name: "Priya", marks: 78 }]
```

### Explanation

When sorting objects, you **must** provide a comparator that accesses the property you want to sort by. The comparator pattern is the same as numbers — just access the nested property:

- Ascending by marks: `(a, b) => a.marks - b.marks`
- Descending by marks: `(a, b) => b.marks - a.marks`
- Alphabetical by name: `(a, b) => a.name.localeCompare(b.name)`

---

## Q4. Find and FindIndex

**Problem:** Given `[1, 2, 3, 4, 5, 6, 7, 8]`, find the first number greater than 5 using `find`. Then find its index using `findIndex`.

**Solution:**

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.find(el => el > 5);       // 6
arr.findIndex(el => el > 5);  // 5
```

### Explanation

The original code uses a manual `for` loop, but JS has built-in methods for this:

| Method        | Returns                          | If not found   |
|---------------|----------------------------------|----------------|
| `find()`      | The **first matching element**   | `undefined`    |
| `findIndex()` | The **index** of first match     | `-1`           |
| `indexOf()`   | Index of exact value match       | `-1`           |

**Key difference between `find` and `filter`:**
- `find` returns the **first** match and stops (short-circuits)
- `filter` returns **all** matches as an array

**When to use which:**
- Need one item? Use `find`
- Need all items? Use `filter`
- Know the exact value? Use `indexOf` or `includes`
- Need a condition-based search? Use `find` or `findIndex`

---

## Q5. Every and Some

**Problem:** Check if every number in `[2, 4, 6, 8]` is even. Check if some number in `[1, 3, 5, 7, 8]` is even.

**Solution:**

```js
[2, 4, 6, 8].every(el => el % 2 === 0);   // true
[1, 3, 5, 7, 8].some(el => el % 2 === 0);  // true
```

### Explanation

| Method    | Returns `true` when...              | Short-circuits when...            |
|-----------|--------------------------------------|-----------------------------------|
| `every()` | **ALL** elements pass the test       | First element **fails**           |
| `some()`  | **AT LEAST ONE** element passes      | First element **passes**          |

Think of them as:
- `every` = logical **AND** across all elements
- `some` = logical **OR** across all elements

**Edge case:** On an **empty array**:
- `[].every(x => x > 0)` returns `true` (vacuous truth — no element violates the condition)
- `[].some(x => x > 0)` returns `false` (no element satisfies the condition)

This can be surprising! An empty array passes `every()` check.
