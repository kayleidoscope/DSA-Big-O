function stringSplitter(string, separator) {
    let newString = string;
    let separatorIndex = newString.indexOf(separator)


    while(newString.includes(separator)) {
        newString = newString.replace(`${separator}`, " ")

        separatorIndex = newString.indexOf(separator)
    }

    return newString
}

console.log(stringSplitter("01/19/1999", "/"))