const firstName = localStorage.setItem("firstName", "Batuhan")
const lastName = localStorage.setItem("lastName", "Kirici")

let val = localStorage.getItem("firstName")

console.log(val)
console.log(localStorage)

localStorage.removeItem("firstName")
// localStorage.removeItem("lastName")

localStorage.clear()

let hobbies = ["sport", "music", "programming"]

localStorage.setItem("hobbies", JSON.stringify(hobbies))

let val_2 = JSON.parse(localStorage.getItem("hobbies"))

console.log(...val_2)

// const city = sessionStorage.setItem("city", "Kusel")
// const country = sessionStorage.setItem("country", "Germany")

// console.log(sessionStorage)