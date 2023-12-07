function SeriesSum(n) {
  let total = 0;

  for (let i = 0; i <= n; i++) {
    if (n === 0) {
      return (total = 0);
    }
    total += 1 / (1 + i * 3);
  }
  return total.toFixed(2).toString();
}
console.log(SeriesSum(2));
