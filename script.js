let Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function () {
  return 2024 - this.yearOfBirth;
};

let Teacher = function (name, yearOfBirth, job, subject) {
  Person.call(this, name, yearOfBirth, job);
  this.subject = subject;
};

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.constructor = Teacher;

let claire = new Teacher("Claire", 1999, "Teacher", "Mathematics");

console.log(claire.calculateAge());
