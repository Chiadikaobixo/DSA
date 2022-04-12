// pure Recursion
function collectOddValues(arr) {
    let newarr = []
    if(arr.length === 0) return newarr
    if(arr[0] % 2 !== 0){
        newarr.push(arr[0])
    }
    newarr = newarr.concat(collectOddValues(arr.slice(1)))
    return newarr
}