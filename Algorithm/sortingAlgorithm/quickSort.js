const quick = (array, startIndex = 0, endIndex=array.length + 1) => {
    function swap(arr, i, j){
        var tem = arr[i]
        arr[i] = arr[j]
        arr[j] = tem
    }
    let pivot = array[startIndex]
    let swapIndex = startIndex
    for (let i = startIndex + 1; i < array.length; i++) {
        if (pivot > array[i]) {
           swapIndex++
           swap(array, swapIndex, i)
        }
    }
    swap(array, startIndex, swapIndex)
    console.log(array)
    return swapIndex
}