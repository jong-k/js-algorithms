# 연결 리스트 (Linked List)

> 단일 연결 리스트, 이중 연결 리스트

## 1. 단일 연결 리스트 (Singly Linked List)

### 연결 리스트의 특징

- 배열같은 인덱스가 없음
- 각 엘리먼트를 노드(Node)라고 한다
- 노드들이 열차처럼 연결되어 있어서 특정 노드를 찾으려면 1번째(Head)부터 하나씩 움직여야 함
  - Head: 시작점
  - Tail: 종료점(next 값이 null)

### List vs Array

List

- 인덱스 없음
- 각 노드들이 next 포인터로 연결되어 있다
- Random Access가 허용되지 않음

Array

- 인덱스 순으로 구성됨
- 삽입, 제거 비용이 비싸다
- 특정 인덱스에 빠르게 접근할 수 있다

### 메서드

push(val): 리스트 맨 뒤에 새로운 노드 추가

- value 를 받아들여 새로운 노드를 만든다
- 해드가 없다면 빈 리스트이기 때문에 head 와 Tail 이 1번째 값을 가리키게 하면 된다
- 값을 추가할 때마다 Tail 이 새로운 값을 가리키게 한다
- length 를 1 증가시켜준다
- 그리고 새 리스트를 반환한다

pop(): 리스트 맨 뒤 노드를 제거

- 현재 리스트에 아무 값도 없다면 undefined 반환
- Tail 이전 노드에 도달할 때까지 head부터 시작해서 리스트를 하나씩 거쳐간다
- Tail 이전 노드의 next를 null로 만듬
  - 이 노드를 Tail로 만듬
- 현재 Tail (마지막 노드)을 제거
- length 를 1 감소시킴
- 삭제된 node 반환

shift(): 리스트 맨 앞 노드를 제거

- 배열과 다르게 O(1)의 시간 복잡도
- 삭제된 node 를 반환
- 빈 리스트일 경우 undefined 를 반환
- 현재 head 다음 노드를 head 로 만듬
- 현재 head 의 next 를 null 로 만듬
- length 1 감소
- 삭제된 노드 반환

unshift(val): 리스트 맨 앞 노드를 추가

- 배열과 다르게 O(1)의 복잡도
- 새로운 노드를 추가하고 새로운 head로 할당
- 새 노드의 next를 기존 head로 지정
- 최종 리스트를 반환

get(idx): idx에 해당하는 노드 반환

- get(0) 은 head를 반환
- idx 만큼 리스트를 따라간 후 해당 위치의 노드를 반환
- 범위를 초과하는 숫자를 입력받은 경우 undefined을 반환

set(idx, val): 특정 인덱스의 노드 값을 변경

- 특정 인덱스의 값을 찾기 위해 앞서 구현한 get 메서드를 활용
- index의 노드가 존재하지 않으면 false 반환
- 값 변경에 성공하면 true 반환

insert(idx, val): 특정 인덱스에 노드를 삽입

- 리스트 범위를 초과하는 숫자를 입력받은 경우 false 반환
- push, unshift 와 다르게 리스트 중간에 삽입
- 삽입할 새로운 노드 생성
- 추가한 노드의 next에 원래 인덱스의 노드를 이어줌
- 그리고 원래 인덱스 이전 노드의 next를 삽입할 새 노드에 연결
- idx가 0이면 unshift, idx가 this.length 이면 push 활용
- 길이를 +1 증가하고 true 반환

remove(idx): 특정 인덱스의 노드를 제거

- insert의 반대 개념
- idx가 0이면 shift, idx가 this.length - 1이면 pop 활용
- 리스트 범위를 초과하는 숫자를 입력받은 경우 undefined 반환
- 제거된 노드 반환

reverse(): 리스트 내 노드의 순서를 바꿈

- head와 Tail을 바꾼다
- current, prev 변수를 생성하고 current를 진행하며 next를 반전시킴
- 변경된 리스트 반환

rotate(num): 양수를 받으면 왼쪽으로, 음수를 받으면 오른쪽으로 num 만큼 회전하고 리스트 반환

- 예시

```js
/*
1 2 3 4 5

rotate(-2) // 4 5 1 2 3
rotate(2) // 3 4 5 1 2
rotate(3) // 4 5 1 2 3

음수 회전과 양수 회전의 관계
rotate(-2) = rotate(3)
->일반화 하면,
rotate(음수) = rotate(this.length + 음수)

rotate(2) 예시

H       T
1 2 3 4 5


   T H
1 2 3 4 5
*/
```

- O(N) 내에 해결하기 위해 push, pop, unshift, shift 등의 메서드를 사용하지 않는다
- 대신 기존의 tail과 head를 연결하여 리스트가 원형이 되게 만들고
- head와 tail을 회전하고 재지정한다

### 시간 복잡도

- 삽입: O(1)
- 제거
  - shift인 경우: O(1)
  - pop인 경우: O(N)
- 탐색: O(N) : 예) 99 값이 있는지 탐색할 때
- 접근: get : O(N)
- 삽입과 삭제의 경우 배열에 비해 빠르다
- 탐색, 접근의 경우 배열에 비해 느리다

## 정리

- 링크드 리스트는 삽입, 제거가 빈번히 일어날 때 효과적이다
- 인덱스를 갖지 않기 때문에 탐색이나 접근은 배열보다 느리다

## 2. 이중 연결 리스트 (Doubly Linked List)

### 단일 연결 리스트와의 비교

- next pointer 이외에 prev pointer도 존재
  - 연결 끊을 때 추가 작업 필요
- 단일 연결 리스트에서는 Tail을 제거하려면 리스트를 순회하여 Tail까지 접근해야함
  - 하지만 이중 연결 리스트에서는 prev가 존재하기 때문에 Tail에 바로 접근하고, prev로 이전 노드로 간단히 이동할 수 있다
- Tail에서 빠르게 거슬러 올 수 있기 때문에, 후반부의 노드 탐색시 속도가 더 빠르다
- 속도는 빠르지만, 메모리를 더 사용한다 (trade-off 존재)

### 메서드

push(val): 리스트 맨 뒤에 노드 추가

- 새 노드 생성
- 리스트 맨 뒤에 노드 추가
  - 빈 리스트일 경우: 새 노드를 head, tail로 지정
  - 빈 리스트가 아닐 경우: 새 노드를 tail로 지정하고, 기존 tail과 next, prev 연결
- length 1 증가하고 리스트 반환

pop(): 리스트 맨 뒤의 노드를 제거하고 제거된 노드 반환

- 리스트의 길이가 1이면
  - 노드를 제거하고 head와 tail을 null로 변경
- 리스트의 길이가 1보다 크면
  - 기존 tail을 변수에 저장
  - 기존 tail 직전의 노드와 tail 사이 연결을 제거하고 새 tail로 지정
- length 1 감소하고 제거된 노드 반환

shift(): 리스트 맨 앞의 노드를 제거하고 제거된 노드를 반환

- 빈 리스트인 경우 undefined 반환
- 기존 head를 미리 변수에 저장
- 리스트 길이가 1인 경우
  - head, tail을 null로 설정
- 기존 head의 next 노드를 새 head로 설정하고 prev를 null로 지정 (연결 끊기)
- 기존 head의 next null로 지정 (연결 끊기)
- 길이 1 감소
- 기존 head 반환

unshift(val): 리스트 맨 앞에 새로운 노드를 추가하고 리스트 반환

- val값을 갖는 새 노드 생성
- 빈 리스트이면
  - head, tail에 새 노드 할당
- 기존 head의 prev에 새 노드 할당
- 새 노드의 next를 기존 head로 설정
- 새 노드를 새 head로 설정
- 리스트 길이 1 증가
- 리스트 반환

get(idx): 인덱스 값을 받아 해당 인덱스의 노드 반환

- 인덱스가 0보다 작거나 리스트 길이보다 같거나 크면, undefined 반환
- head부터 찾아나갈지, tail부터 찾아나갈지는 주어진 인덱스에 따라 다름
  - 인덱스가 리스트 길이의 절반보다 작거나 같으면 head부터 순회
  - 인덱스가 리스트 길이의 절반보다 크면 tail부터 순회
- 찾은 노드를 반환

set(idx, val): 해당 인덱스의 노드의 값을 변경하고 성공 시 true 반환

- get 메서드로 노드를 찾고 값을 변경하고 true 반환
- get 메서드로 노드를 찾을 수 없는 경우 false 반환

insert(idx, val): 해당 인덱스에 새로운 노드를 끼워넣고 true 반환

- idx가 0보다 작거나 idx가 길이보다 같거나 크면 false 반환
- index가 0이면 unshift
- index가 length이면 push
- index - 1 노드를 찾기 위해 get 메서드 사용
- 길이 1 증가

remove(idx): 해당 인덱스의 노드를 제거하고 제거된 노드 반환

- idx가 0보다 작거나 idx가 길이보다 같거나 크면 undefined 반환
- index가 0이면 shift
- index가 length이면 pop
- get 메서드로 제거할 인덱스의 노드를 찾고, next, prev 노드와의 연결 해제
- next, prev 노드끼리 연결
- 길이 1 감소하고 제거된 노드 반환

reverse(): 리스트 내 노드의 순서를 바꿈

- head, tail 교환
- current, prev 변수를 생성하고 current를 순회하며 next, prev 반전
- 변경된 리스트 변환

### 시간 복잡도

기본적으로 단일 연결 리스트와 동일

- 삽입 : O(1)
- 삭제 : O(1)
- 탐색 : O(N)
  - O(N / 2) 로 탐색 가능하나 O(N)이라고 봄
- 접근 : O(N)

이중 연결 리스트는 단일 연결리스트와 거의 비슷하나, 특정 상황에서 더 좋은 성능을 보여줌

- tail부터 거슬러 올라올 수 있어서 탐색 시간이 줄어들 수 있음
