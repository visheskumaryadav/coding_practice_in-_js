// 1. Given const arr = [10, 20, 30, 40, 50], destructure the first two elements into a and b. Log both.

const arr = [10, 20, 30, 40, 50];

let [a,b]=arr;

console.log(`a:${a}\nb:${b}`);

console.log("-".repeat(60));


// 2. Given the same array, skip the first element and grab the second into second. Then grab everything after into remaining.

let [,second,...remaining]=arr;
console.log(`second:${second}\nremaining:${remaining}`);

console.log("-".repeat(60));


// 3. Write getFirstAndRest(arr) using destructuring that returns the first element and the rest as a separate array.

function getFirstAndRest1(arr) {
    let [first,...rest]=arr;
    return [first,rest];
}
function getFirstAndRest2([first, ...rest]) {
    return [first, rest];
}
console.log(getFirstAndRest1([1,2,3,4,5]));
console.log(getFirstAndRest2([1, 2, 3, 4, 5]));

console.log("-".repeat(60));

// 4. Given [1, 2, 3] and [4, 5, 6], use spread to merge. Then insert 99 in the middle to get [1, 2, 99, 3, 4, 5, 6] using spread only.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result=[...arr1,...arr2];
console.log(result);

result=[...arr1,99,...arr2];
console.log(result);
console.log("-".repeat(60));

// 5. Create const original = [1, 2, 3]. Make a copy using spread, modify the copy, verify original unchanged. 
// Then try const ref = original — modify ref and see what happens to original.

const original5 = [1, 2, 3];
let originalCopy=[...original5];
originalCopy.pop();
console.log(originalCopy);
console.log(original5);

const ref=original5;
ref.pop();
console.log(original5);


