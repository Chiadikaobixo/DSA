const stringSearch = (string1, string2) => {
    let count = 0
    for (let i = 0; i <= string1.length; i++) {
        for (let j = 0; j <= string2.length; j++) {
            if (string2[j] !== string1[i + j]) break
            if(j === string2.length - 1)count++
        }
    }
    return count
}