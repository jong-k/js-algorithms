# 최장공통부분서열 문제 (LCS)
- Longest Common Subsequence
## 예제
- 두 개의 문자 서열 X, Y가 주어졌을 때, X와, Y에서 공통으로 나타나는 부분 문자서열을 찾고자 한다
- **부분 문자 서열의 길이가 최대가 되도록** 부분 문자서열을 찾는 방법은?
  - _X_ = A B C B D A B
  - _Y_ = B D C A B A
```
LCS(X,Y) = B C B A
  _ _ _   _
A B C B D A B
_   _   _ _
B D C A B A
```
- 생물정보학에서는 이를 활용해 DNA 염기 서열 문제를 푼다

### 단순무식하게 풀기 : 브루트포스
- X의 모든 부분 서열중에서 Y의 부분 서열인 것들의 길이를 구한 뒤 이 길이들 중에서 최댓값을 찾는다
- X의 모든 부분 서열의 갯수 : 2^m 개 -> O(2^m) 의 지수시간을 가지므로 너무 느림!

### 재귀적 관계를 파악하기
- _X_ = x(1), x(2), ... x(m-1), x(m)
- _Y_ = y(1), y(2), ... y(n-1), y(n) 일 때
- X, Y의 부분서열 Z는 이렇게 나타난다고 가정
- _Z_ = z(1), z(2), ... z(k-1), z(k)


- 이때 x(m) = y(n) 이면,
  - x(m) = y(n) = z(k) 이고
  - z(k-1) = LCS(X(m-1),  Y(n-1)) 이 성립
  - x(1) 부터 x(m-1) 까지 와 Y(1) 부터 Y(n-1) 까지의 공통부분서열이 Z(1) 부터 Z(k-1)이 된다는 것
- x(m) != y(n) 이면,
  - x(m) = z(k) 인 경우
  - y(n) = z(k) 인 경우 로 나눠서 비교
### 재귀적으로 정의하기
- c(m,n) : 수열 Xm 과 Yn의 LCS의 길이로 정의
- 재귀식
  - 종료 조건 : m = 0 또는 n = 0 이면 c(m,n) = 0
  - 재귀 조건
    - x(m) = y(n) 이면 c(m,n) = c(m-1, n-1) + 1
    - x(m) != y(n) 이면 c(m,n) = max{c(m,n-1), c(m-1,n)}
### 코드
```
def lcs(x, y):
  m, n = len(x), len(y)
  if m == 0 or n == 0:
    return 0;
  else:
    if x[-1] ==  y[-1]:
      return lcs(x[:(m-1)], y[:(n-1)] + 1
    else:
      return max(lcs(x[:m], y[:(n-1)]),
                 lcs(x[:(m-1)], y[:x]))
```

- 중복 선택 문제가 나타나기 때문에 재귀 방식은 여전히 2^n의 시간 복잡도를 가지게 됨
```
            LCS(6,6)
              (5,5)
         (4,5)     (5,4)
     (3,5)    (4,4)      (5,3)
                ㄴ 이 부분은 중복이 발생함 -> 비효율적
```

### tabulation 방법의 적용
- 메모이제이션 : 이미 계산한 값을 테이블에 저장
- bottom-up 방법 적용

### tabulation 코드
```
def lcs(x, y):
  x, y = [' '] + x, [' '] + y
  m, n = len(x), len(y)
  c = [[0 for _ in range(n)] for _ in range(m)]
  for i in range(1, m):
    for j in range(1, n):
      if x[i] == y[j]:
        c[i][j] = c[i -1][j - 1] + 1
      else:
        c[i][j] = max(c[i][j - 1], c[i - 1][j])
  return c
```
