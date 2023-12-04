const points = [70, 75, 25, 63, 15, 5, 99, 12];

const resultFilter = points.filter((point) => point >= 50);

// console.log(resultFilter);

const students = [
  {
    name: "jack",
    passed: true,
  },
  {
    name: "mary",
    passed: false,
  },
  {
    name: "angela",
    passed: false,
  },
  {
    name: "kyle",
    passed: true,
  },
];

const studentFilter = students.filter((item) => !item.passed);

console.log(studentFilter);
