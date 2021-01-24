
function reverseString(string) {
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        newString = string[i] + newString
    }
    return newString
}

console.log(reverseString("p"))
console.log(reverseString("pneumonia"))
console.log(reverseString("pneumonultramicroscopicsilicavolicanosis"))
console.log(reverseString("apple"))