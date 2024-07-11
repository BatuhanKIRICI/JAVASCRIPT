let numeric = {
  min: 0,
  max: 100,
  checkNumericRange: function (value) {
    if (typeof value !== "number") {
      return false;
    } else {
      return value >= this.min && value <= this.max;
    }
  },
};

// console.log(numeric.checkNumericRange(-20));
// console.log(numeric.checkNumericRange(20));

let num1 = { min: 10, max: 58 };

console.log(numeric.checkNumericRange.call(num1, 43));
console.log(numeric.checkNumericRange.call(num1, 77));
console.log("**************************************************");
console.log(numeric.checkNumericRange.apply(num1, [12]));
console.log(numeric.checkNumericRange.apply(num1, [95]));
console.log("**************************************************");

let checkNumber = numeric.checkNumericRange.bind(num1);

console.log(checkNumber(56));
