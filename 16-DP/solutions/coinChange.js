/*
동전 가짓수가 예를 들어 [1, 5, 10, 25] 일때 금액 N을 만드는 모든 방법의 수를 DP로 구하기

DP 테이블: 해당 금액을 만드는 방법의 수
dp[1] = 1
dp[2] = 1
dp[5] = 2
dp[10] = 4

이 동전을 쓰기 전의 dp값을 활용해서 이 동전을 추가로 사용했을 때 만들 수 있는 방법을 누적
dp[i] += dp[i - coin]; 코드 부분에서 i = 20 예를 들면,
dp[20] = dp[20 - 5] 의 의미는 20원을 만들때, 15원을 만드는 가짓수에 5원을 추가로 사용하는 방법의 수를 더해주는 것
*/

// coins = [1, 5, 10, 25];
// amount = 10;
const coinChange = (coins, amount) => {
  const dp = Array(amount + 1).fill(0);
  dp[0] = 1; // 계산 편의상 1로 초기화

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
};
