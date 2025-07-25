# 기본 정렬 알고리즘

> 버블, 선택, 삽입 정렬

## 0.인트로

- 정렬은 컬렉션의 아이템을 재배열하는 것을 의미한다
- 버블(Bubble), 선택(Selection), 삽입(Insertion), 합병(Merge), 힙(Heap), 퀵(Quick) 같은 종류가 있다
- 버블, 선택, 삽입 정렬을 기본 정렬 알고리즘이라고 한다
  - 효율성이 떨어져서 잘 사용되지 않는 편이다

### 정렬을 알아야 하는 이유

- 매우 자주 쓰는 작업이므로
  - 대부분 프로그래밍 언어에 내장된 정렬 함수를 사용하지만, 내부적으로 어떻게 동작하는지 이해하면 좋다
- 다양한 정렬 방법들은 각각 장단점을 지니므로 상황에 맞게 사용하는 것이 중요하다
  - 데이터가 완전 무작위였을 때는 삽입 정렬(Insertion Sort)이 느렸지만,
  - 데이터가 거의 정렬된 상태였을 때는 매우 빨랐다
- 또한, 면접에 단골 주제로 등장한다

### 자바스크립트 내장 정렬 함수 sort()

sort()는 모든 배열에 작동하지는 않는다

- 예를 들어 [4, 6, 10, 15] 배열에 sort()를 적용하면
- [10, 15, 4, 6] 이 도출된다
- 기본 정렬 순서가 유니코드를 따르기 때문에 모든 숫자가 문자열로 변환되기 때문

그래서 비교 함수를 옵셔널 파라미터로 사용한다

- 비교 함수의 반환값이 음수이면 a, b 대로 정렬 (오름차순)
- 반환값이 양수이면, b, a 대로 정렬 (내림차순)
- 반환값이 0이면 정렬 작동 x

## 1. 버블 정렬 (Bubble Sort)

- 그다지 효율적이지 않아서 잘 사용하지 않는다
- 스왑(swap)을 중요한 작동 원리로 삼는다
- 오름차순 정렬을 위해 맨 마지막 값(최대값)을 먼저 구해 뒤로 보낸다
  - 1번째 실행이 끝나면 반드시 가장 큰 값이 가장 뒤에 위치
  - 2번째 실행이 끝나면 2번째로 큰 값이 뒤에서 2번째 자리에 위치
  - 반복...
- 원리

```js
// 배열의 모든 값을 다음 값과 비교하고 큰 수를 다음으로 보낸다

// 29 10 14 30 37 14 18 <- 시작
// 10 29 14 30 37 14 18 <- (인덱스 0, 1 비교) 29와 10 비교하여 29가 크므로 스왑
// 10 14 29 30 37 14 17 <- (인덱스 1, 2 비교) 29와 14 비교하여 29가 크므로 스왑
// 10 14 29 30 37 14 17 <- (인덱스 2, 3 비교) 29와 30 비교하여 30이 크므로 변경없음
// 10 14 29 30 37 14 17 <- (인덱스 3, 4 비교) 30와 37 비교하여 37이 크므로 변경없음
// 10 14 29 30 14 37 17 <- (인덱스 4, 5 비교) 37과 14 비교하여 37이 크므로 스왑
// 10 14 29 30 14 17 37 <- (인덱스 5, 6 비교) 37과 17 비교하여 37이 크므로 스왑

// 최대값 37이 가장 마지막 자리에 안착
// 이제 처음부터 또 진행(배열 길이만큼 반복)
```

### 구현

./bubbleSort.js

- 배열을 처음부터 끝까지 순회
  - 중첩 for 문을 이용하여 1번째, 2번째 항목을 비교하고, 큰 수가 앞에 있다면 스왑
  - 이를 반복

./bubbleSortRefactored.js

- swapped 변수를 활용하여 최적화
- 한 루프에서 스왑이 한 번도 발생하지 않았다면, 정렬이 완료된 것으로 보고 반복문 종료

### 버블 정렬의 시간복잡도

- average : O(N^2)
- best : O(N)
  - swapped 조건으로 리팩토링한 경우 및
  - 어느정도 정렬된 상태에서는 빠름

## 2. 선택 정렬 (Selection Sort)

### 버블 정렬과의 차이

- 버블 정렬은 큰 값을 뒤로 이동
- 선택 정렬은 작은 값을 앞으로 이동
- 원리

```js
// 5 3 4 1 2 <- 5와 3을 비교해서 최솟값에 3 넣음
// 5 3 4 1 2 <- 3과 4를 비교해서 최솟값에 3 (변화없음)
// 5 3 4 1 2 <- 3과 1을 비교해서 최솟값에 3 -> 1 바꿈
// 5 3 4 1 2 <- 1과 2를 비교해서 최솟값에 1 (변화없음)
// 1 3 4 5 2 <- 최솟값과 5 자리 바꿈
// ... 다음 3부터 시작해서 마지막 2까지 반복
```

### 구현

./selectionSort.js

- 1번째 진행에서 처음 만난 값의 인덱스를 일단 최솟값으로 설정
- 배열을 끝까지 순회하며 가장 최솟값(인덱스)을 찾음
- 최솟값 인덱스 변경이 일어났다면, 스왑
  - 1번째 실행 이후 맨 앞에 가장 작은 값 위치
  - 2번째 실행 이후 2번째 자리에 2번째로 작은 값 위치
  - 반복...

### 시간 복잡도

- O(N^2)로 그다지 효율적이지 않음
- 선택정렬이 버블정렬보다 나은 경우는 스왑 수가 최소화되는 경우

## 3. 삽입 정렬 (Insertion Sort)

- 왼쪽 영역을 점진적으로 정렬되게 만들어 전체 정렬을 구축
- 원리
  - 한 번에 하나를 취해서 올바른 위치에 삽입

```js
// _
// 5 3 4 1 2  <- 정렬된 공간
// _ _
// 3 5 4 1 2  <- 정렬된 공간
// _ _ _
// 3 4 5 1 2  <- 정렬된 공간
// _ _ _ _
// 1 3 4 5 2   <- 정렬된 공간
// _ _ _ _ _
// 1 2 3 4 5  <- 정렬된 공간
```

### 구현

./insertionSort.js

- 배열의 2번째 요소 선택
  - 1번째 요소는 정렬된 것으로 가정
- 이전 요소와 비교하여 작은 수가 앞에 오게 swap
  - 완전히 자기 자리를 찾을 때까지 swap 필요시 반복
- 배열 끝까지 반복

### 시간 복잡도

- 효율적이지 않다 (데이터가 어느정도 정렬됐을 때만 빠르다)
- 온라인 알고리즘에 유리 (새로운 데이터가 들어오는대로 작동하는 알고리즘) -> 전체 배열을 한 번에 정렬할 필요가 없음
  - 라이브, 스트리밍 방식으로 들어온 데이터를 즉시 입력하는 상황에 편리하다

## 4. 버블, 선택, 삽입 정렬 비교

<table>
  <thead>
    <tr>
      <th scope="col">알고리즘</th>
      <th scope="col">시간 복잡도(Best)</th>
      <th scope="col">시간 복잡도(Average)</th>
      <th scope="col">시간 복잡도(Worst)</th>
      <th scope="col">공간 복잡도</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">버블 정렬</th>
      <td>O(N)</td>
      <td>O(N^2)</td>
      <td>O(N^2)</td>
      <td>O(1)</td>
    </tr>
    <tr>
      <th scope="row">선택 정렬</th>
      <td>O(N)</td>
      <td>O(N^2)</td>
      <td>O(N^2)</td>
      <td>O(1)</td>
    </tr>
    <tr>
      <th scope="row">삽입 정렬</th>
      <td>O(N^2)</td>
      <td>O(N^2)</td>
      <td>O(N^2)</td>
      <td>O(1)</td>
    </tr>
  </tbody>
</table>

정리

- 버블, 선택, 삽입 정렬은 평균적으로 O(N^2)의 시간 복잡도를 가진다
- 데이터가 어느정도 정렬된 상황에서 버블, 삽입 정렬은 매우 빠르다
- 하지만 어느정도 정열된 상황에서도 선택 정렬은 빠르지 않다
