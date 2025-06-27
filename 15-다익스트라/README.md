# 다익스트라 알고리즘

## 개요

- 네덜란드의 프로그래머이자 물리학자인 다익스트라의 이름을 따서 만들어짐
- 한 지점에서 다른 지점까지의 최단 경로를 구할 때 사용
- 그래프(가중치 그래프)와 우선순위 큐를 활용하여 구현

사용 사례

- GPS: 최단 경로 찾기
- 네트워크 라우팅: 그래프처럼 연결된 수 많은 컴퓨터 사이에서 데이터 전송의 최단 경로 찾기
- 항공편 검색: 가장 저렴한 요금으로 빠른 경로 찾기

### 알고리즘 작동 원리

A -> E 노드까지의 최단 경로를 구한다고 가정하면

- A와 인접한 방문하지 않은 노드들 중에서 가중치가 가장 적은 노드 방문
- 새 노드를 방문하고 나면, 그 인접 노드들을 확인하고, A에서 각 인접 노드까지의 거리를 합산하여 비교
- 총 거리가 가장 적은 노드로 최신화해나감

상세

- A가 가장 거리가 적기 때문에(A -> A : 거리 0) A에서 시작 (방문 결과 기록)
- 인접 노드는 알파벳 순으로 방문
- 각 노드별 A로부터의 최단 거리를 기록해나감

```js
// 그래프
{
  A: [{ node: 'B', weight: 4 }, { node: 'C', weight: 2 }],
  B: [{ node: 'A', weight: 4 }, { node: 'E', weight: 3}],
  C: [{ node: 'A', weight: 2 }, { node: 'F', weight: 4}],
  D: [{ node: 'C', weight: 2 }, { node: 'E', weight: 3}, { node: 'F', weight: 1}],
  E: [{ node: 'B', weight: 3 }, { node: 'D', weight: 3}, { node: 'F', weight: 1}],
  F: [{ node: 'C', weight: 4 }, { node: 'D', weight: 1}, { node: 'E', weight: 1}],
}
// 각 노드별 A로부터의 최단 거리
{
  // 초기값 -> 최솟값 등장하면 갱신
  A: 0,
  B: Number.MAX_SAFE_INTEGER, // 4
  C: Number.MAX_SAFE_INTEGER, // 2
  D: Number.MAX_SAFE_INTEGER, // 4
  E: Number.MAX_SAFE_INTEGER, // 7 -> 6
  F: Number.MAX_SAFE_INTEGER, // 5
}
// 이전 정점을 기록
// 결과적으로 최단 경로를 저장하게됨
{
  A: null,
  B: A,
  C: A,
  D: C
  E: B -> F
  F: C -> D
}
```

### 구현

- start 노드와 end 노드를 인수로 받는다
- start 노드로부터 각 노드까지의 거리를 담는 distance 객체를 만든다
  - 각 프로퍼티의 키값은 모든 노드
  - start 노드를 제외한 밸류값은 Number.MAX_SAFE_INTEGER로 설정
- 우선순위 큐를 만들고 각 노드를 우선순위 큐에 추가한다
  - priority는 start 노드로부터의 거리
  - start 노드의 priority: 0
  - 나머지 노드의 priority: Number.MAX_SAFE_INTEGER
  - 따라서 dequeue하면 A가 맨 처음에 나옴 (우선순위 큐)
- 모든 노드를 key로 갖고, 직전에 방문한 노드를 value로 기록할 previous 객체를 만든다
  - value값은 초기 세팅시 null
- 우선순위 큐에 원소가 하나라도 남아있는 동안 반복한다
  - 우선순위 큐에서 원소 하나를 dequeue한다
  - 이 노드가 end 노드와 같다면 종료
  - 그렇지 않으면 인접 리스트의 각 정점을 순회
    - 각 노드의 start 노드로부터의 거리를 계산
    - 거리가 현재값보다 적다면 최소값으로 distance 객체를 최신화하고
    - previous 객체도 최신화해준다
    - start 노드로부터의 총 거리를 우선순위 큐에 enqueue
