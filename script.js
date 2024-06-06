let person = {
    firstName: "Michael",
    lastName: "Schmidt",
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person.getFullName())