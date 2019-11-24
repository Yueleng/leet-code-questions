var longestCommonSubstring = function(s1, s2) {

    let maxIndexS1 = 0
    // let maxIndexS2 = 0  -- not used. why?
    let maxLength = 0

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
                    if (maxLength < countArr[i][j]) {
                        maxLength = countArr[i][j]
                        maxIndexS1 = i
                        // maxIndexS2 = j
                    }
                } else {
                    countArr[i][j] = countArr[i-1][j-1] + 1
                    if (maxLength < countArr[i][j]) {
                        maxLength = countArr[i][j]
                        maxIndexS1 = i
                        // maxIndexS2 = j
                    }
                }
            }
        }
    }
    return s1.slice(maxIndexS1-maxLength+1, maxIndexS1+1)
}