/**
 * 
 * @param {string} s 
 * @return {palindromic substring}
 * 
 * @idea the solution is based on longest-common-string
 */

var longestPalindrome = function(s) {
    const s1 = s
    const s2 = [...s].reverse().join('')

    let validMaxIndexS1 = 0
    // let validMaxIndexS2 = 0   -- not used, why?
    let validMaxLength = 0
    const countArr = []
    
    for (let i = 0; i < s1.length; i++) {
        countArr.push(new Array(s2.length))
        for (let j = 0; j < s2.length; j++)
            countArr[i][j] = 0
    }

    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] == s2[j]) {
                if (i==0 || j == 0) {
                    countArr[i][j] = 1
                    if (validMaxLength < countArr[i][j]) {
                        validMaxLength = countArr[i][j]
                        validMaxIndexS1 = i
                        // validMaxIndexS2 = j
                    }
                } else {
                    countArr[i][j] = countArr[i-1][j-1] + 1

                    if (countArr[i][j] == 1 && validMaxLength < 1) {
                        // First Time Match
                        // No need to validate, length 1 matches itself
                        validMaxLength = countArr[i][j]
                        validMaxIndexS1 = i
                        // validMaxIndexS2 = j
                    } else if (validMaxLength < countArr[i][j]) {
                        // Anather match after previous match
                        // not validated yet. validate now
                        let currentCommonLen = countArr[i][j]
                        let testStr = s1.slice(i-currentCommonLen+1, i+1)

                        if (testStr == [...testStr].reverse().join('')) {
                            // test passed, assing new valid Variable
                            validMaxLength = countArr[i][j]
                            validMaxIndexS1 = i
                            // validMaxIndexS2 = j
                        }
                    }
                }
            }
        }
    }

    return s1.slice(validMaxIndexS1-validMaxLength+1, validMaxIndexS1+1)
}