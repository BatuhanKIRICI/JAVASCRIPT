function positiveSum(arr) {
  const group = arr.filter((a) => a > 0);

  let sum = 0;

  group.map((num) => {
    sum += num;
  });
  return sum;
}

console.log(positiveSum([-2, 3, 5, 8, -7, -45, 9]));
