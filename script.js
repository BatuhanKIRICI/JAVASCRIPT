function Person(name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job

}

Person.prototype.calculateAge = function () {
    return 2024 - this.yearOfBirth
}

Person.prototype.getJob = function () {
    return this.job = this.job
}

let man = new Person("Karl", 1990, "engineer")
let woman = new Person("Maria", 1999, "teacher")

console.log(man)
console.log(man.calculateAge())
console.log(man.getJob())
console.log("****************************")
console.log(woman)
console.log(woman.calculateAge())
console.log(woman.getJob())
console.log("****************************")
console.log(woman.hasOwnProperty("job"))
console.log(woman.hasOwnProperty("surname"))