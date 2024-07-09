let Person = function (name) {
  this.name = name;
};

Person.prototype.Introduce = function () {
  console.log(this.name);
};

let Teacher = function (name, branch) {
  Person.call(this, name);
  this.branch = branch;
};

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function () {
  console.log(`I teach ${this.branch}. `);
};

let p1 = new Person("Mike");

let p2 = new Teacher("Mark", "Literature");

p1.Introduce();
p2.Introduce();
p2.teach();
