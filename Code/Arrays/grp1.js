// GRP1
// 1. Create an array of 5 numbers. Add an element to the end, add one to the beginning,
//  remove from the end, remove from the beginning. Print array after each operation.

let arr1=[1,2,3,4,5];

console.log(arr1);

arr1.push(6);
console.log(arr1);

arr1.unshift(0);
console.log(arr1);

arr1.pop();
console.log(arr1);

arr1.shift();
console.log(arr1);

console.log("=".repeat(50));
// 2. Given [1, 2, 3, 4, 5], extract [2, 3, 4] using slice. Then delete the element 3 from the original array using splice.

let arr2=[1, 2, 3, 4, 5];
console.log(arr2.slice(arr2.indexOf(2),arr2.indexOf(4)+1));

console.log(arr2);
console.log(arr2.splice(arr2.indexOf(3),1));
console.log(arr2);

console.log("=".repeat(50));

// 3. Merge two arrays [1, 2, 3] and [4, 5, 6] into one — do it two different ways.
function way1(a,b){
    let result=[...a,...b];
    console.log(result);
}

function way2(a,b){
    for(let ele of b){
        a.push(ele)
    } 
    console.log(a);
}

way1([1, 2, 3],[4, 5, 6]);
way2([1, 2, 3],[4, 5, 6]);

console.log("=".repeat(50));

// 4. Check if "mango" exists in ["apple", "mango", "banana"]. Find its index. Then check if "grape" exists.
const fruits=["apple", "mango", "banana"];

console.log(fruits.includes("mango")?`Exists at index ${fruits.indexOf('mango')}`:`doesnt exists`);
console.log(fruits.includes("grape")?`Exists at index ${fruits.indexOf('mango')}`:`doesnt exists`);

//5. Convert the array ["hello", "world"] into the string "hello world". Then split the string "a,b,c,d" back into an array.

console.log(["hello", "world"].join(' '));
console.log("a,b,c,d".split(','));
