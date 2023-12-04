const points = [70, 75, 25, 63, 15, 5, 99, 12];
// const names = ["jack", "jane", "aaron", "zack"];

// const resultFind = names.reverse();

const resultPoint = points.sort((a, b) => b - a);

console.log(resultPoint);

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

const result_1 = students.sort((a, b) => {
  if (a.score > b.score) {
    return -1;
  } else if (b.score > a.score) {
    return 1;
  } else {
    return 0;
  }
});

const result_2 = students.sort((a, b) => b.score - a.score);

console.log(result_2);
