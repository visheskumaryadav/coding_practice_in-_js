# coding_practice_in-_js

Learning JS by solving coding problems, organized by topic and difficulty.

```
Project Structure
─────────────────
Code/
  ├── Arrays/          ← Array practice problems (grp1–grp8)
  └── Objects/         ← Object practice problems (grp1–...)
Notes/
  ├── Arrays/          ← Notes & explanations for each array group
  └── Objects/         ← Notes & explanations for each object group
README.md              ← This file (index of everything)
```

---

## Arrays

### Code Files

#### [grp1.js](Code/Arrays/grp1.js) — Basic Array Operations

| # | Question | Key Methods |
|---|----------|-------------|
| 1 | Create an array of 5 numbers. Add/remove from end and beginning. | `push`, `pop`, `unshift`, `shift` |
| 2 | Extract `[2,3,4]` using `slice`. Delete element `3` using `splice`. | `slice`, `splice`, `indexOf` |
| 3 | Merge two arrays `[1,2,3]` and `[4,5,6]` — two different ways. | `spread (...)`, `push` |
| 4 | Check if `"mango"` exists in an array. Find its index. | `includes`, `indexOf` |
| 5 | Convert array to string and split string back into array. | `join`, `split` |

#### [grp2.js](Code/Arrays/grp2.js) — Map, Filter, Reduce

| # | Question | Key Methods |
|---|----------|-------------|
| 1 | Double every number in `[1,2,3,4,5]` using map. | `map` |
| 2 | Filter numbers greater than 20 from `[10,25,3,47,8,99]`. | `filter` |
| 3 | Return array of string lengths `[5,6,6]` from `["apple","banana","cherry"]`. | `map` |
| 4 | Find sum and product of `[1,2,3,4,5]` using reduce. | `reduce` |
| 5 | Find max and min using reduce only (no `Math.max`). | `reduce` |

#### [grp3.js](Code/Arrays/grp3.js) — Sorting, Finding, Every/Some

| # | Question | Key Methods |
|---|----------|-------------|
| 1 | Sort `[5,3,8,1,9,2]` ascending and descending. | `sort` with comparator |
| 2 | Sort `["banana","apple","cherry","mango"]` alphabetically. | `sort` |
| 3 | Sort array of student objects by marks descending. | `sort` custom comparator |
| 4 | Find the first number > 5 and its index. | `find`, `findIndex` |
| 5 | Check if every number is even / if some number is even. | `every`, `some` |

#### [grp4.js](Code/Arrays/grp4.js) — Flatten and Chunk

| # | Question | Key Methods |
|---|----------|-------------|
| 1 | Flatten `[[1,2],[3,4],[5,6]]` — using `flat()`, `reduce`, and loops. | `flat`, `reduce`, `spread` |
| 2 | Chunk array into groups of 2. Write a `chunk(arr, size)` function. | `slice`, loops |

#### [grp5.js](Code/Arrays/grp5.js) — HOF Chaining (filter + map + reduce)

| # | Question | Key Methods |
|---|----------|-------------|
| 1 | Filter delivered orders, map to product names — one chain. | `filter`, `map` |
| 2 | Total price of undelivered orders using filter + reduce. | `filter`, `reduce` |
| 3 | Convert valid numeric strings to numbers, ignore non-numeric. | `filter`, `map`, `Number.isNaN` |
| 4 | Sum of squares of even numbers — one chain. | `filter`, `map`, `reduce` |
| 5 | Group items by category using reduce. | `reduce`, `??=` |

#### [grp7.js](Code/Arrays/grp7.js) — Mutation vs Immutability

| # | Question | Key Methods |
|---|----------|-------------|
| 1 | Sort an array — did the original change? Protect with spread. | `sort`, `spread` |
| 2 | `addToEnd(arr, item)` — mutating vs non-mutating version. | `push`, `spread` |
| 3 | `arr.reverse()` — what happened to original? Fix it. | `reverse`, `spread` |
| 4 | Categorize methods: mutates-original vs returns-new-array. | conceptual |
| 5 | `removeItem(arr, index)` without mutation using slice only. | `slice`, `spread` |

#### [grp8.js](Code/Arrays/grp8.js) — Destructuring and Spread

| # | Question | Key Methods |
|---|----------|-------------|
| 1 | Destructure first two elements of `[10,20,30,40,50]`. | destructuring |
| 2 | Skip first element, grab second, collect rest. | `, ` skip, `...rest` |
| 3 | `getFirstAndRest(arr)` using destructuring — two ways. | destructuring in params |
| 4 | Spread to merge two arrays and insert `99` in the middle. | `spread` |
| 5 | Spread copy vs reference assignment — verify original unchanged. | `spread`, `const` vs ref |

### Notes

| File | Covers |
|------|--------|
| [Arrays_grp1_notes.md](Notes/Arrays/Arrays_grp1_notes.md) | push/pop/shift/unshift, slice vs splice, merge, includes/indexOf, join/split |
| [Arrays_grp2_notes.md](Notes/Arrays/Arrays_grp2_notes.md) | map, filter, reduce (sum, product, max, min) |
| [Arrays_grp3_notes.md](Notes/Arrays/Arrays_grp3_notes.md) | sort gotchas, object sorting, find/findIndex, every/some |
| [Arrays_grp4_notes.md](Notes/Arrays/Arrays_grp4_notes.md) | flat/flatten techniques, chunking arrays |
| [Arrays_grp5_notes.md](Notes/Arrays/Arrays_grp5_notes.md) | HOF chaining, filter+map+reduce, groupBy pattern, `??=` operator |
| [Arrays_grp7_notes.md](Notes/Arrays/Arrays_grp7_notes.md) | mutation vs immutability, mutating methods table, safe alternatives |
| [Array_grp8_notes.md](Notes/Arrays/Array_grp8_notes.md) | destructuring, rest element, spread copy vs reference, `const` behavior |

---

## Objects

### Code Files

#### [grp1.js](Code/Objects/grp1.js) — Creating and Accessing Properties

| # | Question | Key Methods |
|---|----------|-------------|
| 1 | Create `person` object. Access properties via dot and bracket notation. | dot `.`, bracket `[]` |
| 2 | Object with a space in key (`"full name"`). Why can't you use dot notation? | bracket `[]` |
| 3 | Dynamic property access with a variable using bracket notation. | bracket `[variable]` |
| 4 | Add, update, and delete properties on an existing object. | `=`, `delete` |
| 5 | Check if property exists — `in` operator, `hasOwnProperty`, `Object.hasOwn`. | `in`, `Object.hasOwn` |

### Notes

| File | Covers |
|------|--------|
| [Objects_grp1_notes.md](Notes/Objects/Objects_grp1_notes.md) | dot vs bracket notation, dynamic access, add/update/delete, property existence checks |
