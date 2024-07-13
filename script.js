const multiply = (x, y) => x * y;

console.log(multiply(4, 5));

console.log("*************************************");

const splittinFunc = (text) => text.split(" ");

console.log(splittinFunc("Hello World again and again and..."));

console.log("*************************************");

const objMaker = (name, id) => ({
  name,
  id,
});

console.log(objMaker("Luke", 45566));

console.log("*************************************");

const arr = [1, 651, 2, 546, 489, 7813, 456, 75, 46, 36, 99, 56151, 77, 88];

const arr_filter = arr.filter((x) => x % 2 === 0);

console.log(arr_filter);
