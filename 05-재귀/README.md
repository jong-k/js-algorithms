# 재귀(Recursion)

## 재귀 함수를 사용하는 이유

재귀 함수: 자기 자신을 호출하는 함수

- 일반적인 함수 호출: 다른 함수를 호출

재귀 함수 예시

- JSON.parse / JSON.stringify
- document.getElementById 를 비롯한 DOM 탐색 알고리즘
- Object traversal (객체 순회)
- 기타 어려운 자료구조 등등

재귀 함수 대신 반복(iteration)을 사용하는 것이 깔끔할 때도 있다(대부분 성능도 더 좋다)

## 콜 스택(Call Stack)

JS에서 함수를 호출하면 콜 스택 맨 꼭대기에 쌓인다. 가장 마지막에 호출된 함수가 맨 위에 쌓인다.

### 예제

./callStack.js

- 콜 스택이 쌓이는 과정 확인

## 재귀함수의 필수 구성요소 2가지

1.Base case (종료 조건)

- 배열에 아무 것도 없음을 확인하고 멈춤

  2.Different input (다른 입력값)

- 다른 입력값이 들어오면 멈춤

### 예제1

./countdown.js

- 인수로 0 이하인 수를 받으면 재귀 호출 종료

### 예제2

./sumRange.js

- 재귀를 사용하여 1부터 인수로 받는 n 까지의 수를 모두 합한 수를 출력
- 인수로 1을 받으면 1을 반환하고 재귀 호출 종료

### 예제3: 팩토리얼

반복문으로 팩토리얼 구현한 버전

- ./iterationFactorial.js

재귀로 팩토리얼 구현한 버전

- ./recursiveFactorial.js

## 재귀 함수를 만들 때 자주 등장하는 에러

종료 조건이 완전하지 않아서 재귀가 계속 호출됨

- stack overflow 에러 발생
- 크롬에서는 `Maximum call stack size exceeded` 메시지 출력된다
- JS 실행환경에 따라 콜 스택 크기는 다르나 약 1000개 정도로 본다

## 헬퍼 함수를 사용하는 재귀 함수 패턴

- 그래프 탐색 같은 로직에서 자주 사용되는 패턴

### 예제

- ./collectOddValues.js
- 자연수 배열을 받아 홀수만 배열에 담아 출력
