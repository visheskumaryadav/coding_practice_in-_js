// 1.  Given [5, 3, 8, 1, 9, 2], sort it in ascending order. Then sort in descending order.

console.log([5, 3, 8, 1, 9, 2].sort());

console.log('='.repeat(50));
// 2. Given ["banana", "apple", "cherry", "mango"], sort alphabetically.

console.log(["banana", "apple", "cherry", "mango"].sort());

console.log('='.repeat(50));

// 3. Given an array of objects,Sort by marks in descending order.
const students = [
  { name: "Vishesh", marks: 85 },
  { name: "Rahul", marks: 92 },
  { name: "Priya", marks: 78 }
];

console.log(students.sort((a,b)=>b.marks-a.marks));
console.log('='.repeat(50));

// 4. Given [1, 2, 3, 4, 5, 6, 7, 8], find the first number greater than 5 using find. Then find its index using findIndex.
let arr=[1, 2, 3, 4, 5, 6, 7, 8];

function way1(arr){
let resultIndex=undefined;
for(let i=0;i<arr.length;i++){
    if(arr[i]>5){
        resultIndex=i;
        break
    }
}
console.log(`index::: ${resultIndex} and number === ${arr[resultIndex]}`);
}
way1(arr)
console.log('='.repeat(50));

// 5. Check if every number in [2, 4, 6, 8] is even. Check if some number in [1, 3, 5, 7, 8] is even.

console.log([2, 4, 6, 8].every(el=>el%2===0));

console.log([1, 3, 5, 7, 8].some(el => el%2===0));


