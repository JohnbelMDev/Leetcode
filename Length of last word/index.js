function lengthOfLastWord(string) {
    let test = string.trim().split(' ')
        test = test[test.length-1]
    return test.length
}

console.log(lengthOfLastWord("Hello World"));
