// Write a function that accepts an array
// O(N)
function whatever(arr, val) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i
        }
    }
    return -1
}