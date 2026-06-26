# Arrays - Group 4: Flatten and Chunk

## Q1. Flatten a Nested Array

**Problem:** Flatten `[[1, 2], [3, 4], [5, 6]]` into `[1, 2, 3, 4, 5, 6]` — use `flat()`. Then try with `reduce`.

**Solution (4 ways):**

```js
let arr = [[1, 2], [3, 4], [5, 6]];

// Way 1: flat()
arr.flat();  // [1, 2, 3, 4, 5, 6]

// Way 2: reduce + map + push
arr.reduce((acc, curr) => {
    curr.map(e => acc.push(e));
    return acc;
}, []);

// Way 3: reduce + spread
arr.reduce((acc, curr) => [...acc, ...curr], []);

// Way 4: for...of + spread
let result = [];
for (let i of arr) {
    result.push(...i);
}
```

### Explanation

**`flat(depth)`** is the cleanest approach. The `depth` parameter controls how many levels deep to flatten:

```js
[1, [2, [3, [4]]]].flat(1);          // [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(2);          // [1, 2, 3, [4]]
[1, [2, [3, [4]]]].flat(Infinity);   // [1, 2, 3, 4]  — flattens everything
```

**Performance comparison of the 4 approaches:**

| Approach              | Mutates? | Creates intermediate arrays? | Best for           |
|-----------------------|----------|------------------------------|--------------------|
| `flat()`              | No       | No                           | Most cases         |
| `reduce` + `push`     | Acc only | No                           | When you need custom logic |
| `reduce` + spread     | No       | Yes (every iteration!)       | Readability        |
| `for...of` + spread   | Result   | No                           | Simple imperative  |

**Tricky:** Way 3 (`reduce` + spread) creates a **new array at every iteration** because `[...acc, ...curr]` allocates a new array each time. For large arrays, this is O(n^2) in memory. Way 2 (using `push`) is more efficient because it mutates the accumulator in place.

---

## Q2. Chunk an Array into Groups

**Problem:** Given `[1, 2, 3, 4, 5, 6]`, chunk it into groups of 2: `[[1,2], [3,4], [5,6]]`. Write a `chunk(arr, size)` function.

**Solution (2 ways):**

```js
// Way 1: Manual loop with counter
function chunk1(arr, size) {
    let i = 0, result = [], tmp = [], count = 0;
    while (i < arr.length) {
        if (count >= size) {
            result.push(tmp);
            tmp = []; count = 0;
        } else {
            tmp.push(arr[i]);
            i++; count++;
        }
    }
    if (tmp.length > 0) result.push(tmp);
    return result;
}

// Way 2: slice-based (cleaner)
function chunk2(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
```

### Explanation

**Way 2 is preferred** — it's cleaner and less error-prone. The key insight is stepping through the array by `size` increments and using `slice` to grab each chunk.

**How `slice` handles the last chunk:**
```js
let arr = [1, 2, 3, 4, 5];
// chunk(arr, 2) should give [[1,2], [3,4], [5]]

// i=0: arr.slice(0, 2) -> [1, 2]
// i=2: arr.slice(2, 4) -> [3, 4]
// i=4: arr.slice(4, 6) -> [5]      <-- slice handles out-of-bounds gracefully!
```

**Tricky:** `slice(start, end)` does NOT throw an error if `end` is beyond the array length — it just returns elements up to the last one. This makes it perfect for chunking where the last chunk might be smaller.

**Edge cases to consider:**
- `chunk([], 2)` -> `[]` (empty array)
- `chunk([1], 5)` -> `[[1]]` (chunk size larger than array)
- `chunk([1,2,3], 1)` -> `[[1], [2], [3]]` (chunk size of 1)
