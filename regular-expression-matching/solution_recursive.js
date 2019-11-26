/**
 * Thie answer is from @SeunghunSunmoonLee
 * https://leetcode.com/problems/regular-expression-matching/discuss/433271/JavaScript%3A-Readable-Code-For-Humans.-Recursive-Dynamic-Programming-Solution.
 * 
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(p.length === 0) { return s.length === 0 }
    let first_match = (s.length !== 0 && (s[0] === p[0] || p[0] === '.'))

    if (p.length >= 2 && p[1] === '*') {
        // if p = 's*ab.' and s='abc' thus return isMatch('abc', 'ab.')
        // if p = 's*ab.' and s='sabc' thus return (true && isMatch('abc', 's*ab.'))
        // idea: if p starting with 'c*...', two senarios:
        // 1. 'c*' is not matched thus, forward to p.substring(2) with s
        // 2. 'c*' is matched thus, forward to p with s.substring(1) and first_match(result of first letter comparison)
        return isMatch(s, p.substring(2)) || (first_match && isMatch(s.substring(1), p) )
    } else {
        // p starts with 'cb...', thus first letter of both s and p matter.
        return first_match && isMatch(s.substring(1), p.substring(1))
    }

};