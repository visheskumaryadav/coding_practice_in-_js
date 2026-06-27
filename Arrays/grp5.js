const orders = [
    { id: 1, product: "laptop", price: 80000, delivered: true },
    { id: 2, product: "phone", price: 30000, delivered: false },
    { id: 3, product: "tablet", price: 25000, delivered: true },
    { id: 4, product: "watch", price: 8000, delivered: false },
];

// 1. Filter only delivered orders, then map to get just product names — in one chain.

let result = orders.filter(order => order.delivered).map(deliveredOrder => deliveredOrder.product);
console.log(result);

// 2. Find the total price of all undelivered orders using filter + reduce.

let totalPrice = orders.filter(order => order.delivered === false).reduce((initialValue, currentValue, index) => (initialValue + currentValue.price), 0);
console.log(totalPrice);

// 3. Given ["1", "2", "three", "4", "five"], convert all valid numeric strings to numbers and ignore non-numeric ones — use filter + map.

result = ["1", "2", "three", "4", "five"].filter(item => !(Number.isNaN(Number(item)))).map(item => Number(item));
console.log(result);

// 4. Given [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], get the sum of squares of only the even numbers — in one chain.

let sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(n => n % 2 === 0).map(n=>n*n).reduce((initialValue, currentValue, index) => initialValue + currentValue, 0);
console.log(sum);

// 5. Group the following by category using reduce

const items = [
    { name: "apple", category: "fruit" },
    { name: "carrot", category: "vegetable" },
    { name: "mango", category: "fruit" },
    { name: "potato", category: "vegetable" },
    { name: "grape", category: "fruit" },
];
// expected:
// { fruit: ["apple","mango","grape"], vegetable: ["carrot","potato"] }

let fruit = [], vegetable = [];
result = items.reduce((initialValue, currentValue) => {
    initialValue[currentValue.category]??=[];
    initialValue[currentValue.category].push(currentValue.name)
    return initialValue;
}, {})

console.log(result);

