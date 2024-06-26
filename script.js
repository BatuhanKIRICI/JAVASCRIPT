let round = Number(prompt("Round number?"))
let option = round

let guess
let counter = 0

let num = Math.floor(Math.random() * 10 + 1)


while (round > 0) {

    round--
    counter++

    guess = Number(prompt("Choose a number: "))

    if (guess === num) {
        console.log(`Yes! You've done it in ${counter}th round! Your score is ${100 - (counter - 1) * (100 / option)}!`)
        break
    } else if (guess > num) {
        console.log("Down")
    } else {
        console.log("Up")
    }

    if (round === 0) {
        console.log(`Game over! Number is: ${num}`)
        break
    }
}