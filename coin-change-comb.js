/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    coins.sort((a, b) => {
        a - b
    })
    const dp = new Array(amount+1)

    for (let x = 0; x<amount+1; ++x) {
        dp[x] = new Array(coins.length).fill(0)
    }

    for (const [i, v] of coins.entries()) {
        if (v <= amount) {
            dp[v][i] = 1
        }
    }

    for (let i = 0; i<coins.length; ++i) {
        dp[0][i] = 1
    }

    //console.log(dp)
    for (let i = 1; i<=amount; ++i) {
        for (const [j, v] of coins.entries()) {
            if (v + i <= amount) {
                if (dp[i][j]) {
                    dp[v + i][j] = dp[i][j]
                }
            }
            if (j != coins.length - 1) {
                dp[i][j+1] += dp[i][j]
            }
        }
    }
    //console.log(dp)


    return dp[amount][coins.length - 1]
};
