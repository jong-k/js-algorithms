const stack = [];
// 구글 -> 인스타그램 -> 유튜브 사이트 방문
stack.push("google");
stack.push("instagram");
stack.push("youtube");

// 뒤로 가기 실행하려면?
stack.pop(); // youtube
stack.pop(); // instagram
stack.push("amazon"); // instagram 페이지 보고 amazon 접속
stack.pop(); // amazon
stack.pop(); // google

// stack은 굳이 push와 pop만 써야 하는 것은 아니다
// 후입선출 규칙만 지켜지면 되며 shift와 unshift를 써도 된다 (하지만 복잡도 손해)

// 포토샵에서 작업
stack.unshift("create new file");
stack.unshift("paint canvas");
stack.unshift("resized file");

// 작업 취소
stack.shift(); // resized file
stack.shift(); // paint canvas
stack.shift(); // create new file
