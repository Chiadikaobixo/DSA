// Time complexity O(nk) and space complexity o(n + K)
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

function radixSort(numlist){
    let maxDigitCount = mostDigits(numlist)
    for(let k = 0; k < maxDigitCount; k++){
        let digitBucket = Array.from({length: 10}, () => [])
        for(let i = 0; i < numlist.length; i++){
            let digit = getDigit(numlist[i], k)
            digitBucket[digit].push(numlist[i])
        }
        numlist = [].concat(...digitBucket)
    }
    return numlist
}