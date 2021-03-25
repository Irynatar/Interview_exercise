const reversedInt = (n) => {
    return parseInt(n.toString().split('').reverse().join(''))*Math.sign(n);
     
};

console.log(reversedInt(15));
console.log(reversedInt(-15));
console.log(reversedInt(500));
console.log(reversedInt(-90));