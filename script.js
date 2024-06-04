let arr = ["BMW", "VW", "Mercedes", "Audi"]

arr[arr.length] = "Opel"

console.log(arr)

// arr[0] = "Bugatti"

// console.log(arr)

arr.push("Bugatti")
arr.unshift("Ferrari")

console.log(arr)

arr.reverse()

console.log(arr)

arr.sort()

console.log(arr)

let str = "Ford,Seat"

let arr2 = str.split(",")

arr = arr.concat(arr2)

console.log(arr)