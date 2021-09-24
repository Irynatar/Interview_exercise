
//first method

const reverse = function (str) {
    let newStr = str.split("").reverse().join("");
    return newStr
}

console.log(reverse("Iryna!"))

//second method

const reverse1 = function (str) {
    let newStr = ''
    for (let i of str) {
      newStr = newStr + str[i]
  }
   return newStr
}
console.log(reverse1("Iryna!"))