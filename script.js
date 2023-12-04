const points = [70, 75, 25, 63, 15, 5, 99, 12];

const resultFind = points.find((point) => point > 50);

console.log(resultFind);

// const students = [
//   {
//     name: "jack",
//     score: 40,
//   },
//   {
//     name: "mary",
//     score: 60,
//   },
//   {
//     name: "angela",
//     score: 35,
//   },
//   {
//     name: "kyle",
//     score: 45,
//   },
//   {
//     name: "jack",
//     score: 75,
//   },
//   {
//     name: "mary",
//     score: 80,
//   },
//   {
//     name: "angela",
//     score: 65,
//   },
//   {
//     name: "kyle",
//     score: 85,
//   },
// ];

// const studentReduce = students.reduce((value, student) => {
//   if (student.name === "jack") {
//     value += student.score / 2;
//   }
//   return value;
// }, 0);

// console.log(studentReduce);
