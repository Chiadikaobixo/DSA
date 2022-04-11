// Iteratively 
const factorialOf = (num) => {
    let total = 1
    for( let i = num; i > 0; i--){
       total *= i
    }
    return total
}

// recusively 
const factorial = (num) => {
    if(num === 1) return 1
    return num * factorial(num - 1)
}