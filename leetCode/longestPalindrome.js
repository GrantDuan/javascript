/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2)
        return s;

    if (s.length == 2) {
        if (s[1] == s[0])
            return s;
        else
            return s[0];
    }

    let dp = [];
    dp[0] = [];
    dp[1] = s[1] == s[0] ? [2] : [];

    let longestPalindrome = Math.max(dp[0], dp[1]);
    let endingIndex = longestPalindrome > 1 ? 1 : 0;

    for (let i = 2; i < s.length; i++) {
        let t1 = [];
        if (s[i] == s[i - 1])
            t1[t1.length] = 2
        if (s[i] == s[i - 2])
            t1[t1.length] = 3;
        for (let j = 0; j < dp[i - 1].length; j++) {
            if (s[i - 1 - dp[i - 1][j]] == s[i] && i - 1 - dp[i - 1][j] >= 0)
                t1[t1.length] = dp[i - 1][j] + 2
        }

        dp[i] = t1;

        if (dp[i][dp[i].length -1] > longestPalindrome) {
            longestPalindrome = dp[i][dp[i].length -1];
            endingIndex = i;
        }
    }

    return s.substr(endingIndex + 1 - longestPalindrome, longestPalindrome);
};

let s = "aaaa";
console.log(longestPalindrome(s));