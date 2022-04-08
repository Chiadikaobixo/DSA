// Write a function called Same, which accepts two arrays. The function
// should return true if every value in the first array has its corresponding 
// value squared in the second array. The frequency of the value must be 
// the same.


//O(N^2) 
const same = (arr1, arr2) => {
    if( arr1.length !== arr2.length){
        return false
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){
            return false
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}

//Frequency Counter Approach
//O(N)
const same2 = (arr1, arr2) => {
    if( arr1.length !== arr2.length){
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let value of arr1){
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
    }
    for(let value of arr2){
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}


//Given two strings, write a function to determine if the second string is an
//anagram of the first string.

//Frequency Counter Approach
// O(N)
const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length){
        return false
    }
    let lookUp = {}
    
    for(let letter of str1){
        lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1
    }
    for(let letter of str2){
        if(!lookUp[letter]){
            return false
        }else{
            lookUp[letter]--
        }
    }
    return true
}