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
  {
    name: "charlie",
    score: 77,
  },
  {
    name: "sean",
    score: 83,
  },
];

// const filtered = students.filter((item) => item.score < 50);

// const plusPoint = filtered.map(
//   (item) => `${item.name}'s updated score is ${item.score + 10}.`
// );

const newScores = students
  .filter((item) => item.score < 50)
  .map((item) => `${item.name}'s updated score is ${item.score + 10}.`);

console.log(newScores);
