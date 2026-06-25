// 1. Given [1, 2, 3, 4, 5], create a new array where every number is doubled. Use map.

console.log([1, 2, 3, 4, 5].map(ele=>ele*2));

console.log('='.repeat(50));

// 2. Given [10, 25, 3, 47, 8, 99], filter out only numbers greater than 20.

console.log([10, 25, 3, 47, 8, 99].filter(ele=>ele>=20));

console.log('='.repeat(50));

// 3. Given ["apple", "banana", "cherry"], use map to return a new array of their lengths: [5, 6, 6].
console.log(["apple", "banana", "cherry"].map(el=>el.length));

console.log('='.repeat(50));

// 4. Given [1, 2, 3, 4, 5], find the sum of all numbers using reduce. Then find the product.
console.log([1, 2, 3, 4, 5].reduce((sum,currentValue)=>sum*currentValue,1));

console.log('='.repeat(50));

//5. Given [3, 1, 4, 1, 5, 9, 2, 6], find the maximum and minimum value — use reduce only, no Math.max.
const arr=[3, 1, 4, 1, 5, 9, 2, 6];
let result=arr.reduce((acc,currentValue)=>{
    acc=acc>currentValue?acc:currentValue
    return acc
},arr[0])

console.log(result);
result=arr.reduce((acc,currentValue)=>{
    acc=acc>currentValue?currentValue:acc
    return acc
},arr[0])
console.log(result);
