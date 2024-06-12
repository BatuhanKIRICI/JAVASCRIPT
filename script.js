let cars = ["BMW", "Mercedes", "Audi", "Opel"]

// for (let i in cars) {
//     console.log(`index : ${i} ; value : ${cars[i]}`)
// }

// cars.forEach((item) => {
//     console.log(item)
// })

let newCars = cars.map((item) => {
    return item
})

console.log(newCars)