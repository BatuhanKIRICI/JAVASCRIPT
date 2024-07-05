let car = {
    engineV8: true,
    colorWhite: true,
    sport: true
}

let newCar = Object.create(car)

console.log(newCar)

let anotherCar = Object.create(car)

anotherCar.colorWhite = false

console.log(anotherCar)