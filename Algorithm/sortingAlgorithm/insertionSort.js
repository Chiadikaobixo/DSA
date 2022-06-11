function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var currentValue = arr[i]
        for(var j = i - 1; j >= 0 && arr[j] > currentValue; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentValue
    }
    return arr
}

console.log(insertionSort([5, 2, 7, 19, 1, 3]))