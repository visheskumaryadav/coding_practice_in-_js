// 1. Flatten [[1, 2], [3, 4], [5, 6]] into [1, 2, 3, 4, 5, 6] — use flat(). Then try with reduce.

console.log([[1, 2], [3, 4], [5, 6]].flat()); //----> way1

let arr = [[1, 2], [3, 4], [5, 6]];
let result = arr.reduce((acc, curr) => {  //---> way2
    curr.map(e => acc.push(e));
    return acc;
}, []);

console.log(result);

result = arr.reduce((acc, curr) => [...acc, ...curr], []) //--->way3
console.log(result);

result = [];
for (let i of arr) {
    result.push(...i)
}
console.log(result);

console.log("-".repeat(60));

// 2. Given [1, 2, 3, 4, 5, 6], chunk it into groups of 2: [[1,2], [3,4], [5,6]]. Write a chunk(arr, size) function.

function chunk1(arr, size) {
    let i = 0; let result = []; let tmp = []; let count = 0;

    while (i < arr.length) {
        if (count >= size) {
            result.push(tmp);
            tmp = []; count = 0;
        } else {
            tmp.push(arr[i]);
            i++; count++;
        }

    }

    if (tmp.length > 0) {
        result.push(tmp);
    }
    return result;
}

function chunk2(arr,size){
    let result=[];
    for(let i=0;i<arr.length;i=i+size){
       result.push(arr.slice(i,i+size)); 
    }
    return result;
}


console.log(chunk2([1, 2, 3, 4, 5, 6], 2));

// 3. Given [1, 2, 2, 3, 4, 4, 5], remove all duplicates. Do it using Set, then without Set using filter.

console.log(Array.from(new Set([1, 2, 2, 3, 4, 4, 5])));

let arr3 = [1, 2, 2, 3, 4, 4, 5];
result=arr3.filter((value,index,array)=>{
    return array.indexOf(value)===index;
})

console.log(result);

// 4. Given ["a", "b", "c"] and [1, 2, 3], zip them into [["a",1], ["b",2], ["c",3]].

let charArray = ["a", "b", "c"];
let numArray = [1, 2, 3];

result= charArray.map((char,index)=>[char,numArray[index]]);
console.log(result);

// 5. Rotate an array to the right by k positions. rotate([1,2,3,4,5], 2) → [4,5,1,2,3].

function rotateArray(arr,k){

    for(let i=0;i<k;i++){
        let lastElement=arr[arr.length-1];
        for(let j=arr.length-1;j>0;j--){
            arr[j]=arr[j-1];
        }
        arr[0]=lastElement;
    }
}
let arr5 = [1, 2, 3, 4, 5];
console.log(arr5);

rotateArray(arr5,2);
console.log(arr5);