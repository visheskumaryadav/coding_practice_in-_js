# Arrays - Group 1: Basic Array Operations

## Q1. Push, Pop, Unshift, Shift

**Problem:** Create an array of 5 numbers. Add an element to the end, add one to the beginning, remove from the end, remove from the beginning. Print array after each operation.

**Methods Used:**

| Method      | Action                        | Returns              | Mutates Original? |
|-------------|-------------------------------|----------------------|-------------------|
| `push()`    | Add element to **end**        | New length           | Yes               |
| `unshift()` | Add element to **beginning**  | New length           | Yes               |
| `pop()`     | Remove element from **end**   | Removed element      | Yes               |
| `shift()`   | Remove element from **beginning** | Removed element  | Yes               |

**Solution:**

```js
let arr1 = [1, 2, 3, 4, 5];

arr1.push(6);      // [1, 2, 3, 4, 5, 6]
arr1.unshift(0);   // [0, 1, 2, 3, 4, 5, 6]
arr1.pop();        // [0, 1, 2, 3, 4, 5]
arr1.shift();      // [1, 2, 3, 4, 5]
```

---

## Q2. Slice vs Splice

**Problem:** Given `[1, 2, 3, 4, 5]`, extract `[2, 3, 4]` using `slice`. Then delete the element `3` from the original array using `splice`.

**Solution:**

```js
let arr2 = [1, 2, 3, 4, 5];

arr2.slice(arr2.indexOf(2), arr2.indexOf(4) + 1); // [2, 3, 4]
arr2.splice(arr2.indexOf(3), 1);                   // arr2 is now [1, 2, 4, 5]
```

### Explanation: `slice()` vs `splice()` — A Common Trick Question

This is one of the most frequently asked interview questions. They sound similar but behave very differently:

| Feature           | `slice(start, end)`                        | `splice(start, deleteCount, ...items)`        |
|-------------------|--------------------------------------------|-----------------------------------------------|
| **Returns**       | A new array (extracted portion)            | An array of **deleted** elements              |
| **Mutates original?** | **No** (pure, non-destructive)         | **Yes** (modifies in place)                   |
| **End index**     | Exclusive (`end` is NOT included)          | N/A — uses `deleteCount` instead              |
| **Can insert?**   | No                                          | Yes — pass items after `deleteCount`          |

**Key Gotcha:** `slice` creates a **shallow copy** — if the array contains objects, the copied references still point to the same objects in memory.

```js
// splice can also INSERT elements
let arr = [1, 2, 5];
arr.splice(2, 0, 3, 4); // Insert 3, 4 at index 2 without deleting
// arr is now [1, 2, 3, 4, 5]
```

---

## Q3. Merge Two Arrays

**Problem:** Merge two arrays `[1, 2, 3]` and `[4, 5, 6]` into one — do it two different ways.

**Solution:**

```js
// Way 1: Spread operator (preferred, clean)
let result = [...a, ...b];

// Way 2: Loop + push
for (let ele of b) {
    a.push(ele);
}
```

### Explanation

| Way                   | Mutates Original? | Performance         |
|-----------------------|-------------------|---------------------|
| `[...a, ...b]`        | No                | Creates new array   |
| `a.concat(b)`         | No                | Creates new array   |
| Loop + `push`         | **Yes** (mutates `a`) | In-place        |

**Other ways not shown in the code:**
- `Array.prototype.concat()` — `[1,2,3].concat([4,5,6])` returns `[1,2,3,4,5,6]`

---

## Q4. Includes and IndexOf

**Problem:** Check if `"mango"` exists in `["apple", "mango", "banana"]`. Find its index. Then check if `"grape"` exists.

**Solution:**

```js
const fruits = ["apple", "mango", "banana"];

fruits.includes("mango");   // true
fruits.indexOf("mango");    // 1

fruits.includes("grape");   // false
fruits.indexOf("grape");    // -1
```

### Explanation

| Method             | Returns          | Use Case                        |
|--------------------|------------------|---------------------------------|
| `includes(elem)`   | `true` / `false` | Just need to know if it exists  |
| `indexOf(elem)`    | Index or `-1`    | Need the position               |

**Gotcha:** `indexOf` uses **strict equality** (`===`), so `[1, 2, NaN].indexOf(NaN)` returns `-1`. But `includes` handles `NaN` correctly: `[1, 2, NaN].includes(NaN)` returns `true`.

---

## Q5. Join and Split

**Problem:** Convert the array `["hello", "world"]` into the string `"hello world"`. Then split the string `"a,b,c,d"` back into an array.

**Solution:**

```js
["hello", "world"].join(' ');    // "hello world"
"a,b,c,d".split(',');            // ["a", "b", "c", "d"]
```

### Explanation

`join()` and `split()` are **inverse operations**:
- `join(separator)` — Array -> String
- `split(separator)` — String -> Array

**Gotcha:** `"hello".split('')` splits into individual characters: `["h", "e", "l", "l", "o"]`, but `"hello".split()` (no separator) returns `["hello"]` — the whole string as a single-element array.
