// Write a function called maxSubArraySum which accepts
// an array of integers and a number called n. The function
// should calculate the maximum sum of n consecutive elements
// in the array.

// O(N^2)
const maxSubArraySum = (arr, num) => {
    if (num > arr.length) return null
    let max = -Infinity
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0
        for (let j = 0; j < num; j++) {
            temp += arr[i + j]
        }
        if (temp > max) {
            max = temp
        }
    }
    return max
}


// Sliding Window Approach
// O(N)
const maxSubArraySum2 = (arr, num) => {
    if (num > arr.length) return null
    let maxSum = 0
    let tempSum = 0
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}