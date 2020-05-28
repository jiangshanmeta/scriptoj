const dp = [0,1,1];
const fibonacci = (n) => {
    if(n>=dp.length){
        for(let i=dp.length;i<=n;i++){
            dp.push(dp[i-1]+dp[i-2]);
        }
    }
    return dp[n];
}