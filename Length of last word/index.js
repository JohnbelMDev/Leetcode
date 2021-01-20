function lengthOfLastWord(string) {
    let test = string.split(' ')
    console.log(test);
        test = test[test.length-1]
    return test.length
}

console.log(lengthOfLastWord("Hello World"));
