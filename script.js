function changeReg(word) {
    word ? word : console.log("Type new string")

    let smallStr = word.toLowerCase()

    let newStr = smallStr[0].toUpperCase() + smallStr.slice(1)
    console.log(newStr)
}

changeReg("bsb")

function sayHello(name) {
    let str;
    if(name != "Mark") {
        str = "Hello, " + name + "!"
        console.log(str)
    } else {
        str = "Hi, " + name + "!"
        console.log(str)
    }
}

sayHello("Bob")

function filterStrings(stringArr, maxLength) {
    for(let i = 0; i < stringArr.length; i++) {
        if(stringArr[i].length > maxLength) {
            stringArr.splice(i, i)
        }
    }

    console.log(stringArr)
}

filterStrings(["I love JS", "some very long string", "hell"], 9)