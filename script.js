// let dateOfNow = new Date()

// console.log(dateOfNow)
// console.log(typeof dateOfNow)

let firstDate = new Date("5/31/1993")
let secondDate = new Date("5/31/2024")

marginDate = (secondDate - firstDate) / 1000 / 60 / 60 / 24

console.log(`${marginDate} days have passed till this day!`)