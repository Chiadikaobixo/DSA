// Sketch of a helperMethod Recursion
function outer(input) {
    var outerScopedVariable = []

    function helper(helperInput) {
        // Modify  the outerScopedVariable
        helper(helperInput--)
    }
    helper(input)

    return outerScopedVariable
}

// helperMethod Recursion
function collectOddValues(arr) {
    var result = []

    function helper(helperInput) {
        if(helperInput.length === 0){
            return 
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)

    return result
}