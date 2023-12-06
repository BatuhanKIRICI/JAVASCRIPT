function abbrevName(name) {
  let getArray = name.split("");

  let index = getArray.indexOf(" ");

  let first = getArray[0];
  let second = getArray[index + 1];

  return `${first.toUpperCase()}.${second.toUpperCase()}`;
}

console.log(abbrevName("ichael aine"));
