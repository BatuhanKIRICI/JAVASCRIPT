const first = () => {
  console.log("first");
  second();
};

const second = () => {
  setTimeout(() => {
    console.log("second");
  }, 1000);
  third();
};

const third = () => {
  console.log("third");
};

first();
