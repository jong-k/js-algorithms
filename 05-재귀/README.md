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
