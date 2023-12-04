const points = [70, 75, 25, 63, 15, 5, 99, 12];

const resultFind = points.find((point) => point > 50);

// console.log(resultFind);

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

const studentIndex = students.findIndex((item) => item.name === "kyle");
students[studentIndex].name = "bill";

console.log(students);
