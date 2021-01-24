let ticks = 0;

function stringSplitter(string, separator) {
    let newString = string;
    let separatorIndex = newString.indexOf(separator)


    while(newString.includes(separator)) {
        newString = newString.replace(`${separator}`, " ")

        ticks++;

        separatorIndex = newString.indexOf(separator)
    }

    console.log({ticks})
    return newString
}

console.log(stringSplitter("01/19/1999", "/"))