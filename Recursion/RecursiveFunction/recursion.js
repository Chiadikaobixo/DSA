const countItDown = (num) => {
    for(let i = num; i > 0; i--){
        console.log(i)
    }
    console.log('All done')
}

// Recursively
const countDown = (num) => {
    if (num <= 0){
       console.log('all done')
       return
    }
    console.log(num)
    num--
    countDown(num)
}

// Return sum range of a number
// Recursively
const sumRange = (num) => {
    if(num === 1) return 1
    return num + sumRange(num - 1)
}