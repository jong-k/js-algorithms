# 문제 해결 패턴

## 패턴1. 빈도 수 세기 (Frequency Counter)

### 예제1

자연수로 이루어진 2개의 배열 a, b를 입력받고, a의 각 원소의 제곱이 b의 원소인지 확인

- 순서는 무시
- 조건을 만족하면 true, 아니면 false 반환

naive solution: O(N^2)

- same.js

refactored solution: O(N)

- sameRefactored.js

### 예제2 애너그램 (Anagram) 판별

문자열 a, b를 입력받고 anagram이면 true를 출력하는 프로그램 작성

- anagram: 어떤 문자열이 있을 때 문자열의 순서를 바꾼 것
- 예: cinema -> iceman

1st solution

- validAnagram.js
- 불필요한 frequency counter 객체를 2개 만듬

refactored solution

- validAnagramRefactorerd.js
- 불필요한 2번째 문자열 counting 제거
