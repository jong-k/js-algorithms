# 문제 해결 패턴

## 패턴1. 빈도 수 세기 (Frequency Counter)

### 예제1

자연수로 이루어진 2개의 배열 a, b를 입력받고, a의 각 원소의 제곱이 b의 원소인지 확인

- 순서는 무시
- 조건을 만족하면 true, 아니면 false 반환

#### naive solution: O(N^2)

./frequency-counter/same.js

#### refactored solution: O(N)

./frequency-counter/sameRefactored.js

### 예제2 애너그램 (Anagram) 판별

문자열 a, b를 입력받고 anagram이면 true를 출력하는 프로그램 작성

- anagram: 어떤 문자열이 있을 때 문자열의 순서를 바꾼 것
- 예: cinema -> iceman

#### 1st solution

./frequency-counter/validAnagram.js

- 불필요한 frequency counter 객체를 2개 만듬

#### refactored solution

./frequency-counter/validAnagramRefactorerd.js

- 불필요한 2번째 문자열 counting 제거

### Boyer–Moore majority vote algorithm

> Boyer-Moore 다수결 투표 알고리즘

#### 개요

- 주어진 배열에서 다수 요소(majority element)를 찾는 알고리즘
- 다수 요소: 배열의 길이의 절반(N / 2) 이상인 요소
- 선형 시간 O(n)과 상수 공간 O(1) 복잡도로 대규모 데이터를 빠르게 검색 가능

#### 핵심 아이디어

- 배열에 다수 요소가 존재한다고 가정하고, 다수 요소는 배열의 길이의 절반을 초과하는 횟소로 나타남
- 투표 개념을 사용하여 다수 요소를 찾음
- 배열을 한 번 순회하면서 각 요소를 후보로 설정하고, 카운트를 관리하여 다수 요소를 식별
- (선택 사항) 두 번째 순회를 통해 후보가 실제로 다수 요소인지 확인 가능

#### 알고리즘 동작 과정

초기화

- candidate: 현재 다수 요소로 간주되는 후보
- count: 후보의 투표 수를 나타내는 카운트

1번째 순회

- 배열의 각 요소를 순회하며:
  - count가 0이면 현재 요소를 새로운 candidate로 설정하고 count 1로 초기화
  - 현재 요소가 candidate와 같으면 count 1 증가
  - 다르면 count 1 감소
- 이 과정을 통해 모든 요소들이 쌍을 이뤄 상쇄되다가 다수 요소만 남게 됨

(선택 사항) 2번째 순회

- 1번째 순회로 찾은 candidate가 실제로 배열의 길이의 절반(N / 2) 이상으로 나타나는지 확인
- 이 단계는 다수 요소가 반드시 존재한다는 가정이 없을 때 필요

#### 예시

배열 [2, 2, 1, 1, 1, 2, 2]

- 초기: candidate = null, count = 0
- 요소 2: count = 0이므로 candidate = 2, count = 1
- 요소 2: candidate = 2와 같으므로 count = 2
- 요소 1: candidate = 2와 다르므로 count = 1
- 요소 1: count = 1, candidate = 2와 다르므로 count = 0
- 요소 1: count = 0이므로 candidate = 1, count = 1
- 요소 2: candidate = 1과 다르므로 count = 0
- 요소 2: count = 0이므로 candidate = 2, count = 1

결과: candidate = 2

두 번째 순회로 2가 배열에서 4번 나타나며, 길이 7의 절반(3.5) 이상이므로 다수 요소임을 확인.

#### 구현

- boyerMooreMajorityVoteAlgorithm.js 참조

#### 장단점

장점

- 간단하면서 효율적
- 대규모 데이터에 적합
- 스트리밍 데이터 처리에 유용(한 번의 순회로 후보를 찾음)

단점

- 다수 요소가 반드시 존재하는 경우에만 사용 가능
- 검증 단계를 추가하면 두 번의 순회 필요

## 패턴2. 다중 포인터(Multiple Pointer) aka 투 포인터

- 정렬된 배열일 때만 사용 가능

### 예제1

정수가 원소인 배열을 입력받고, 합이 0이 되는 1쌍이 있으면 인덱스가 빠른 것을 반환

- 만족하는 쌍이 없으면 undefined 반환
- 배열은 오름차순 정렬되어 있음

#### naive solution

./two-pointer/sumZero.js

- O(N^2)

#### refactored solution

./two-pointer/sumZeroRefactored.js

- O(N)

### 예제2

오름차순 정렬된 정수 배열을 입력받고 고유값 갯수 반환

- 빈 배열인 경우 0을 반환

#### 1st solution

./two-pointer/countUniqueValues.js

- Set 객체를 사용하여 매우 간단

#### two pointer version

./two-pointer/countUniqueValuesWithPointer.js

- 투포인터 방식 활용

## 패턴3. 슬라이딩 윈도우 (Sliding Window)

배열이나 문자열과 같은 일련의 데이터셋에서 특정 조건을 만족시키는 하위 집합을 찾을 때 유용

- window: 어떤 조건을 만족하는지 아닌지를 판별하는 집합 단위
- 이 window가 slide하면서 배열이나 문자열에서 특정 집합을 찾는다

### 예제1

자연수 배열에서 n개의 연속하는 수가 최댓값인 것을 출력

#### solution

./sliding-window/maxSubarraySum.js

- O(N)
