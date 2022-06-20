function getDigit(num, i){
    return Math.floor( Math.abs(num) / Math.pow(10, i) )% 10
}

function digitCount(num){
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(arraynum){
     let maxDigits = 0
     for(let i = 0; i < arraynum.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(arraynum[i]))
     }
     return maxDigits
}

console.log(mostDigits([243, 23, 1111, 23232222]))