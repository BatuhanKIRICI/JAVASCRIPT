const sentence = "   hello world. How ist goin? I ve been studying for programming for a long time. And i m  happy with that."

let newSentence1 = sentence.split(" ")
let newSentence2 = sentence.trim()

console.log(newSentence1)

console.log(newSentence2.split(" "))
console.log(newSentence2.split(""))
console.log(newSentence2.split("."))
console.log(sentence.replace(/ /g, "-"))
console.log(sentence.indexOf("for"))