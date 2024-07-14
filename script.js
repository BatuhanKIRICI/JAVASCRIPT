let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["a", "b", "c", "d"];

arr1.push(...arr2);

console.log(arr1);

console.log("/////////////////////////////////////////////////");

arr1.push(...arr1);

console.log(arr1);

console.log("/////////////////////////////////////////////////");

arr1.unshift(...arr2);

console.log(arr1);

console.log("/////////////////////////////////////////////////");

let arr3 = ["x", "y", ...arr2, arr1];

console.log(arr3);
