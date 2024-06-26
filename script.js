/* const sum = (a, b) => {

    if (typeof a === "undefined") a = 0
    if (typeof b === "undefined") b = 0

    let c = a + b
    return c
} */


//ES& Default Parameters
const sum = (a = 0, b = 0) => {


    let c = a + b
    return c
}

console.log(sum(4))

