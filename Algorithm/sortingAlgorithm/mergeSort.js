const merge = (inputArray1, inputArray2) => {
    var array = []
    let i = 0
    let j = 0
    while (i < inputArray1.length && j < inputArray2.length) {
        if (inputArray1[i] < inputArray2[j]) {
            array.push(inputArray1[i])
            i++
        } else {
            array.push(inputArray2[j])
            j++
        }
    }
    while (i < inputArray1.length) {
        array.push(inputArray1[i])
        i++
    }
    while (j < inputArray2.length) {
        array.push(inputArray2[j])
        j++
    }
    return array
}

const mergeSort = (array) => {
    if (array.length <= 1) return array
    let midPoint = Math.floor(array.length / 2)
    let left = mergeSort(array.slice(0, midPoint))
    let right = mergeSort(array.slice(midPoint))
    return merge(left, right)
}