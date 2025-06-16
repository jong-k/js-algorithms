# 검색 알고리즘(searching algorithms)

구글의 검색 알고리즘의 경우, 약 10가지 알고리즘이 동시에 적용되는 복잡한 구조

- 검색 결과를 개인화하기 때문에 매우 복잡한 로직

### 배열에서 특정 값 검색하는 경우

자바스크립트 내장함수를 통해 배열에서 특정값이 존재하는지 검사할 수 있다

- 선형 탐색(linear search)
- 이진 탐색(binary search) -> 정렬된 배열에서의
- naive string searching algorithms
- KMP string searching algorithms

### indexOf() 사용

```js
const usernames = ["tommy", "monkeygurl", "dog_guy", "nike"];

usernames.indexOf("nike"); // 3
usernames.indexOf("adidas"); // -1
```

## 1. 선형 탐색 (linear search)

배열의 모든 값을 돌며 한번에 하나의 값을 탐색

- 시간복잡도 : O(N)

### 해당 메서드

- indexOf
- includes
- find
- findIndex

구현

- ./linearSearch.js

## 2. 이진 탐색 (Binary Search)

- 이진 탐색은 정렬된 배열에서만 동작
- 중간점을 선택하면서 매번 배열의 절반 가량을 제거할 수 있음

Pseudo Code

- left pointer: 계산을 시작하는 좌측 인덱스 (0)
- right pointer: 배열 맨 끝의 인덱스 (length - 1)
- left pointer가 right pointer보다 같거나 작을동안 연산이 계속
- 양측 포인터의 평균이 중간점으로 활용

구현

- ./binarySearch.js

### 시간 복잡도

worst & average case : O(log N)

- 선형 탐색(O(N)) 보다 효율적
  - 단, 이진 탐색은 정렬된 배열에만 사용 가능
- 16개의 원소가 있는 배열은 4번만에 답을 찾음
- 32개의 원소가 있는 배열은 5번만에 답을 찾음

best case : O(1)

- 한 번에 값을 찾는 경우

## 3. Naive String Search

### 예제

문자열 안에서 특정 문자열이 등장하는 횟수를 찾는 경우

- 예) wowomgzomg 에서 omg 찾기

```js
// wowomgzomg
// o -> 틀림, +1칸
//  o -> 맞음, 찾을 문자열 +1증가
//  om -> 틀림, +1칸
//
// ...
//
// wowomgzomg
//    omg -> 일치
```

Pseudo code

- 입력 문자열에서 순회
- 찾을 문자열에서 순회
- 만약 문자가 일치하지 않으면, 내부 반복문을 break
- 문자가 일치하면 계속 진행
- 내부 반복문을 완료하면 (문자열을 찾음) count를 증가하고 마지막에 그 count를 반환

구현

- ./naiveStringSearch.js
