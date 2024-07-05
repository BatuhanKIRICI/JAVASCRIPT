function Employee(name, salary) {

    if (!(this instanceof Employee)) {
        return new Employee(name, salary)
    }

    this.name = name
    this.salary = salary
}

Employee.prototype.calculateTax = function () {
    let month = new Date().getMonth() + 1
    let total = this.salary * month
    let tax = 0
    let paid = 0


    if (total < 20000) {

        tax = total * 0.2

    } else if (total > 20000 && total < 30000) {

        tax = total * 0.25

    } else {

        tax = total * 0.25
    }
    return {
        tax: tax,
        paid: total - tax
    }
}

let emp1 = new Employee("Friedrich", 2000)

console.log(emp1)
console.log(emp1.calculateTax())

console.log("***************************************************")

let emp2 = Employee("Mark", 4000)

console.log(emp2)
console.log(emp2.calculateTax())