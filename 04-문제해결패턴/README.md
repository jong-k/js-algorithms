# 문제 해결 패턴

## 패턴1. 빈도 수 세기 (Frequency Counter)

### 예제1

자연수로 이루어진 2개의 배열 a, b를 입력받고, a의 각 원소의 제곱이 b의 원소인지 확인

- 순서는 무시
- 조건을 만족하면 true, 아니면 false 반환

#### naive solution: O(N^2)

same.js

#### refactored solution: O(N)

sameRefactored.js

### 예제2 애너그램 (Anagram) 판별

문자열 a, b를 입력받고 anagram이면 true를 출력하는 프로그램 작성

- anagram: 어떤 문자열이 있을 때 문자열의 순서를 바꾼 것
- 예: cinema -> iceman

#### 1st solution

validAnagram.js

- 불필요한 frequency counter 객체를 2개 만듬

#### refactored solution

validAnagramRefactorerd.js

- 불필요한 2번째 문자열 counting 제거

## 패턴2. 다중 포인터(Multiple Pointer) aka 투 포인터

### 예제1

정수가 원소인 배열을 입력받고, 합이 0이 되는 1쌍이 있으면 인덱스가 빠른 것을 반환

- 만족하는 쌍이 없으면 undefined 반환
- 배열은 오름차순 정렬되어 있음

#### naive solution

sumZero.js

- O(N^2)

#### refactored solution

sumZeroRefactored.js

- O(N)

### 예제2

오름차순 정렬된 정수 배열을 입력받고 고유값 갯수 반환

- 빈 배열인 경우 0을 반환

#### 1st solution

countUniqueValues.js

- Set 객체를 사용하여 매우 간단

#### two pointer version

countUniqueValuesWithPointer.js

- 투포인터 방식 활용

## 패턴3. 슬라이딩 윈도우 (Sliding Window)

배열이나 문자열과 같은 일련의 데이터셋에서 특정 조건을 만족시키는 하위 집합을 찾을 때 유용

- window: 어떤 조건을 만족하는지 아닌지를 판별하는 집합 단위
- 이 window가 slide하면서 배열이나 문자열에서 특정 집합을 찾는다

### 예제1

자연수 배열에서 n개의 연속하는 수가 최댓값인 것을 출력

#### solution

maxSubarraySum.js

- O(N)
