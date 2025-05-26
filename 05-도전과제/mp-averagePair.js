// 정수들이 오름차순 정렬된 배열과 정수(타겟 에버리지)가 주어짐
// 배열에서 한 쌍의 평균이 타겟 에버리지이면 true를 반환
// 배열에는 적어도 한 쌍은 존재해야함
// Time: O(N)
// averagePair([1,2,3], 2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19], 8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([], 4) // false
// 풀이법 : 타겟보다 크면 right--
// 타겟보다 작으면 left++
// 타겟이면 종료
function averagePair(arr, target) {
  if (arr.length < 2) {
    return false;
  }
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum > 2 * target) {
      right--;
    } else if (sum < 2 * target) {
      left++;
    } else {
      return true;
    }
  }
  return false;
}
