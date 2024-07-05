const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

console.log("*****************************************")

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function (veggie, index) {
    console.log(`${index}. ${veggie}`);
});

console.log("*****************************************")

const nums = [0, 10, 20, 30, 40, 50];
const filteredNums = nums.filter(function (num) {
    return num > 20;
})

console.log(filteredNums)

console.log("*****************************************")

const mappedNums = [0, 10, 20, 30, 40, 50].map(function (num) {
    return num / 10
})

console.log(mappedNums)