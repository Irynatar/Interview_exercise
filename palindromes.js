//first method

const palindrome1 = (str) => {
    const reversed = str.split('').reverse().join('');
    if (reversed === str) {
       return true 
    }  else {
        return false
    } 
};

//second method
const palindrome2 = (str) => {
   return str.split('').every((character, i) => {
       return character === str[str.length-i-1];
   });
};


console.log(palindrome1('abba'))
console.log(palindrome2('abba'))