let val;

function MultiplyByTwo(a, b, c, d_callback) {
  let arr = [];
  if (d_callback && typeof d_callback === "function") {
    for (let i = 0; i < 3; i++) {
      arr[i] = d_callback(arguments[i] * 2);
    }
  }

  return arr;
}

val = MultiplyByTwo(2, 5, 10, addOne);

console.log(val);

function addOne(a) {
  return a + 1;
}

//Anonymous function

val = MultiplyByTwo(4, 6, 12, function (a) {
  return a * 5;
});

console.log(val);
