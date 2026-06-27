// 1.  Create [3, 1, 4, 1, 5]. Sort it. Print the original — did it change? Now repeat but protect the original using spread before sorting.

let original = [3, 1, 4, 1, 5];
original.sort((a, b) => a - b);
console.log(original);

original = [3, 1, 4, 1, 5];
let duplicate = [...original];
duplicate.sort((a, b) => a - b)

console.log(original);
console.log(duplicate);

console.log("-".repeat(60));

// 2. Write a function addToEnd(arr, item) two ways — one that mutates the original, one that returns a new array without touching the original. Call both and verify.

function addToEndWay1(arr, item) {
    console.log(arr);
    arr.push(item);
    return arr;
}

function addToEndWay2(arr, item) {
    console.log(arr);
    let tmp = [...arr];
    tmp.push(item);
    return tmp;
}
let original2 = [1, 2, 3, 4];
console.log(addToEndWay1(original2, 5));

original2 = [1, 2, 3, 4];
console.log(addToEndWay2(original2, 5));

console.log("-".repeat(60));

// 3. Given const arr = [1, 2, 3], call arr.reverse(). Print the original. What happened? Fix it using spread.
let original3 = [1, 2, 3];
console.log(original3);
original3.reverse();
console.log(original3);

console.log("-".repeat(60));

// 4. Categorize each of these into **mutates original** or **returns new array**:

// `push`, `pop`, `map`, `filter`, `splice`, `slice`, `sort`, `reverse`, `concat`, `flat`, `forEach`

// push,pop,splice,sort,reverse,concat,flat -> mutates original
// remaining ones dont do it

// 5. Write removeItem(arr, index) that removes an element at a given index WITHOUT mutating the original. Return the new array. Hint: use slice only.

function removeItem(arr, index) {
    if(index>=0 && index <arr.length){
        let firstPart = arr.slice(0, index);
        let secondPart = arr.slice(index + 1, arr.length)
        return [...firstPart, ...secondPart];
    }else{
        throw new Error("Wrong index");
        return
    }
}

let original5 = [1, 2, 3, 4, 5, 6];
console.log(removeItem(original5,5));
