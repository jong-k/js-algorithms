// 백트래킹 예제
// 백준 15649 N과 M (1)
// 4개 (targetNum) 중에 3개 (totalNum) 를 골라 중복되지 않게 나열하는 모든 수열 출력
// 수열은 사전순으로 출력

const N = 4;
const M = 3;
const arr = [];
const isUsed = [];
const answer = [];

const backTracking = (k) => {
  // 3
  if (k === M) {
    // 3에서 같아짐
    answer.push(arr.join(" ")); // answer = ['1 2 3' , '1 2 4', ]
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!isUsed[i]) {
      // i = 4
      arr[k] = i; // arr[0] = 1, arr[1] = 2, arr[3] = 4
      isUsed[i] = 1; // isUsed[1] = 1, isUsed[2] = 1, isUsed[4] = 1
      backTracking(k + 1); // 1 depth 아래로 내려감 k = 3
      isUsed[i] = 0; // isUsed[3] = 0, 현재 isUsed = [ , 1, 0, 0, 0]
    }
  }
};

backTracking(0);
console.log(answer.join("\n"));
