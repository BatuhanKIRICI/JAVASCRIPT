function getMiddle(s) {
  //Code goes here!
  let long = s.length;
  let middle = Math.floor(long / 2);
  if (long % 2 === 1) {
    return s[middle];
  } else if (long % 2 === 0) {
    return s[middle - 1] + s[middle];
  }
}

console.log(getMiddle("janet"));
