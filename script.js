const points = [70, 75, 25, 63, 15, 5, 99, 12];

const resultMap = points.map((point) => (point < 50 ? point + 10 : point));

// console.log(resultMap);

const students = [
  {
    name: "jack",
    score: 40,
  },
  {
    name: "mary",
    score: 60,
  },
  {
    name: "angela",
    score: 35,
  },
  {
    name: "kyle",
    score: 45,
  },
];

const studentMap = students.map((item) =>
  item.score < 50
    ? { name: item.name, score: item.score + 10 }
    : { name: item.name, score: item.score }
);

console.log(studentMap);
