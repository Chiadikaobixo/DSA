// Write a function which accepts a sorted arrays and a values
// and return the index, return -1 if item is not in the array

// O(LogN) time complexity or O(1)
const binarySearch = (arr, val) => {
    let leftPointer = 0
    let rightPointer = arr.length - 1
    let middlePointer = Math.floor((leftPointer + rightPointer) / 2)
    while (arr[middlePointer] !== val && leftPointer <= rightPointer) {
        if (val > arr[middlePointer]) leftPointer = middlePointer + 1
        else rightPointer = middlePointer - 1
        middlePointer = Math.floor((leftPointer + rightPointer) / 2)
    }
    return arr[middlePointer] === val ? middlePointer : -1
}