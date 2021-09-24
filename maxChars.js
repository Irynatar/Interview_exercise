function maxChar(str) {
    let obj = {};
    let max = 0;
    let maxChar = '';

    for(let i of str){
        if(obj[i]){
            obj[i]++
        } else {
            obj[i]=1
        }
    }

    for(let i in obj){
        if(obj[i] > max) {
            max = obj[i]
            maxChar = i
        }
    }
    return maxChar
}