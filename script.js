// let dateOfNow = new Date()

// console.log(dateOfNow)
// console.log(typeof dateOfNow)

let firstDate = new Date("5/31/1993")
let secondDate = new Date("5/31/2024")
let dateNow = Date.now()

marginDate_1 = (dateNow - firstDate) / 1000 / 60 / 60 / 24

marginDate_2 = (secondDate - firstDate) / 1000 / 60 / 60 / 24

console.log(`${marginDate_1} days have passed!`)
console.log(`${marginDate_2} days will have passed till that day!`)