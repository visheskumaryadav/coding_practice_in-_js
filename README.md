# coding_practice_in-_js

Learning JS by solving coding problems, organized by topic and difficulty.

---

## Index

### Arrays/

#### [grp1.js](Arrays/grp1.js) — Basic Array Operations

| # | Question | Key Methods |
|---|----------|-------------|
| 1 | Create an array of 5 numbers. Add/remove from end and beginning. Print after each operation. | `push`, `pop`, `unshift`, `shift` |
| 2 | Extract `[2,3,4]` using `slice`. Delete element `3` using `splice`. | `slice`, `splice`, `indexOf` |
| 3 | Merge two arrays `[1,2,3]` and `[4,5,6]` — two different ways. | `spread (...)`, `push` |
| 4 | Check if `"mango"` exists in an array. Find its index. Check if `"grape"` exists. | `includes`, `indexOf` |
| 5 | Convert array to string (`"hello world"`) and split string back into array. | `join`, `split` |

#### [grp2.js](Arrays/grp2.js) — Map, Filter, Reduce

| # | Question | Key Methods |
|---|----------|-------------|
| 1 | Given `[1,2,3,4,5]`, create a new array where every number is doubled. | `map` |
| 2 | Given `[10,25,3,47,8,99]`, filter out only numbers greater than 20. | `filter` |
| 3 | Given `["apple","banana","cherry"]`, return array of their lengths `[5,6,6]`. | `map` |
| 4 | Find the sum and product of `[1,2,3,4,5]` using reduce. | `reduce` |
| 5 | Find the max and min value in an array using reduce only (no `Math.max`). | `reduce` |

#### [grp3.js](Arrays/grp3.js) — Sorting, Finding, Every/Some

| # | Question | Key Methods |
|---|----------|-------------|
| 1 | Sort `[5,3,8,1,9,2]` in ascending and descending order. | `sort` with comparator |
| 2 | Sort `["banana","apple","cherry","mango"]` alphabetically. | `sort` |
| 3 | Sort array of student objects by marks in descending order. | `sort` with custom comparator |
| 4 | Find the first number > 5 and its index in `[1,2,3,4,5,6,7,8]`. | `find`, `findIndex` |
| 5 | Check if every number in `[2,4,6,8]` is even. Check if some number in `[1,3,5,7,8]` is even. | `every`, `some` |

#### [grp4.js](Arrays/grp4.js) — Flatten and Chunk

| # | Question | Key Methods |
|---|----------|-------------|
| 1 | Flatten `[[1,2],[3,4],[5,6]]` into `[1,2,3,4,5,6]` — using `flat()`, `reduce`, and loops. | `flat`, `reduce`, `spread` |
| 2 | Chunk `[1,2,3,4,5,6]` into groups of 2: `[[1,2],[3,4],[5,6]]`. Write a `chunk(arr, size)` function. | `slice`, loops |

#### [grp5.js](Arrays/grp5.js) — HOF Chaining (filter + map + reduce)

| # | Question | Key Methods |
|---|----------|-------------|
| 1 | Filter delivered orders, then map to get just product names — in one chain. | `filter`, `map` |
| 2 | Find the total price of all undelivered orders using filter + reduce. | `filter`, `reduce` |
| 3 | Convert valid numeric strings to numbers, ignore non-numeric ones. | `filter`, `map`, `Number`, `Number.isNaN` |
| 4 | Get the sum of squares of only the even numbers — in one chain. | `filter`, `map`, `reduce` |
| 5 | Group items by category using reduce. | `reduce`, `??=` |

#### [grp7.js](Arrays/grp7.js) — Mutation vs Immutability

| # | Question | Key Methods |
|---|----------|-------------|
| 1 | Sort an array — did the original change? Protect the original using spread. | `sort`, `spread` |
| 2 | Write `addToEnd(arr, item)` — mutating version and non-mutating version. | `push`, `spread` |
| 3 | Call `arr.reverse()` — what happened to the original? Fix it. | `reverse`, `spread` |
| 4 | Categorize methods into mutates-original vs returns-new-array. | conceptual |
| 5 | Write `removeItem(arr, index)` without mutating the original using slice only. | `slice`, `spread` |

#### [grp8.js](Arrays/grp8.js) — Destructuring and Spread

| # | Question | Key Methods |
|---|----------|-------------|
| 1 | Destructure the first two elements of `[10,20,30,40,50]` into `a` and `b`. | destructuring |
| 2 | Skip the first element, grab the second, collect the rest into `remaining`. | `, ` skip, `...rest` |
| 3 | Write `getFirstAndRest(arr)` using destructuring — two ways. | destructuring in params |
| 4 | Use spread to merge two arrays and insert `99` in the middle. | `spread` |
| 5 | Spread copy vs reference assignment — verify original unchanged. | `spread`, `const` vs reference |

---

### Notes/

| File | Covers |
|------|--------|
| [Arrays_grp1_notes.md](Notes/Arrays_grp1_notes.md) | push/pop/shift/unshift, slice vs splice, merge, includes/indexOf, join/split |
| [Arrays_grp2_notes.md](Notes/Arrays_grp2_notes.md) | map, filter, reduce (sum, product, max, min) |
| [Arrays_grp3_notes.md](Notes/Arrays_grp3_notes.md) | sort gotchas, object sorting, find/findIndex, every/some |
| [Arrays_grp4_notes.md](Notes/Arrays_grp4_notes.md) | flat/flatten techniques, chunking arrays |
| [Arrays_grp5_notes.md](Notes/Arrays_grp5_notes.md) | HOF chaining, filter+map+reduce, groupBy pattern, `??=` operator |
| [Arrays_grp7_notes.md](Notes/Arrays_grp7_notes.md) | mutation vs immutability, mutating methods table, safe alternatives, `toSorted`/`toReversed` |
| [Array_grp8_notes.md](Notes/Array_grp8_notes.md) | destructuring, rest element, spread copy vs reference, `const` behavior |
