function Person(name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
    this.calculateAge = () => {
        return 2024 - this.yearOfBirth
    }
}

let man = new Person("Karl", 1990, "engineer")

console.log(man)
console.log(man.calculateAge())