# 시어핀스키 가스켓 (Sierpinski Gasket)

## 1. 소개
- 시어핀스키 가스켓은 시어핀스키 삼각형(Sierpinski Triangle)이라고도 하며, 삼각형이 반복적으로 등장하는 프랙탈 구조를 뜻한다

## 2. 과정
1. 정사각형을 그리고 1,2,4 사분면에 x 표시를 한다
2. 각 사분면을 다시 1,2,4 사분면으로 나누고 x 표시를 한다
3. 이를 반복한다
4. 충분히 정사각형이 작아지면, x 표시된 정사각형을 단색으로 채우고 패턴을 확인한다

## 3. 구현 방법
1. 정사각형을 얼마나 작게할지 결정한다
2. 탈출 조건에 해당할 만큼 작다면, 정사각형을 채운다
3. 탈출 조건에 해당할 만큼 작지 않다면, 정사각형을 1,2,4 사분면으로 나누고 아래 하위 문제들을 해결한다
   1. 2사분면에 재귀호출
   2. 1사분면에 재귀호출
   3. 4사분면에 재귀호출

## 4. 코드
- 그래픽 라이브러리를 활용한듯 하다
```js
const dim = 240;
const minSize = 8;
	
const drawGasket = function(x, y, dim) {
  if (dim <= minSize) {
    rect(x, y, dim, dim);
  } else {
    const newDim = dim / 2;
    drawGasket(x, y, newDim);
    drawGasket(x + newDim, y, newDim);
    // drawGasket(x, y + newDim, newDim);
    drawGasket(x + newDim, y + newDim, newDim);
  }
};

draw = function() {
  background(255, 255, 255);
  fill(255, 255, 0);
  rect(0, 0, dim, dim);
  stroke(0, 0, 255);
  fill(0, 0, 255);
  drawGasket(0, 0, dim);
};
```

## 예시 - 백준 2630 색종이 만들기