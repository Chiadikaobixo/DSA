// Naive way of sorting
const sorting = (num1, num2) => {
    return num1 - num2
}
const result = [1, 34, 23, 5, 3, 76].sort(sorting)

// burbleSort
const burbleSort = (arr) => {
    for(let i = arr.length; i > 0; i-- ){
        for(let j = 0; j < i -1; j++){
            if(arr[j] > arr[j + 1]){
                // swap
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

// burbleSort 
// optimized with noSwap (break out if no swap) O(N^2)
const burbleSort2 = (arr) => {
    var noSwap
    for(let i = arr.length; i > 0; i-- ){
        noSwap = true
        for(let j = 0; j < i -1; j++){
            if(arr[j] > arr[j + 1]){
                // swap
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwap = false
            }
        }
        if(noSwap)break
    }
    return arr
}