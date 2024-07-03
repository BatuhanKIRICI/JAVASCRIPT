function letterFinder(word, match) {

    let condition1 = typeof (word) == 'string' && word.length >= 2

    let condition2 = typeof (match) == 'string' && match.length === 1

    if (condition1 === true && condition2 === true) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] == match) {
                console.log('Found the', match, 'at', i + 1)
            } else {
                console.log('---No match found at', i + 1)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.")
    }
}

letterFinder(45, 4)

letterFinder("cat", "c")

