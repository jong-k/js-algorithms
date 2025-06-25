# 해시 테이블(Hash Table)

## 개요

- 해시 맵(Hash Map) 이라고도 함
- JS를 포함한 대부분의 프로그래밍 언어에 기본적으로 내장되어 있음
  - JS: Object, Map
  - Python: 딕셔너리
- key-value 쌍으로 데이터를 저장
- 순서(인덱스)를 갖지 않음
- 배열과 다르게 탐색, 추가, 제거가 매우 빠름

## 해시 함수

- 암호화 기능
- 예시: Python 내장 hash 함수

```py
hash("hello") # -4580817955033873674
hash("hello") # -4580817955033873674
hash("hellllllllllllllo") # -5891975723807638195

# 같은 문자열을 해시 함수에 넣으면 같은 결과가 나온다
# hash 함수는 입력값과 상관없이 대체로 일정한 크기의 값을 반환
```

### 좋은 해시 함수의 조건

- 빠른 속도 (상수 시간)
- 반환값이 고유해야 함
  - 다른 input들로 같은 output을 반환하면 안됨
  - 즉, 해시 충돌이 발생하면 안됨
- 같은 input은 항상 같은 output을 반환해야 함

### 해시 함수 만들기

- ./hash.js

매개변수

- key: 문자열
- arrayLen: 0 ~ arrayLen 숫자에 배정
  - 계산한 해시값을 마지막에 arrayLen으로 나눠주어 0 ~ arrayLen 사이의 반환값이 나오는 것을 보장

### 해시 충돌 처리

- 완벽히 해시 충돌을 없애는 것은 불가능
- 충돌 줄이는 방법 2가지

Separate Chaining (개별 체이닝)

- 배열이나 연결리스트를 활용해 같은 인덱스에 2개의 값을 저장
- 예) index 4에 [[darkblue, #00008b], [salmon, #fa8072]] 를 저장
- darkblue -> 4, salmon -> 4
- 배열을 쓰면 2차원 배열 형태가 됨

Linear Probing (선형 탐색법)

- 개별 체이닝과 다르게 하나의 자리에 하나만 저장
- 충돌이 발생하면 가까운 다음 빈 자리를 찾고 거기에 저장하여 충돌을 방지
- 예) darkblue가 이미 4이므로 salmon은 5에 저장
- 개별 체이닝은 10개 array인 경우 10개보다 더 많이 저장할 수 있지만
- 직선 탐색법은 최대 10개까지밖에 저장 못함

### 구현

set(key, value): key, value pair를 받아 배열에 저장

- key를 hash 함수에 전달하여 index 획득
- key, value pair을 개별 체이닝 방식으로 배열의 index에 저장

get(key): key를 받아 value를 반환

- 전달받은 key를 hash 함수에 전달하여 index 획득
- 해시 테이블에서 index로 key, value pair 반환
- key가 유효하지 않으면 undefined 반환

keys(): 해시 테이블의 모든 key를 배열 형태로 반환

- 중복된 값이 있다면 제거하고 반환

values(): 해시 테이블의 모든 value를 배열 형태로 반환

- 중복된 값이 있다면 제거하고 반환

### 시간 복잡도
일반적인 내장 해시 테이블의 경우

average case

- 삽입 : O(1)
- 제거 : O(1)
- 접근 : O(1)

worst case (한 인덱스에 길이가 긴 배열이 있을 경우)

- 삽입 : O(N)
- 제거 : O(N)
- 제거 : O(N)
