const quick = (array, startIndex = 0, endIndex = array.length + 1) => {
    function swap(arr, i, j) {
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
    return swapIndex
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = quick(arr, left, right)
        // left
        quickSort(arr, left, pivotIndex - 1)
        // right
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}