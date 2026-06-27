# Arrays - Group 2: Map, Filter, Reduce

## Q1. Double Every Number Using Map

**Problem:** Given `[1, 2, 3, 4, 5]`, create a new array where every number is doubled. Use `map`.

**Solution:**

```js
[1, 2, 3, 4, 5].map(ele => ele * 2);  // [2, 4, 6, 8, 10]
```

### Explanation

`map()` creates a **new array** by applying a function to every element. It does **not** mutate the original array.

```
Original:  [1,  2,  3,  4,  5]
              |   |   |   |   |
           x2  x2  x2  x2  x2
              |   |   |   |   |
Result:    [2,  4,  6,  8,  10]
```

**Gotcha:** `map` always returns an array of the **same length**. If you want to filter elements out, use `filter` instead — don't return `undefined` from `map`.

---

## Q2. Filter Numbers Greater Than 20

**Problem:** Given `[10, 25, 3, 47, 8, 99]`, filter out only numbers greater than 20.

**Solution:**

```js
[10, 25, 3, 47, 8, 99].filter(ele => ele >= 20);  // [25, 47, 99]
```

### Explanation

`filter()` creates a **new array** with elements that pass the test (callback returns `true`).

- Returns a **new array** (does not mutate original)
- The returned array can be **shorter** than or equal to the original
- If no element passes, returns an **empty array** `[]`

---

## Q3. Map to Get String Lengths

**Problem:** Given `["apple", "banana", "cherry"]`, use `map` to return a new array of their lengths: `[5, 6, 6]`.

**Solution:**

```js
["apple", "banana", "cherry"].map(el => el.length);  // [5, 6, 6]
```

This is a common pattern — transforming an array of one type into an array of a derived property.

---

## Q4. Sum and Product Using Reduce

**Problem:** Given `[1, 2, 3, 4, 5]`, find the sum of all numbers using `reduce`. Then find the product.

**Solution:**

```js
// Sum
[1, 2, 3, 4, 5].reduce((sum, val) => sum + val, 0);    // 15

// Product
[1, 2, 3, 4, 5].reduce((prod, val) => prod * val, 1);   // 120
```

### Explanation: How `reduce` Works

`reduce` is the most powerful array method — it "reduces" an array to a single value by processing each element.

```
reduce((accumulator, currentValue) => newAccumulator, initialValue)
```

**Step-by-step for sum:**

| Step | `acc` (accumulator) | `currentValue` | Result (`acc + curr`) |
|------|---------------------|----------------|----------------------|
| 1    | 0 (initial)         | 1              | 1                    |
| 2    | 1                   | 2              | 3                    |
| 3    | 3                   | 3              | 6                    |
| 4    | 6                   | 4              | 10                   |
| 5    | 10                  | 5              | **15**               |

**Tricky:** The initial value matters!
- For **sum**, use `0` (identity for addition)
- For **product**, use `1` (identity for multiplication)
- If you **omit** the initial value, `reduce` uses the first element as the initial accumulator and starts from the second element. This can cause bugs with empty arrays — `[].reduce((a,b) => a+b)` throws a `TypeError`.

---

## Q5. Find Max and Min Using Reduce Only

**Problem:** Given `[3, 1, 4, 1, 5, 9, 2, 6]`, find the maximum and minimum value — use `reduce` only, no `Math.max`.

**Solution:**

```js
const arr = [3, 1, 4, 1, 5, 9, 2, 6];

// Maximum
arr.reduce((acc, curr) => acc > curr ? acc : curr, arr[0]);  // 9

// Minimum
arr.reduce((acc, curr) => acc > curr ? curr : acc, arr[0]);  // 1
```

### Explanation: Why This is Tricky

The pattern is: keep the "winner" in the accumulator. At each step, compare the current accumulator with the current element and keep whichever is larger (for max) or smaller (for min).

**Why `arr[0]` as initial value?**
- Using `0` would break for arrays of all negative numbers: `[-5, -3, -1].reduce((a,c) => a > c ? a : c, 0)` returns `0`, which is wrong
- Using `arr[0]` guarantees the initial value is a valid element from the array

**Alternative with `Math.max` (not allowed in this question but good to know):**
```js
Math.max(...arr);  // 9
Math.min(...arr);  // 1
```

**Gotcha with spread + Math.max:** If the array is very large (100,000+ elements), `Math.max(...arr)` can cause a **stack overflow** because spread passes each element as a separate argument. `reduce` is safer for large arrays.
