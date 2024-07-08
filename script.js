let personProto = {
  calculateAge: function () {
    return 2024 - this.year;
  },
};

let mark = Object.create(personProto);

mark.name = "Mark";
mark.surname = "Schmidt";
mark.year = 2000;

console.log(mark);
console.log(mark.calculateAge());

let anna = Object.create(personProto, {
  name: { value: "Anna" },
  surname: { value: "Schmidt" },
  year: { value: 2003 },
});

console.log(anna);
